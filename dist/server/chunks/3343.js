"use strict";
exports.id = 3343;
exports.ids = [3343];
exports.modules = {

/***/ 60749:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const client = __webpack_require__(34142);
const Client = __webpack_require__(34813);
module.exports = client;
module.exports.Client = Client;


/***/ }),

/***/ 34813:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const axios = __webpack_require__(30658);
const pkg = __webpack_require__(70139);
const { helpers: { mergeData }, classes: { Response, ResponseError } } = __webpack_require__(8624);
const API_KEY_PREFIX = "SG.";
const SENDGRID_BASE_URL = "https://api.sendgrid.com/";
const TWILIO_BASE_URL = "https://email.twilio.com/";
const SENDGRID_REGION = "global";
// Initialize the allowed regions and their corresponding hosts
const REGION_HOST_MAP = {
    eu: "https://api.eu.sendgrid.com/",
    global: "https://api.sendgrid.com/"
};
class Client {
    constructor(){
        this.auth = "";
        this.impersonateSubuser = "";
        this.sendgrid_region = SENDGRID_REGION;
        this.defaultHeaders = {
            Accept: "application/json",
            "Content-Type": "application/json",
            "User-Agent": "sendgrid/" + pkg.version + ";nodejs"
        };
        this.defaultRequest = {
            baseUrl: SENDGRID_BASE_URL,
            url: "",
            method: "GET",
            headers: {},
            maxContentLength: Infinity,
            maxBodyLength: Infinity
        };
    }
    setApiKey(apiKey) {
        this.auth = "Bearer " + apiKey;
        this.setDefaultRequest("baseUrl", REGION_HOST_MAP[this.sendgrid_region]);
        if (!this.isValidApiKey(apiKey)) {
            console.warn(`API key does not start with "${API_KEY_PREFIX}".`);
        }
    }
    setTwilioEmailAuth(username, password) {
        const b64Auth = Buffer.from(username + ":" + password).toString("base64");
        this.auth = "Basic " + b64Auth;
        this.setDefaultRequest("baseUrl", TWILIO_BASE_URL);
        if (!this.isValidTwilioAuth(username, password)) {
            console.warn("Twilio Email credentials must be non-empty strings.");
        }
    }
    isValidApiKey(apiKey) {
        return this.isString(apiKey) && apiKey.trim().startsWith(API_KEY_PREFIX);
    }
    isValidTwilioAuth(username, password) {
        return this.isString(username) && username && this.isString(password) && password;
    }
    isString(value) {
        return typeof value === "string" || value instanceof String;
    }
    setImpersonateSubuser(subuser) {
        this.impersonateSubuser = subuser;
    }
    setDefaultHeader(key, value) {
        if (key !== null && typeof key === "object") {
            // key is an object
            Object.assign(this.defaultHeaders, key);
            return this;
        }
        this.defaultHeaders[key] = value;
        return this;
    }
    setDefaultRequest(key, value) {
        if (key !== null && typeof key === "object") {
            // key is an object
            Object.assign(this.defaultRequest, key);
            return this;
        }
        this.defaultRequest[key] = value;
        return this;
    }
    /**
   * Global is the default residency (or region)
   * Global region means the message will be sent through https://api.sendgrid.com
   * EU region means the message will be sent through https://api.eu.sendgrid.com
   **/ setDataResidency(region) {
        if (!REGION_HOST_MAP.hasOwnProperty(region)) {
            console.warn('Region can only be "global" or "eu".');
        } else {
            this.sendgrid_region = region;
            this.setDefaultRequest("baseUrl", REGION_HOST_MAP[region]);
        }
        return this;
    }
    createHeaders(data) {
        // Merge data with default headers.
        const headers = mergeData(this.defaultHeaders, data);
        // Add auth, but don't overwrite if header already set.
        if (typeof headers.Authorization === "undefined" && this.auth) {
            headers.Authorization = this.auth;
        }
        if (this.impersonateSubuser) {
            headers["On-Behalf-Of"] = this.impersonateSubuser;
        }
        return headers;
    }
    createRequest(data) {
        let options = {
            url: data.uri || data.url,
            baseUrl: data.baseUrl,
            method: data.method,
            data: data.body,
            params: data.qs,
            headers: data.headers
        };
        // Merge data with default request.
        options = mergeData(this.defaultRequest, options);
        options.headers = this.createHeaders(options.headers);
        options.baseURL = options.baseUrl;
        delete options.baseUrl;
        return options;
    }
    request(data, cb) {
        data = this.createRequest(data);
        const promise = new Promise((resolve, reject)=>{
            axios(data).then((response)=>{
                return resolve([
                    new Response(response.status, response.data, response.headers),
                    response.data
                ]);
            }).catch((error)=>{
                if (error.response) {
                    if (error.response.status >= 400) {
                        return reject(new ResponseError(error.response));
                    }
                }
                return reject(error);
            });
        });
        // Throw an error in case a callback function was not passed.
        if (cb && typeof cb !== "function") {
            throw new Error("Callback passed is not a function.");
        }
        if (cb) {
            return promise.then((result)=>cb(null, result)).catch((error)=>cb(error, null));
        }
        return promise;
    }
}
module.exports = Client;


/***/ }),

/***/ 34142:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Dependencies
 */ const Client = __webpack_require__(34813);
//Export singleton instance
module.exports = new Client();


/***/ }),

/***/ 13439:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Dependencies
 */ const toCamelCase = __webpack_require__(77743);
const toSnakeCase = __webpack_require__(93571);
const deepClone = __webpack_require__(6598);
const fs = __webpack_require__(57147);
const path = __webpack_require__(71017);
/**
 * Attachment class
 */ class Attachment {
    /**
   * Constructor
   */ constructor(data){
        //Create from data
        if (data) {
            this.fromData(data);
        }
    }
    /**
   * From data
   */ fromData(data) {
        //Expecting object
        if (typeof data !== "object") {
            throw new Error("Expecting object for Mail data");
        }
        //Convert to camel case to make it workable, making a copy to prevent
        //changes to the original objects
        data = deepClone(data);
        data = toCamelCase(data);
        //Extract properties from data
        const { content, filename, type, disposition, contentId, filePath } = data;
        if (typeof content !== "undefined" && typeof filePath !== "undefined") {
            throw new Error("The props 'content' and 'filePath' cannot be used together.");
        }
        //Set data
        this.setFilename(filename);
        this.setType(type);
        this.setDisposition(disposition);
        this.setContentId(contentId);
        this.setContent(filePath ? this.readFile(filePath) : content);
    }
    /**
   * Read a file and return its content as base64
   */ readFile(filePath) {
        return fs.readFileSync(path.resolve(filePath));
    }
    /**
   * Set content
   */ setContent(content) {
        //Duck type check toString on content if it's a Buffer as that's the method that will be called.
        if (typeof content === "string") {
            this.content = content;
            return;
        } else if (content instanceof Buffer && content.toString !== undefined) {
            this.content = content.toString();
            if (this.disposition === "attachment") {
                this.content = content.toString("base64");
            }
            return;
        }
        throw new Error("`content` expected to be either Buffer or string");
    }
    /**
   * Set content
   */ setFileContent(content) {
        if (content instanceof Buffer && content.toString !== undefined) {
            this.content = content.toString("base64");
            return;
        }
        throw new Error("`content` expected to be Buffer");
    }
    /**
   * Set filename
   */ setFilename(filename) {
        if (typeof filename === "undefined") {
            return;
        }
        if (filename && typeof filename !== "string") {
            throw new Error("String expected for `filename`");
        }
        this.filename = filename;
    }
    /**
   * Set type
   */ setType(type) {
        if (typeof type === "undefined") {
            return;
        }
        if (typeof type !== "string") {
            throw new Error("String expected for `type`");
        }
        this.type = type;
    }
    /**
   * Set disposition
   */ setDisposition(disposition) {
        if (typeof disposition === "undefined") {
            return;
        }
        if (typeof disposition !== "string") {
            throw new Error("String expected for `disposition`");
        }
        this.disposition = disposition;
    }
    /**
   * Set content ID
   */ setContentId(contentId) {
        if (typeof contentId === "undefined") {
            return;
        }
        if (typeof contentId !== "string") {
            throw new Error("String expected for `contentId`");
        }
        this.contentId = contentId;
    }
    /**
   * To JSON
   */ toJSON() {
        //Extract properties from self
        const { content, filename, type, disposition, contentId } = this;
        //Initialize with mandatory properties
        const json = {
            content,
            filename
        };
        //Add whatever else we have
        if (typeof type !== "undefined") {
            json.type = type;
        }
        if (typeof disposition !== "undefined") {
            json.disposition = disposition;
        }
        if (typeof contentId !== "undefined") {
            json.contentId = contentId;
        }
        //Return
        return toSnakeCase(json);
    }
}
//Export class
module.exports = Attachment;


/***/ }),

/***/ 23454:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Dependencies
 */ const splitNameEmail = __webpack_require__(77533);
/**
 * Email address class
 */ class EmailAddress {
    /**
	 * Constructor
	 */ constructor(data){
        //Construct from data
        if (data) {
            this.fromData(data);
        }
    }
    /**
   * From data
   */ fromData(data) {
        //String given
        if (typeof data === "string") {
            const [name, email] = splitNameEmail(data);
            data = {
                name,
                email
            };
        }
        //Expecting object
        if (typeof data !== "object") {
            throw new Error("Expecting object or string for EmailAddress data");
        }
        //Extract name and email
        const { name, email } = data;
        //Set
        this.setEmail(email);
        this.setName(name);
    }
    /**
   * Set name
   */ setName(name) {
        if (typeof name === "undefined") {
            return;
        }
        if (typeof name !== "string") {
            throw new Error("String expected for `name`");
        }
        this.name = name;
    }
    /**
   * Set email (mandatory)
   */ setEmail(email) {
        if (typeof email === "undefined") {
            throw new Error("Must provide `email`");
        }
        if (typeof email !== "string") {
            throw new Error("String expected for `email`");
        }
        this.email = email;
    }
    /**
	 * To JSON
	 */ toJSON() {
        //Get properties
        const { email, name } = this;
        //Initialize with mandatory properties
        const json = {
            email
        };
        //Add name if present
        if (name !== "") {
            json.name = name;
        }
        //Return
        return json;
    }
    /**************************************************************************
   * Static helpers
   ***/ /**
   * Create an EmailAddress instance from given data
   */ static create(data) {
        //Array?
        if (Array.isArray(data)) {
            return data.filter((item)=>!!item).map((item)=>this.create(item));
        }
        //Already instance of EmailAddress class?
        if (data instanceof EmailAddress) {
            return data;
        }
        //Create instance
        return new EmailAddress(data);
    }
}
//Export class
module.exports = EmailAddress;


/***/ }),

/***/ 49211:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Expose classes
 */ const Attachment = __webpack_require__(13439);
const EmailAddress = __webpack_require__(23454);
const Mail = __webpack_require__(68522);
const Personalization = __webpack_require__(2545);
const Response = __webpack_require__(40831);
const ResponseError = __webpack_require__(52825);
const Statistics = __webpack_require__(55057);
/**
 * Export
 */ module.exports = {
    Attachment,
    EmailAddress,
    Mail,
    Personalization,
    Response,
    ResponseError,
    Statistics
};


/***/ }),

/***/ 68522:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Dependencies
 */ const EmailAddress = __webpack_require__(23454);
const Personalization = __webpack_require__(2545);
const toCamelCase = __webpack_require__(77743);
const toSnakeCase = __webpack_require__(93571);
const deepClone = __webpack_require__(6598);
const arrayToJSON = __webpack_require__(54356);
const { DYNAMIC_TEMPLATE_CHAR_WARNING } = __webpack_require__(56030);
const { validateMailSettings, validateTrackingSettings } = __webpack_require__(73784);
/**
 * Mail class
 */ class Mail {
    /**
   * Constructor
   */ constructor(data){
        //Initialize array and object properties
        this.isDynamic = false;
        this.hideWarnings = false;
        this.personalizations = [];
        this.attachments = [];
        this.content = [];
        this.categories = [];
        this.headers = {};
        this.sections = {};
        this.customArgs = {};
        this.trackingSettings = {};
        this.mailSettings = {};
        this.asm = {};
        //Helper properties
        this.substitutions = null;
        this.substitutionWrappers = null;
        this.dynamicTemplateData = null;
        //Process data if given
        if (data) {
            this.fromData(data);
        }
    }
    /**
   * Build from data
   */ fromData(data) {
        //Expecting object
        if (typeof data !== "object") {
            throw new Error("Expecting object for Mail data");
        }
        //Convert to camel case to make it workable, making a copy to prevent
        //changes to the original objects
        data = deepClone(data);
        data = toCamelCase(data, [
            "substitutions",
            "dynamicTemplateData",
            "customArgs",
            "headers",
            "sections"
        ]);
        //Extract properties from data
        const { to, from, replyTo, cc, bcc, sendAt, subject, text, html, content, templateId, personalizations, attachments, ipPoolName, batchId, sections, headers, categories, category, customArgs, asm, mailSettings, trackingSettings, substitutions, substitutionWrappers, dynamicTemplateData, isMultiple, hideWarnings, replyToList } = data;
        //Set data
        this.setFrom(from);
        this.setReplyTo(replyTo);
        this.setSubject(subject);
        this.setSendAt(sendAt);
        this.setTemplateId(templateId);
        this.setBatchId(batchId);
        this.setIpPoolName(ipPoolName);
        this.setAttachments(attachments);
        this.setContent(content);
        this.setSections(sections);
        this.setHeaders(headers);
        this.setCategories(category);
        this.setCategories(categories);
        this.setCustomArgs(customArgs);
        this.setAsm(asm);
        this.setMailSettings(mailSettings);
        this.setTrackingSettings(trackingSettings);
        this.setHideWarnings(hideWarnings);
        this.setReplyToList(replyToList);
        if (this.isDynamic) {
            this.setDynamicTemplateData(dynamicTemplateData);
        } else {
            this.setSubstitutions(substitutions);
            this.setSubstitutionWrappers(substitutionWrappers);
        }
        //Add contents from text/html properties
        this.addTextContent(text);
        this.addHtmlContent(html);
        //Using "to" property for personalizations
        if (personalizations) {
            this.setPersonalizations(personalizations);
        } else if (isMultiple && Array.isArray(to)) {
            //Multiple individual emails
            to.forEach((to)=>this.addTo(to, cc, bcc));
        } else {
            //Single email (possibly with multiple recipients in the to field)
            this.addTo(to, cc, bcc);
        }
    }
    /**
   * Set from email
   */ setFrom(from) {
        if (this._checkProperty("from", from, [
            this._checkUndefined
        ])) {
            if (typeof from !== "string" && typeof from.email !== "string") {
                throw new Error("String or address object expected for `from`");
            }
            this.from = EmailAddress.create(from);
        }
    }
    /**
   * Set reply to
   */ setReplyTo(replyTo) {
        if (this._checkProperty("replyTo", replyTo, [
            this._checkUndefined
        ])) {
            if (typeof replyTo !== "string" && typeof replyTo.email !== "string") {
                throw new Error("String or address object expected for `replyTo`");
            }
            this.replyTo = EmailAddress.create(replyTo);
        }
    }
    /**
   * Set subject
   */ setSubject(subject) {
        this._setProperty("subject", subject, "string");
    }
    /**
   * Set send at
   */ setSendAt(sendAt) {
        if (this._checkProperty("sendAt", sendAt, [
            this._checkUndefined,
            this._createCheckThatThrows(Number.isInteger, "Integer expected for `sendAt`")
        ])) {
            this.sendAt = sendAt;
        }
    }
    /**
   * Set template ID, also checks if the template is dynamic or legacy
   */ setTemplateId(templateId) {
        if (this._setProperty("templateId", templateId, "string")) {
            if (templateId.indexOf("d-") === 0) {
                this.isDynamic = true;
            }
        }
    }
    /**
   * Set batch ID
   */ setBatchId(batchId) {
        this._setProperty("batchId", batchId, "string");
    }
    /**
   * Set IP pool name
   */ setIpPoolName(ipPoolName) {
        this._setProperty("ipPoolName", ipPoolName, "string");
    }
    /**
   * Set ASM
   */ setAsm(asm) {
        if (this._checkProperty("asm", asm, [
            this._checkUndefined,
            this._createTypeCheck("object")
        ])) {
            if (typeof asm.groupId !== "number") {
                throw new Error("Expected `asm` to include an integer in its `groupId` field");
            }
            if (asm.groupsToDisplay && (!Array.isArray(asm.groupsToDisplay) || !asm.groupsToDisplay.every((group)=>typeof group === "number"))) {
                throw new Error("Array of integers expected for `asm.groupsToDisplay`");
            }
            this.asm = asm;
        }
    }
    /**
   * Set personalizations
   */ setPersonalizations(personalizations) {
        if (!this._doArrayCheck("personalizations", personalizations)) {
            return;
        }
        if (!personalizations.every((personalization)=>typeof personalization === "object")) {
            throw new Error("Array of objects expected for `personalizations`");
        }
        //Clear and use add helper to add one by one
        this.personalizations = [];
        personalizations.forEach((personalization)=>this.addPersonalization(personalization));
    }
    /**
   * Add personalization
   */ addPersonalization(personalization) {
        //We should either send substitutions or dynamicTemplateData
        //depending on the templateId
        if (this.isDynamic && personalization.substitutions) {
            delete personalization.substitutions;
        } else if (!this.isDynamic && personalization.dynamicTemplateData) {
            delete personalization.dynamicTemplateData;
        }
        //Convert to class if needed
        if (!(personalization instanceof Personalization)) {
            personalization = new Personalization(personalization);
        }
        //If this is dynamic, set dynamicTemplateData, or set substitutions
        if (this.isDynamic) {
            this.applyDynamicTemplateData(personalization);
        } else {
            this.applySubstitutions(personalization);
        }
        //Push personalization to array
        this.personalizations.push(personalization);
    }
    /**
   * Convenience method for quickly creating personalizations
   */ addTo(to, cc, bcc) {
        if (typeof to === "undefined" && typeof cc === "undefined" && typeof bcc === "undefined") {
            throw new Error("Provide at least one of to, cc or bcc");
        }
        this.addPersonalization(new Personalization({
            to,
            cc,
            bcc
        }));
    }
    /**
   * Set substitutions
   */ setSubstitutions(substitutions) {
        this._setProperty("substitutions", substitutions, "object");
    }
    /**
   * Set substitution wrappers
   */ setSubstitutionWrappers(substitutionWrappers) {
        let lengthCheck = (propertyName, value)=>{
            if (!Array.isArray(value) || value.length !== 2) {
                throw new Error("Array expected with two elements for `" + propertyName + "`");
            }
        };
        if (this._checkProperty("substitutionWrappers", substitutionWrappers, [
            this._checkUndefined,
            lengthCheck
        ])) {
            this.substitutionWrappers = substitutionWrappers;
        }
    }
    /**
   * Helper which applies globally set substitutions to personalizations
   */ applySubstitutions(personalization) {
        if (personalization instanceof Personalization) {
            personalization.reverseMergeSubstitutions(this.substitutions);
            personalization.setSubstitutionWrappers(this.substitutionWrappers);
        }
    }
    /**
   * Helper which applies globally set dynamic_template_data to personalizations
   */ applyDynamicTemplateData(personalization) {
        if (personalization instanceof Personalization) {
            personalization.deepMergeDynamicTemplateData(this.dynamicTemplateData);
        }
    }
    /**
   * Set dynamicTemplateData
   */ setDynamicTemplateData(dynamicTemplateData) {
        if (typeof dynamicTemplateData === "undefined") {
            return;
        }
        if (typeof dynamicTemplateData !== "object") {
            throw new Error("Object expected for `dynamicTemplateData`");
        }
        // Check dynamic template for non-escaped characters and warn if found
        if (!this.hideWarnings) {
            Object.values(dynamicTemplateData).forEach((value)=>{
                if (/['"&]/.test(value)) {
                    console.warn(DYNAMIC_TEMPLATE_CHAR_WARNING);
                }
            });
        }
        this.dynamicTemplateData = dynamicTemplateData;
    }
    /**
   * Set content
   */ setContent(content) {
        if (this._doArrayCheck("content", content)) {
            if (!content.every((contentField)=>typeof contentField === "object")) {
                throw new Error("Expected each entry in `content` to be an object");
            }
            if (!content.every((contentField)=>typeof contentField.type === "string")) {
                throw new Error("Expected each `content` entry to contain a `type` string");
            }
            if (!content.every((contentField)=>typeof contentField.value === "string")) {
                throw new Error("Expected each `content` entry to contain a `value` string");
            }
            this.content = content;
        }
    }
    /**
   * Add content
   */ addContent(content) {
        if (this._checkProperty("content", content, [
            this._createTypeCheck("object")
        ])) {
            this.content.push(content);
        }
    }
    /**
   * Add text content
   */ addTextContent(text) {
        if (this._checkProperty("text", text, [
            this._checkUndefined,
            this._createTypeCheck("string")
        ])) {
            this.addContent({
                value: text,
                type: "text/plain"
            });
        }
    }
    /**
   * Add HTML content
   */ addHtmlContent(html) {
        if (this._checkProperty("html", html, [
            this._checkUndefined,
            this._createTypeCheck("string")
        ])) {
            this.addContent({
                value: html,
                type: "text/html"
            });
        }
    }
    /**
   * Set attachments
   */ setAttachments(attachments) {
        if (this._doArrayCheck("attachments", attachments)) {
            if (!attachments.every((attachment)=>typeof attachment.content === "string")) {
                throw new Error("Expected each attachment to contain a `content` string");
            }
            if (!attachments.every((attachment)=>typeof attachment.filename === "string")) {
                throw new Error("Expected each attachment to contain a `filename` string");
            }
            if (!attachments.every((attachment)=>!attachment.type || typeof attachment.type === "string")) {
                throw new Error("Expected the attachment's `type` field to be a string");
            }
            if (!attachments.every((attachment)=>!attachment.disposition || typeof attachment.disposition === "string")) {
                throw new Error("Expected the attachment's `disposition` field to be a string");
            }
            this.attachments = attachments;
        }
    }
    /**
   * Add attachment
   */ addAttachment(attachment) {
        if (this._checkProperty("attachment", attachment, [
            this._checkUndefined,
            this._createTypeCheck("object")
        ])) {
            this.attachments.push(attachment);
        }
    }
    /**
   * Set categories
   */ setCategories(categories) {
        let allElementsAreStrings = (propertyName, value)=>{
            if (!Array.isArray(value) || !value.every((item)=>typeof item === "string")) {
                throw new Error("Array of strings expected for `" + propertyName + "`");
            }
        };
        if (typeof categories === "string") {
            categories = [
                categories
            ];
        }
        if (this._checkProperty("categories", categories, [
            this._checkUndefined,
            allElementsAreStrings
        ])) {
            this.categories = categories;
        }
    }
    /**
   * Add category
   */ addCategory(category) {
        if (this._checkProperty("category", category, [
            this._createTypeCheck("string")
        ])) {
            this.categories.push(category);
        }
    }
    /**
   * Set headers
   */ setHeaders(headers) {
        this._setProperty("headers", headers, "object");
    }
    /**
   * Add a header
   */ addHeader(key, value) {
        if (this._checkProperty("key", key, [
            this._createTypeCheck("string")
        ]) && this._checkProperty("value", value, [
            this._createTypeCheck("string")
        ])) {
            this.headers[key] = value;
        }
    }
    /**
   * Set sections
   */ setSections(sections) {
        this._setProperty("sections", sections, "object");
    }
    /**
   * Set custom args
   */ setCustomArgs(customArgs) {
        this._setProperty("customArgs", customArgs, "object");
    }
    /**
   * Set tracking settings
   */ setTrackingSettings(settings) {
        if (typeof settings === "undefined") {
            return;
        }
        validateTrackingSettings(settings);
        this.trackingSettings = settings;
    }
    /**
   * Set mail settings
   */ setMailSettings(settings) {
        if (typeof settings === "undefined") {
            return;
        }
        validateMailSettings(settings);
        this.mailSettings = settings;
    }
    /**
   * Set hide warnings
   */ setHideWarnings(hide) {
        if (typeof hide === "undefined") {
            return;
        }
        if (typeof hide !== "boolean") {
            throw new Error("Boolean expected for `hideWarnings`");
        }
        this.hideWarnings = hide;
    }
    /**
   * To JSON
   */ toJSON() {
        //Extract properties from self
        const { from, replyTo, sendAt, subject, content, templateId, personalizations, attachments, ipPoolName, batchId, asm, sections, headers, categories, customArgs, mailSettings, trackingSettings, replyToList } = this;
        //Initialize with mandatory values
        const json = {
            from,
            subject,
            personalizations: arrayToJSON(personalizations)
        };
        //Array properties
        if (Array.isArray(attachments) && attachments.length > 0) {
            json.attachments = arrayToJSON(attachments);
        }
        if (Array.isArray(categories) && categories.length > 0) {
            json.categories = categories.filter((cat)=>cat !== "");
        }
        if (Array.isArray(content) && content.length > 0) {
            json.content = arrayToJSON(content);
        }
        //Object properties
        if (Object.keys(headers).length > 0) {
            json.headers = headers;
        }
        if (Object.keys(mailSettings).length > 0) {
            json.mailSettings = mailSettings;
        }
        if (Object.keys(trackingSettings).length > 0) {
            json.trackingSettings = trackingSettings;
        }
        if (Object.keys(customArgs).length > 0) {
            json.customArgs = customArgs;
        }
        if (Object.keys(sections).length > 0) {
            json.sections = sections;
        }
        if (Object.keys(asm).length > 0) {
            json.asm = asm;
        }
        //Simple properties
        if (typeof replyTo !== "undefined") {
            json.replyTo = replyTo;
        }
        if (typeof sendAt !== "undefined") {
            json.sendAt = sendAt;
        }
        if (typeof batchId !== "undefined") {
            json.batchId = batchId;
        }
        if (typeof templateId !== "undefined") {
            json.templateId = templateId;
        }
        if (typeof ipPoolName !== "undefined") {
            json.ipPoolName = ipPoolName;
        }
        if (typeof replyToList !== "undefined") {
            json.replyToList = replyToList;
        }
        //Return as snake cased object
        return toSnakeCase(json, [
            "substitutions",
            "dynamicTemplateData",
            "customArgs",
            "headers",
            "sections"
        ]);
    }
    /**************************************************************************
   * Static helpers
   ***/ /**
   * Create a Mail instance from given data
   */ static create(data) {
        //Array?
        if (Array.isArray(data)) {
            return data.filter((item)=>!!item).map((item)=>this.create(item));
        }
        //Already instance of Mail class?
        if (data instanceof Mail) {
            return data;
        }
        //Create instance
        return new Mail(data);
    }
    /**************************************************************************
   * helpers for property-setting checks
   ***/ /**
   * Perform a set of checks on the new property value. Returns true if all
   * checks complete successfully without throwing errors or returning true.
   */ _checkProperty(propertyName, value, checks) {
        return !checks.some((e)=>e(propertyName, value));
    }
    /**
   * Set a property with normal undefined and type-checks
   */ _setProperty(propertyName, value, propertyType) {
        let propertyChecksPassed = this._checkProperty(propertyName, value, [
            this._checkUndefined,
            this._createTypeCheck(propertyType)
        ]);
        if (propertyChecksPassed) {
            this[propertyName] = value;
        }
        return propertyChecksPassed;
    }
    /**
   * Fail if the value is undefined.
   */ _checkUndefined(propertyName, value) {
        return typeof value === "undefined";
    }
    /**
   * Create and return a function that checks for a given type
   */ _createTypeCheck(propertyType) {
        return (propertyName, value)=>{
            if (typeof value !== propertyType) {
                throw new Error(propertyType + " expected for `" + propertyName + "`");
            }
        };
    }
    /**
   * Create a check out of a callback. If the callback
   * returns false, the check will throw an error.
   */ _createCheckThatThrows(check, errorString) {
        return (propertyName, value)=>{
            if (!check(value)) {
                throw new Error(errorString);
            }
        };
    }
    /**
   * Set an array property after checking that the new value is an
   * array.
   */ _setArrayProperty(propertyName, value) {
        if (this._doArrayCheck(propertyName, value)) {
            this[propertyName] = value;
        }
    }
    /**
   * Check that a value isn't undefined and is an array.
   */ _doArrayCheck(propertyName, value) {
        return this._checkProperty(propertyName, value, [
            this._checkUndefined,
            this._createCheckThatThrows(Array.isArray, "Array expected for`" + propertyName + "`")
        ]);
    }
    /**
   * Set the replyToList from email body
   */ setReplyToList(replyToList) {
        if (this._doArrayCheck("replyToList", replyToList) && replyToList.length) {
            if (!replyToList.every((replyTo)=>replyTo && typeof replyTo.email === "string")) {
                throw new Error("Expected each replyTo to contain an `email` string");
            }
            this.replyToList = replyToList;
        }
    }
}
//Export class
module.exports = Mail;


/***/ }),

/***/ 2545:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Dependencies
 */ const EmailAddress = __webpack_require__(23454);
const toCamelCase = __webpack_require__(77743);
const toSnakeCase = __webpack_require__(93571);
const deepClone = __webpack_require__(6598);
const deepMerge = __webpack_require__(79089);
const wrapSubstitutions = __webpack_require__(88384);
/**
 * Personalization class
 */ class Personalization {
    /**
   * Constructor
   */ constructor(data){
        //Init array and object placeholders
        this.to = [];
        this.cc = [];
        this.bcc = [];
        this.headers = {};
        this.customArgs = {};
        this.substitutions = {};
        this.substitutionWrappers = [
            "{{",
            "}}"
        ];
        this.dynamicTemplateData = {};
        //Build from data if given
        if (data) {
            this.fromData(data);
        }
    }
    /**
   * From data
   */ fromData(data) {
        //Expecting object
        if (typeof data !== "object") {
            throw new Error("Expecting object for Mail data");
        }
        //Convert to camel case to make it workable, making a copy to prevent
        //changes to the original objects
        data = deepClone(data);
        data = toCamelCase(data, [
            "substitutions",
            "dynamicTemplateData",
            "customArgs",
            "headers"
        ]);
        //Extract properties from data
        const { to, from, cc, bcc, subject, headers, customArgs, sendAt, substitutions, substitutionWrappers, dynamicTemplateData } = data;
        //Set data
        this.setTo(to);
        this.setFrom(from);
        this.setCc(cc);
        this.setBcc(bcc);
        this.setSubject(subject);
        this.setHeaders(headers);
        this.setSubstitutions(substitutions);
        this.setSubstitutionWrappers(substitutionWrappers);
        this.setCustomArgs(customArgs);
        this.setDynamicTemplateData(dynamicTemplateData);
        this.setSendAt(sendAt);
    }
    /**
   * Set subject
   */ setSubject(subject) {
        if (typeof subject === "undefined") {
            return;
        }
        if (typeof subject !== "string") {
            throw new Error("String expected for `subject`");
        }
        this.subject = subject;
    }
    /**
   * Set send at
   */ setSendAt(sendAt) {
        if (typeof sendAt === "undefined") {
            return;
        }
        if (!Number.isInteger(sendAt)) {
            throw new Error("Integer expected for `sendAt`");
        }
        this.sendAt = sendAt;
    }
    /**
   * Set to
   */ setTo(to) {
        if (typeof to === "undefined") {
            return;
        }
        if (!Array.isArray(to)) {
            to = [
                to
            ];
        }
        this.to = EmailAddress.create(to);
    }
    /**
   * Set from
   * */ setFrom(from) {
        if (typeof from === "undefined") {
            return;
        }
        this.from = EmailAddress.create(from);
    }
    /**
   * Add a single to
   */ addTo(to) {
        if (typeof to === "undefined") {
            return;
        }
        this.to.push(EmailAddress.create(to));
    }
    /**
   * Set cc
   */ setCc(cc) {
        if (typeof cc === "undefined") {
            return;
        }
        if (!Array.isArray(cc)) {
            cc = [
                cc
            ];
        }
        this.cc = EmailAddress.create(cc);
    }
    /**
   * Add a single cc
   */ addCc(cc) {
        if (typeof cc === "undefined") {
            return;
        }
        this.cc.push(EmailAddress.create(cc));
    }
    /**
   * Set bcc
   */ setBcc(bcc) {
        if (typeof bcc === "undefined") {
            return;
        }
        if (!Array.isArray(bcc)) {
            bcc = [
                bcc
            ];
        }
        this.bcc = EmailAddress.create(bcc);
    }
    /**
   * Add a single bcc
   */ addBcc(bcc) {
        if (typeof bcc === "undefined") {
            return;
        }
        this.bcc.push(EmailAddress.create(bcc));
    }
    /**
   * Set headers
   */ setHeaders(headers) {
        if (typeof headers === "undefined") {
            return;
        }
        if (typeof headers !== "object" || headers === null) {
            throw new Error("Object expected for `headers`");
        }
        this.headers = headers;
    }
    /**
   * Add a header
   */ addHeader(key, value) {
        if (typeof key !== "string") {
            throw new Error("String expected for header key");
        }
        if (typeof value !== "string") {
            throw new Error("String expected for header value");
        }
        this.headers[key] = value;
    }
    /**
   * Set custom args
   */ setCustomArgs(customArgs) {
        if (typeof customArgs === "undefined") {
            return;
        }
        if (typeof customArgs !== "object" || customArgs === null) {
            throw new Error("Object expected for `customArgs`");
        }
        this.customArgs = customArgs;
    }
    /**
   * Add a custom arg
   */ addCustomArg(key, value) {
        if (typeof key !== "string") {
            throw new Error("String expected for custom arg key");
        }
        if (typeof value !== "string") {
            throw new Error("String expected for custom arg value");
        }
        this.customArgs[key] = value;
    }
    /**
   * Set substitutions
   */ setSubstitutions(substitutions) {
        if (typeof substitutions === "undefined") {
            return;
        }
        if (typeof substitutions !== "object") {
            throw new Error("Object expected for `substitutions`");
        }
        this.substitutions = substitutions;
    }
    /**
   * Add a substitution
   */ addSubstitution(key, value) {
        if (typeof key !== "string") {
            throw new Error("String expected for substitution key");
        }
        if (typeof value !== "string" && typeof value !== "number") {
            throw new Error("String or Number expected for substitution value");
        }
        this.substitutions[key] = value;
    }
    /**
   * Reverse merge substitutions, preserving existing ones
   */ reverseMergeSubstitutions(substitutions) {
        if (typeof substitutions === "undefined" || substitutions === null) {
            return;
        }
        if (typeof substitutions !== "object") {
            throw new Error("Object expected for `substitutions` in reverseMergeSubstitutions");
        }
        this.substitutions = Object.assign({}, substitutions, this.substitutions);
    }
    /**
   * Set substitution wrappers
   */ setSubstitutionWrappers(wrappers) {
        if (typeof wrappers === "undefined" || wrappers === null) {
            return;
        }
        if (!Array.isArray(wrappers) || wrappers.length !== 2) {
            throw new Error("Array expected with two elements for `substitutionWrappers`");
        }
        this.substitutionWrappers = wrappers;
    }
    /**
   * Reverse merge dynamic template data, preserving existing ones
   */ deepMergeDynamicTemplateData(dynamicTemplateData) {
        if (typeof dynamicTemplateData === "undefined" || dynamicTemplateData === null) {
            return;
        }
        if (typeof dynamicTemplateData !== "object") {
            throw new Error("Object expected for `dynamicTemplateData` in deepMergeDynamicTemplateData");
        }
        this.dynamicTemplateData = deepMerge(dynamicTemplateData, this.dynamicTemplateData);
    }
    /**
   * Set dynamic template data
   */ setDynamicTemplateData(dynamicTemplateData) {
        if (typeof dynamicTemplateData === "undefined") {
            return;
        }
        if (typeof dynamicTemplateData !== "object") {
            throw new Error("Object expected for `dynamicTemplateData`");
        }
        this.dynamicTemplateData = dynamicTemplateData;
    }
    /**
   * To JSON
   */ toJSON() {
        //Get data from self
        const { to, from, cc, bcc, subject, headers, customArgs, sendAt, substitutions, substitutionWrappers, dynamicTemplateData } = this;
        //Initialize with mandatory values
        const json = {
            to
        };
        //Arrays
        if (Array.isArray(cc) && cc.length > 0) {
            json.cc = cc;
        }
        if (Array.isArray(bcc) && bcc.length > 0) {
            json.bcc = bcc;
        }
        //Objects
        if (Object.keys(headers).length > 0) {
            json.headers = headers;
        }
        if (substitutions && Object.keys(substitutions).length > 0) {
            const [left, right] = substitutionWrappers;
            json.substitutions = wrapSubstitutions(substitutions, left, right);
        }
        if (Object.keys(customArgs).length > 0) {
            json.customArgs = customArgs;
        }
        if (dynamicTemplateData && Object.keys(dynamicTemplateData).length > 0) {
            json.dynamicTemplateData = dynamicTemplateData;
        }
        //Simple properties
        if (typeof subject !== "undefined") {
            json.subject = subject;
        }
        if (typeof sendAt !== "undefined") {
            json.sendAt = sendAt;
        }
        if (typeof from !== "undefined") {
            json.from = from;
        }
        //Return as snake cased object
        return toSnakeCase(json, [
            "substitutions",
            "dynamicTemplateData",
            "customArgs",
            "headers"
        ]);
    }
}
//Export class
module.exports = Personalization;


/***/ }),

/***/ 52825:
/***/ ((module) => {


/**
 * Response error class
 */ class ResponseError extends Error {
    /**
   * Constructor
   */ constructor(response){
        //Super
        super();
        //Extract data from response
        const { headers, status, statusText, data } = response;
        //Set data
        this.code = status;
        this.message = statusText;
        this.response = {
            headers,
            body: data
        };
        //Capture stack trace
        if (!this.stack) {
            Error.captureStackTrace(this, this.constructor);
        }
        //Clean up stack trace
        const regex = new RegExp(process.cwd() + "/", "gi");
        this.stack = this.stack.replace(regex, "");
    }
    /**
   * Convert to string
   */ toString() {
        const { body } = this.response;
        let err = `${this.message} (${this.code})`;
        if (body && Array.isArray(body.errors)) {
            body.errors.forEach((error)=>{
                const message = error.message;
                const field = error.field;
                const help = error.help;
                err += `\n  ${message}\n    ${field}\n    ${help}`;
            });
        }
        return err;
    }
    /**
   * Convert to simple object for JSON responses
   */ toJSON() {
        const { message, code, response } = this;
        return {
            message,
            code,
            response
        };
    }
}
//Export
module.exports = ResponseError;


/***/ }),

/***/ 40831:
/***/ ((module) => {


class Response {
    constructor(statusCode, body, headers){
        this.statusCode = statusCode;
        this.body = body;
        this.headers = headers;
    }
    toString() {
        return "HTTP " + this.statusCode + " " + this.body;
    }
}
module.exports = Response;


/***/ }),

/***/ 55057:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Dependencies
 */ const toCamelCase = __webpack_require__(77743);
const deepClone = __webpack_require__(6598);
/**
 * Options
 */ const AggregatedByOptions = [
    "day",
    "week",
    "month"
];
const CountryOptions = [
    "us",
    "ca"
];
const SortByDirection = [
    "desc",
    "asc"
];
/**
 * Statistics class
 */ class Statistics {
    constructor(data){
        this.startDate = null;
        this.endDate = null;
        this.aggregatedBy = null;
        if (data) {
            this.fromData(data);
        }
    }
    /**
   * Build from data
   */ fromData(data) {
        //Expecting object
        if (typeof data !== "object") {
            throw new Error("Expecting object for Statistics data");
        }
        //Convert to camel case to make it workable, making a copy to prevent
        //changes to the original objects
        data = deepClone(data);
        data = toCamelCase(data, [
            "substitutions",
            "customArgs"
        ]);
        const { startDate, endDate, aggregatedBy } = data;
        this.setStartDate(startDate);
        this.setEndDate(endDate);
        this.setAggregatedBy(aggregatedBy);
    }
    /**
   * Set startDate
   */ setStartDate(startDate) {
        if (typeof startDate === "undefined") {
            throw new Error("Date expected for `startDate`");
        }
        if (new Date(startDate) === "Invalid Date" || isNaN(new Date(startDate))) {
            throw new Error("Date expected for `startDate`");
        }
        console.log(startDate);
        this.startDate = new Date(startDate).toISOString().slice(0, 10);
    }
    /**
   * Set endDate
   */ setEndDate(endDate) {
        if (typeof endDate === "undefined") {
            this.endDate = new Date().toISOString().slice(0, 10);
            return;
        }
        if (new Date(endDate) === "Invalid Date" || isNaN(new Date(endDate))) {
            throw new Error("Date expected for `endDate`");
        }
        this.endDate = new Date(endDate).toISOString().slice(0, 10);
    }
    /**
   * Set aggregatedBy
   */ setAggregatedBy(aggregatedBy) {
        if (typeof aggregatedBy === "undefined") {
            return;
        }
        if (typeof aggregatedBy === "string" && AggregatedByOptions.includes(aggregatedBy.toLowerCase())) {
            this.aggregatedBy = aggregatedBy;
        } else {
            throw new Error("Incorrect value for `aggregatedBy`");
        }
    }
    /**
   * Get Global
   */ getGlobal() {
        const { startDate, endDate, aggregatedBy } = this;
        return {
            startDate,
            endDate,
            aggregatedBy
        };
    }
    /**
   * Get Advanced
   */ getAdvanced(country) {
        const json = this.getGlobal();
        if (typeof country === "undefined") {
            return json;
        }
        if (typeof country === "string" && CountryOptions.includes(country.toLowerCase())) {
            json.country = country;
        }
        return json;
    }
    /**
   * Get Advanced Mailbox Providers
   */ getAdvancedMailboxProviders(mailBoxProviders) {
        const json = this.getGlobal();
        if (typeof mailBoxProviders === "undefined") {
            return json;
        }
        if (Array.isArray(mailBoxProviders) && mailBoxProviders.some((x)=>typeof x !== "string")) {
            throw new Error("Array of strings expected for `mailboxProviders`");
        }
        json.mailBoxProviders = mailBoxProviders;
        return json;
    }
    /**
   * Get Advanced Browsers
   */ getAdvancedBrowsers(browsers) {
        const json = this.getGlobal();
        if (typeof browsers === "undefined") {
            return json;
        }
        if (Array.isArray(browsers) && browsers.some((x)=>typeof x !== "string")) {
            throw new Error("Array of strings expected for `browsers`");
        }
        json.browsers = browsers;
        return json;
    }
    /**
   * Get Categories
   */ getCategories(categories) {
        if (typeof categories === "undefined") {
            throw new Error("Array of strings expected for `categories`");
        }
        if (!this._isValidArrayOfStrings(categories)) {
            throw new Error("Array of strings expected for `categories`");
        }
        const json = this.getGlobal();
        json.categories = categories;
        return json;
    }
    /**
   * Get Subuser
   */ getSubuser(subusers) {
        if (typeof subusers === "undefined") {
            throw new Error("Array of strings expected for `subusers`");
        }
        if (!this._isValidArrayOfStrings(subusers)) {
            throw new Error("Array of strings expected for `subusers`");
        }
        const json = this.getGlobal();
        json.subusers = subusers;
        return json;
    }
    /**
   * Get Subuser Sum
   */ getSubuserSum(sortByMetric = "delivered", sortByDirection = SortByDirection[0], limit = 5, offset = 0) {
        if (typeof sortByMetric !== "string") {
            throw new Error("string expected for `sortByMetric`");
        }
        if (!SortByDirection.includes(sortByDirection.toLowerCase())) {
            throw new Error("desc or asc expected for `sortByDirection`");
        }
        if (typeof limit !== "number") {
            throw new Error("number expected for `limit`");
        }
        if (typeof offset !== "number") {
            throw new Error("number expected for `offset`");
        }
        const json = this.getGlobal();
        json.sortByMetric = sortByMetric;
        json.sortByDirection = sortByDirection;
        json.limit = limit;
        json.offset = offset;
        return json;
    }
    /**
   * Get Subuser Monthly
   */ getSubuserMonthly(sortByMetric = "delivered", sortByDirection = SortByDirection[0], limit = 5, offset = 0) {
        if (typeof sortByMetric !== "string") {
            throw new Error("string expected for `sortByMetric`");
        }
        if (!SortByDirection.includes(sortByDirection.toLowerCase())) {
            throw new Error("desc or asc expected for `sortByDirection`");
        }
        if (typeof limit !== "number") {
            throw new Error("number expected for `limit`");
        }
        if (typeof offset !== "number") {
            throw new Error("number expected for `offset`");
        }
        const json = this.getGlobal();
        json.sortByMetric = sortByMetric;
        json.sortByDirection = sortByDirection;
        json.limit = limit;
        json.offset = offset;
        return json;
    }
    _isValidArrayOfStrings(arr) {
        if (!Array.isArray(arr)) {
            return false;
        }
        if (arr.length < 1 || arr.some((x)=>typeof x !== "string")) {
            return false;
        }
        return true;
    }
}
//Export class
module.exports = Statistics;


/***/ }),

/***/ 56030:
/***/ ((module) => {


const DYNAMIC_TEMPLATE_CHAR_WARNING = `
Content with characters ', " or & may need to be escaped with three brackets
{{{ content }}}
See https://sendgrid.com/docs/for-developers/sending-email/using-handlebars/ for more information.`;
module.exports = {
    DYNAMIC_TEMPLATE_CHAR_WARNING
};


/***/ }),

/***/ 54356:
/***/ ((module) => {


/**
 * Helper to convert an array of objects to JSON
 */ module.exports = function arrayToJSON(arr) {
    return arr.map((item)=>{
        if (typeof item === "object" && item !== null && typeof item.toJSON === "function") {
            return item.toJSON();
        }
        return item;
    });
};


/***/ }),

/***/ 58942:
/***/ ((module) => {


/**
 * Helper to convert an object's keys
 */ module.exports = function convertKeys(obj, converter, ignored) {
    //Validate
    if (typeof obj !== "object" || obj === null) {
        throw new Error("Non object passed to convertKeys: " + obj);
    }
    //Ignore arrays
    if (Array.isArray(obj)) {
        return obj;
    }
    //Ensure array for ignored values
    if (!Array.isArray(ignored)) {
        ignored = [];
    }
    //Process all properties
    for(const key in obj){
        //istanbul ignore else
        if (obj.hasOwnProperty(key)) {
            //Convert key to snake case
            const converted = converter(key);
            //Recursive for child objects, unless ignored
            //The ignored check checks both variants of the key
            if (typeof obj[key] === "object" && obj[key] !== null) {
                if (!ignored.includes(key) && !ignored.includes(converted)) {
                    obj[key] = convertKeys(obj[key], converter, ignored);
                }
            }
            //Convert key to snake case and set if needed
            if (converted !== key) {
                obj[converted] = obj[key];
                delete obj[key];
            }
        }
    }
    //Return object
    return obj;
};


/***/ }),

/***/ 6598:
/***/ ((module) => {


/**
 * Deep cloning helper for objects
 */ module.exports = function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
};


/***/ }),

/***/ 78329:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Expose helpers
 */ const arrayToJSON = __webpack_require__(54356);
const convertKeys = __webpack_require__(58942);
const deepClone = __webpack_require__(6598);
const mergeData = __webpack_require__(73339);
const splitNameEmail = __webpack_require__(77533);
const toCamelCase = __webpack_require__(77743);
const toSnakeCase = __webpack_require__(93571);
const wrapSubstitutions = __webpack_require__(88384);
/**
 * Export
 */ module.exports = {
    arrayToJSON,
    convertKeys,
    deepClone,
    mergeData,
    splitNameEmail,
    toCamelCase,
    toSnakeCase,
    wrapSubstitutions
};


/***/ }),

/***/ 73339:
/***/ ((module) => {


/**
 * Merge data helper
 */ module.exports = function mergeData(base, data) {
    //Validate data
    if (typeof base !== "object" || base === null) {
        throw new Error("Not an object provided for base");
    }
    if (typeof data !== "object" || data === null) {
        throw new Error("Not an object provided for data");
    }
    //Copy base
    const merged = Object.assign({}, base);
    //Add data
    for(const key in data){
        //istanbul ignore else
        if (data.hasOwnProperty(key)) {
            if (data[key] && Array.isArray(data[key])) {
                merged[key] = data[key];
            } else if (data[key] && typeof data[key] === "object") {
                merged[key] = Object.assign({}, data[key]);
            } else if (data[key]) {
                merged[key] = data[key];
            }
        }
    }
    //Return
    return merged;
};


/***/ }),

/***/ 77533:
/***/ ((module) => {


/**
 * Split name and email address from string
 */ module.exports = function splitNameEmail(str) {
    //If no email bracket present, return as is
    if (str.indexOf("<") === -1) {
        return [
            "",
            str
        ];
    }
    //Split into name and email
    let [name, email] = str.split("<");
    //Trim and fix up
    name = name.trim();
    email = email.replace(">", "").trim();
    //Return as array
    return [
        name,
        email
    ];
};


/***/ }),

/***/ 20636:
/***/ ((module) => {


/**
 * Internal conversion helper
 */ module.exports = function strToCamelCase(str) {
    if (typeof str !== "string") {
        throw new Error("String expected for conversion to snake case");
    }
    return str.trim().replace(/_+|\-+/g, " ").replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (Number(match) === 0) {
            return "";
        }
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
};


/***/ }),

/***/ 8585:
/***/ ((module) => {


/**
 * Internal conversion helper
 */ module.exports = function strToSnakeCase(str) {
    if (typeof str !== "string") {
        throw new Error("String expected for conversion to snake case");
    }
    return str.trim().replace(/(\s*\-*\b\w|[A-Z])/g, function($1) {
        $1 = $1.trim().toLowerCase().replace("-", "");
        return ($1[0] === "_" ? "" : "_") + $1;
    }).slice(1);
};


/***/ }),

/***/ 77743:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Dependencies
 */ const convertKeys = __webpack_require__(58942);
const strToCamelCase = __webpack_require__(20636);
/**
 * Convert object keys to camel case
 */ module.exports = function toCamelCase(obj, ignored) {
    return convertKeys(obj, strToCamelCase, ignored);
};


/***/ }),

/***/ 93571:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Dependencies
 */ const convertKeys = __webpack_require__(58942);
const strToSnakeCase = __webpack_require__(8585);
/**
 * Convert object keys to snake case
 */ module.exports = function toSnakeCase(obj, ignored) {
    return convertKeys(obj, strToSnakeCase, ignored);
};


/***/ }),

/***/ 73784:
/***/ ((module) => {


const validate = (parent, parentName, childName, childType)=>{
    if (typeof parent === "undefined" || typeof parent[childName] === "undefined") {
        return;
    }
    if (typeof parent[childName] !== childType) {
        throw new Error(`${childType} expected for \`${parentName}.${childName}\``);
    }
};
module.exports = {
    validateMailSettings (settings) {
        if (typeof settings !== "object") {
            throw new Error("Object expected for `mailSettings`");
        }
        const { bcc, bypassListManagement, bypassSpamManagement, bypassBounceManagement, bypassUnsubscribeManagement, footer, sandboxMode, spamCheck } = settings;
        validate(bcc, "bcc", "enable", "boolean");
        validate(bcc, "bcc", "email", "string");
        validate(bypassListManagement, "bypassListManagement", "enable", "boolean");
        validate(bypassSpamManagement, "bypassSpamManagement", "enable", "boolean");
        validate(bypassBounceManagement, "bypassBounceManagement", "enable", "boolean");
        validate(bypassUnsubscribeManagement, "bypassUnsubscribeManagement", "enable", "boolean");
        validate(footer, "footer", "enable", "boolean");
        validate(footer, "footer", "text", "string");
        validate(footer, "footer", "html", "string");
        validate(sandboxMode, "sandboxMode", "enable", "boolean");
        validate(spamCheck, "spamCheck", "enable", "boolean");
        validate(spamCheck, "spamCheck", "threshold", "number");
        validate(spamCheck, "spamCheck", "postToUrl", "string");
    },
    validateTrackingSettings (settings) {
        if (typeof settings !== "object") {
            throw new Error("Object expected for `trackingSettings`");
        }
        const { clickTracking, openTracking, subscriptionTracking, ganalytics } = settings;
        validate(clickTracking, "clickTracking", "enable", "boolean");
        validate(clickTracking, "clickTracking", "enableText", "boolean");
        validate(openTracking, "openTracking", "enable", "boolean");
        validate(openTracking, "openTracking", "substitutionTag", "string");
        validate(subscriptionTracking, "subscriptionTracking", "enable", "boolean");
        validate(subscriptionTracking, "subscriptionTracking", "text", "string");
        validate(subscriptionTracking, "subscriptionTracking", "html", "string");
        validate(subscriptionTracking, "subscriptionTracking", "substitutionTag", "string");
        validate(ganalytics, "ganalytics", "enable", "boolean");
        validate(ganalytics, "ganalytics", "utm_source", "string");
        validate(ganalytics, "ganalytics", "utm_medium", "string");
        validate(ganalytics, "ganalytics", "utm_term", "string");
        validate(ganalytics, "ganalytics", "utm_content", "string");
        validate(ganalytics, "ganalytics", "utm_campaign", "string");
    }
};


/***/ }),

/***/ 88384:
/***/ ((module) => {


/**
 * Wrap substitutions
 */ module.exports = function wrap(substitutions, left = "{{", right = "}}") {
    //Process arrays
    if (Array.isArray(substitutions)) {
        return substitutions.map((subs)=>wrap(subs, left, right));
    }
    //Initialize new wrapped object
    const wrapped = {};
    //Map substitutions and ensure string for value
    for(const key in substitutions){
        //istanbul ignore else
        if (substitutions.hasOwnProperty(key)) {
            wrapped[left + key + right] = String(substitutions[key]);
        }
    }
    //Return wrapped substitutions
    return wrapped;
};


/***/ }),

/***/ 8624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Load support assets
 */ const classes = __webpack_require__(49211);
const helpers = __webpack_require__(78329);
/**
 * Export
 */ module.exports = {
    classes,
    helpers
};


/***/ }),

/***/ 13343:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const mailer = __webpack_require__(6842);
const MailService = __webpack_require__(99215);
module.exports = mailer;
module.exports.MailService = MailService;


/***/ }),

/***/ 99215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Dependencies
 */ const { Client } = __webpack_require__(60749);
const { classes: { Mail } } = __webpack_require__(8624);
/**
 * Mail service class
 */ class MailService {
    /**
   * Constructor
   */ constructor(){
        // Set client, initialize substitution wrappers and secret rules filter.
        this.setClient(new Client());
        this.setSubstitutionWrappers("{{", "}}");
        this.secretRules = [];
    }
    /**
   * Set client
   */ setClient(client) {
        this.client = client;
        return this;
    }
    /**
   * SendGrid API key passthrough for convenience.
   */ setApiKey(apiKey) {
        this.client.setApiKey(apiKey);
        return this;
    }
    /**
   * Twilio Email Auth passthrough for convenience.
   */ setTwilioEmailAuth(username, password) {
        this.client.setTwilioEmailAuth(username, password);
    }
    /**
   * Set client timeout
   */ setTimeout(timeout) {
        if (typeof timeout === "undefined") {
            return;
        }
        this.client.setDefaultRequest("timeout", timeout);
    }
    /**
   * Set substitution wrappers
   */ setSubstitutionWrappers(left, right) {
        if (typeof left === "undefined" || typeof right === "undefined") {
            throw new Error("Must provide both left and right side wrappers");
        }
        if (!Array.isArray(this.substitutionWrappers)) {
            this.substitutionWrappers = [];
        }
        this.substitutionWrappers[0] = left;
        this.substitutionWrappers[1] = right;
        return this;
    }
    /**
   * Set secret rules for filtering the e-mail content
   */ setSecretRules(rules) {
        if (!(rules instanceof Array)) {
            rules = [
                rules
            ];
        }
        const tmpRules = rules.map(function(rule) {
            const ruleType = typeof rule;
            if (ruleType === "string") {
                return {
                    pattern: new RegExp(rule)
                };
            } else if (ruleType === "object") {
                // normalize rule object
                if (rule instanceof RegExp) {
                    rule = {
                        pattern: rule
                    };
                } else if (rule.hasOwnProperty("pattern") && typeof rule.pattern === "string") {
                    rule.pattern = new RegExp(rule.pattern);
                }
                try {
                    // test if rule.pattern is a valid regex
                    rule.pattern.test("");
                    return rule;
                } catch (err) {
                // continue regardless of error
                }
            }
        });
        this.secretRules = tmpRules.filter(function(val) {
            return val;
        });
    }
    /**
   * Check if the e-mail is safe to be sent
   */ filterSecrets(body) {
        if (typeof body === "object" && !body.hasOwnProperty("content")) {
            return;
        }
        const self = this;
        body.content.forEach(function(data) {
            self.secretRules.forEach(function(rule) {
                if (rule.hasOwnProperty("pattern") && !rule.pattern.test(data.value)) {
                    return;
                }
                let message = `The pattern '${rule.pattern}'`;
                if (rule.name) {
                    message += `identified by '${rule.name}'`;
                }
                message += " was found in the Mail content!";
                throw new Error(message);
            });
        });
    }
    /**
   * Send email
   */ send(data, isMultiple = false, cb) {
        //Callback as second parameter
        if (typeof isMultiple === "function") {
            cb = isMultiple;
            isMultiple = false;
        }
        //Array? Send in parallel
        if (Array.isArray(data)) {
            //Create promise
            const promise = Promise.all(data.map((item)=>{
                return this.send(item, isMultiple);
            }));
            //Execute callback if provided
            if (cb) {
                promise.then((result)=>cb(null, result)).catch((error)=>cb(error, null));
            }
            //Return promise
            return promise;
        }
        //Send mail
        try {
            //Append multiple flag to data if not set
            if (typeof data.isMultiple === "undefined") {
                data.isMultiple = isMultiple;
            }
            //Append global substitution wrappers if not set in data
            if (typeof data.substitutionWrappers === "undefined") {
                data.substitutionWrappers = this.substitutionWrappers;
            }
            //Create Mail instance from data and get JSON body for request
            const mail = Mail.create(data);
            const body = mail.toJSON();
            //Filters the Mail body to avoid sensitive content leakage
            this.filterSecrets(body);
            //Create request
            const request = {
                method: "POST",
                url: "/v3/mail/send",
                headers: mail.headers,
                body
            };
            //Send
            return this.client.request(request, cb);
        } catch (error) {
            //Pass to callback if provided
            if (cb) {
                // eslint-disable-next-line callback-return
                cb(error, null);
            }
            //Reject promise
            return Promise.reject(error);
        }
    }
    /**
   * Send multiple emails (shortcut)
   */ sendMultiple(data, cb) {
        return this.send(data, true, cb);
    }
}
//Export class
module.exports = MailService;


/***/ }),

/***/ 6842:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Dependencies
 */ const MailService = __webpack_require__(99215);
//Export singleton instance
module.exports = new MailService();


/***/ }),

/***/ 39805:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = {
    parallel: __webpack_require__(11629),
    serial: __webpack_require__(15390),
    serialOrdered: __webpack_require__(33516)
};


/***/ }),

/***/ 24940:
/***/ ((module) => {

// API

module.exports = abort;
/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */ function abort(state) {
    Object.keys(state.jobs).forEach(clean.bind(state));
    // reset leftover jobs
    state.jobs = {};
}
/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */ function clean(key) {
    if (typeof this.jobs[key] == "function") {
        this.jobs[key]();
    }
}


/***/ }),

/***/ 96794:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var defer = __webpack_require__(78729);
// API
module.exports = async;
/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */ function async(callback) {
    var isAsync = false;
    // check if async happened
    defer(function() {
        isAsync = true;
    });
    return function async_callback(err, result) {
        if (isAsync) {
            callback(err, result);
        } else {
            defer(function nextTick_callback() {
                callback(err, result);
            });
        }
    };
}


/***/ }),

/***/ 78729:
/***/ ((module) => {


module.exports = defer;
/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */ function defer(fn) {
    var nextTick = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
    if (nextTick) {
        nextTick(fn);
    } else {
        setTimeout(fn, 0);
    }
}


/***/ }),

/***/ 21781:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var async = __webpack_require__(96794), abort = __webpack_require__(24940);
// API
module.exports = iterate;
/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */ function iterate(list, iterator, state, callback) {
    // store current index
    var key = state["keyedList"] ? state["keyedList"][state.index] : state.index;
    state.jobs[key] = runJob(iterator, key, list[key], function(error, output) {
        // don't repeat yourself
        // skip secondary callbacks
        if (!(key in state.jobs)) {
            return;
        }
        // clean up jobs
        delete state.jobs[key];
        if (error) {
            // don't process rest of the results
            // stop still active jobs
            // and reset the list
            abort(state);
        } else {
            state.results[key] = output;
        }
        // return salvaged results
        callback(error, state.results);
    });
}
/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */ function runJob(iterator, key, item, callback) {
    var aborter;
    // allow shortcut if iterator expects only two arguments
    if (iterator.length == 2) {
        aborter = iterator(item, async(callback));
    } else {
        aborter = iterator(item, key, async(callback));
    }
    return aborter;
}


/***/ }),

/***/ 54047:
/***/ ((module) => {

// API

module.exports = state;
/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */ function state(list, sortMethod) {
    var isNamedList = !Array.isArray(list), initState = {
        index: 0,
        keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
        jobs: {},
        results: isNamedList ? {} : [],
        size: isNamedList ? Object.keys(list).length : list.length
    };
    if (sortMethod) {
        // sort array keys based on it's values
        // sort object's keys just on own merit
        initState.keyedList.sort(isNamedList ? sortMethod : function(a, b) {
            return sortMethod(list[a], list[b]);
        });
    }
    return initState;
}


/***/ }),

/***/ 7514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var abort = __webpack_require__(24940), async = __webpack_require__(96794);
// API
module.exports = terminator;
/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */ function terminator(callback) {
    if (!Object.keys(this.jobs).length) {
        return;
    }
    // fast forward iteration index
    this.index = this.size;
    // abort jobs
    abort(this);
    // send back results we have so far
    async(callback)(null, this.results);
}


/***/ }),

/***/ 11629:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var iterate = __webpack_require__(21781), initState = __webpack_require__(54047), terminator = __webpack_require__(7514);
// Public API
module.exports = parallel;
/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function parallel(list, iterator, callback) {
    var state = initState(list);
    while(state.index < (state["keyedList"] || list).length){
        iterate(list, iterator, state, function(error, result) {
            if (error) {
                callback(error, result);
                return;
            }
            // looks like it's the last one
            if (Object.keys(state.jobs).length === 0) {
                callback(null, state.results);
                return;
            }
        });
        state.index++;
    }
    return terminator.bind(state, callback);
}


/***/ }),

/***/ 15390:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var serialOrdered = __webpack_require__(33516);
// Public API
module.exports = serial;
/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function serial(list, iterator, callback) {
    return serialOrdered(list, iterator, null, callback);
}


/***/ }),

/***/ 33516:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var iterate = __webpack_require__(21781), initState = __webpack_require__(54047), terminator = __webpack_require__(7514);
// Public API
module.exports = serialOrdered;
// sorting helpers
module.exports.ascending = ascending;
module.exports.descending = descending;
/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function serialOrdered(list, iterator, sortMethod, callback) {
    var state = initState(list, sortMethod);
    iterate(list, iterator, state, function iteratorHandler(error, result) {
        if (error) {
            callback(error, result);
            return;
        }
        state.index++;
        // are we there yet?
        if (state.index < (state["keyedList"] || list).length) {
            iterate(list, iterator, state, iteratorHandler);
            return;
        }
        // done here
        callback(null, state.results);
    });
    return terminator.bind(state, callback);
}
/*
 * -- Sort methods
 */ /**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */ function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */ function descending(a, b) {
    return -1 * ascending(a, b);
}


/***/ }),

/***/ 25139:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var util = __webpack_require__(73837);
var Stream = (__webpack_require__(12781).Stream);
var DelayedStream = __webpack_require__(51608);
module.exports = CombinedStream;
function CombinedStream() {
    this.writable = false;
    this.readable = true;
    this.dataSize = 0;
    this.maxDataSize = 2 * 1024 * 1024;
    this.pauseStreams = true;
    this._released = false;
    this._streams = [];
    this._currentStream = null;
    this._insideLoop = false;
    this._pendingNext = false;
}
util.inherits(CombinedStream, Stream);
CombinedStream.create = function(options) {
    var combinedStream = new this();
    options = options || {};
    for(var option in options){
        combinedStream[option] = options[option];
    }
    return combinedStream;
};
CombinedStream.isStreamLike = function(stream) {
    return typeof stream !== "function" && typeof stream !== "string" && typeof stream !== "boolean" && typeof stream !== "number" && !Buffer.isBuffer(stream);
};
CombinedStream.prototype.append = function(stream) {
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
        if (!(stream instanceof DelayedStream)) {
            var newStream = DelayedStream.create(stream, {
                maxDataSize: Infinity,
                pauseStream: this.pauseStreams
            });
            stream.on("data", this._checkDataSize.bind(this));
            stream = newStream;
        }
        this._handleErrors(stream);
        if (this.pauseStreams) {
            stream.pause();
        }
    }
    this._streams.push(stream);
    return this;
};
CombinedStream.prototype.pipe = function(dest, options) {
    Stream.prototype.pipe.call(this, dest, options);
    this.resume();
    return dest;
};
CombinedStream.prototype._getNext = function() {
    this._currentStream = null;
    if (this._insideLoop) {
        this._pendingNext = true;
        return; // defer call
    }
    this._insideLoop = true;
    try {
        do {
            this._pendingNext = false;
            this._realGetNext();
        }while (this._pendingNext);
    } finally{
        this._insideLoop = false;
    }
};
CombinedStream.prototype._realGetNext = function() {
    var stream = this._streams.shift();
    if (typeof stream == "undefined") {
        this.end();
        return;
    }
    if (typeof stream !== "function") {
        this._pipeNext(stream);
        return;
    }
    var getStream = stream;
    getStream((function(stream) {
        var isStreamLike = CombinedStream.isStreamLike(stream);
        if (isStreamLike) {
            stream.on("data", this._checkDataSize.bind(this));
            this._handleErrors(stream);
        }
        this._pipeNext(stream);
    }).bind(this));
};
CombinedStream.prototype._pipeNext = function(stream) {
    this._currentStream = stream;
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
        stream.on("end", this._getNext.bind(this));
        stream.pipe(this, {
            end: false
        });
        return;
    }
    var value = stream;
    this.write(value);
    this._getNext();
};
CombinedStream.prototype._handleErrors = function(stream) {
    var self = this;
    stream.on("error", function(err) {
        self._emitError(err);
    });
};
CombinedStream.prototype.write = function(data) {
    this.emit("data", data);
};
CombinedStream.prototype.pause = function() {
    if (!this.pauseStreams) {
        return;
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function") this._currentStream.pause();
    this.emit("pause");
};
CombinedStream.prototype.resume = function() {
    if (!this._released) {
        this._released = true;
        this.writable = true;
        this._getNext();
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function") this._currentStream.resume();
    this.emit("resume");
};
CombinedStream.prototype.end = function() {
    this._reset();
    this.emit("end");
};
CombinedStream.prototype.destroy = function() {
    this._reset();
    this.emit("close");
};
CombinedStream.prototype._reset = function() {
    this.writable = false;
    this._streams = [];
    this._currentStream = null;
};
CombinedStream.prototype._checkDataSize = function() {
    this._updateDataSize();
    if (this.dataSize <= this.maxDataSize) {
        return;
    }
    var message = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this._emitError(new Error(message));
};
CombinedStream.prototype._updateDataSize = function() {
    this.dataSize = 0;
    var self = this;
    this._streams.forEach(function(stream) {
        if (!stream.dataSize) {
            return;
        }
        self.dataSize += stream.dataSize;
    });
    if (this._currentStream && this._currentStream.dataSize) {
        this.dataSize += this._currentStream.dataSize;
    }
};
CombinedStream.prototype._emitError = function(err) {
    this._reset();
    this.emit("error", err);
};


/***/ }),

/***/ 79089:
/***/ ((module) => {


var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === "object";
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 0xeac7;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function getMergeFunction(key, options) {
    if (!options.customMerge) {
        return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
}
function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_) {
        return false;
    }
}
// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
     && Object.propertyIsEnumerable.call(target, key) // and also unsafe if they're nonenumerable.
    );
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
    }
    getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
            return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
    } else {
        return mergeObject(target, source, options);
    }
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
    }
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;


/***/ }),

/***/ 51608:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var Stream = (__webpack_require__(12781).Stream);
var util = __webpack_require__(73837);
module.exports = DelayedStream;
function DelayedStream() {
    this.source = null;
    this.dataSize = 0;
    this.maxDataSize = 1024 * 1024;
    this.pauseStream = true;
    this._maxDataSizeExceeded = false;
    this._released = false;
    this._bufferedEvents = [];
}
util.inherits(DelayedStream, Stream);
DelayedStream.create = function(source, options) {
    var delayedStream = new this();
    options = options || {};
    for(var option in options){
        delayedStream[option] = options[option];
    }
    delayedStream.source = source;
    var realEmit = source.emit;
    source.emit = function() {
        delayedStream._handleEmit(arguments);
        return realEmit.apply(source, arguments);
    };
    source.on("error", function() {});
    if (delayedStream.pauseStream) {
        source.pause();
    }
    return delayedStream;
};
Object.defineProperty(DelayedStream.prototype, "readable", {
    configurable: true,
    enumerable: true,
    get: function() {
        return this.source.readable;
    }
});
DelayedStream.prototype.setEncoding = function() {
    return this.source.setEncoding.apply(this.source, arguments);
};
DelayedStream.prototype.resume = function() {
    if (!this._released) {
        this.release();
    }
    this.source.resume();
};
DelayedStream.prototype.pause = function() {
    this.source.pause();
};
DelayedStream.prototype.release = function() {
    this._released = true;
    this._bufferedEvents.forEach((function(args) {
        this.emit.apply(this, args);
    }).bind(this));
    this._bufferedEvents = [];
};
DelayedStream.prototype.pipe = function() {
    var r = Stream.prototype.pipe.apply(this, arguments);
    this.resume();
    return r;
};
DelayedStream.prototype._handleEmit = function(args) {
    if (this._released) {
        this.emit.apply(this, args);
        return;
    }
    if (args[0] === "data") {
        this.dataSize += args[1].length;
        this._checkIfMaxDataSizeExceeded();
    }
    this._bufferedEvents.push(args);
};
DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
    if (this._maxDataSizeExceeded) {
        return;
    }
    if (this.dataSize <= this.maxDataSize) {
        return;
    }
    this._maxDataSizeExceeded = true;
    var message = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this.emit("error", new Error(message));
};


/***/ }),

/***/ 24686:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var debug;
module.exports = function() {
    if (!debug) {
        try {
            /* eslint global-require: off */ debug = __webpack_require__(63694)("follow-redirects");
        } catch (error) {}
        if (typeof debug !== "function") {
            debug = function() {};
        }
    }
    debug.apply(null, arguments);
};


/***/ }),

/***/ 2725:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var url = __webpack_require__(57310);
var URL = url.URL;
var http = __webpack_require__(13685);
var https = __webpack_require__(95687);
var Writable = (__webpack_require__(12781).Writable);
var assert = __webpack_require__(39491);
var debug = __webpack_require__(24686);
// Whether to use the native URL object or the legacy url module
var useNativeURL = false;
try {
    assert(new URL());
} catch (error) {
    useNativeURL = error.code === "ERR_INVALID_URL";
}
// URL fields to preserve in copy operations
var preservedUrlFields = [
    "auth",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "hash"
];
// Create handlers that pass events from native requests
var events = [
    "abort",
    "aborted",
    "connect",
    "error",
    "socket",
    "timeout"
];
var eventHandlers = Object.create(null);
events.forEach(function(event) {
    eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
    };
});
// Error types with codes
var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", RedirectionError);
var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
// istanbul ignore next
var destroy = Writable.prototype.destroy || noop;
// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
    // Initialize the request
    Writable.call(this);
    this._sanitizeOptions(options);
    this._options = options;
    this._ended = false;
    this._ending = false;
    this._redirectCount = 0;
    this._redirects = [];
    this._requestBodyLength = 0;
    this._requestBodyBuffers = [];
    // Attach a callback if passed
    if (responseCallback) {
        this.on("response", responseCallback);
    }
    // React to responses of native requests
    var self = this;
    this._onNativeResponse = function(response) {
        try {
            self._processResponse(response);
        } catch (cause) {
            self.emit("error", cause instanceof RedirectionError ? cause : new RedirectionError({
                cause: cause
            }));
        }
    };
    // Perform the first request
    this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);
RedirectableRequest.prototype.abort = function() {
    destroyRequest(this._currentRequest);
    this._currentRequest.abort();
    this.emit("abort");
};
RedirectableRequest.prototype.destroy = function(error) {
    destroyRequest(this._currentRequest, error);
    destroy.call(this, error);
    return this;
};
// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function(data, encoding, callback) {
    // Writing is not allowed if end has been called
    if (this._ending) {
        throw new WriteAfterEndError();
    }
    // Validate input and shift parameters if necessary
    if (!isString(data) && !isBuffer(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
    }
    if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Ignore empty buffers, since writing them doesn't invoke the callback
    // https://github.com/nodejs/node/issues/22066
    if (data.length === 0) {
        if (callback) {
            callback();
        }
        return;
    }
    // Only write when we don't exceed the maximum body length
    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({
            data: data,
            encoding: encoding
        });
        this._currentRequest.write(data, encoding, callback);
    } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
    }
};
// Ends the current native request
RedirectableRequest.prototype.end = function(data, encoding, callback) {
    // Shift parameters if necessary
    if (isFunction(data)) {
        callback = data;
        data = encoding = null;
    } else if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Write data if needed and end
    if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
    } else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
            self._ended = true;
            currentRequest.end(null, null, callback);
        });
        this._ending = true;
    }
};
// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function(name, value) {
    this._options.headers[name] = value;
    this._currentRequest.setHeader(name, value);
};
// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function(name) {
    delete this._options.headers[name];
    this._currentRequest.removeHeader(name);
};
// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
    var self = this;
    // Destroys the socket on timeout
    function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
    }
    // Sets up a timer to trigger a timeout event
    function startTimer(socket) {
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function() {
            self.emit("timeout");
            clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
    }
    // Stops a timeout from triggering
    function clearTimer() {
        // Clear the timeout
        if (self._timeout) {
            clearTimeout(self._timeout);
            self._timeout = null;
        }
        // Clean up all attached listeners
        self.removeListener("abort", clearTimer);
        self.removeListener("error", clearTimer);
        self.removeListener("response", clearTimer);
        self.removeListener("close", clearTimer);
        if (callback) {
            self.removeListener("timeout", callback);
        }
        if (!self.socket) {
            self._currentRequest.removeListener("socket", startTimer);
        }
    }
    // Attach callback if passed
    if (callback) {
        this.on("timeout", callback);
    }
    // Start the timer if or when the socket is opened
    if (this.socket) {
        startTimer(this.socket);
    } else {
        this._currentRequest.once("socket", startTimer);
    }
    // Clean up on events
    this.on("socket", destroyOnTimeout);
    this.on("abort", clearTimer);
    this.on("error", clearTimer);
    this.on("response", clearTimer);
    this.on("close", clearTimer);
    return this;
};
// Proxy all other public ClientRequest methods
[
    "flushHeaders",
    "getHeader",
    "setNoDelay",
    "setSocketKeepAlive"
].forEach(function(method) {
    RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
    };
});
// Proxy all public ClientRequest properties
[
    "aborted",
    "connection",
    "socket"
].forEach(function(property) {
    Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
            return this._currentRequest[property];
        }
    });
});
RedirectableRequest.prototype._sanitizeOptions = function(options) {
    // Ensure headers are always present
    if (!options.headers) {
        options.headers = {};
    }
    // Since http.request treats host as an alias of hostname,
    // but the url module interprets host as hostname plus port,
    // eliminate the host property to avoid confusion.
    if (options.host) {
        // Use hostname if set, because it has precedence
        if (!options.hostname) {
            options.hostname = options.host;
        }
        delete options.host;
    }
    // Complete the URL object when necessary
    if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
            options.pathname = options.path;
        } else {
            options.pathname = options.path.substring(0, searchPos);
            options.search = options.path.substring(searchPos);
        }
    }
};
// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function() {
    // Load the native protocol
    var protocol = this._options.protocol;
    var nativeProtocol = this._options.nativeProtocols[protocol];
    if (!nativeProtocol) {
        throw new TypeError("Unsupported protocol " + protocol);
    }
    // If specified, use the agent corresponding to the protocol
    // (HTTP and HTTPS use different types of agents)
    if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
    }
    // Create the native request and set up its event handlers
    var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
    request._redirectable = this;
    for (var event of events){
        request.on(event, eventHandlers[event]);
    }
    // RFC7230§5.3.1: When making a request directly to an origin server, […]
    // a client MUST send only the absolute path […] as the request-target.
    this._currentUrl = /^\//.test(this._options.path) ? url.format(this._options) : // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;
    // End a redirected request
    // (The first request must be ended explicitly with RedirectableRequest#end)
    if (this._isRedirect) {
        // Write the request entity and end
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
            // Only write if this request has not been redirected yet
            /* istanbul ignore else */ if (request === self._currentRequest) {
                // Report any write errors
                /* istanbul ignore if */ if (error) {
                    self.emit("error", error);
                } else if (i < buffers.length) {
                    var buffer = buffers[i++];
                    /* istanbul ignore else */ if (!request.finished) {
                        request.write(buffer.data, buffer.encoding, writeNext);
                    }
                } else if (self._ended) {
                    request.end();
                }
            }
        })();
    }
};
// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function(response) {
    // Store the redirected response
    var statusCode = response.statusCode;
    if (this._options.trackRedirects) {
        this._redirects.push({
            url: this._currentUrl,
            headers: response.headers,
            statusCode: statusCode
        });
    }
    // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
    // that further action needs to be taken by the user agent in order to
    // fulfill the request. If a Location header field is provided,
    // the user agent MAY automatically redirect its request to the URI
    // referenced by the Location field value,
    // even if the specific status code is not understood.
    // If the response is not a redirect; return it as-is
    var location = response.headers.location;
    if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        // Clean up
        this._requestBodyBuffers = [];
        return;
    }
    // The response is a redirect, so abort the current request
    destroyRequest(this._currentRequest);
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
        throw new TooManyRedirectsError();
    }
    // Store the request headers if applicable
    var requestHeaders;
    var beforeRedirect = this._options.beforeRedirect;
    if (beforeRedirect) {
        requestHeaders = Object.assign({
            // The Host header was set by nativeProtocol.request
            Host: response.req.getHeader("host")
        }, this._options.headers);
    }
    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    var method = this._options.method;
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
    // the server is redirecting the user agent to a different resource […]
    // A user agent can perform a retrieval request targeting that URI
    // (a GET or HEAD request if using HTTP) […]
    statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        // Drop a possible entity and headers related to it
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
    }
    // Drop the Host header, as the redirect might lead to a different host
    var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
    // If the redirect is relative, carry over the host of the last request
    var currentUrlParts = parseUrl(this._currentUrl);
    var currentHost = currentHostHeader || currentUrlParts.host;
    var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, {
        host: currentHost
    }));
    // Create the redirected request
    var redirectUrl = resolveUrl(location, currentUrl);
    debug("redirecting to", redirectUrl.href);
    this._isRedirect = true;
    spreadUrlObject(redirectUrl, this._options);
    // Drop confidential headers when redirecting to a less secure protocol
    // or to a different domain that is not a superdomain
    if (redirectUrl.protocol !== currentUrlParts.protocol && redirectUrl.protocol !== "https:" || redirectUrl.host !== currentHost && !isSubdomain(redirectUrl.host, currentHost)) {
        removeMatchingHeaders(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
    }
    // Evaluate the beforeRedirect callback
    if (isFunction(beforeRedirect)) {
        var responseDetails = {
            headers: response.headers,
            statusCode: statusCode
        };
        var requestDetails = {
            url: currentUrl,
            method: method,
            headers: requestHeaders
        };
        beforeRedirect(this._options, responseDetails, requestDetails);
        this._sanitizeOptions(this._options);
    }
    // Perform the redirected request
    this._performRequest();
};
// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
    // Default settings
    var exports = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
    };
    // Wrap each protocol
    var nativeProtocols = {};
    Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);
        // Executes a request, following redirects
        function request(input, options, callback) {
            // Parse parameters, ensuring that input is an object
            if (isURL(input)) {
                input = spreadUrlObject(input);
            } else if (isString(input)) {
                input = spreadUrlObject(parseUrl(input));
            } else {
                callback = options;
                options = validateUrl(input);
                input = {
                    protocol: protocol
                };
            }
            if (isFunction(options)) {
                callback = options;
                options = null;
            }
            // Set defaults
            options = Object.assign({
                maxRedirects: exports.maxRedirects,
                maxBodyLength: exports.maxBodyLength
            }, input, options);
            options.nativeProtocols = nativeProtocols;
            if (!isString(options.host) && !isString(options.hostname)) {
                options.hostname = "::1";
            }
            assert.equal(options.protocol, protocol, "protocol mismatch");
            debug("options", options);
            return new RedirectableRequest(options, callback);
        }
        // Executes a GET request, following redirects
        function get(input, options, callback) {
            var wrappedRequest = wrappedProtocol.request(input, options, callback);
            wrappedRequest.end();
            return wrappedRequest;
        }
        // Expose the properties on the wrapped protocol
        Object.defineProperties(wrappedProtocol, {
            request: {
                value: request,
                configurable: true,
                enumerable: true,
                writable: true
            },
            get: {
                value: get,
                configurable: true,
                enumerable: true,
                writable: true
            }
        });
    });
    return exports;
}
function noop() {}
function parseUrl(input) {
    var parsed;
    /* istanbul ignore else */ if (useNativeURL) {
        parsed = new URL(input);
    } else {
        // Ensure the URL is valid and absolute
        parsed = validateUrl(url.parse(input));
        if (!isString(parsed.protocol)) {
            throw new InvalidUrlError({
                input
            });
        }
    }
    return parsed;
}
function resolveUrl(relative, base) {
    /* istanbul ignore next */ return useNativeURL ? new URL(relative, base) : parseUrl(url.resolve(base, relative));
}
function validateUrl(input) {
    if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    return input;
}
function spreadUrlObject(urlObject, target) {
    var spread = target || {};
    for (var key of preservedUrlFields){
        spread[key] = urlObject[key];
    }
    // Fix IPv6 hostname
    if (spread.hostname.startsWith("[")) {
        spread.hostname = spread.hostname.slice(1, -1);
    }
    // Ensure port is a number
    if (spread.port !== "") {
        spread.port = Number(spread.port);
    }
    // Concatenate path
    spread.path = spread.search ? spread.pathname + spread.search : spread.pathname;
    return spread;
}
function removeMatchingHeaders(regex, headers) {
    var lastValue;
    for(var header in headers){
        if (regex.test(header)) {
            lastValue = headers[header];
            delete headers[header];
        }
    }
    return lastValue === null || typeof lastValue === "undefined" ? undefined : String(lastValue).trim();
}
function createErrorType(code, message, baseClass) {
    // Create constructor
    function CustomError(properties) {
        Error.captureStackTrace(this, this.constructor);
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
    }
    // Attach constructor and set default properties
    CustomError.prototype = new (baseClass || Error)();
    Object.defineProperties(CustomError.prototype, {
        constructor: {
            value: CustomError,
            enumerable: false
        },
        name: {
            value: "Error [" + code + "]",
            enumerable: false
        }
    });
    return CustomError;
}
function destroyRequest(request, error) {
    for (var event of events){
        request.removeListener(event, eventHandlers[event]);
    }
    request.on("error", noop);
    request.destroy(error);
}
function isSubdomain(subdomain, domain) {
    assert(isString(subdomain) && isString(domain));
    var dot = subdomain.length - domain.length - 1;
    return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}
function isString(value) {
    return typeof value === "string" || value instanceof String;
}
function isFunction(value) {
    return typeof value === "function";
}
function isBuffer(value) {
    return typeof value === "object" && "length" in value;
}
function isURL(value) {
    return URL && value instanceof URL;
}
// Exports
module.exports = wrap({
    http: http,
    https: https
});
module.exports.wrap = wrap;


/***/ }),

/***/ 63077:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var CombinedStream = __webpack_require__(25139);
var util = __webpack_require__(73837);
var path = __webpack_require__(71017);
var http = __webpack_require__(13685);
var https = __webpack_require__(95687);
var parseUrl = (__webpack_require__(57310).parse);
var fs = __webpack_require__(57147);
var Stream = (__webpack_require__(12781).Stream);
var mime = __webpack_require__(66899);
var asynckit = __webpack_require__(39805);
var populate = __webpack_require__(13841);
// Public API
module.exports = FormData;
// make it a Stream
util.inherits(FormData, CombinedStream);
/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
 */ function FormData(options) {
    if (!(this instanceof FormData)) {
        return new FormData(options);
    }
    this._overheadLength = 0;
    this._valueLength = 0;
    this._valuesToMeasure = [];
    CombinedStream.call(this);
    options = options || {};
    for(var option in options){
        this[option] = options[option];
    }
}
FormData.LINE_BREAK = "\r\n";
FormData.DEFAULT_CONTENT_TYPE = "application/octet-stream";
FormData.prototype.append = function(field, value, options) {
    options = options || {};
    // allow filename as single option
    if (typeof options == "string") {
        options = {
            filename: options
        };
    }
    var append = CombinedStream.prototype.append.bind(this);
    // all that streamy business can't handle numbers
    if (typeof value == "number") {
        value = "" + value;
    }
    // https://github.com/felixge/node-form-data/issues/38
    if (util.isArray(value)) {
        // Please convert your array into string
        // the way web server expects it
        this._error(new Error("Arrays are not supported."));
        return;
    }
    var header = this._multiPartHeader(field, value, options);
    var footer = this._multiPartFooter();
    append(header);
    append(value);
    append(footer);
    // pass along options.knownLength
    this._trackLength(header, value, options);
};
FormData.prototype._trackLength = function(header, value, options) {
    var valueLength = 0;
    // used w/ getLengthSync(), when length is known.
    // e.g. for streaming directly from a remote server,
    // w/ a known file a size, and not wanting to wait for
    // incoming file to finish to get its size.
    if (options.knownLength != null) {
        valueLength += +options.knownLength;
    } else if (Buffer.isBuffer(value)) {
        valueLength = value.length;
    } else if (typeof value === "string") {
        valueLength = Buffer.byteLength(value);
    }
    this._valueLength += valueLength;
    // @check why add CRLF? does this account for custom/multiple CRLFs?
    this._overheadLength += Buffer.byteLength(header) + FormData.LINE_BREAK.length;
    // empty or either doesn't have path or not an http response or not a stream
    if (!value || !value.path && !(value.readable && value.hasOwnProperty("httpVersion")) && !(value instanceof Stream)) {
        return;
    }
    // no need to bother with the length
    if (!options.knownLength) {
        this._valuesToMeasure.push(value);
    }
};
FormData.prototype._lengthRetriever = function(value, callback) {
    if (value.hasOwnProperty("fd")) {
        // take read range into a account
        // `end` = Infinity –> read file till the end
        //
        // TODO: Looks like there is bug in Node fs.createReadStream
        // it doesn't respect `end` options without `start` options
        // Fix it when node fixes it.
        // https://github.com/joyent/node/issues/7819
        if (value.end != undefined && value.end != Infinity && value.start != undefined) {
            // when end specified
            // no need to calculate range
            // inclusive, starts with 0
            callback(null, value.end + 1 - (value.start ? value.start : 0));
        // not that fast snoopy
        } else {
            // still need to fetch file size from fs
            fs.stat(value.path, function(err, stat) {
                var fileSize;
                if (err) {
                    callback(err);
                    return;
                }
                // update final size based on the range options
                fileSize = stat.size - (value.start ? value.start : 0);
                callback(null, fileSize);
            });
        }
    // or http response
    } else if (value.hasOwnProperty("httpVersion")) {
        callback(null, +value.headers["content-length"]);
    // or request stream http://github.com/mikeal/request
    } else if (value.hasOwnProperty("httpModule")) {
        // wait till response come back
        value.on("response", function(response) {
            value.pause();
            callback(null, +response.headers["content-length"]);
        });
        value.resume();
    // something else
    } else {
        callback("Unknown stream");
    }
};
FormData.prototype._multiPartHeader = function(field, value, options) {
    // custom header specified (as string)?
    // it becomes responsible for boundary
    // (e.g. to handle extra CRLFs on .NET servers)
    if (typeof options.header == "string") {
        return options.header;
    }
    var contentDisposition = this._getContentDisposition(value, options);
    var contentType = this._getContentType(value, options);
    var contents = "";
    var headers = {
        // add custom disposition as third element or keep it two elements if not
        "Content-Disposition": [
            "form-data",
            'name="' + field + '"'
        ].concat(contentDisposition || []),
        // if no content type. allow it to be empty array
        "Content-Type": [].concat(contentType || [])
    };
    // allow custom headers.
    if (typeof options.header == "object") {
        populate(headers, options.header);
    }
    var header;
    for(var prop in headers){
        if (!headers.hasOwnProperty(prop)) continue;
        header = headers[prop];
        // skip nullish headers.
        if (header == null) {
            continue;
        }
        // convert all headers to arrays.
        if (!Array.isArray(header)) {
            header = [
                header
            ];
        }
        // add non-empty headers.
        if (header.length) {
            contents += prop + ": " + header.join("; ") + FormData.LINE_BREAK;
        }
    }
    return "--" + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
};
FormData.prototype._getContentDisposition = function(value, options) {
    var filename, contentDisposition;
    if (typeof options.filepath === "string") {
        // custom filepath for relative paths
        filename = path.normalize(options.filepath).replace(/\\/g, "/");
    } else if (options.filename || value.name || value.path) {
        // custom filename take precedence
        // formidable and the browser add a name property
        // fs- and request- streams have path property
        filename = path.basename(options.filename || value.name || value.path);
    } else if (value.readable && value.hasOwnProperty("httpVersion")) {
        // or try http response
        filename = path.basename(value.client._httpMessage.path || "");
    }
    if (filename) {
        contentDisposition = 'filename="' + filename + '"';
    }
    return contentDisposition;
};
FormData.prototype._getContentType = function(value, options) {
    // use custom content-type above all
    var contentType = options.contentType;
    // or try `name` from formidable, browser
    if (!contentType && value.name) {
        contentType = mime.lookup(value.name);
    }
    // or try `path` from fs-, request- streams
    if (!contentType && value.path) {
        contentType = mime.lookup(value.path);
    }
    // or if it's http-reponse
    if (!contentType && value.readable && value.hasOwnProperty("httpVersion")) {
        contentType = value.headers["content-type"];
    }
    // or guess it from the filepath or filename
    if (!contentType && (options.filepath || options.filename)) {
        contentType = mime.lookup(options.filepath || options.filename);
    }
    // fallback to the default content type if `value` is not simple value
    if (!contentType && typeof value == "object") {
        contentType = FormData.DEFAULT_CONTENT_TYPE;
    }
    return contentType;
};
FormData.prototype._multiPartFooter = function() {
    return (function(next) {
        var footer = FormData.LINE_BREAK;
        var lastPart = this._streams.length === 0;
        if (lastPart) {
            footer += this._lastBoundary();
        }
        next(footer);
    }).bind(this);
};
FormData.prototype._lastBoundary = function() {
    return "--" + this.getBoundary() + "--" + FormData.LINE_BREAK;
};
FormData.prototype.getHeaders = function(userHeaders) {
    var header;
    var formHeaders = {
        "content-type": "multipart/form-data; boundary=" + this.getBoundary()
    };
    for(header in userHeaders){
        if (userHeaders.hasOwnProperty(header)) {
            formHeaders[header.toLowerCase()] = userHeaders[header];
        }
    }
    return formHeaders;
};
FormData.prototype.setBoundary = function(boundary) {
    this._boundary = boundary;
};
FormData.prototype.getBoundary = function() {
    if (!this._boundary) {
        this._generateBoundary();
    }
    return this._boundary;
};
FormData.prototype.getBuffer = function() {
    var dataBuffer = new Buffer.alloc(0);
    var boundary = this.getBoundary();
    // Create the form content. Add Line breaks to the end of data.
    for(var i = 0, len = this._streams.length; i < len; i++){
        if (typeof this._streams[i] !== "function") {
            // Add content to the buffer.
            if (Buffer.isBuffer(this._streams[i])) {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    this._streams[i]
                ]);
            } else {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    Buffer.from(this._streams[i])
                ]);
            }
            // Add break after content.
            if (typeof this._streams[i] !== "string" || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    Buffer.from(FormData.LINE_BREAK)
                ]);
            }
        }
    }
    // Add the footer and return the Buffer object.
    return Buffer.concat([
        dataBuffer,
        Buffer.from(this._lastBoundary())
    ]);
};
FormData.prototype._generateBoundary = function() {
    // This generates a 50 character boundary similar to those used by Firefox.
    // They are optimized for boyer-moore parsing.
    var boundary = "--------------------------";
    for(var i = 0; i < 24; i++){
        boundary += Math.floor(Math.random() * 10).toString(16);
    }
    this._boundary = boundary;
};
// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually
// and add it as knownLength option
FormData.prototype.getLengthSync = function() {
    var knownLength = this._overheadLength + this._valueLength;
    // Don't get confused, there are 3 "internal" streams for each keyval pair
    // so it basically checks if there is any value added to the form
    if (this._streams.length) {
        knownLength += this._lastBoundary().length;
    }
    // https://github.com/form-data/form-data/issues/40
    if (!this.hasKnownLength()) {
        // Some async length retrievers are present
        // therefore synchronous length calculation is false.
        // Please use getLength(callback) to get proper length
        this._error(new Error("Cannot calculate proper length in synchronous way."));
    }
    return knownLength;
};
// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData.prototype.hasKnownLength = function() {
    var hasKnownLength = true;
    if (this._valuesToMeasure.length) {
        hasKnownLength = false;
    }
    return hasKnownLength;
};
FormData.prototype.getLength = function(cb) {
    var knownLength = this._overheadLength + this._valueLength;
    if (this._streams.length) {
        knownLength += this._lastBoundary().length;
    }
    if (!this._valuesToMeasure.length) {
        process.nextTick(cb.bind(this, null, knownLength));
        return;
    }
    asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
        if (err) {
            cb(err);
            return;
        }
        values.forEach(function(length) {
            knownLength += length;
        });
        cb(null, knownLength);
    });
};
FormData.prototype.submit = function(params, cb) {
    var request, options, defaults = {
        method: "post"
    };
    // parse provided url if it's string
    // or treat it as options object
    if (typeof params == "string") {
        params = parseUrl(params);
        options = populate({
            port: params.port,
            path: params.pathname,
            host: params.hostname,
            protocol: params.protocol
        }, defaults);
    // use custom params
    } else {
        options = populate(params, defaults);
        // if no port provided use default one
        if (!options.port) {
            options.port = options.protocol == "https:" ? 443 : 80;
        }
    }
    // put that good code in getHeaders to some use
    options.headers = this.getHeaders(params.headers);
    // https if specified, fallback to http in any other case
    if (options.protocol == "https:") {
        request = https.request(options);
    } else {
        request = http.request(options);
    }
    // get content length and fire away
    this.getLength((function(err, length) {
        if (err && err !== "Unknown stream") {
            this._error(err);
            return;
        }
        // add content length
        if (length) {
            request.setHeader("Content-Length", length);
        }
        this.pipe(request);
        if (cb) {
            var onResponse;
            var callback = function(error, responce) {
                request.removeListener("error", callback);
                request.removeListener("response", onResponse);
                return cb.call(this, error, responce);
            };
            onResponse = callback.bind(this, null);
            request.on("error", callback);
            request.on("response", onResponse);
        }
    }).bind(this));
    return request;
};
FormData.prototype._error = function(err) {
    if (!this.error) {
        this.error = err;
        this.pause();
        this.emit("error", err);
    }
};
FormData.prototype.toString = function() {
    return "[object FormData]";
};


/***/ }),

/***/ 13841:
/***/ ((module) => {

// populates missing values

module.exports = function(dst, src) {
    Object.keys(src).forEach(function(prop) {
        dst[prop] = dst[prop] || src[prop];
    });
    return dst;
};


/***/ }),

/***/ 77913:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var parseUrl = (__webpack_require__(57310).parse);
var DEFAULT_PORTS = {
    ftp: 21,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
var stringEndsWith = String.prototype.endsWith || function(s) {
    return s.length <= this.length && this.indexOf(s, this.length - s.length) !== -1;
};
/**
 * @param {string|object} url - The URL, or the result from url.parse.
 * @return {string} The URL of the proxy that should handle the request to the
 *  given URL. If no proxy is set, this will be an empty string.
 */ function getProxyForUrl(url) {
    var parsedUrl = typeof url === "string" ? parseUrl(url) : url || {};
    var proto = parsedUrl.protocol;
    var hostname = parsedUrl.host;
    var port = parsedUrl.port;
    if (typeof hostname !== "string" || !hostname || typeof proto !== "string") {
        return ""; // Don't proxy URLs without a valid scheme or host.
    }
    proto = proto.split(":", 1)[0];
    // Stripping ports in this way instead of using parsedUrl.hostname to make
    // sure that the brackets around IPv6 addresses are kept.
    hostname = hostname.replace(/:\d*$/, "");
    port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
    if (!shouldProxy(hostname, port)) {
        return ""; // Don't proxy URLs that match NO_PROXY.
    }
    var proxy = getEnv("npm_config_" + proto + "_proxy") || getEnv(proto + "_proxy") || getEnv("npm_config_proxy") || getEnv("all_proxy");
    if (proxy && proxy.indexOf("://") === -1) {
        // Missing scheme in proxy, default to the requested URL's scheme.
        proxy = proto + "://" + proxy;
    }
    return proxy;
}
/**
 * Determines whether a given URL should be proxied.
 *
 * @param {string} hostname - The host name of the URL.
 * @param {number} port - The effective port of the URL.
 * @returns {boolean} Whether the given URL should be proxied.
 * @private
 */ function shouldProxy(hostname, port) {
    var NO_PROXY = (getEnv("npm_config_no_proxy") || getEnv("no_proxy")).toLowerCase();
    if (!NO_PROXY) {
        return true; // Always proxy if NO_PROXY is not set.
    }
    if (NO_PROXY === "*") {
        return false; // Never proxy if wildcard is set.
    }
    return NO_PROXY.split(/[,\s]/).every(function(proxy) {
        if (!proxy) {
            return true; // Skip zero-length hosts.
        }
        var parsedProxy = proxy.match(/^(.+):(\d+)$/);
        var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
        var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
        if (parsedProxyPort && parsedProxyPort !== port) {
            return true; // Skip if ports don't match.
        }
        if (!/^[.*]/.test(parsedProxyHostname)) {
            // No wildcards, so stop proxying if there is an exact match.
            return hostname !== parsedProxyHostname;
        }
        if (parsedProxyHostname.charAt(0) === "*") {
            // Remove leading wildcard.
            parsedProxyHostname = parsedProxyHostname.slice(1);
        }
        // Stop proxying if the hostname ends with the no_proxy host.
        return !stringEndsWith.call(hostname, parsedProxyHostname);
    });
}
/**
 * Get the value for an environment variable.
 *
 * @param {string} key - The name of the environment variable.
 * @return {string} The value of the environment variable.
 * @private
 */ function getEnv(key) {
    return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || "";
}
exports.getProxyForUrl = getProxyForUrl;


/***/ }),

/***/ 30658:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Axios v1.6.8 Copyright (c) 2024 Matt Zabriskie and contributors

const FormData$1 = __webpack_require__(63077);
const url = __webpack_require__(57310);
const proxyFromEnv = __webpack_require__(77913);
const http = __webpack_require__(13685);
const https = __webpack_require__(95687);
const util = __webpack_require__(73837);
const followRedirects = __webpack_require__(2725);
const zlib = __webpack_require__(59796);
const stream = __webpack_require__(12781);
const events = __webpack_require__(82361);
function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : {
        "default": e
    };
}
const FormData__default = /*#__PURE__*/ _interopDefaultLegacy(FormData$1);
const url__default = /*#__PURE__*/ _interopDefaultLegacy(url);
const http__default = /*#__PURE__*/ _interopDefaultLegacy(http);
const https__default = /*#__PURE__*/ _interopDefaultLegacy(https);
const util__default = /*#__PURE__*/ _interopDefaultLegacy(util);
const followRedirects__default = /*#__PURE__*/ _interopDefaultLegacy(followRedirects);
const zlib__default = /*#__PURE__*/ _interopDefaultLegacy(zlib);
const stream__default = /*#__PURE__*/ _interopDefaultLegacy(stream);
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}
// utils is a library of generic helper functions non-specific to axios
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest("undefined");
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
    } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest("string");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest("function");
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest("number");
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === "object";
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== "object") {
        return false;
    }
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFileList = kindOfTest("FileList");
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest("URLSearchParams");
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function forEach(obj, fn, { allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") {
        return;
    }
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== "object") {
        /*eslint no-param-reassign:0*/ obj = [
            obj
        ];
    }
    if (isArray(obj)) {
        // Iterate over array values
        for(i = 0, l = obj.length; i < l; i++){
            fn.call(null, obj[i], i, obj);
        }
    } else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) {
            return _key;
        }
    }
    return null;
}
const _global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self :  false ? 0 : global;
})();
const isContextDefined = (context)=>!isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
            result[targetKey] = merge(result[targetKey], val);
        } else if (isPlainObject(val)) {
            result[targetKey] = merge({}, val);
        } else if (isArray(val)) {
            result[targetKey] = val.slice();
        } else {
            result[targetKey] = val;
        }
    };
    for(let i = 0, l = arguments.length; i < l; i++){
        arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) {
            a[key] = bind(val, thisArg);
        } else {
            a[key] = val;
        }
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
    }
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) {
        position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0){
        arr[i] = thing[i];
    }
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while((result = iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null){
        arr.push(matches);
    }
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        let ret;
        if ((ret = reducer(descriptor, name, obj)) !== false) {
            reducedDescriptors[name] = ret || descriptor;
        }
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if (isFunction(obj) && [
            "arguments",
            "caller",
            "callee"
        ].indexOf(name) !== -1) {
            return false;
        }
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) {
            descriptor.set = ()=>{
                throw Error("Can not rewrite read-only method '" + name + "'");
            };
        }
    });
};
const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
};
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT)=>{
    let str = "";
    const { length } = alphabet;
    while(size--){
        str += alphabet[Math.random() * length | 0];
    }
    return str;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if (isObject(source)) {
            if (stack.indexOf(source) >= 0) {
                return;
            }
            if (!("toJSON" in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing)=>thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
const utils$1 = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
};
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    } else {
        this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
}
utils$1.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: utils$1.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
const prototype$1 = AxiosError.prototype;
const descriptors = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
].forEach((code)=>{
    descriptors[code] = {
        value: code
    };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, "isAxiosError", {
    value: true
});
// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create(prototype$1);
    utils$1.toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return utils$1.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!utils$1.isObject(obj)) {
        throw new TypeError("target must be an object");
    }
    // eslint-disable-next-line no-param-reassign
    formData = formData || new (FormData__default["default"] || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = utils$1.toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !utils$1.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
    if (!utils$1.isFunction(visitor)) {
        throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
        if (value === null) return "";
        if (utils$1.isDate(value)) {
            return value.toISOString();
        }
        if (!useBlob && utils$1.isBlob(value)) {
            throw new AxiosError("Blob is not supported. Use a Buffer instead.");
        }
        if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
            return useBlob && typeof Blob === "function" ? new Blob([
                value
            ]) : Buffer.from(value);
        }
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
            if (utils$1.endsWith(key, "{}")) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !(utils$1.isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) {
            return true;
        }
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path) {
        if (utils$1.isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) {
            throw Error("Circular reference detected in " + path.join("."));
        }
        stack.push(value);
        utils$1.forEach(value, function each(el, key) {
            const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) {
                build(el, path ? path.concat(key) : [
                    key
                ]);
            }
        });
        stack.pop();
    }
    if (!utils$1.isObject(obj)) {
        throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
}
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode$1(str) {
    const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\x00"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode$1);
    } : encode$1;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
};
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */ function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) {
        return url;
    }
    const _encode = options && options.encode || encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
        serializedParams = serializeFn(params, options);
    } else {
        serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
    }
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
}
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) {
            this.handlers[id] = null;
        }
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) {
            this.handlers = [];
        }
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        utils$1.forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
                fn(h);
            }
        });
    }
}
const InterceptorManager$1 = InterceptorManager;
const transitionalDefaults = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};
const URLSearchParams = url__default["default"].URLSearchParams;
const platform$1 = {
    isNode: true,
    classes: {
        URLSearchParams,
        FormData: FormData__default["default"],
        Blob: typeof Blob !== "undefined" && Blob || null
    },
    protocols: [
        "http",
        "https",
        "file",
        "data"
    ]
};
const hasBrowserEnv =  false && 0;
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const hasStandardBrowserEnv = ((product)=>{
    return hasBrowserEnv && [
        "ReactNative",
        "NativeScript",
        "NS"
    ].indexOf(product) < 0;
})(typeof navigator !== "undefined" && navigator.product);
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const hasStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
const utils = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    hasBrowserEnv: hasBrowserEnv,
    hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
    hasStandardBrowserEnv: hasStandardBrowserEnv
});
const platform = {
    ...utils,
    ...platform$1
};
function toURLEncodedForm(data, options) {
    return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
            if (platform.isNode && utils$1.isBuffer(value)) {
                this.append(key, value.toString("base64"));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        }
    }, options));
}
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === "[]" ? "" : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        if (name === "__proto__") return true;
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && utils$1.isArray(target) ? target.length : name;
        if (isLast) {
            if (utils$1.hasOwnProp(target, name)) {
                target[name] = [
                    target[name],
                    value
                ];
            } else {
                target[name] = value;
            }
            return !isNumericKey;
        }
        if (!target[name] || !utils$1.isObject(target[name])) {
            target[name] = [];
        }
        const result = buildPath(path, value, target[name], index);
        if (result && utils$1.isArray(target[name])) {
            target[name] = arrayToObject(target[name]);
        }
        return !isNumericKey;
    }
    if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
        const obj = {};
        utils$1.forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if (utils$1.isString(rawValue)) {
        try {
            (parser || JSON.parse)(rawValue);
            return utils$1.trim(rawValue);
        } catch (e) {
            if (e.name !== "SyntaxError") {
                throw e;
            }
        }
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: transitionalDefaults,
    adapter: [
        "xhr",
        "http"
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || "";
            const hasJSONContentType = contentType.indexOf("application/json") > -1;
            const isObjectPayload = utils$1.isObject(data);
            if (isObjectPayload && utils$1.isHTMLForm(data)) {
                data = new FormData(data);
            }
            const isFormData = utils$1.isFormData(data);
            if (isFormData) {
                return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
            }
            if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data)) {
                return data;
            }
            if (utils$1.isArrayBufferView(data)) {
                return data.buffer;
            }
            if (utils$1.isURLSearchParams(data)) {
                headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
                    return toURLEncodedForm(data, this.formSerializer).toString();
                }
                if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return toFormData(isFileList ? {
                        "files[]": data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType("application/json", false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === "json";
            if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === "SyntaxError") {
                            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                        }
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: platform.classes.FormData,
        Blob: platform.classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": undefined
        }
    }
};
utils$1.forEach([
    "delete",
    "get",
    "head",
    "post",
    "put",
    "patch"
], (method)=>{
    defaults.headers[method] = {};
});
const defaults$1 = defaults;
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
]);
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ const parseHeaders = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) {
            return;
        }
        if (key === "set-cookie") {
            if (parsed[key]) {
                parsed[key].push(val);
            } else {
                parsed[key] = [
                    val
                ];
            }
        } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
    });
    return parsed;
};
const $internals = Symbol("internals");
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
    if (value === false || value == null) {
        return value;
    }
    return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str)){
        tokens[match[1]] = match[2];
    }
    return tokens;
}
const isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if (utils$1.isFunction(filter)) {
        return filter.call(this, value, header);
    }
    if (isHeaderNameFilter) {
        value = header;
    }
    if (!utils$1.isString(value)) return;
    if (utils$1.isString(filter)) {
        return value.indexOf(filter) !== -1;
    }
    if (utils$1.isRegExp(filter)) {
        return filter.test(value);
    }
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = utils$1.toCamelCase(" " + header);
    [
        "get",
        "set",
        "has"
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self1 = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) {
                throw new Error("header name must be a non-empty string");
            }
            const key = utils$1.findKey(self1, lHeader);
            if (!key || self1[key] === undefined || _rewrite === true || _rewrite === undefined && self1[key] !== false) {
                self1[key || _header] = normalizeValue(_value);
            }
        }
        const setHeaders = (headers, _rewrite)=>utils$1.forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
            setHeaders(header, valueOrRewrite);
        } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
            setHeaders(parseHeaders(header), valueOrRewrite);
        } else {
            header != null && setHeader(valueOrRewrite, header, rewrite);
        }
        return this;
    }
    get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
            const key = utils$1.findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) {
                    return value;
                }
                if (parser === true) {
                    return parseTokens(value);
                }
                if (utils$1.isFunction(parser)) {
                    return parser.call(this, value, key);
                }
                if (utils$1.isRegExp(parser)) {
                    return parser.exec(value);
                }
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = utils$1.findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self1 = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = utils$1.findKey(self1, _header);
                if (key && (!matcher || matchHeaderValue(self1, self1[key], key, matcher))) {
                    delete self1[key];
                    deleted = true;
                }
            }
        }
        if (utils$1.isArray(header)) {
            header.forEach(deleteHeader);
        } else {
            deleteHeader(header);
        }
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self1 = this;
        const headers = {};
        utils$1.forEach(this, (value, header)=>{
            const key = utils$1.findKey(headers, header);
            if (key) {
                self1[key] = normalizeValue(value);
                delete self1[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) {
                delete self1[header];
            }
            self1[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        utils$1.forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
AxiosHeaders.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
]);
// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key)=>{
    let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
    return {
        get: ()=>value,
        set (headerValue) {
            this[mapped] = headerValue;
        }
    };
});
utils$1.freezeMethods(AxiosHeaders);
const AxiosHeaders$1 = AxiosHeaders;
/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */ function transformData(fns, response) {
    const config = this || defaults$1;
    const context = response || config;
    const headers = AxiosHeaders$1.from(context.headers);
    let data = context.data;
    utils$1.forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config, request);
    this.name = "CanceledError";
}
utils$1.inherits(CanceledError, AxiosError, {
    __CANCEL__: true
});
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */ function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
    } else {
        reject(new AxiosError("Request failed with status code " + response.status, [
            AxiosError.ERR_BAD_REQUEST,
            AxiosError.ERR_BAD_RESPONSE
        ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
    }
}
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */ function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */ function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
}
const VERSION = "1.6.8";
function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
}
const DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
/**
 * Parse data uri to a Buffer or Blob
 *
 * @param {String} uri
 * @param {?Boolean} asBlob
 * @param {?Object} options
 * @param {?Function} options.Blob
 *
 * @returns {Buffer|Blob}
 */ function fromDataURI(uri, asBlob, options) {
    const _Blob = options && options.Blob || platform.classes.Blob;
    const protocol = parseProtocol(uri);
    if (asBlob === undefined && _Blob) {
        asBlob = true;
    }
    if (protocol === "data") {
        uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
        const match = DATA_URL_PATTERN.exec(uri);
        if (!match) {
            throw new AxiosError("Invalid URL", AxiosError.ERR_INVALID_URL);
        }
        const mime = match[1];
        const isBase64 = match[2];
        const body = match[3];
        const buffer = Buffer.from(decodeURIComponent(body), isBase64 ? "base64" : "utf8");
        if (asBlob) {
            if (!_Blob) {
                throw new AxiosError("Blob is not supported", AxiosError.ERR_NOT_SUPPORT);
            }
            return new _Blob([
                buffer
            ], {
                type: mime
            });
        }
        return buffer;
    }
    throw new AxiosError("Unsupported protocol " + protocol, AxiosError.ERR_NOT_SUPPORT);
}
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */ function throttle(fn, freq) {
    let timestamp = 0;
    const threshold = 1000 / freq;
    let timer = null;
    return function throttled(force, args) {
        const now = Date.now();
        if (force || now - timestamp > threshold) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            timestamp = now;
            return fn.apply(null, args);
        }
        if (!timer) {
            timer = setTimeout(()=>{
                timer = null;
                timestamp = Date.now();
                return fn.apply(null, args);
            }, threshold - (now - timestamp));
        }
    };
}
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) {
            firstSampleTS = now;
        }
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) {
            tail = (tail + 1) % samplesCount;
        }
        if (now - firstSampleTS < min) {
            return;
        }
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
const kInternals = Symbol("internals");
class AxiosTransformStream extends stream__default["default"].Transform {
    constructor(options){
        options = utils$1.toFlatObject(options, {
            maxRate: 0,
            chunkSize: 64 * 1024,
            minChunkSize: 100,
            timeWindow: 500,
            ticksRate: 2,
            samplesCount: 15
        }, null, (prop, source)=>{
            return !utils$1.isUndefined(source[prop]);
        });
        super({
            readableHighWaterMark: options.chunkSize
        });
        const self1 = this;
        const internals = this[kInternals] = {
            length: options.length,
            timeWindow: options.timeWindow,
            ticksRate: options.ticksRate,
            chunkSize: options.chunkSize,
            maxRate: options.maxRate,
            minChunkSize: options.minChunkSize,
            bytesSeen: 0,
            isCaptured: false,
            notifiedBytesLoaded: 0,
            ts: Date.now(),
            bytes: 0,
            onReadCallback: null
        };
        const _speedometer = speedometer(internals.ticksRate * options.samplesCount, internals.timeWindow);
        this.on("newListener", (event)=>{
            if (event === "progress") {
                if (!internals.isCaptured) {
                    internals.isCaptured = true;
                }
            }
        });
        let bytesNotified = 0;
        internals.updateProgress = throttle(function throttledHandler() {
            const totalBytes = internals.length;
            const bytesTransferred = internals.bytesSeen;
            const progressBytes = bytesTransferred - bytesNotified;
            if (!progressBytes || self1.destroyed) return;
            const rate = _speedometer(progressBytes);
            bytesNotified = bytesTransferred;
            process.nextTick(()=>{
                self1.emit("progress", {
                    "loaded": bytesTransferred,
                    "total": totalBytes,
                    "progress": totalBytes ? bytesTransferred / totalBytes : undefined,
                    "bytes": progressBytes,
                    "rate": rate ? rate : undefined,
                    "estimated": rate && totalBytes && bytesTransferred <= totalBytes ? (totalBytes - bytesTransferred) / rate : undefined
                });
            });
        }, internals.ticksRate);
        const onFinish = ()=>{
            internals.updateProgress(true);
        };
        this.once("end", onFinish);
        this.once("error", onFinish);
    }
    _read(size) {
        const internals = this[kInternals];
        if (internals.onReadCallback) {
            internals.onReadCallback();
        }
        return super._read(size);
    }
    _transform(chunk, encoding, callback) {
        const self1 = this;
        const internals = this[kInternals];
        const maxRate = internals.maxRate;
        const readableHighWaterMark = this.readableHighWaterMark;
        const timeWindow = internals.timeWindow;
        const divider = 1000 / timeWindow;
        const bytesThreshold = maxRate / divider;
        const minChunkSize = internals.minChunkSize !== false ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;
        function pushChunk(_chunk, _callback) {
            const bytes = Buffer.byteLength(_chunk);
            internals.bytesSeen += bytes;
            internals.bytes += bytes;
            if (internals.isCaptured) {
                internals.updateProgress();
            }
            if (self1.push(_chunk)) {
                process.nextTick(_callback);
            } else {
                internals.onReadCallback = ()=>{
                    internals.onReadCallback = null;
                    process.nextTick(_callback);
                };
            }
        }
        const transformChunk = (_chunk, _callback)=>{
            const chunkSize = Buffer.byteLength(_chunk);
            let chunkRemainder = null;
            let maxChunkSize = readableHighWaterMark;
            let bytesLeft;
            let passed = 0;
            if (maxRate) {
                const now = Date.now();
                if (!internals.ts || (passed = now - internals.ts) >= timeWindow) {
                    internals.ts = now;
                    bytesLeft = bytesThreshold - internals.bytes;
                    internals.bytes = bytesLeft < 0 ? -bytesLeft : 0;
                    passed = 0;
                }
                bytesLeft = bytesThreshold - internals.bytes;
            }
            if (maxRate) {
                if (bytesLeft <= 0) {
                    // next time window
                    return setTimeout(()=>{
                        _callback(null, _chunk);
                    }, timeWindow - passed);
                }
                if (bytesLeft < maxChunkSize) {
                    maxChunkSize = bytesLeft;
                }
            }
            if (maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize) {
                chunkRemainder = _chunk.subarray(maxChunkSize);
                _chunk = _chunk.subarray(0, maxChunkSize);
            }
            pushChunk(_chunk, chunkRemainder ? ()=>{
                process.nextTick(_callback, null, chunkRemainder);
            } : _callback);
        };
        transformChunk(chunk, function transformNextChunk(err, _chunk) {
            if (err) {
                return callback(err);
            }
            if (_chunk) {
                transformChunk(_chunk, transformNextChunk);
            } else {
                callback(null);
            }
        });
    }
    setLength(length) {
        this[kInternals].length = +length;
        return this;
    }
}
const AxiosTransformStream$1 = AxiosTransformStream;
const { asyncIterator } = Symbol;
const readBlob = async function*(blob) {
    if (blob.stream) {
        yield* blob.stream();
    } else if (blob.arrayBuffer) {
        yield await blob.arrayBuffer();
    } else if (blob[asyncIterator]) {
        yield* blob[asyncIterator]();
    } else {
        yield blob;
    }
};
const readBlob$1 = readBlob;
const BOUNDARY_ALPHABET = utils$1.ALPHABET.ALPHA_DIGIT + "-_";
const textEncoder = new util.TextEncoder();
const CRLF = "\r\n";
const CRLF_BYTES = textEncoder.encode(CRLF);
const CRLF_BYTES_COUNT = 2;
class FormDataPart {
    constructor(name, value){
        const { escapeName } = this.constructor;
        const isStringValue = utils$1.isString(value);
        let headers = `Content-Disposition: form-data; name="${escapeName(name)}"${!isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ""}${CRLF}`;
        if (isStringValue) {
            value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF));
        } else {
            headers += `Content-Type: ${value.type || "application/octet-stream"}${CRLF}`;
        }
        this.headers = textEncoder.encode(headers + CRLF);
        this.contentLength = isStringValue ? value.byteLength : value.size;
        this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT;
        this.name = name;
        this.value = value;
    }
    async *encode() {
        yield this.headers;
        const { value } = this;
        if (utils$1.isTypedArray(value)) {
            yield value;
        } else {
            yield* readBlob$1(value);
        }
        yield CRLF_BYTES;
    }
    static escapeName(name) {
        return String(name).replace(/[\r\n"]/g, (match)=>({
                "\r": "%0D",
                "\n": "%0A",
                '"': "%22"
            })[match]);
    }
}
const formDataToStream = (form, headersHandler, options)=>{
    const { tag = "form-data-boundary", size = 25, boundary = tag + "-" + utils$1.generateString(size, BOUNDARY_ALPHABET) } = options || {};
    if (!utils$1.isFormData(form)) {
        throw TypeError("FormData instance required");
    }
    if (boundary.length < 1 || boundary.length > 70) {
        throw Error("boundary must be 10-70 characters long");
    }
    const boundaryBytes = textEncoder.encode("--" + boundary + CRLF);
    const footerBytes = textEncoder.encode("--" + boundary + "--" + CRLF + CRLF);
    let contentLength = footerBytes.byteLength;
    const parts = Array.from(form.entries()).map(([name, value])=>{
        const part = new FormDataPart(name, value);
        contentLength += part.size;
        return part;
    });
    contentLength += boundaryBytes.byteLength * parts.length;
    contentLength = utils$1.toFiniteNumber(contentLength);
    const computedHeaders = {
        "Content-Type": `multipart/form-data; boundary=${boundary}`
    };
    if (Number.isFinite(contentLength)) {
        computedHeaders["Content-Length"] = contentLength;
    }
    headersHandler && headersHandler(computedHeaders);
    return stream.Readable.from(async function*() {
        for (const part of parts){
            yield boundaryBytes;
            yield* part.encode();
        }
        yield footerBytes;
    }());
};
const formDataToStream$1 = formDataToStream;
class ZlibHeaderTransformStream extends stream__default["default"].Transform {
    __transform(chunk, encoding, callback) {
        this.push(chunk);
        callback();
    }
    _transform(chunk, encoding, callback) {
        if (chunk.length !== 0) {
            this._transform = this.__transform;
            // Add Default Compression headers if no zlib headers are present
            if (chunk[0] !== 120) {
                const header = Buffer.alloc(2);
                header[0] = 120; // Hex: 78
                header[1] = 156; // Hex: 9C 
                this.push(header, encoding);
            }
        }
        this.__transform(chunk, encoding, callback);
    }
}
const ZlibHeaderTransformStream$1 = ZlibHeaderTransformStream;
const callbackify = (fn, reducer)=>{
    return utils$1.isAsyncFn(fn) ? function(...args) {
        const cb = args.pop();
        fn.apply(this, args).then((value)=>{
            try {
                reducer ? cb(null, ...reducer(value)) : cb(null, value);
            } catch (err) {
                cb(err);
            }
        }, cb);
    } : fn;
};
const callbackify$1 = callbackify;
const zlibOptions = {
    flush: zlib__default["default"].constants.Z_SYNC_FLUSH,
    finishFlush: zlib__default["default"].constants.Z_SYNC_FLUSH
};
const brotliOptions = {
    flush: zlib__default["default"].constants.BROTLI_OPERATION_FLUSH,
    finishFlush: zlib__default["default"].constants.BROTLI_OPERATION_FLUSH
};
const isBrotliSupported = utils$1.isFunction(zlib__default["default"].createBrotliDecompress);
const { http: httpFollow, https: httpsFollow } = followRedirects__default["default"];
const isHttps = /https:?/;
const supportedProtocols = platform.protocols.map((protocol)=>{
    return protocol + ":";
});
/**
 * If the proxy or config beforeRedirects functions are defined, call them with the options
 * object.
 *
 * @param {Object<string, any>} options - The options object that was passed to the request.
 *
 * @returns {Object<string, any>}
 */ function dispatchBeforeRedirect(options, responseDetails) {
    if (options.beforeRedirects.proxy) {
        options.beforeRedirects.proxy(options);
    }
    if (options.beforeRedirects.config) {
        options.beforeRedirects.config(options, responseDetails);
    }
}
/**
 * If the proxy or config afterRedirects functions are defined, call them with the options
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} configProxy configuration from Axios options object
 * @param {string} location
 *
 * @returns {http.ClientRequestArgs}
 */ function setProxy(options, configProxy, location) {
    let proxy = configProxy;
    if (!proxy && proxy !== false) {
        const proxyUrl = proxyFromEnv.getProxyForUrl(location);
        if (proxyUrl) {
            proxy = new URL(proxyUrl);
        }
    }
    if (proxy) {
        // Basic proxy authorization
        if (proxy.username) {
            proxy.auth = (proxy.username || "") + ":" + (proxy.password || "");
        }
        if (proxy.auth) {
            // Support proxy auth object form
            if (proxy.auth.username || proxy.auth.password) {
                proxy.auth = (proxy.auth.username || "") + ":" + (proxy.auth.password || "");
            }
            const base64 = Buffer.from(proxy.auth, "utf8").toString("base64");
            options.headers["Proxy-Authorization"] = "Basic " + base64;
        }
        options.headers.host = options.hostname + (options.port ? ":" + options.port : "");
        const proxyHost = proxy.hostname || proxy.host;
        options.hostname = proxyHost;
        // Replace 'host' since options is not a URL object
        options.host = proxyHost;
        options.port = proxy.port;
        options.path = location;
        if (proxy.protocol) {
            options.protocol = proxy.protocol.includes(":") ? proxy.protocol : `${proxy.protocol}:`;
        }
    }
    options.beforeRedirects.proxy = function beforeRedirect(redirectOptions) {
        // Configure proxy for redirected request, passing the original config proxy to apply
        // the exact same logic as if the redirected request was performed by axios directly.
        setProxy(redirectOptions, configProxy, redirectOptions.href);
    };
}
const isHttpAdapterSupported = typeof process !== "undefined" && utils$1.kindOf(process) === "process";
// temporary hotfix
const wrapAsync = (asyncExecutor)=>{
    return new Promise((resolve, reject)=>{
        let onDone;
        let isDone;
        const done = (value, isRejected)=>{
            if (isDone) return;
            isDone = true;
            onDone && onDone(value, isRejected);
        };
        const _resolve = (value)=>{
            done(value);
            resolve(value);
        };
        const _reject = (reason)=>{
            done(reason, true);
            reject(reason);
        };
        asyncExecutor(_resolve, _reject, (onDoneHandler)=>onDone = onDoneHandler).catch(_reject);
    });
};
const resolveFamily = ({ address, family })=>{
    if (!utils$1.isString(address)) {
        throw TypeError("address must be a string");
    }
    return {
        address,
        family: family || (address.indexOf(".") < 0 ? 6 : 4)
    };
};
const buildAddressEntry = (address, family)=>resolveFamily(utils$1.isObject(address) ? address : {
        address,
        family
    });
/*eslint consistent-return:0*/ const httpAdapter = isHttpAdapterSupported && function httpAdapter(config) {
    return wrapAsync(async function dispatchHttpRequest(resolve, reject, onDone) {
        let { data, lookup, family } = config;
        const { responseType, responseEncoding } = config;
        const method = config.method.toUpperCase();
        let isDone;
        let rejected = false;
        let req;
        if (lookup) {
            const _lookup = callbackify$1(lookup, (value)=>utils$1.isArray(value) ? value : [
                    value
                ]);
            // hotfix to support opt.all option which is required for node 20.x
            lookup = (hostname, opt, cb)=>{
                _lookup(hostname, opt, (err, arg0, arg1)=>{
                    if (err) {
                        return cb(err);
                    }
                    const addresses = utils$1.isArray(arg0) ? arg0.map((addr)=>buildAddressEntry(addr)) : [
                        buildAddressEntry(arg0, arg1)
                    ];
                    opt.all ? cb(err, addresses) : cb(err, addresses[0].address, addresses[0].family);
                });
            };
        }
        // temporary internal emitter until the AxiosRequest class will be implemented
        const emitter = new events.EventEmitter();
        const onFinished = ()=>{
            if (config.cancelToken) {
                config.cancelToken.unsubscribe(abort);
            }
            if (config.signal) {
                config.signal.removeEventListener("abort", abort);
            }
            emitter.removeAllListeners();
        };
        onDone((value, isRejected)=>{
            isDone = true;
            if (isRejected) {
                rejected = true;
                onFinished();
            }
        });
        function abort(reason) {
            emitter.emit("abort", !reason || reason.type ? new CanceledError(null, config, req) : reason);
        }
        emitter.once("abort", reject);
        if (config.cancelToken || config.signal) {
            config.cancelToken && config.cancelToken.subscribe(abort);
            if (config.signal) {
                config.signal.aborted ? abort() : config.signal.addEventListener("abort", abort);
            }
        }
        // Parse url
        const fullPath = buildFullPath(config.baseURL, config.url);
        const parsed = new URL(fullPath, "http://localhost");
        const protocol = parsed.protocol || supportedProtocols[0];
        if (protocol === "data:") {
            let convertedData;
            if (method !== "GET") {
                return settle(resolve, reject, {
                    status: 405,
                    statusText: "method not allowed",
                    headers: {},
                    config
                });
            }
            try {
                convertedData = fromDataURI(config.url, responseType === "blob", {
                    Blob: config.env && config.env.Blob
                });
            } catch (err) {
                throw AxiosError.from(err, AxiosError.ERR_BAD_REQUEST, config);
            }
            if (responseType === "text") {
                convertedData = convertedData.toString(responseEncoding);
                if (!responseEncoding || responseEncoding === "utf8") {
                    convertedData = utils$1.stripBOM(convertedData);
                }
            } else if (responseType === "stream") {
                convertedData = stream__default["default"].Readable.from(convertedData);
            }
            return settle(resolve, reject, {
                data: convertedData,
                status: 200,
                statusText: "OK",
                headers: new AxiosHeaders$1(),
                config
            });
        }
        if (supportedProtocols.indexOf(protocol) === -1) {
            return reject(new AxiosError("Unsupported protocol " + protocol, AxiosError.ERR_BAD_REQUEST, config));
        }
        const headers = AxiosHeaders$1.from(config.headers).normalize();
        // Set User-Agent (required by some servers)
        // See https://github.com/axios/axios/issues/69
        // User-Agent is specified; handle case where no UA header is desired
        // Only set header if it hasn't been set in config
        headers.set("User-Agent", "axios/" + VERSION, false);
        const onDownloadProgress = config.onDownloadProgress;
        const onUploadProgress = config.onUploadProgress;
        const maxRate = config.maxRate;
        let maxUploadRate = undefined;
        let maxDownloadRate = undefined;
        // support for spec compliant FormData objects
        if (utils$1.isSpecCompliantForm(data)) {
            const userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);
            data = formDataToStream$1(data, (formHeaders)=>{
                headers.set(formHeaders);
            }, {
                tag: `axios-${VERSION}-boundary`,
                boundary: userBoundary && userBoundary[1] || undefined
            });
        // support for https://www.npmjs.com/package/form-data api
        } else if (utils$1.isFormData(data) && utils$1.isFunction(data.getHeaders)) {
            headers.set(data.getHeaders());
            if (!headers.hasContentLength()) {
                try {
                    const knownLength = await util__default["default"].promisify(data.getLength).call(data);
                    Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
                /*eslint no-empty:0*/ } catch (e) {}
            }
        } else if (utils$1.isBlob(data)) {
            data.size && headers.setContentType(data.type || "application/octet-stream");
            headers.setContentLength(data.size || 0);
            data = stream__default["default"].Readable.from(readBlob$1(data));
        } else if (data && !utils$1.isStream(data)) {
            if (Buffer.isBuffer(data)) ;
            else if (utils$1.isArrayBuffer(data)) {
                data = Buffer.from(new Uint8Array(data));
            } else if (utils$1.isString(data)) {
                data = Buffer.from(data, "utf-8");
            } else {
                return reject(new AxiosError("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", AxiosError.ERR_BAD_REQUEST, config));
            }
            // Add Content-Length header if data exists
            headers.setContentLength(data.length, false);
            if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
                return reject(new AxiosError("Request body larger than maxBodyLength limit", AxiosError.ERR_BAD_REQUEST, config));
            }
        }
        const contentLength = utils$1.toFiniteNumber(headers.getContentLength());
        if (utils$1.isArray(maxRate)) {
            maxUploadRate = maxRate[0];
            maxDownloadRate = maxRate[1];
        } else {
            maxUploadRate = maxDownloadRate = maxRate;
        }
        if (data && (onUploadProgress || maxUploadRate)) {
            if (!utils$1.isStream(data)) {
                data = stream__default["default"].Readable.from(data, {
                    objectMode: false
                });
            }
            data = stream__default["default"].pipeline([
                data,
                new AxiosTransformStream$1({
                    length: contentLength,
                    maxRate: utils$1.toFiniteNumber(maxUploadRate)
                })
            ], utils$1.noop);
            onUploadProgress && data.on("progress", (progress)=>{
                onUploadProgress(Object.assign(progress, {
                    upload: true
                }));
            });
        }
        // HTTP basic authentication
        let auth = undefined;
        if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password || "";
            auth = username + ":" + password;
        }
        if (!auth && parsed.username) {
            const urlUsername = parsed.username;
            const urlPassword = parsed.password;
            auth = urlUsername + ":" + urlPassword;
        }
        auth && headers.delete("authorization");
        let path;
        try {
            path = buildURL(parsed.pathname + parsed.search, config.params, config.paramsSerializer).replace(/^\?/, "");
        } catch (err) {
            const customErr = new Error(err.message);
            customErr.config = config;
            customErr.url = config.url;
            customErr.exists = true;
            return reject(customErr);
        }
        headers.set("Accept-Encoding", "gzip, compress, deflate" + (isBrotliSupported ? ", br" : ""), false);
        const options = {
            path,
            method: method,
            headers: headers.toJSON(),
            agents: {
                http: config.httpAgent,
                https: config.httpsAgent
            },
            auth,
            protocol,
            family,
            beforeRedirect: dispatchBeforeRedirect,
            beforeRedirects: {}
        };
        // cacheable-lookup integration hotfix
        !utils$1.isUndefined(lookup) && (options.lookup = lookup);
        if (config.socketPath) {
            options.socketPath = config.socketPath;
        } else {
            options.hostname = parsed.hostname;
            options.port = parsed.port;
            setProxy(options, config.proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path);
        }
        let transport;
        const isHttpsRequest = isHttps.test(options.protocol);
        options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
        if (config.transport) {
            transport = config.transport;
        } else if (config.maxRedirects === 0) {
            transport = isHttpsRequest ? https__default["default"] : http__default["default"];
        } else {
            if (config.maxRedirects) {
                options.maxRedirects = config.maxRedirects;
            }
            if (config.beforeRedirect) {
                options.beforeRedirects.config = config.beforeRedirect;
            }
            transport = isHttpsRequest ? httpsFollow : httpFollow;
        }
        if (config.maxBodyLength > -1) {
            options.maxBodyLength = config.maxBodyLength;
        } else {
            // follow-redirects does not skip comparison, so it should always succeed for axios -1 unlimited
            options.maxBodyLength = Infinity;
        }
        if (config.insecureHTTPParser) {
            options.insecureHTTPParser = config.insecureHTTPParser;
        }
        // Create the request
        req = transport.request(options, function handleResponse(res) {
            if (req.destroyed) return;
            const streams = [
                res
            ];
            const responseLength = +res.headers["content-length"];
            if (onDownloadProgress) {
                const transformStream = new AxiosTransformStream$1({
                    length: utils$1.toFiniteNumber(responseLength),
                    maxRate: utils$1.toFiniteNumber(maxDownloadRate)
                });
                onDownloadProgress && transformStream.on("progress", (progress)=>{
                    onDownloadProgress(Object.assign(progress, {
                        download: true
                    }));
                });
                streams.push(transformStream);
            }
            // decompress the response body transparently if required
            let responseStream = res;
            // return the last request in case of redirects
            const lastRequest = res.req || req;
            // if decompress disabled we should not decompress
            if (config.decompress !== false && res.headers["content-encoding"]) {
                // if no content, but headers still say that it is encoded,
                // remove the header not confuse downstream operations
                if (method === "HEAD" || res.statusCode === 204) {
                    delete res.headers["content-encoding"];
                }
                switch((res.headers["content-encoding"] || "").toLowerCase()){
                    /*eslint default-case:0*/ case "gzip":
                    case "x-gzip":
                    case "compress":
                    case "x-compress":
                        // add the unzipper to the body stream processing pipeline
                        streams.push(zlib__default["default"].createUnzip(zlibOptions));
                        // remove the content-encoding in order to not confuse downstream operations
                        delete res.headers["content-encoding"];
                        break;
                    case "deflate":
                        streams.push(new ZlibHeaderTransformStream$1());
                        // add the unzipper to the body stream processing pipeline
                        streams.push(zlib__default["default"].createUnzip(zlibOptions));
                        // remove the content-encoding in order to not confuse downstream operations
                        delete res.headers["content-encoding"];
                        break;
                    case "br":
                        if (isBrotliSupported) {
                            streams.push(zlib__default["default"].createBrotliDecompress(brotliOptions));
                            delete res.headers["content-encoding"];
                        }
                }
            }
            responseStream = streams.length > 1 ? stream__default["default"].pipeline(streams, utils$1.noop) : streams[0];
            const offListeners = stream__default["default"].finished(responseStream, ()=>{
                offListeners();
                onFinished();
            });
            const response = {
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: new AxiosHeaders$1(res.headers),
                config,
                request: lastRequest
            };
            if (responseType === "stream") {
                response.data = responseStream;
                settle(resolve, reject, response);
            } else {
                const responseBuffer = [];
                let totalResponseBytes = 0;
                responseStream.on("data", function handleStreamData(chunk) {
                    responseBuffer.push(chunk);
                    totalResponseBytes += chunk.length;
                    // make sure the content length is not over the maxContentLength if specified
                    if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
                        // stream.destroy() emit aborted event before calling reject() on Node.js v16
                        rejected = true;
                        responseStream.destroy();
                        reject(new AxiosError("maxContentLength size of " + config.maxContentLength + " exceeded", AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
                    }
                });
                responseStream.on("aborted", function handlerStreamAborted() {
                    if (rejected) {
                        return;
                    }
                    const err = new AxiosError("maxContentLength size of " + config.maxContentLength + " exceeded", AxiosError.ERR_BAD_RESPONSE, config, lastRequest);
                    responseStream.destroy(err);
                    reject(err);
                });
                responseStream.on("error", function handleStreamError(err) {
                    if (req.destroyed) return;
                    reject(AxiosError.from(err, null, config, lastRequest));
                });
                responseStream.on("end", function handleStreamEnd() {
                    try {
                        let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
                        if (responseType !== "arraybuffer") {
                            responseData = responseData.toString(responseEncoding);
                            if (!responseEncoding || responseEncoding === "utf8") {
                                responseData = utils$1.stripBOM(responseData);
                            }
                        }
                        response.data = responseData;
                    } catch (err) {
                        return reject(AxiosError.from(err, null, config, response.request, response));
                    }
                    settle(resolve, reject, response);
                });
            }
            emitter.once("abort", (err)=>{
                if (!responseStream.destroyed) {
                    responseStream.emit("error", err);
                    responseStream.destroy();
                }
            });
        });
        emitter.once("abort", (err)=>{
            reject(err);
            req.destroy(err);
        });
        // Handle errors
        req.on("error", function handleRequestError(err) {
            // @todo remove
            // if (req.aborted && err.code !== AxiosError.ERR_FR_TOO_MANY_REDIRECTS) return;
            reject(AxiosError.from(err, null, config, req));
        });
        // set tcp keep alive to prevent drop connection by peer
        req.on("socket", function handleRequestSocket(socket) {
            // default interval of sending ack packet is 1 minute
            socket.setKeepAlive(true, 1000 * 60);
        });
        // Handle request timeout
        if (config.timeout) {
            // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
            const timeout = parseInt(config.timeout, 10);
            if (Number.isNaN(timeout)) {
                reject(new AxiosError("error trying to parse `config.timeout` to int", AxiosError.ERR_BAD_OPTION_VALUE, config, req));
                return;
            }
            // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
            // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
            // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
            // And then these socket which be hang up will devouring CPU little by little.
            // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
            req.setTimeout(timeout, function handleRequestTimeout() {
                if (isDone) return;
                let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
                const transitional = config.transitional || transitionalDefaults;
                if (config.timeoutErrorMessage) {
                    timeoutErrorMessage = config.timeoutErrorMessage;
                }
                reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, req));
                abort();
            });
        }
        // Send the request
        if (utils$1.isStream(data)) {
            let ended = false;
            let errored = false;
            data.on("end", ()=>{
                ended = true;
            });
            data.once("error", (err)=>{
                errored = true;
                req.destroy(err);
            });
            data.on("close", ()=>{
                if (!ended && !errored) {
                    abort(new CanceledError("Request stream has been aborted", config, req));
                }
            });
            data.pipe(req);
        } else {
            req.end(data);
        }
    });
};
const cookies = platform.hasStandardBrowserEnv ? // Standard browser envs support document.cookie
{
    write (name, value, expires, path, domain, secure) {
        const cookie = [
            name + "=" + encodeURIComponent(value)
        ];
        utils$1.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
        utils$1.isString(path) && cookie.push("path=" + path);
        utils$1.isString(domain) && cookie.push("domain=" + domain);
        secure === true && cookie.push("secure");
        document.cookie = cookie.join("; ");
    },
    read (name) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
    },
    remove (name) {
        this.write(name, "", Date.now() - 86400000);
    }
} : // Non-standard browser env (web workers, react-native) lack needed support.
{
    write () {},
    read () {
        return null;
    },
    remove () {}
};
const isURLSameOrigin = platform.hasStandardBrowserEnv ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    /**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        let href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        const parsed = utils$1.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();
function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = speedometer(50, 250);
    return (e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e
        };
        data[isDownloadStream ? "download" : "upload"] = true;
        listener(data);
    };
}
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
const xhrAdapter = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        let requestData = config.data;
        const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
        let { responseType, withXSRFToken } = config;
        let onCanceled;
        function done() {
            if (config.cancelToken) {
                config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
                config.signal.removeEventListener("abort", onCanceled);
            }
        }
        let contentType;
        if (utils$1.isFormData(requestData)) {
            if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
                requestHeaders.setContentType(false); // Let the browser set it
            } else if ((contentType = requestHeaders.getContentType()) !== false) {
                // fix semicolon duplication issue for ReactNative FormData implementation
                const [type, ...tokens] = contentType ? contentType.split(";").map((token)=>token.trim()).filter(Boolean) : [];
                requestHeaders.setContentType([
                    type || "multipart/form-data",
                    ...tokens
                ].join("; "));
            }
        }
        let request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
        }
        const fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) {
                return;
            }
            // Prepare the response
            const responseHeaders = AxiosHeaders$1.from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            settle(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) {
            // Use onloadend if available
            request.onloadend = onloadend;
        } else {
            // Listen for ready state to emulate onloadend
            request.onreadystatechange = function handleLoad() {
                if (!request || request.readyState !== 4) {
                    return;
                }
                // The request errored out and we didn't get a response, this will be
                // handled by onerror instead
                // With one exception: request that using file: protocol, most browsers
                // will return status as 0 even though it's a successful request
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                    return;
                }
                // readystate handler is calling before onerror or ontimeout handlers,
                // so we should call onloadend on the next 'tick'
                setTimeout(onloadend);
            };
        }
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) {
                return;
            }
            reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = config.transitional || transitionalDefaults;
            if (config.timeoutErrorMessage) {
                timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (platform.hasStandardBrowserEnv) {
            withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));
            if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(fullPath)) {
                // Add xsrf header
                const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
                if (xsrfValue) {
                    requestHeaders.set(config.xsrfHeaderName, xsrfValue);
                }
            }
        }
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ("setRequestHeader" in request) {
            utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
                request.setRequestHeader(key, val);
            });
        }
        // Add withCredentials to request if needed
        if (!utils$1.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
        }
        // Add responseType to request if needed
        if (responseType && responseType !== "json") {
            request.responseType = config.responseType;
        }
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") {
            request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
        }
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
        }
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) {
                    return;
                }
                reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
                config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
            }
        }
        const protocol = parseProtocol(fullPath);
        if (protocol && platform.protocols.indexOf(protocol) === -1) {
            reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};
const knownAdapters = {
    http: httpAdapter,
    xhr: xhrAdapter
};
utils$1.forEach(knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, "name", {
                value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, "adapterName", {
            value
        });
    }
});
const renderReason = (reason)=>`- ${reason}`;
const isResolvedHandle = (adapter)=>utils$1.isFunction(adapter) || adapter === null || adapter === false;
const adapters = {
    getAdapter: (adapters)=>{
        adapters = utils$1.isArray(adapters) ? adapters : [
            adapters
        ];
        const { length } = adapters;
        let nameOrAdapter;
        let adapter;
        const rejectedReasons = {};
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            let id;
            adapter = nameOrAdapter;
            if (!isResolvedHandle(nameOrAdapter)) {
                adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
                if (adapter === undefined) {
                    throw new AxiosError(`Unknown adapter '${id}'`);
                }
            }
            if (adapter) {
                break;
            }
            rejectedReasons[id || "#" + i] = adapter;
        }
        if (!adapter) {
            const reasons = Object.entries(rejectedReasons).map(([id, state])=>`adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build"));
            let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
            throw new AxiosError(`There is no suitable adapter to dispatch the request ` + s, "ERR_NOT_SUPPORT");
        }
        return adapter;
    },
    adapters: knownAdapters
};
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
        throw new CanceledError(null, config);
    }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */ function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders$1.from(config.headers);
    // Transform request data
    config.data = transformData.call(config, config.transformRequest);
    if ([
        "post",
        "put",
        "patch"
    ].indexOf(config.method) !== -1) {
        config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData.call(config, config.transformResponse, response);
        response.headers = AxiosHeaders$1.from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = transformData.call(config, config.transformResponse, reason.response);
                reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}
const headersToObject = (thing)=>thing instanceof AxiosHeaders$1 ? {
        ...thing
    } : thing;
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */ function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
        if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
            return utils$1.merge.call({
                caseless
            }, target, source);
        } else if (utils$1.isPlainObject(source)) {
            return utils$1.merge({}, source);
        } else if (utils$1.isArray(source)) {
            return source.slice();
        }
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, caseless) {
        if (!utils$1.isUndefined(b)) {
            return getMergedValue(a, b, caseless);
        } else if (!utils$1.isUndefined(a)) {
            return getMergedValue(undefined, a, caseless);
        }
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!utils$1.isUndefined(b)) {
            return getMergedValue(undefined, b);
        }
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!utils$1.isUndefined(b)) {
            return getMergedValue(undefined, b);
        } else if (!utils$1.isUndefined(a)) {
            return getMergedValue(undefined, a);
        }
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) {
            return getMergedValue(a, b);
        } else if (prop in config1) {
            return getMergedValue(undefined, a);
        }
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        withXSRFToken: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b)=>mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        utils$1.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}
const validators$1 = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((type, i)=>{
    validators$1[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators$1.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) {
            throw new AxiosError(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), AxiosError.ERR_DEPRECATED);
        }
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
        throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) {
                throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
            }
            continue;
        }
        if (allowUnknown !== true) {
            throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
        }
    }
}
const validator = {
    assertOptions,
    validators: validators$1
};
const validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new InterceptorManager$1(),
            response: new InterceptorManager$1()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ async request(configOrUrl, config) {
        try {
            return await this._request(configOrUrl, config);
        } catch (err) {
            if (err instanceof Error) {
                let dummy;
                Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();
                // slice off the Error: ... line
                const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
                if (!err.stack) {
                    err.stack = stack;
                // match without the 2 top stack lines
                } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
                    err.stack += "\n" + stack;
                }
            }
            throw err;
        }
    }
    _request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
        } else {
            config = configOrUrl || {};
        }
        config = mergeConfig(this.defaults, config);
        const { transitional, paramsSerializer, headers } = config;
        if (transitional !== undefined) {
            validator.assertOptions(transitional, {
                silentJSONParsing: validators.transitional(validators.boolean),
                forcedJSONParsing: validators.transitional(validators.boolean),
                clarifyTimeoutError: validators.transitional(validators.boolean)
            }, false);
        }
        if (paramsSerializer != null) {
            if (utils$1.isFunction(paramsSerializer)) {
                config.paramsSerializer = {
                    serialize: paramsSerializer
                };
            } else {
                validator.assertOptions(paramsSerializer, {
                    encode: validators.function,
                    serialize: validators.function
                }, true);
            }
        }
        // Set config.method
        config.method = (config.method || this.defaults.method || "get").toLowerCase();
        // Flatten headers
        let contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);
        headers && utils$1.forEach([
            "delete",
            "get",
            "head",
            "post",
            "put",
            "patch",
            "common"
        ], (method)=>{
            delete headers[method];
        });
        config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
                return;
            }
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                dispatchRequest.bind(this),
                undefined
            ];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len){
                promise = promise.then(chain[i++], chain[i++]);
            }
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = dispatchRequest.call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len){
            promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        }
        return promise;
    }
    getUri(config) {
        config = mergeConfig(this.defaults, config);
        const fullPath = buildFullPath(config.baseURL, config.url);
        return buildURL(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
utils$1.forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
utils$1.forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request(mergeConfig(config || {}, {
                method,
                headers: isForm ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
const Axios$1 = Axios;
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== "function") {
            throw new TypeError("executor must be a function.");
        }
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0){
                token._listeners[i](cancel);
            }
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) {
                // Cancellation has already been requested
                return;
            }
            token.reason = new CanceledError(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) {
            throw this.reason;
        }
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) {
            this._listeners.push(listener);
        } else {
            this._listeners = [
                listener
            ];
        }
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) {
            return;
        }
        const index = this._listeners.indexOf(listener);
        if (index !== -1) {
            this._listeners.splice(index, 1);
        }
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
const CancelToken$1 = CancelToken;
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */ function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ function isAxiosError(payload) {
    return utils$1.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value])=>{
    HttpStatusCode[value] = key;
});
const HttpStatusCode$1 = HttpStatusCode;
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new Axios$1(defaultConfig);
    const instance = bind(Axios$1.prototype.request, context);
    // Copy axios.prototype to instance
    utils$1.extend(instance, Axios$1.prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    utils$1.extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance(defaults$1);
// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;
// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;
// Expose AxiosError class
axios.AxiosError = AxiosError;
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = spread;
// Expose isAxiosError
axios.isAxiosError = isAxiosError;
// Expose mergeConfig
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = (thing)=>formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
module.exports = axios; //# sourceMappingURL=axios.cjs.map


/***/ }),

/***/ 70139:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"@sendgrid/client","description":"Twilio SendGrid NodeJS API client","version":"8.1.3","author":"Twilio SendGrid <help@twilio.com> (sendgrid.com)","contributors":["Kyle Partridge <kyle.partridge@sendgrid.com>","David Tomberlin <david.tomberlin@sendgrid.com>","Swift <swift@sendgrid.com>","Brandon West <brandon.west@sendgrid.com>","Scott Motte <scott.motte@sendgrid.com>","Robert Acosta <robert.acosta@sendgrid.com>","Elmer Thomas <ethomas@twilio.com>","Adam Reis <adam@reis.nz>"],"license":"MIT","homepage":"https://sendgrid.com","repository":{"type":"git","url":"git://github.com/sendgrid/sendgrid-nodejs.git"},"publishConfig":{"access":"public"},"main":"index.js","engines":{"node":">=12.*"},"dependencies":{"@sendgrid/helpers":"^8.0.0","axios":"^1.6.8"},"devDependencies":{"chai":"4.2.0","nock":"^10.0.6"},"resolutions":{"chai":"4.2.0"},"tags":["http","rest","api","mail","sendgrid"],"gitHead":"07b4f7108b76c7e6617c74526aea15fbf7f9af3d"}');

/***/ })

};
;
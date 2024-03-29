exports.id = 3800;
exports.ids = [3800];
exports.modules = {

/***/ 11440:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(50954)


/***/ }),

/***/ 24204:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrowContainer = void 0;
var jsx_runtime_1 = __webpack_require__(56786);
var react_1 = __webpack_require__(18038);
var useArrowContainer_1 = __webpack_require__(96150);
var ArrowContainer = function (_a) {
    var childRect = _a.childRect, popoverRect = _a.popoverRect, position = _a.position, arrowColor = _a.arrowColor, arrowSize = _a.arrowSize, arrowClassName = _a.arrowClassName, externalArrowStyle = _a.arrowStyle, className = _a.className, children = _a.children, externalArrowContainerStyle = _a.style;
    var _b = (0, useArrowContainer_1.useArrowContainer)({
        childRect: childRect,
        popoverRect: popoverRect,
        position: position,
        arrowColor: arrowColor,
        arrowSize: arrowSize,
    }), arrowContainerStyle = _b.arrowContainerStyle, arrowStyle = _b.arrowStyle;
    var mergedContainerStyle = (0, react_1.useMemo)(function () { return (__assign(__assign({}, arrowContainerStyle), externalArrowContainerStyle)); }, [arrowContainerStyle, externalArrowContainerStyle]);
    var mergedArrowStyle = (0, react_1.useMemo)(function () { return (__assign(__assign({}, arrowStyle), externalArrowStyle)); }, [arrowStyle, externalArrowStyle]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: className, style: mergedContainerStyle, children: [(0, jsx_runtime_1.jsx)("div", { style: mergedArrowStyle, className: arrowClassName }), children] }));
};
exports.ArrowContainer = ArrowContainer;
//# sourceMappingURL=ArrowContainer.js.map

/***/ }),

/***/ 36413:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Popover = exports.usePopover = exports.ArrowContainer = exports.useArrowContainer = void 0;
var jsx_runtime_1 = __webpack_require__(56786);
var react_1 = __webpack_require__(18038);
var PopoverPortal_1 = __webpack_require__(78680);
var util_1 = __webpack_require__(76019);
var usePopover_1 = __webpack_require__(74618);
Object.defineProperty(exports, "usePopover", ({ enumerable: true, get: function () { return usePopover_1.usePopover; } }));
var useMemoizedArray_1 = __webpack_require__(50157);
var useArrowContainer_1 = __webpack_require__(96150);
Object.defineProperty(exports, "useArrowContainer", ({ enumerable: true, get: function () { return useArrowContainer_1.useArrowContainer; } }));
var ArrowContainer_1 = __webpack_require__(24204);
Object.defineProperty(exports, "ArrowContainer", ({ enumerable: true, get: function () { return ArrowContainer_1.ArrowContainer; } }));
var DEFAULT_POSITIONS = ['top', 'left', 'right', 'bottom'];
var PopoverInternal = (0, react_1.forwardRef)(function (_a, externalRef) {
    var isOpen = _a.isOpen, children = _a.children, content = _a.content, _b = _a.positions, externalPositions = _b === void 0 ? DEFAULT_POSITIONS : _b, _c = _a.align, align = _c === void 0 ? 'center' : _c, _d = _a.padding, padding = _d === void 0 ? 0 : _d, _e = _a.reposition, reposition = _e === void 0 ? true : _e, _f = _a.parentElement, parentElement = _f === void 0 ? window.document.body : _f, _g = _a.boundaryElement, boundaryElement = _g === void 0 ? parentElement : _g, containerClassName = _a.containerClassName, containerStyle = _a.containerStyle, transform = _a.transform, _h = _a.transformMode, transformMode = _h === void 0 ? 'absolute' : _h, _j = _a.boundaryInset, boundaryInset = _j === void 0 ? 0 : _j, onClickOutside = _a.onClickOutside, _k = _a.clickOutsideCapture, clickOutsideCapture = _k === void 0 ? false : _k;
    var positions = (0, useMemoizedArray_1.useMemoizedArray)(Array.isArray(externalPositions) ? externalPositions : [externalPositions]);
    // TODO: factor prevs out into a custom prevs hook
    var prevIsOpen = (0, react_1.useRef)(false);
    var prevPositions = (0, react_1.useRef)();
    var prevReposition = (0, react_1.useRef)(reposition);
    var childRef = (0, react_1.useRef)();
    var _l = (0, react_1.useState)({
        align: align,
        nudgedLeft: 0,
        nudgedTop: 0,
        position: positions[0],
        padding: padding,
        childRect: util_1.EMPTY_RECT,
        popoverRect: util_1.EMPTY_RECT,
        parentRect: util_1.EMPTY_RECT,
        boundaryRect: util_1.EMPTY_RECT,
        boundaryInset: boundaryInset,
        violations: util_1.EMPTY_RECT,
        hasViolations: false,
    }), popoverState = _l[0], setPopoverState = _l[1];
    var onPositionPopover = (0, react_1.useCallback)(function (popoverState) { return setPopoverState(popoverState); }, []);
    var _m = (0, usePopover_1.usePopover)({
        isOpen: isOpen,
        childRef: childRef,
        containerClassName: containerClassName,
        parentElement: parentElement,
        boundaryElement: boundaryElement,
        transform: transform,
        transformMode: transformMode,
        positions: positions,
        align: align,
        padding: padding,
        boundaryInset: boundaryInset,
        reposition: reposition,
        onPositionPopover: onPositionPopover,
    }), positionPopover = _m.positionPopover, popoverRef = _m.popoverRef, scoutRef = _m.scoutRef;
    (0, react_1.useLayoutEffect)(function () {
        var shouldUpdate = true;
        var updatePopover = function () {
            var _a, _b;
            if (isOpen && shouldUpdate) {
                var childRect = (_a = childRef === null || childRef === void 0 ? void 0 : childRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                var popoverRect = (_b = popoverRef === null || popoverRef === void 0 ? void 0 : popoverRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
                if (childRect != null &&
                    popoverRect != null &&
                    (!(0, util_1.rectsAreEqual)(childRect, popoverState.childRect) ||
                        popoverRect.width !== popoverState.popoverRect.width ||
                        popoverRect.height !== popoverState.popoverRect.height ||
                        popoverState.padding !== padding ||
                        popoverState.align !== align ||
                        positions !== prevPositions.current ||
                        reposition !== prevReposition.current)) {
                    positionPopover();
                }
                // TODO: factor prev checks out into the custom prevs hook
                if (positions !== prevPositions.current) {
                    prevPositions.current = positions;
                }
                if (reposition !== prevReposition.current) {
                    prevReposition.current = reposition;
                }
                if (shouldUpdate) {
                    window.requestAnimationFrame(updatePopover);
                }
            }
            prevIsOpen.current = isOpen;
        };
        window.requestAnimationFrame(updatePopover);
        return function () {
            shouldUpdate = false;
        };
    }, [
        align,
        isOpen,
        padding,
        popoverRef,
        popoverState.align,
        popoverState.childRect,
        popoverState.padding,
        popoverState.popoverRect.height,
        popoverState.popoverRect.width,
        positionPopover,
        positions,
        reposition,
    ]);
    (0, react_1.useEffect)(function () {
        var popoverElement = popoverRef.current;
        Object.assign(popoverElement.style, containerStyle);
        return function () {
            Object.keys(containerStyle !== null && containerStyle !== void 0 ? containerStyle : {}).forEach(function (key) {
                return delete popoverElement.style[key];
            });
        };
    }, [containerStyle, isOpen, popoverRef]);
    var handleOnClickOutside = (0, react_1.useCallback)(function (e) {
        var _a, _b;
        if (isOpen &&
            !((_a = popoverRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) &&
            !((_b = childRef.current) === null || _b === void 0 ? void 0 : _b.contains(e.target))) {
            onClickOutside === null || onClickOutside === void 0 ? void 0 : onClickOutside(e);
        }
    }, [isOpen, onClickOutside, popoverRef]);
    var handleWindowResize = (0, react_1.useCallback)(function () {
        if (childRef.current) {
            window.requestAnimationFrame(function () { return positionPopover(); });
        }
    }, [positionPopover]);
    (0, react_1.useEffect)(function () {
        var body = parentElement.ownerDocument.body;
        body.addEventListener('click', handleOnClickOutside, clickOutsideCapture);
        body.addEventListener('contextmenu', handleOnClickOutside, clickOutsideCapture);
        body.addEventListener('resize', handleWindowResize);
        return function () {
            body.removeEventListener('click', handleOnClickOutside, clickOutsideCapture);
            body.removeEventListener('contextmenu', handleOnClickOutside, clickOutsideCapture);
            body.removeEventListener('resize', handleWindowResize);
        };
    }, [clickOutsideCapture, handleOnClickOutside, handleWindowResize, parentElement]);
    var handleRef = (0, react_1.useCallback)(function (node) {
        childRef.current = node;
        if (externalRef != null) {
            if (typeof externalRef === 'object') {
                externalRef.current = node;
            }
            else if (typeof externalRef === 'function') {
                externalRef(node);
            }
        }
    }, [externalRef]);
    var renderChild = function () { return (0, react_1.cloneElement)(children, { ref: handleRef }); };
    var renderPopover = function () {
        if (!isOpen)
            return null;
        return ((0, jsx_runtime_1.jsx)(PopoverPortal_1.PopoverPortal, { element: popoverRef.current, scoutElement: scoutRef.current, container: parentElement, children: typeof content === 'function' ? content(popoverState) : content }));
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [renderChild(), renderPopover()] }));
});
exports.Popover = (0, react_1.forwardRef)(function (props, ref) {
    if (typeof window === 'undefined')
        return props.children;
    return (0, jsx_runtime_1.jsx)(PopoverInternal, __assign({}, props, { ref: ref }));
});
//# sourceMappingURL=Popover.js.map

/***/ }),

/***/ 78680:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopoverPortal = void 0;
var react_1 = __webpack_require__(18038);
var react_dom_1 = __webpack_require__(98704);
var PopoverPortal = function (_a) {
    var container = _a.container, element = _a.element, scoutElement = _a.scoutElement, children = _a.children;
    (0, react_1.useLayoutEffect)(function () {
        container.appendChild(element);
        container.appendChild(scoutElement);
        return function () {
            container.removeChild(element);
            container.removeChild(scoutElement);
        };
    }, [container, element, scoutElement]);
    return (0, react_dom_1.createPortal)(children, element);
};
exports.PopoverPortal = PopoverPortal;
//# sourceMappingURL=PopoverPortal.js.map

/***/ }),

/***/ 96150:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useArrowContainer = void 0;
var react_1 = __webpack_require__(18038);
var useArrowContainer = function (_a) {
    var childRect = _a.childRect, popoverRect = _a.popoverRect, position = _a.position, arrowSize = _a.arrowSize, arrowColor = _a.arrowColor;
    var arrowContainerStyle = (0, react_1.useMemo)(function () {
        return ({
            padding: arrowSize,
        });
    }, [arrowSize]);
    var arrowStyle = (0, react_1.useMemo)(function () {
        return (__assign({ position: 'absolute' }, (function () {
            var arrowWidth = arrowSize * 2;
            var top = childRect.top - popoverRect.top + childRect.height / 2 - arrowWidth / 2;
            var left = childRect.left - popoverRect.left + childRect.width / 2 - arrowWidth / 2;
            var lowerBound = arrowSize;
            var leftUpperBound = popoverRect.width - arrowSize;
            var topUpperBound = popoverRect.height - arrowSize;
            left = left < lowerBound ? lowerBound : left;
            left = left + arrowWidth > leftUpperBound ? leftUpperBound - arrowWidth : left;
            top = top < lowerBound ? lowerBound : top;
            top = top + arrowWidth > topUpperBound ? topUpperBound - arrowWidth : top;
            top = Number.isNaN(top) ? 0 : top;
            left = Number.isNaN(left) ? 0 : left;
            switch (position) {
                case 'right':
                    return {
                        borderTop: "".concat(arrowSize, "px solid transparent"),
                        borderBottom: "".concat(arrowSize, "px solid transparent"),
                        borderRight: "".concat(arrowSize, "px solid ").concat(arrowColor),
                        left: 0,
                        top: top,
                    };
                case 'left':
                    return {
                        borderTop: "".concat(arrowSize, "px solid transparent"),
                        borderBottom: "".concat(arrowSize, "px solid transparent"),
                        borderLeft: "".concat(arrowSize, "px solid ").concat(arrowColor),
                        right: 0,
                        top: top,
                    };
                case 'bottom':
                    return {
                        borderLeft: "".concat(arrowSize, "px solid transparent"),
                        borderRight: "".concat(arrowSize, "px solid transparent"),
                        borderBottom: "".concat(arrowSize, "px solid ").concat(arrowColor),
                        top: 0,
                        left: left,
                    };
                case 'top':
                    return {
                        borderLeft: "".concat(arrowSize, "px solid transparent"),
                        borderRight: "".concat(arrowSize, "px solid transparent"),
                        borderTop: "".concat(arrowSize, "px solid ").concat(arrowColor),
                        bottom: 0,
                        left: left,
                    };
                default:
                    return {
                        display: 'hidden',
                    };
            }
        })()));
    }, [
        arrowColor,
        arrowSize,
        childRect.height,
        childRect.left,
        childRect.top,
        childRect.width,
        popoverRect.height,
        popoverRect.left,
        popoverRect.top,
        popoverRect.width,
        position,
    ]);
    return {
        arrowContainerStyle: arrowContainerStyle,
        arrowStyle: arrowStyle,
    };
};
exports.useArrowContainer = useArrowContainer;
//# sourceMappingURL=useArrowContainer.js.map

/***/ }),

/***/ 55161:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useElementRef = void 0;
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(76019);
var useElementRef = function (_a) {
    var containerClassName = _a.containerClassName, containerStyle = _a.containerStyle, id = _a.id;
    var ref = (0, react_1.useRef)();
    var element = (0, react_1.useMemo)(function () { return (0, util_1.createContainer)({ containerStyle: containerStyle, containerClassName: containerClassName, id: id }); }, [containerClassName, containerStyle, id]);
    ref.current = element;
    return ref;
};
exports.useElementRef = useElementRef;
//# sourceMappingURL=useElementRef.js.map

/***/ }),

/***/ 50157:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMemoizedArray = void 0;
var react_1 = __webpack_require__(18038);
var useMemoizedArray = function (externalArray) {
    var prevArrayRef = (0, react_1.useRef)(externalArray);
    var array = (0, react_1.useMemo)(function () {
        if (prevArrayRef.current === externalArray)
            return prevArrayRef.current;
        if (prevArrayRef.current.length !== externalArray.length) {
            prevArrayRef.current = externalArray;
            return externalArray;
        }
        for (var i = 0; i < externalArray.length; i += 1) {
            if (externalArray[i] !== prevArrayRef.current[i]) {
                prevArrayRef.current = externalArray;
                return externalArray;
            }
        }
        return prevArrayRef.current;
    }, [externalArray]);
    return array;
};
exports.useMemoizedArray = useMemoizedArray;
//# sourceMappingURL=useMemoizedArray.js.map

/***/ }),

/***/ 74618:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.usePopover = void 0;
var react_1 = __webpack_require__(18038);
var util_1 = __webpack_require__(76019);
var useElementRef_1 = __webpack_require__(55161);
var POPOVER_STYLE = {
    position: 'fixed',
    overflow: 'visible',
    top: '0px',
    left: '0px',
};
var SCOUT_STYLE = {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '0px',
    height: '0px',
    visibility: 'hidden',
};
var usePopover = function (_a) {
    var isOpen = _a.isOpen, childRef = _a.childRef, positions = _a.positions, containerClassName = _a.containerClassName, parentElement = _a.parentElement, transform = _a.transform, transformMode = _a.transformMode, align = _a.align, padding = _a.padding, reposition = _a.reposition, boundaryInset = _a.boundaryInset, boundaryElement = _a.boundaryElement, onPositionPopover = _a.onPositionPopover;
    var scoutRef = (0, useElementRef_1.useElementRef)({ id: 'react-tiny-popover-scout', containerStyle: SCOUT_STYLE });
    var popoverRef = (0, useElementRef_1.useElementRef)({
        id: 'react-tiny-popover-container',
        containerClassName: containerClassName,
        containerStyle: POPOVER_STYLE,
    });
    var positionPopover = (0, react_1.useCallback)(function (_a) {
        var _b, _c;
        var _d = _a === void 0 ? {} : _a, _e = _d.positionIndex, positionIndex = _e === void 0 ? 0 : _e, _f = _d.parentRect, parentRect = _f === void 0 ? parentElement.getBoundingClientRect() : _f, _g = _d.childRect, childRect = _g === void 0 ? (_b = childRef === null || childRef === void 0 ? void 0 : childRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect() : _g, _h = _d.scoutRect, scoutRect = _h === void 0 ? (_c = scoutRef === null || scoutRef === void 0 ? void 0 : scoutRef.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect() : _h, _j = _d.popoverRect, popoverRect = _j === void 0 ? popoverRef.current.getBoundingClientRect() : _j, _k = _d.boundaryRect, boundaryRect = _k === void 0 ? boundaryElement === parentElement
            ? parentRect
            : boundaryElement.getBoundingClientRect() : _k;
        if (!childRect || !parentRect || !isOpen) {
            return;
        }
        if (transform && transformMode === 'absolute') {
            var _l = typeof transform === 'function'
                ? transform({
                    childRect: childRect,
                    popoverRect: popoverRect,
                    parentRect: parentRect,
                    boundaryRect: boundaryRect,
                    padding: padding,
                    align: align,
                    nudgedTop: 0,
                    nudgedLeft: 0,
                    boundaryInset: boundaryInset,
                    violations: util_1.EMPTY_RECT,
                    hasViolations: false,
                })
                : transform, inputTop = _l.top, inputLeft = _l.left;
            var finalLeft_1 = Math.round(parentRect.left + inputLeft - scoutRect.left);
            var finalTop_1 = Math.round(parentRect.top + inputTop - scoutRect.top);
            popoverRef.current.style.transform = "translate(".concat(finalLeft_1, "px, ").concat(finalTop_1, "px)");
            onPositionPopover({
                childRect: childRect,
                popoverRect: (0, util_1.createRect)({
                    left: finalLeft_1,
                    top: finalTop_1,
                    width: popoverRect.width,
                    height: popoverRect.height,
                }),
                parentRect: parentRect,
                boundaryRect: boundaryRect,
                padding: padding,
                align: align,
                transform: { top: inputTop, left: inputLeft },
                nudgedTop: 0,
                nudgedLeft: 0,
                boundaryInset: boundaryInset,
                violations: util_1.EMPTY_RECT,
                hasViolations: false,
            });
            return;
        }
        var isExhausted = positionIndex === positions.length;
        var position = isExhausted ? positions[0] : positions[positionIndex];
        var _m = (0, util_1.getNewPopoverRect)({
            childRect: childRect,
            popoverRect: popoverRect,
            boundaryRect: boundaryRect,
            position: position,
            align: align,
            padding: padding,
            reposition: reposition,
        }, boundaryInset), rect = _m.rect, boundaryViolation = _m.boundaryViolation;
        if (boundaryViolation && reposition && !isExhausted) {
            positionPopover({
                positionIndex: positionIndex + 1,
                childRect: childRect,
                popoverRect: popoverRect,
                parentRect: parentRect,
                boundaryRect: boundaryRect,
            });
            return;
        }
        var top = rect.top, left = rect.left, width = rect.width, height = rect.height;
        var shouldNudge = reposition && !isExhausted;
        var _o = (0, util_1.getNudgedPopoverRect)(rect, boundaryRect, boundaryInset), nudgedLeft = _o.left, nudgedTop = _o.top;
        var finalTop = top;
        var finalLeft = left;
        if (shouldNudge) {
            finalTop = nudgedTop;
            finalLeft = nudgedLeft;
        }
        finalTop = Math.round(finalTop - scoutRect.top);
        finalLeft = Math.round(finalLeft - scoutRect.left);
        popoverRef.current.style.transform = "translate(".concat(finalLeft, "px, ").concat(finalTop, "px)");
        var potentialViolations = {
            top: boundaryRect.top + boundaryInset - finalTop,
            left: boundaryRect.left + boundaryInset - finalLeft,
            right: finalLeft + width - boundaryRect.right + boundaryInset,
            bottom: finalTop + height - boundaryRect.bottom + boundaryInset,
        };
        var popoverState = {
            childRect: childRect,
            popoverRect: (0, util_1.createRect)({ left: finalLeft, top: finalTop, width: width, height: height }),
            parentRect: parentRect,
            boundaryRect: boundaryRect,
            position: position,
            align: align,
            padding: padding,
            nudgedTop: nudgedTop - top,
            nudgedLeft: nudgedLeft - left,
            boundaryInset: boundaryInset,
            violations: {
                top: potentialViolations.top <= 0 ? 0 : potentialViolations.top,
                left: potentialViolations.left <= 0 ? 0 : potentialViolations.left,
                right: potentialViolations.right <= 0 ? 0 : potentialViolations.right,
                bottom: potentialViolations.bottom <= 0 ? 0 : potentialViolations.bottom,
            },
            hasViolations: potentialViolations.top > 0 ||
                potentialViolations.left > 0 ||
                potentialViolations.right > 0 ||
                potentialViolations.bottom > 0,
        };
        if (transform) {
            onPositionPopover(popoverState);
            var _p = typeof transform === 'function' ? transform(popoverState) : transform, transformTop = _p.top, transformLeft = _p.left;
            popoverRef.current.style.transform = "translate(".concat(Math.round(finalLeft + (transformLeft !== null && transformLeft !== void 0 ? transformLeft : 0)), "px, ").concat(Math.round(finalTop + (transformTop !== null && transformTop !== void 0 ? transformTop : 0)), "px)");
            popoverState.nudgedLeft += transformLeft !== null && transformLeft !== void 0 ? transformLeft : 0;
            popoverState.nudgedTop += transformTop !== null && transformTop !== void 0 ? transformTop : 0;
            popoverState.transform = { top: transformTop, left: transformLeft };
        }
        onPositionPopover(popoverState);
    }, [
        parentElement,
        childRef,
        scoutRef,
        popoverRef,
        boundaryElement,
        isOpen,
        transform,
        transformMode,
        positions,
        align,
        padding,
        reposition,
        boundaryInset,
        onPositionPopover,
    ]);
    return { positionPopover: positionPopover, popoverRef: popoverRef, scoutRef: scoutRef };
};
exports.usePopover = usePopover;
//# sourceMappingURL=usePopover.js.map

/***/ }),

/***/ 76019:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getNudgedPopoverRect = exports.getNewPopoverRect = exports.popoverRectForPosition = exports.createContainer = exports.rectsAreEqual = exports.createRect = exports.EMPTY_RECT = void 0;
exports.EMPTY_RECT = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
};
var createRect = function (_a) {
    var top = _a.top, left = _a.left, width = _a.width, height = _a.height;
    return ({
        top: top,
        left: left,
        width: width,
        height: height,
        right: left + width,
        bottom: top + height,
    });
};
exports.createRect = createRect;
var rectsAreEqual = function (rectA, rectB) {
    return rectA === rectB ||
        ((rectA === null || rectA === void 0 ? void 0 : rectA.bottom) === (rectB === null || rectB === void 0 ? void 0 : rectB.bottom) &&
            (rectA === null || rectA === void 0 ? void 0 : rectA.height) === (rectB === null || rectB === void 0 ? void 0 : rectB.height) &&
            (rectA === null || rectA === void 0 ? void 0 : rectA.left) === (rectB === null || rectB === void 0 ? void 0 : rectB.left) &&
            (rectA === null || rectA === void 0 ? void 0 : rectA.right) === (rectB === null || rectB === void 0 ? void 0 : rectB.right) &&
            (rectA === null || rectA === void 0 ? void 0 : rectA.top) === (rectB === null || rectB === void 0 ? void 0 : rectB.top) &&
            (rectA === null || rectA === void 0 ? void 0 : rectA.width) === (rectB === null || rectB === void 0 ? void 0 : rectB.width));
};
exports.rectsAreEqual = rectsAreEqual;
var createContainer = function (_a) {
    var containerStyle = _a.containerStyle, containerClassName = _a.containerClassName, id = _a.id;
    var container = window.document.createElement('div');
    container.id = id;
    if (containerClassName)
        container.className = containerClassName;
    Object.assign(container.style, containerStyle);
    return container;
};
exports.createContainer = createContainer;
var popoverRectForPosition = function (position, childRect, popoverRect, padding, align) {
    var targetMidX = childRect.left + childRect.width / 2;
    var targetMidY = childRect.top + childRect.height / 2;
    var width = popoverRect.width, height = popoverRect.height;
    var top;
    var left;
    switch (position) {
        case 'left':
            top = targetMidY - height / 2;
            left = childRect.left - padding - width;
            if (align === 'start') {
                top = childRect.top;
            }
            if (align === 'end') {
                top = childRect.bottom - height;
            }
            break;
        case 'bottom':
            top = childRect.bottom + padding;
            left = targetMidX - width / 2;
            if (align === 'start') {
                left = childRect.left;
            }
            if (align === 'end') {
                left = childRect.right - width;
            }
            break;
        case 'right':
            top = targetMidY - height / 2;
            left = childRect.right + padding;
            if (align === 'start') {
                top = childRect.top;
            }
            if (align === 'end') {
                top = childRect.bottom - height;
            }
            break;
        default:
            top = childRect.top - height - padding;
            left = targetMidX - width / 2;
            if (align === 'start') {
                left = childRect.left;
            }
            if (align === 'end') {
                left = childRect.right - width;
            }
            break;
    }
    return (0, exports.createRect)({ left: left, top: top, width: width, height: height });
};
exports.popoverRectForPosition = popoverRectForPosition;
var getNewPopoverRect = function (_a, boundaryInset) {
    var position = _a.position, align = _a.align, childRect = _a.childRect, popoverRect = _a.popoverRect, boundaryRect = _a.boundaryRect, padding = _a.padding, reposition = _a.reposition;
    var rect = (0, exports.popoverRectForPosition)(position, childRect, popoverRect, padding, align);
    var boundaryViolation = reposition &&
        ((position === 'top' && rect.top < boundaryRect.top + boundaryInset) ||
            (position === 'left' && rect.left < boundaryRect.left + boundaryInset) ||
            (position === 'right' && rect.right > boundaryRect.right - boundaryInset) ||
            (position === 'bottom' && rect.bottom > boundaryRect.bottom - boundaryInset));
    return {
        rect: rect,
        boundaryViolation: boundaryViolation,
    };
};
exports.getNewPopoverRect = getNewPopoverRect;
var getNudgedPopoverRect = function (popoverRect, boundaryRect, boundaryInset) {
    var topBoundary = boundaryRect.top + boundaryInset;
    var leftBoundary = boundaryRect.left + boundaryInset;
    var rightBoundary = boundaryRect.right - boundaryInset;
    var bottomBoundary = boundaryRect.bottom - boundaryInset;
    var top = popoverRect.top < topBoundary ? topBoundary : popoverRect.top;
    top = top + popoverRect.height > bottomBoundary ? bottomBoundary - popoverRect.height : top;
    var left = popoverRect.left < leftBoundary ? leftBoundary : popoverRect.left;
    left = left + popoverRect.width > rightBoundary ? rightBoundary - popoverRect.width : left;
    return (0, exports.createRect)(__assign(__assign({}, popoverRect), { top: top, left: left }));
};
exports.getNudgedPopoverRect = getNudgedPopoverRect;
//# sourceMappingURL=util.js.map

/***/ })

};
;
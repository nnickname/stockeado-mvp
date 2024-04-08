import * as sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendMailMessage = async(to: string,  text: string, title: string, orderid: string, templateId: string) => {
    const msg = {
        to,
        from: 'bruno@stockeado.com',
        html: '<div></div>',
        subject: title,
        text,
        templateId,
        dynamic_template_data: {
          orderid: orderid,          
        },
      }
      const response = await sgMail.send(msg)
  .then(() => {
    console.log('Email sent')
    return true;
  })
  .catch((error) => {
    console.error(error)
    return false;
  });
  return response;
}

export default sendMailMessage;
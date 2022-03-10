const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (options) => {
  const message = {
    from: process.env.FROM_EMAIL,
    to: 'contactme@tichif.com',
    subject: options.subject,
    html: options.message,
  };

  const response = await sgMail.send(message);

  console.log(`Message sent : %s`, response[0].statusCode);
};

module.exports = sendMail;

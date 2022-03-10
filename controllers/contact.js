const sendMail = require('../utils/sendMail');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/ErrorResponse');

exports.contact = asyncHandler(async (req, res, next) => {
  const { name, email, subject, message } = req.body;

  const language = req.body.language || 'en';

  if (!name || !email || !message) {
    return next(new ErrorResponse('Tous les champs sont obligatoires.', 422));
  }

  const options = {
    subject,
    message: `
    <html>
      <body>
        <p>Hello Tichif,</p>
        <p>Je suis ${name}, adresse mail: <a href="mailto:${email}">${email}</a></p>
        <p>J'écris au sujet de: ${subject}</p>
        <p>${message}</p>
      </body>
    </html>
    `,
  };

  try {
    await sendMail(options);

    return res.status(200).json({
      success: true,
      message:
        language === 'en'
          ? 'Your message has been sent.'
          : 'Votre message a été envoyé.',
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse('Erreur. Veuillez essayer à nouveau.', 400));
  }
});

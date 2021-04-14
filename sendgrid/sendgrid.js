export const sendEmailAdminDashboard = async (email) => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: email,
    from: 'notifications@florish.tech',
    subject: 'Notification from Florish',
    text: 'Notification from Florish',
    html: 'This is a notification from Florish',
  };

  let result = '';

  await sgMail
  .send(msg)
  .then(() => {
    result = 'Email sent!';
  }, 
  error => {
    result = error;
  });

  return result;
};

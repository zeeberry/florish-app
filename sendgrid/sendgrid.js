export const sendEmailAdminDashboard = async (email, application_id, company, origin) => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: email,
    from: 'notifications@florish.tech',
    subject: 'Notification from Florish',
    text: 'Notification from Florish',
    html: `<p>Hey there! We wanted to check in with you after your interview with ${company}. 
    <a href="${origin}/reflection/${application_id}">Click here</a> to tell us how you're feeling.<p>`
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

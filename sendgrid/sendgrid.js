export const sendEmailAdminDashboard = (email) => {
    return sendEmailAdminDash(email);
};

const sendEmailAdminDash = (email) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY); 

    const msg = {
        to: email,
        from: 'notifications@florish.tech',
        subject: 'Notification from Florish',
        text: 'This is a notification from Florish.',
        html: 'This is a notification from Florish.'
    };

    let result = '';

    sgMail
    .send(msg)
    .then(() => {
        result = 'Email Sent!';
    })
    .catch((error) => {
        result = `There was an error, ${error}`;
    })

    return result;
};

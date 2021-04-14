import { sendEmailAdminDashboard } from '../../sendgrid/sendgrid';

export default async (req, res) => {
    if(req.method === 'POST') {
      const { email } = req.body;
      const result = await sendEmailAdminDashboard(email);
      if(result === 'Email sent!'){
        return res.status(200).end();
      }
      else {
        return res.status(500).json({
            error: {
                code: 'server_error',
                message: `There was an internal issue: ${result}`
            }
        });
      }
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            message: "The requested endpoint was not found or doesn't support this method."
        }
    });
};
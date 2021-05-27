import { getLoginSession } from '../../util/cookieService';
import { accountByEmail } from '../../graphql/api';

export default async (req, res) => {
  let userSession = await getLoginSession(req);
  if (userSession) {
    const profile = await accountByEmail(userSession.email);
    const role = profile.data.accountByEmail.data[0].role;
    userSession.role = role || null;
    return res.status(200).json({ user: userSession });
  }
  else {
    return res.status(404).json({
      error: {
        code: 'not_found',
        message: "The requested user was not found."
      }
    });
  }
}
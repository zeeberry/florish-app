import { getLoginSession } from '../../util/cookieService';
import { getProfileByEmail } from '../../graphql/api';

export default async (req, res) => {
  let userSession = await getLoginSession(req);
  //Future TODO: get the user from the DB as well
  if (userSession) {
    const profile = await getProfileByEmail(userSession.email);
    const role = profile.data.accountByEmail.data[0].role;
    
    userSession.role = role || undefined;
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
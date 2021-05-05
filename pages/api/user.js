import { getLoginSession } from '../../util/cookieService';

export default async (req, res) => {
  const user_session = await getLoginSession(req);
  //Future TODO: get the user from the DB as well
  if (user_session) {
    return res.status(200).json({ user: user_session });
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
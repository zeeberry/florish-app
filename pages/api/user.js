import { getLoginSession } from '../../util/cookieService';

export default async (req, res) => {
  const user_session = await getLoginSession(req);
  //Future TODO: get the user from the DB as well
  res.status(200).json({ user: user_session || null });
}
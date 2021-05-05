import { Magic } from '@magic-sdk/admin';
import { removeTokenCookie } from '../../util/cookies';
import { getLoginSession } from '../../util/cookieService';

export default async function logout(req, res) {
  try {
    const session = await getLoginSession(req)
    if (session) {
        const magic = await new Magic(process.env.MAGIC_SECRET_KEY);
        await magic.users.logoutByIssuer(session.issuer);
        removeTokenCookie(res);
    }
  } 
  catch (error) {
    console.error(error);
  }

  res.writeHead(302, { Location: '/' });
  res.end();
}
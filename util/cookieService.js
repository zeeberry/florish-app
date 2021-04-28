import Iron from '@hapi/iron';
import { MAX_AGE, setTokenCookie, getTokenCookie } from './cookies';

const ENCRYPTION_SECRET = process.env.ENCRYPTION_SECRET;

export async function setLoginSession(res, session) {
  const createdAt = Date.now();
  const sessionObj = { ...session, createdAt, maxAge: MAX_AGE };
  const token = await Iron.seal(sessionObj, ENCRYPTION_SECRET, Iron.defaults);

  setTokenCookie(res, token);
}

export async function getLoginSession(req) {
  const token = getTokenCookie(req);

  if (!token){
    return;
  }

  const session = await Iron.unseal(token, ENCRYPTION_SECRET, Iron.defaults);
  const expiresAt = session.createdAt + session.maxAge * 1000;

  if (Date.now() > expiresAt) {
    throw new Error('Session expired');
  }

  return session
}
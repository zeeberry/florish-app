import { Magic } from '@magic-sdk/admin';
import { setLoginSession } from '../../util/cookieService';

export default async (req, res) => {
    if(req.method === 'POST'){
        try {
            const DID = req.headers.authorization.split('Bearer').pop().trim();
            const user_metadata = await new Magic(process.env.MAGIC_SECRET_KEY).users.getMetadataByToken(DID);
            const session = { ...user_metadata };

            await setLoginSession(res, session);
            return res.status(200).end();
        }
        catch (error) {
            res.status(error.status || 500).end(error.message || "Internal server error");
        }
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            message: "The requested endpoint was not found or doesn't support this method."
        }
    });
}
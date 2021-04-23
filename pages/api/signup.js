import { Magic } from '@magic-sdk/admin';

export default async (req, res) => {
    if(req.method === 'POST'){
        const magic = new Magic(process.env.MAGIC_SECRET_KEY);
        const DID = magic.utils.parseAuthorizationHeader(req.headers.authorization);
        const user = await magic.users.getMetadataByToken(DID);
        
        //TODO: build out cookie logic

        return res.status(200).end();
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            message: "The requested endpoint was not found or doesn't support this method."
        }
    });
}
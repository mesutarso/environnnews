import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from '../../../utils/dbConnect'
import Breaking from '../../../models/breaking'

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const breaking = await Breaking.findById(id);

                if (!breaking) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }else{
                    return res.status(200).json({ success : true, data: breaking })
                }
            } catch (error) {
                res.status(400).json({ success: false, error: error })
            }
            
            break;
        case 'PUT':
            try {
                const breaking = await Breaking.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });
    
                if (!breaking) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }

                return res.status(200).json({ success : true, message: 'objet modifié avec success', data: breaking })

            } catch (error) {
                res.status(400).json({ success: false })
            }
                
            break;

        case 'DELETE':

            try {
                const breaking = await Breaking.deleteOne({ _id: id });
    
                if (!breaking) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }

                return res.status(200).json({ success : true, message: 'objet supprimé avec succes', data: breaking })


            } catch (error) {
                res.status(400).json({ success: false })
            }
                
            break;
        
        default:
            res.status(400).json({ success: false })
            break;
    }
}
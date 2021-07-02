import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from '../../../utils/dbConnect'
import Realisation from '../../../models/realisation'

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const realisation = await Realisation.findById(id);

                if (!realisation) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }else{
                    return res.status(200).json({ success : true, data: realisation })
                }
            } catch (error) {
                res.status(400).json({ success: false })
            }
            
            break;
        case 'PUT':
            try {
                const realisation = await Realisation.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });
    
                if (!realisation) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }

                return res.status(200).json({ success : true, message: 'objet modifié avec success', data: realisation })

            } catch (error) {
                res.status(400).json({ success: false })
            }
                
            break;

        case 'DELETE':

            try {
                const realisation = await Realisation.deleteOne({ _id: id });
    
                if (!realisation) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }

                return res.status(200).json({ success : true, message: 'objet supprimé avec succes', data: realisation })


            } catch (error) {
                res.status(400).json({ success: false })
            }
                
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}
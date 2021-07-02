import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from '../../../utils/dbConnect'
import LeSaviezVous from '../../../models/lesaviezvous'

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const lesaviezvous = await LeSaviezVous.findById(id);

                if (!lesaviezvous) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }else{
                    return res.status(200).json({ success : true, data: lesaviezvous })
                }
            } catch (error) {
                res.status(400).json({ success: false })
            }
            
            break;
        case 'PUT':
            try {
                const lesaviezvous = await LeSaviezVous.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });
    
                if (!lesaviezvous) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }

                return res.status(200).json({ success : true, message: 'objet modifié avec success' })

            } catch (error) {
                res.status(400).json({ success: false })
            }
                
            break;

        case 'DELETE':

            try {
                const lesaviezvous = await LeSaviezVous.deleteOne({ _id: id });
    
                if (!lesaviezvous) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }

                return res.status(200).json({ success : true, message: 'objet supprimé avec succes', data: lesaviezvous })


            } catch (error) {
                res.status(400).json({ success: false })
            }
                
            break;
        
        default:
            res.status(400).json({ success: false })
            break;
    }
}
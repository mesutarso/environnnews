import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from '../../../utils/dbConnect'
import Contact from '../../../models/contact'

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const contact = await Contact.findById(id);

                if (!contact) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }else{
                    return res.status(200).json({ success : true, data: contact })
                }
            } catch (error) {
                res.status(400).json({ success: false })
            }
            
            break;
        case 'PUT':
            try {
                const contact = await Contact.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });
    
                if (!contact) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }

                return res.status(200).json({ success : true, message: 'objet modifié avec success', data: contact })

            } catch (error) {
                res.status(400).json({ success: false })
            }
                
            break;

        case 'DELETE':

            try {
                const contact = await Contact.deleteOne({ _id: id });
    
                if (!contact) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }

                return res.status(200).json({ success : true, message: 'objet supprimé avec succes', data: contact })


            } catch (error) {
                res.status(400).json({ success: false })
            }
                
            break;
        
        default:
            res.status(400).json({ success: false })
            break;
    }
}
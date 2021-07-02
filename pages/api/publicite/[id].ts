import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from '../../../utils/dbConnect'
import Publicite from '../../../models/publicite'

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const publicite = await Publicite.findById(id);

                if (!publicite) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }else{
                    return res.status(200).json({ success : true, data: publicite })
                }
            } catch (error) {
                res.status(400).json({ success: false })
            }
            
            break;
        case 'PUT':
            try {
                const publicite = await Publicite.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });
    
                if (!publicite) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }

                return res.status(200).json({ success : true, message: 'objet modifié avec success', data: publicite })

            } catch (error) {
                res.status(400).json({ success: false })
            }
                
            break;

        case 'DELETE':

            try {
                const publicite = await Publicite.deleteOne({ _id: id });
    
                if (!publicite) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }

                return res.status(200).json({ success : true, message: 'objet supprimé avec succes', data: publicite })


            } catch (error) {
                res.status(400).json({ success: false })
            }
                
            break;
        
        default:
            res.status(400).json({ success: false })
            break;
    }
}
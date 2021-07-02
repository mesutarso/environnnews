import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from '../../../utils/dbConnect'
import Publicite from '../../../models/publicite'

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { 
        method 
    } = req;

    switch (method) {
        case 'GET':
            try {
                const publicites = await Publicite.find({}, (error, data) => {
                    if (error) {
                        console.log(error)
                    } else {
                        return data;
                    }
                }).sort( { "createdAt": -1 } );
                
                res.status(200).json({ success: true, data: publicites});
            } catch (error) {
                res.status(400).json({ success: false, error: error});
            }
            break;
        case 'POST':
            try {
                const publicite = await Publicite.create(req.body);
                    
                res.status(200).json({ success: true, data: publicite});
            } catch (error) {
                console.log(error);
            }
            break;
        default:
        res.status(400).json({ success: false});
        break;
    }

}
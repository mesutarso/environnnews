import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from '../../../utils/dbConnect'
import Realisation from '../../../models/realisation'

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { 
        method 
    } = req;

    switch (method) {
        case 'GET':
            try {
                const realisations = await Realisation.find({}, (error, data) => {
                    if (error) {
                        console.log(error)
                    } else {
                        return data;
                    }
                }).sort( { "createdAt": -1 } );
                
                res.status(200).json({ success: true, data: realisations});
            } catch (error) {
                res.status(400).json({ success: false, error: error});
            }
            break;
        case 'POST':
            try {
                const realisation = await Realisation.create(req.body);
                    
                res.status(200).json({ success: true, data: realisation});
            } catch (error) {
                console.log(error);
            }
            break;
        default:
        res.status(400).json({ success: false});
        break;
    }

}
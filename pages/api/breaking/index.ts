import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from '../../../utils/dbConnect'
import Breaking from '../../../models/breaking'

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { 
        method 
    } = req;

    switch (method) {
        case 'GET':
            try {
                const breakings = await Breaking.find({}, (error, data) => {
                    if (error) {
                        console.log(error)
                    } else {
                        return data;
                    }
                }).sort( { "createdAt": -1 } );
                
                res.status(200).json({ success: true, data: breakings});
            } catch (error) {
                res.status(400).json({ success: false, error: error});
            }
            break;
        case 'POST':
            try {
                const breaking = await Breaking.create(req.body);
                    
                res.status(200).json({ success: true, data: breaking});
            } catch (error) {
                console.log(error);
            }
            break;
        default:
        res.status(400).json({ success: false});
        break;
    }

}
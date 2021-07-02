import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from '../../../utils/dbConnect'
import LeSaviezVous from '../../../models/lesaviezvous'

dbConnect();

export default async (
    req: NextApiRequest, 
    res: NextApiResponse
    ) => {
    const { 
        method 
    } = req;

    switch (method) {
        case 'GET':
            try {
                const lesaviezvous = await LeSaviezVous.find({}, (error, data) => {
                    if (error) {
                        console.log(error)
                    } else {
                        return data;
                    }
                }).sort( { "createdAt": -1 } );
                
                res.status(200).json({ success: true, data: lesaviezvous});
            } catch (error) {
                res.status(400).json({ success: false, error: error});
            }
            break;
        case 'POST':
            try {
                const lesaviezvous = await LeSaviezVous.create(req.body);
                    
                res.status(200).json({ success: true, data: lesaviezvous});
            } catch (error) {
                res.status(400).json({ success: false, error: error});
            }
            break;
        default:
        res.status(400).json({ success: false});
        break;
    }

}
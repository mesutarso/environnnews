import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

import dbConnect from '../../../../utils/dbConnect'
import Article from '../../../../models/article'
import auth0 from '../../../../utils/auth0'

dbConnect();

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
})

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
        if (result instanceof Error) {
            return reject(result)
        }
        return resolve(result)
        })
    })
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    
    await runMiddleware(req, res, cors)
    
    const { 
        query,
        method
    } = req;

    const { categorie } = query

    switch (method) {
        case 'GET':
            try {
                const articles = await Article.find({ categorie : categorie }, (error, data) => {
                    if (error) {
                        console.log(error)
                    } else {
                        return data;
                    }
                }).sort({ "createdAt": -1 }).limit(20);
                
                res.status(200).json({ success: true, data: articles});
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false, error: error});
            }
            break;
        default:
        res.status(400).json({ success: false});
        break;
    }

}
import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

import dbConnect from '../../../utils/dbConnect'
import Search from '../../../models/article'

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

const slugify = str => {
    const map = {
      '-' : ' ',
      //'-' : '_',
      'a' : 'á|à|ã|â|ä|À|Á|Ã|Â|Ä',
      'e' : 'é|è|ê|ë|É|È|Ê|Ë',
      'i' : 'í|ì|î|ï|Í|Ì|Î|Ï',
      'o' : 'ó|ò|ô|õ|ö|Ó|Ò|Ô|Õ|Ö',
      'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
      'c' : 'ç|Ç',
      'n' : 'ñ|Ñ'
    };
  
    for (var pattern in map) {
      str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    }
  
    return str;
}

export default async (
    req: NextApiRequest, 
    res: NextApiResponse
) => {
    
    await runMiddleware(req, res, cors)
    
    const { 
        method 
    } = req;

    switch (method) {
        case 'GET':
            try {
                // GET data
                const search = await Search.find({}).sort( { "createdAt": -1 } );

                // filter Data
                const { query: { q } } = req
                const result = q ?
                search.filter(({ titre }) => slugify(titre).toLowerCase().includes(q)) 
                : []

                // Return data
                res.status(200).json({ success: true, data: result });
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

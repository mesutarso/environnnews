//import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

import dbConnect from '../../../utils/dbConnect'
import Article from '../../../models/article'

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

export default async (
    req, 
    res
) => {

    await runMiddleware(req, res, cors)

    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const article = await Article.findById(id);
                await Article.findByIdAndUpdate(
                    id,
                    { $inc : { views : 1 } },
                    { new: true },
                    (error, response) => {
                        if (error) return console.log(error);
                        else return console.log(response);
                    }
                )
                if (!article) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }else{
                    
                    return res.status(200).json({ success : true, data: article })
                }
            } catch (error) {
                res.status(400).json({ success: false })
            }
            
            break;
        case 'PUT':
            try {
                const article = await Article.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });
    
                if (!article) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }

                return res.status(200).json({ success : true, message: 'objet modifié avec success' })

            } catch (error) {
                console.log(error);
                
                res.status(400).json({ success: false })
            }
                
            break;

        case 'DELETE':

            try {
                const articleDelete = await Article.deleteOne({ _id: id });
    
                if (!articleDelete) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }

                return res.status(200).json({ success : true, message: 'objet supprimé avec succes', data: articleDelete })


            } catch (error) {
                res.status(400).json({ success: false })
            }
                
            break;
        
        default:
            res.status(400).json({ success: false })
            break;
    }
}
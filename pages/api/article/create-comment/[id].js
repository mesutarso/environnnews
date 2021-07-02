//import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from '../../../../utils/dbConnect'
import Article from '../../../../models/article'

dbConnect()

export default async (req, res) => {
    const { 
        method, 
        query: { id }, 
        body: { commenterPseudo, message } 
    } = req;

    switch (method) {
        case 'PATCH':
            try {
                const article = await Article.findById(id);

                if (!article) {
                    return res.status(400).json({ success : false, message: 'objet non trouvé' })
                }else{
                    return await Article.findByIdAndUpdate(
                        { _id: id },
                        {
                            $push: {
                                comments: {
                                    //commenterId: commenterId,
                                    commenterPseudo: commenterPseudo,
                                    message: message,
                                    timestamp: new Date(),
                                }
                            }
                        },
                        //{ new: true },
                        (error, docs) => {
                            if (!error) return res.json({ data: docs })
                            else return res.status(400).json({ error: error })
                        }
                    )
                }
            } catch (error) {
                res.status(400).json({ success: false, error: error })
            }
            
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}
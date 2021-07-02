import mongoose from 'mongoose'

const articleSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: [true, 'Le titre est obligatoire'],
        trim: true,
        maxlength: [200, 'Le titre ne doit pas dépassé 200 caracteres']
    },
    categorie: {
        type: String,
        required: true,
        trim: true
    },
    attaque: {
        type: String,
        required: true,
        trim: true,
        maxlength: [100000, 'Le contenu ne doit pas dépassé 500000 caracteres']
    },
    contenu: {
        type: String,
        required: true,
        trim: true,
        maxlength: [500000, 'Le contenu ne doit pas dépassé 500000 caracteres']
    },
    auteur: {
        type: String,
        required: true,
        trim: true,
        maxlength: [25, "Le nom de l'auteur ne doit pas dépassé 20 caracteres"]
    },
    legende: {
        type: String,
        trim: true
    },
    file: {
        type: String,
        required: false,
        trim: true,
    },
    comments: {
        type: [
            {
                commenterPseudo: String,
                message: String,
                valid: Boolean,
                timestamp: Number
            }
        ],
        //required: true
    },
    views: {
        type: Number,
        default: 0
    }
},{
    timestamps: true
})

export default mongoose.models.Article || mongoose.model('Article', articleSchema)
import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: [true, 'Le nom est obligatoire'],
        trim: true,
        maxlength: [30, 'Le nom ne doit pas dépassé 30 caracteres']
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    contenu: {
        type: String,
        required: true,
        trim: true,
        maxlength: [250, "L'accroche ne doit pas dépassé 250 caracteres"]
    },
},{
    timestamps: true
})

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema)
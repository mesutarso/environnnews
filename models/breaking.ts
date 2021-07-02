import mongoose from 'mongoose'

const breakingSchema = new mongoose.Schema({
    contenu: {
        type: String,
        required: [true, 'Le contenu est obligatoire'],
        trim: true,
        maxlength: [250, 'Le contenu ne doit pas dépassé 90 caracteres']
    }
},{
    timestamps: true
})

export default mongoose.models.Breaking || mongoose.model('Breaking', breakingSchema)
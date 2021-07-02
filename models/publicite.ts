import mongoose from 'mongoose'

const publiciteSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: [true, 'Le titre est obligatoire'],
        trim: true,
        maxlength: [70, 'Le titre ne doit pas dépassé 40 caracteres']
    },
    file: {
        type: String,
        required: true,
        trim: true,
    },
},{
    timestamps: true
})

export default mongoose.models.Publicite || mongoose.model('Publicite', publiciteSchema)
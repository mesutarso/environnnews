import mongoose from 'mongoose'

const realisationSchema = new mongoose.Schema({
    file: {
        type: String,
        required: [true, "L'image est obligatoire"],
        trim: true,
        maxlength: [100, 'Le nom ne doit pas dépassé 30 caracteres']
    },
    description: {
        type: String,
        required: [true, 'La description est obligatoire'],
        trim: true,
        maxlength: [90, 'La description ne doit pas dépassé 90 caracteres']
    }
},{
    timestamps: true
})

export default mongoose.models.Realisation || mongoose.model('Realisation', realisationSchema)
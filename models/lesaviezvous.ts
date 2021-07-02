import mongoose from 'mongoose'

const LeSaviezVousSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: [true, "Le titre est obligatoire"],
        trim: true,
        maxlength: [40, 'Le titre ne doit pas dépassé 40 caracteres']
    },
    file: {
        type: String,
        required: [true, "L'image est obligatoire"],
        trim: true,
    },
},{
    timestamps: true
})

export default mongoose.models.LeSaviezVous || mongoose.model('LeSaviezVous', LeSaviezVousSchema)
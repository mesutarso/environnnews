import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    prenom: {
        type: String,
        required: [true, 'Le prénom est obligatoire'],
        trim: true,
        maxlength: [40, 'Le prénom ne doit pas dépassé 40 caracteres']
    },
    nom: {
        type: String,
        required: [true, 'Le nom est obligatoire'],
        trim: true,
        maxlength: [40, 'Le nom ne doit pas dépassé 40 caracteres']
    },
    sexe: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "L'adresse mail est obligatoire"],
        trim: true,
        maxlength: [50, "L'adresse mail ne doit pas dépassé 50 caracteres"]
    },
    telephone: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        required: [true, "Le role est obligatoire"],
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
},{
    timestamps: true
})

export default mongoose.models.User || mongoose.model('User', userSchema)
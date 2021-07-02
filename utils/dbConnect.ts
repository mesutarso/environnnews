import mongoose from 'mongoose'

const dbConnect = async () => {

    //mongodb+srv://claudemotoba:GhpB2ToutD84A9bt@cluster0.1nfqn.mongodb.net/db_official_environew?retryWrites=true&w=majority
    mongoose.connect('mongodb+srv://claudemotoba:GhpB2ToutD84A9bt@cluster0.1nfqn.mongodb.net/db_official_environew?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('Connexion à la db réussie'))
    .catch(() => console.log('Connexion à la db échouée'));

}

export default dbConnect
import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
    try {
        // S'assurer que la variable d'environnement MONGODB_URL existe
        if (!process.env.MONGODB_URL) {
            throw new Error('La variable d\'environnement MONGODB_URL n\est pas définie');

        }

        // Connexion à MongoDB
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopologye: true
        });

        console.log('Connexté à MongoDB avec succès !');

    } catch (error) {
        console.error('Erreur de connexion à Mongo DB', error.message);
    }
 

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
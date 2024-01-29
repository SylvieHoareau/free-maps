// index.js
import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

// Charger la configuration de dotenv
dotenv.config()

const app = express();
const port = 3000;

// Middleware pour parser le coprs des requêtes JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', { message: 'Bienvenue sur mon projet' })
})

app.get('/sirene', async (req, res) => {
    try {
        // Effectuer la requête de l'API INSEE
        const response = await axios.get('https://api.insee.fr/entreprises/sirene/V3/siret?q=codeCommuneEtablissement:97411', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })

        // Traiter les données et les passer au modèle EJS
        const entreprises = response.data.etablissements

        res.render('sirene', { entreprises })
    } catch (error) {
        if (error.response) {
            // La requête a été faite et le serveur a réponde
            console.error('Erreur de l\'API INSEE', error.response)
            res.status(error.response.status).send('Erreur de l\'API INSEE')
            
        } else if (error.request) {
            // La requête a été faite mais aucune réponse n'a été reçue
            console.error('Aucune réponse reçue de l\'API INSEE')
            res.status(500).send('Erreur lors de la récupération des données')
        } else if (error) {
            // La requête a été faite mais aucune réponse n'a été reçue
            console.error('Erreur lors de la requêt à l\'API INSEE')
            res.status(401).send('Erreur d\'authentification')
        } else {
            // Une erreur s'est produite lors de la configuration de la requête
            console.error('Erreur lors de la requête à l\'API INSEE', error.message)
            res.status(500).send('Erreur lors de la requête à l\'API INSEE')
        }
        
    }
})

// Configuration du moteur de modèle EJS
app.set('view engine', 'ejs');
app.set('views', new URL('./views', import.meta.url).pathname);

// Route principale
app.get('/', (req, res) => {
    res.render('index', { message: 'Bienvenue sur mon projet' })
})

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d\'exécution sur http://localhost:${port}`)
})
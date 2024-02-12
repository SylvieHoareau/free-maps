// index.js
import express from 'express';
import dotenv from 'dotenv';
import { getSireneData, getPopLegales, getFilosofiNbMen, getFilosofiZones, getFilosofiDeclarations, getFloresNA17 } from './services/inseeService.js';

// Charger la configuration de dotenv
dotenv.config()

const app = express();
const port = 5000;

// Middleware pour parser le coprs des requêtes JSON
app.use(express.json());

// Middleware pour servir des fichiers statiques (CSS, image)
app.use(express.static('public'));

// Configuration du moteur de modèle EJS
app.set('view engine', 'ejs');
app.set('views', new URL('./views', import.meta.url).pathname);

// Route principale
app.get('/', (req, res) => {
    res.render('index', { message: 'Bienvenue sur le backoffice' })
})

app.get('/sirene', async (req, res) => {
    try {
        // Effectuer la requête de l'API INSEE
        const data = await getSireneData();
        // Traiter les données et les passer au modèle EJS
        const entreprises = data.etablissements

        res.render('sirene', { entreprises })
      
    } catch (error) {
        if (error.response) {
            // La requête a été faite et le serveur a répondu
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

app.get('/population', async (req, res) => {
    try {
        // Effectuer la requête de l'API INSEE
        const popLegalesData = await getPopLegales();



        res.render('population', { data: popLegalesData })
      
    } catch (error) {
        if (error.response) {
            // La requête a été faite et le serveur a répondu
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

app.get('/filosofi', async (req, res) => {
    try {
        // Effectuer la requête de l'API INSEE
        const filosofiNbData = await getFilosofiNbMen();

        res.render('filosofi', { data: filosofiNbData })
      
    } catch (error) {
        if (error.response) {
            // La requête a été faite et le serveur a répondu
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

app.get('/filosofizones', async (req, res) => {
    try {
        // Effectuer la requête de l'API INSEE
        const filosofiZonesData = await getFilosofiZones();

        res.render('filosofi_zones', { data: filosofiZonesData })
      
    } catch (error) {
        if (error.response) {
            // La requête a été faite et le serveur a répondu
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


app.get('/filosofideclarations', async (req, res) => {
    try {
        // Effectuer la requête de l'API INSEE
        const filosofiDeclarationsData = await getFilosofiDeclarations();

        res.render('filosofi_declarations', { data: filosofiDeclarationsData })
      
    } catch (error) {
        if (error.response) {
            // La requête a été faite et le serveur a répondu
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


// FLORES

app.get('/floresna17', async (req, res) => {
    try {
        // Effectuer la requête de l'API INSEE
        const floresNa17Data = await getFloresNA17();

        res.render('flores_na17', { data: floresNa17Data })
      
    } catch (error) {
        if (error.response) {
            // La requête a été faite et le serveur a répondu
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

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d\'exécution sur http://localhost:${port}`)
})
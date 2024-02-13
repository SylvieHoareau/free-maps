// index.js
import express from 'express';
import dotenv from 'dotenv';
import { 
    getSireneData, 
    getPopLegales, 
    getFilosofiNbMen, 
    getFilosofiZones, 
    getFilosofiDeclarations, 
    getFloresNA17, 
    getAireAttraction, 
    getArrondissement, 
    getArrondissementsMunicipaux, 
    getCollectivitesOM, 
    getBassinsDeVie,
    getCommunes, 
    getDepartements,
    getIntercommunalites} from './services/inseeService.js';

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

// SIRENE

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

// Données Locales | Population

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

// Données Locales | Filosofi

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


// Données Locales | FLORES

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

// Métadonnées | Géographie | Aire d'attraction des villes

app.get('/aireattraction', async (req, res) => {
    try {
        // Effectuer la requête de l'API INSEE
        const aireAttractionData = await getAireAttraction();

        res.render('aire_attraction', { data: aireAttractionData })
      
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

// Métadonnées | Géographie | Arrondissements

app.get('/arrondissement', async (req, res) => {
    try {
        // Effectuer la requête de l'API INSEE
        const arrondissementData = await getArrondissement();

        res.render('arrondissement', { data: arrondissementData })
      
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

// Métadonnées | Géographie | Arrondissements municipaux

app.get('/arrondissementsmunicipaux', async (req, res) => {
    try {
        // Effectuer la requête de l'API INSEE
        const arrondissementsMunicipauxData = await getArrondissementsMunicipaux();

        res.render('arrondissements_municipaux', { data: arrondissementsMunicipauxData })
      
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

// Métadonnées | Géographie | Bassins de vie

app.get('/bassinsdevie', async (req, res) => {
    try {
        // Effectuer la requête de l'API INSEE
        const bassinsDeVieData = await getBassinsDeVie();

        res.render('bassin_vie', { data: bassinsDeVieData })
      
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

// Métadonnées | Géographie | Collectivités d'Outre Mer

app.get('/collectivitesoutremer', async (req, res) => {
    try {
        // Effectuer la requête de l'API INSEE
        const collectivitesDOutreMerData = await getCollectivitesOM();

        res.render('collectivite_outre_mer', { data: collectivitesDOutreMerData })
      
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

// Métadonnées | Géographie | Communes

app.get('/communes', async (req, res) => {
    try {
        // Effectuer la requête de l'API INSEE
        const communesData = await getCommunes();

        res.render('communes', { data: communesData })
      
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

// Métadonnées | Géographie | Départements

app.get('/departements', async (req, res) => {
    try {
        // Effectuer la requête de l'API INSEE
        const departementsData = await getDepartements();

        res.render('departements', { data: departementsData })
      
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

// Métadonnées | Géographie | Intercommunalités

app.get('/intercommunalites', async (req, res) => {
    try {
        // Effectuer la requête de l'API INSEE
        const intercommunalitesData = await getIntercommunalites();

        res.render('intercommunalites', { data: intercommunalitesData })
      
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
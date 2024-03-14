// index.js
import express from 'express';
import dotenv from 'dotenv';
import sireneRoutes from './routes/sireneRoutes.js';
import filosofiRoutes from './routes/filosofiRoutes.js';
import floresRoutes from './routes/floresRoutes.js';
import etatCivilRoutes from './routes/etatCivilRoutes.js';
import populationRoutes from './routes/populationRoutes.js';
import metadonneesRoutes from './routes/metadonneesRoutes.js';
import reeRoutes from './routes/reeRoutes.js';
import tourismeRoutes from './routes/tourismeRoutes.js';
import bdmRoutes from './routes/bdmRoutes.js';

// Charger la configuration de dotenv
dotenv.config()

const app = express();
const port = 5000;

// Middleware pour parser le corps des requêtes JSON
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

// Routes pour INSEE

app.use('/sirene', sireneRoutes);
app.use('/population', populationRoutes);
app.use('/filosofi', filosofiRoutes);
app.use('/flores', floresRoutes);
app.use('/etatcivil', etatCivilRoutes);
app.use('/metadonnees', metadonneesRoutes);
app.use('/ree', reeRoutes);
app.use('/tourisme', tourismeRoutes);
app.use('/bdm', bdmRoutes);

// Gérer les erreurs pour toutes les routes
app.use((error, req, res, next) => {
    console.error('Erreur:', error.message);
    res.status(error.status || 500).send('Erreur lors de la requête à l\'API INSEE');
})

// Middleware pour la page 404
app.use((req, res, next) => {
    res.status(404).render('404');
})

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d\'exécution sur http://localhost:${port}`)
})
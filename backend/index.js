// index.js
import express from 'express';

const app = express();
const port = 3000;

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
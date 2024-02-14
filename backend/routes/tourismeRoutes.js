// routes > sireneRoutes.js
import express from 'express';
const router = express.Router();

import { getTourismeEtoile, getTourismeHebergement } from '../services/inseeService.js';

// Tourisme - Etoiles

router.get('/etoile', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const etoileData = await getTourismeEtoile();
        // Traiter les données et les passer au modèle EJS
        // const entreprises = data.etablissements

        res.render('tourisme_etoile', { data : etoileData })
      
    } catch (error) {
       next(error);
        
    }
})

// Tourisme - Hébergement touristique

router.get('/hebergement', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const herbergementData = await getTourismeHebergement();
        // Traiter les données et les passer au modèle EJS
        // const entreprises = data.etablissements

        res.render('tourisme_hebergement', { data : herbergementData })
      
    } catch (error) {
       next(error);
        
    }
})

export default router;
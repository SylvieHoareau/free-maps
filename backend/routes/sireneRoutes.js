
// routes > sireneRoutes.js
import express from 'express';
const router = express.Router();

import { getSireneData } from '../services/inseeService.js';

// SIRENE

router.get('/sirene', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const data = await getSireneData();
        // Traiter les données et les passer au modèle EJS
        const entreprises = data.etablissements

        res.render('sirene', { entreprises })
      
    } catch (error) {
       next(error);
        
    }
})

export default router;
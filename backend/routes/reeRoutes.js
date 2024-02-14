// routes > reeRoutes.js
import express from 'express';
const router = express.Router();

import { getReeCommunes } from '../services/inseeService.js';

// SIRENE

router.get('/ree', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const reeData = await getReeCommunes();
        // Traiter les données et les passer au modèle EJS
        // const entreprises = data.etablissements

        res.render('ree', { data : reeData })
      
    } catch (error) {
       next(error);
        
    }
})

export default router;
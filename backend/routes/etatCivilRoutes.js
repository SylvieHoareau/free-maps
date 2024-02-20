// routes > etatCivilRoutes.js
import express from 'express';
const router = express.Router();
import { getEtatCivil } from '../services/inseeService.js';

// Données Locales | Etat-Civil

router.get('/etatcivil', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const etatCivilData = await getEtatCivil();

        res.render('etat_civil', { data: etatCivilData })
      
    } catch (error) {
      next(error);
        
    }
})

export default router;
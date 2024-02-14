// routes > sireneRoutes.js
import express from 'express';
const router = express.Router();
import { getPopLegales } from '../services/inseeService.js';

// Données Locales | Population

router.get('/population', async (req, res) => {
    try {
        // Effectuer la requête de l'API INSEE
        const popLegalesData = await getPopLegales();

        res.render('population', { data: popLegalesData })
      
    } catch (error) {
      
        
    }
})

export default router;
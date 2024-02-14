// routes > sireneRoutes.js
import express from 'express';
const router = express.Router();
import { getFloresNA17 } from '../services/inseeService.js';

// Données Locales | FLORES

router.get('/floresna17', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const floresNa17Data = await getFloresNA17();

        res.render('flores_na17', { data: floresNa17Data })
      
    } catch (error) {
      next(error);
        
    }
})

export default router;
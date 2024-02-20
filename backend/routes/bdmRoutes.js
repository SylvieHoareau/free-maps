// routes > bdmRoutes.js
import express from 'express';
const router = express.Router();
import { getClimatAffaires } from '../services/inseeService.js';

// BDM | Climat des affaires

router.get('/climataffaires', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const climatAffairesData = await getClimatAffaires();

        res.render('bdm_climat_affaires', { data: climatAffairesData })
      
    } catch (error) {
      next(error);
        
    }
})

export default router;
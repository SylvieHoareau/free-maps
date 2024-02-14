// routes > sireneRoutes.js
import express from 'express';
const router = express.Router();

import { 
    getFilosofiNbMen, 
    getFilosofiZones, 
    getFilosofiDeclarations } from '../services/inseeService.js';

// Données Locales | Filosofi

router.get('/filosofi', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const filosofiNbData = await getFilosofiNbMen();

        res.render('filosofi', { data: filosofiNbData })
      
    } catch (error) {
       next(error);
        
    }
})

router.get('/filosofizones', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const filosofiZonesData = await getFilosofiZones();

        res.render('filosofi_zones', { data: filosofiZonesData })
      
    } catch (error) {
       next(error);
    }
})


router.get('/filosofideclarations', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const filosofiDeclarationsData = await getFilosofiDeclarations();

        res.render('filosofi_declarations', { data: filosofiDeclarationsData })
      
    } catch (error) {
       next(error);
        
    }
})

export default router;
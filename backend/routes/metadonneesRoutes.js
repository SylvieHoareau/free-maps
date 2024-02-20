
// routes > sireneRoutes.js
import express from 'express';
const router = express.Router();
import { 
    getAireAttraction, 
    getArrondissement, 
    getArrondissementsMunicipaux, 
    getBassinsDeVie, 
    getCollectivitesOM, 
    getCommunes, 
    getDepartements, 
    getIntercommunalites, 
    getPays,
    getRegions,
    getUnitesUrbaines,
    getZonesEmploi,
    getConcepts } from '../services/inseeService.js';

// Métadonnées | Géographie | Aire d'attraction des villes

router.get('/aireattraction', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const aireAttractionData = await getAireAttraction();

        res.render('aire_attraction', { data: aireAttractionData })
      
    } catch (error) {
        next(error);
        
    }
})

// Métadonnées | Géographie | Arrondissements

router.get('/arrondissement', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const arrondissementData = await getArrondissement();

        res.render('arrondissement', { data: arrondissementData })
      
    } catch (error) {
        next(error);
    }
        
})

// Métadonnées | Géographie | Arrondissements municipaux

router.get('/arrondissementsmunicipaux', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const arrondissementsMunicipauxData = await getArrondissementsMunicipaux();

        res.render('arrondissements_municipaux', { data: arrondissementsMunicipauxData })
      
    } catch (error) {
        next(error);
        
    }
})

// Métadonnées | Géographie | Bassins de vie

router.get('/bassinsdevie', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const bassinsDeVieData = await getBassinsDeVie();

        res.render('bassin_vie', { data: bassinsDeVieData })
      
    } catch (error) {
     next(error);
        
    }
})

// Métadonnées | Géographie | Collectivités d'Outre Mer

router.get('/collectivitesoutremer', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const collectivitesDOutreMerData = await getCollectivitesOM();

        res.render('collectivite_outre_mer', { data: collectivitesDOutreMerData })
      
    } catch (error) {
        next(error);
        
    }
})

// Métadonnées | Géographie | Communes

router.get('/communes', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const communesData = await getCommunes();

        res.render('communes', { data: communesData })
      
    } catch (error) {
        next(error);
        
    }
})

// Métadonnées | Géographie | Départements

router.get('/departements', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const departementsData = await getDepartements();

        res.render('departements', { data: departementsData })
      
    } catch (error) {
        next(error);
        
    }
})

// Métadonnées | Géographie | Intercommunalités

router.get('/intercommunalites', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const intercommunalitesData = await getIntercommunalites();

        res.render('intercommunalites', { data: intercommunalitesData })
      
    } catch (error) {
        next(error);
        
    }
})

// Métadonnées | Géographie | Pays

router.get('/pays', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const paysData = await getPays();

        res.render('pays', { data: paysData })
      
    } catch (error) {
        next(error);
        
    }
})


// Métadonnées | Géographie | Régions

router.get('/regions', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const regionsData = await getRegions();

        res.render('regions', { data: regionsData })
      
    } catch (error) {
        next(error);
        
    }
})

// Métadonnées | Géographie | Unités Urbaines

router.get('/unitesurbaines', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const unitesUrbainesData = await getUnitesUrbaines();

        res.render('unites_urbaines', { data: unitesUrbainesData })

    } catch (error) {
        next(error);
    }
})

// Métadonnées | Géographie | Zones d'emploi

router.get('/zonesemplois', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const zonesEmploisData = await getZonesEmploi();

        res.render('zone_emploi', { data: zonesEmploisData })

    } catch (error) {
        next(error);
    }
})

// Métadonnées | Concepts

router.get('/concepts', async (req, res, next) => {
    try {
        // Effectuer la requête de l'API INSEE
        const conceptsData = await getConcepts();

        res.render('concepts', { data: conceptsData });

    } catch (error) {
        next(error);
    }
})

export default router;
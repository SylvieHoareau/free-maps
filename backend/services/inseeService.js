import axios from 'axios';

// Sirene

const getSireneData = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/entreprises/sirene/V3/siret?q=codeCommuneEtablissement:97411', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Populations légales

const getPopLegales = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/donnees-locales/V0.1/donnees/geo-IND_POPLEGALES@POPLEG2020/COM-97411.1', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Filosofi

const getFilosofiNbMen = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/donnees-locales/V0.1/donnees/geo-INDICS_FILO_DISP@GEO2022FILO2020/COM-97411.1', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

const getFilosofiZones = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/donnees-locales/V0.1/donnees/geo-INDICS_FILO_DISP_DET@GEO2022FILO2020/COM-97411.1', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

const getFilosofiDeclarations = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/donnees-locales/V0.1/donnees/geo-INDICS_FILO_DEC_DET@GEO2022FILO2020/COM-97411.1', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Données Locales | Flores

const getFloresNA17 = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/donnees-locales/V0.1/donnees/geo-NA17@GEO2022FLORES2020/COM-97411.ALL', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Données locales | Etat-Civil

const getEtatCivil = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/donnees-locales/V0.1/donnees/geo-INDICS_ETATCIVIL@GEO2022RFD2021/COM-97411.1', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}


// Métadonnées - Géographie

// Métadonnées | Aires d'attraction des villes

const getAireAttraction = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/metadonnees/V1/geo/airesDAttractionDesVilles2020?date=2023-02-13', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Métadonnées | Arrondissements

const getArrondissement = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/metadonnees/V1/geo/arrondissements?date=2023-02-13', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Métadonnées | Arrondissements municipaux

const getArrondissementsMunicipaux = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/metadonnees/V1/geo/arrondissementsMunicipaux?date=2023-02-13', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Métadonnées | Bassins de vie

const getBassinsDeVie = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/metadonnees/V1/geo/bassinsDeVie2022?date=2023-02-13', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Métadonnées | Collectivité d'Outre-Mer

const getCollectivitesOM = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/metadonnees/V1/geo/collectivitesDOutreMer?date=2023-02-13', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Métadonnées | Communes

const getCommunes = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/metadonnees/V1/geo/communes?date=2024-02-17&com=false', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Métadonnées | Départements

const getDepartements = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/metadonnees/V1/geo/departements?date=2024-02-17', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Métadonnées | Intercommunalités

const getIntercommunalites = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/metadonnees/V1/geo/intercommunalites?date=2024-02-17', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Métadonnées | Pays

const getPays = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/metadonnees/V1/geo/pays/99333', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Métadonnées | Régions

const getRegions = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/metadonnees/V1/geo/regions?date=2024-02-20', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Métadonnées | Unités Urbaines

const getUnitesUrbaines = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/metadonnees/V1/geo/unitesUrbaines2020?date=2024-02-20', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Métadonnées | Zone d'emploi

const getZonesEmploi = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/metadonnees/V1/geo/zonesDEmploi2020?date=2024-02-20', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// REE (Répertoire des entreprises et établissements 2021)

const getReeCommunes = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/donnees-locales/V0.1/donnees/geo-NA10_HORS_AZ@GEO2022REE2021/COM-97411.ALL', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Tourisme - Etoiles


const getTourismeEtoile = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/donnees-locales/V0.1/donnees/geo-ETOILE@GEO2022TOUR2023/COM-97411.ALL', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Tourisme - Hébergement touristique

const getTourismeHebergement = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/donnees-locales/V0.1/donnees/geo-HEBCOLL_SANS_HOTCPG@GEO2022TOUR2023/COM-97411.ALL', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

// Concepts

const getConcepts = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/metadonnees/V1/concepts/definitions', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}


export { 
    getSireneData,
    getPopLegales,
    getFilosofiNbMen,
    getFilosofiZones,
    getFilosofiDeclarations,
    getFloresNA17,
    getEtatCivil,
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
    getReeCommunes,
    getTourismeEtoile,
    getTourismeHebergement,
    getConcepts
};
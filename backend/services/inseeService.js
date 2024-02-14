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

// Flores

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


// Métadonnées - Géographie

// Aires d'attraction des villes

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

// Arrondissements

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

// Arrondissements municipaux

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

// Bassins de vie

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

// Collectivité d'Outre-Mer

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

// Communes

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

// Départements

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

// Intercommunalités

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


export { 
    getSireneData,
    getPopLegales,
    getFilosofiNbMen,
    getFilosofiZones,
    getFilosofiDeclarations,
    getFloresNA17,
    getAireAttraction,
    getArrondissement,
    getArrondissementsMunicipaux,
    getBassinsDeVie,
    getCollectivitesOM,
    getCommunes,
    getDepartements,
    getIntercommunalites,
    getReeCommunes,
    getTourismeEtoile,
    getTourismeHebergement
};
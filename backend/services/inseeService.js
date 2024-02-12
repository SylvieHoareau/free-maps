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


export { 
    getSireneData,
    getPopLegales,
    getFilosofiNbMen,
    getFilosofiZones,
    getFilosofiDeclarations,
    getFloresNA17
};
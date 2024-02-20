import axios from 'axios';

// Sirene

const getClimatAffaires = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/series/BDM/V1/data/FR1%2CCLIMAT-AFFAIRES%2C1.0/?detail=full', {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN_INSEE}`,
                'Accept': 'application/vnd.sdmx.structurespecificdata+xml;version=2.1'
            }
        })
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching INSEE data: ${error.message}`);
    }
}

export {
    getClimatAffaires
}
import axios from 'axios';

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

export { getSireneData };
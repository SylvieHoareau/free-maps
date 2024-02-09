import axios from 'axios';

const getIgnData = async () => {
    try {
        const response = await axios.get('https://api.insee.fr/entreprises/sirene/V3/siret?q=codeCommuneEtablissement:92046')
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching IGN  data: ${error.message}`);
    }
}

export default { getIgnData }
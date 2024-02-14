// utils.js
export const handleApiRequest = async (apiFunction) => {
    try {
        const data = await apiFunction();
        return data;
    } catch (error) {
        throw error;
    }
}

export const renderPageWithError = (res, error) => {
    if (error.response) {
        // La requête a été faite et le serveur a répondu
        console.error('Erreur de l\'API INSEE', error.response)
        res.status(error.response.status).send('Erreur de l\'API INSEE')
        
    } else if (error.request) {
        // La requête a été faite mais aucune réponse n'a été reçue
        console.error('Aucune réponse reçue de l\'API INSEE')
        res.status(500).send('Erreur lors de la récupération des données')
    } else if (error) {
        // La requête a été faite mais aucune réponse n'a été reçue
        console.error('Erreur lors de la requêt à l\'API INSEE')
        res.status(401).send('Erreur d\'authentification')
    } else {
        // Une erreur s'est produite lors de la configuration de la requête
        console.error('Erreur lors de la requête à l\'API INSEE', error.message)
        res.status(500).send('Erreur lors de la requête à l\'API INSEE')
    }
}
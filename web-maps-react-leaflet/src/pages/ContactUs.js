import React from 'react'
// import '../../node_modules/leaflet/dist/leaflet.css'; // Fichier CSS de Leaflet
// import '../../node_modules/react-leaflet/dist/react-leaflet.css'; // Fichier CSS de react-leaflet

const ContactUs = () => {

    return (
        <section>
            <h1>Pour nous contacter</h1>
            <form>
                <input type="text" id="name"></input>
                <label for="name">Nom</label>
                <input type="textarea" id="message"></input>
                <label for="message"></label>
            </form>
        </section>
       
    )
}

export default ContactUs
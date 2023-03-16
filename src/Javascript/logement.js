// Fonction qui a pour but de récuperer l'id dans l'URL 
const getIdFromUrl = () => {
    const url = window.location.href
    // découpe l'url en morceau séparer par le "/"
    const urlSplited = url.split('/')
    // Récuperation du dernier morceau qui contier l'id 
    return urlSplited[4]
}

export default getIdFromUrl;
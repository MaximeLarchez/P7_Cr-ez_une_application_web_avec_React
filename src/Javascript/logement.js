const getIdFromUrl = () => {
    const url = window.location.href
    const urlSplited = url.split('/')
    return urlSplited[4]
}

export default getIdFromUrl;
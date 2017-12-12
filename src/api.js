const REQUESTING_API = 'http://localhost:8080/headlesswordpress/wp-json/acf/v3';

export const getEvents = async () => {
    return await fetch(`${REQUESTING_API}/events`)
    .then(res => res.json()).then(event => event)
}

const REQUESTING_API = 'http://localhost:8080/headlesswordpress/wp-json/acf/v3';

export const resourcesLinks = {
	doc				: "https://docs.google.com/presentation/d/e/2PACX-1vRp8O8oDXwxOZkRlLpQO3mustC1Qb9mbwomAVzyVqn-vymNTAo_B0oO4PpD6Po3FtLWygJCT8WYsjOT/pub?start=false&loop=false&delayms=3000",
	frontendRepo	: "https://github.com/reyesmhelvin/Decoupled-ReactJs-Frontend",
	backendRepo		: "https://github.com/reyesmhelvin/Decoupled-WordPress-Backend"
}

export const getEvents = async () => {
    return await fetch(`${REQUESTING_API}/events`)
    .then(res => res.json()).then(event => event)
}

//public key c6d4e51fda234d5d9b548bd8c9179494
// private key 1d136dce96dabc365f4600f71cb7cb6df68ef4077
// link https://gateway.marvel.com:443/v1/public/characters?apikey=c6d4e51fda234d5d9b548bd8c9179494

const marvel ={
    render:()=>{
        const urlAPI ='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c6d4e51fda234d5d9b548bd8c9179494&hash=89afe7753e8f5fba755e6ab28c996f4e';
        const container = document.querySelector('#marvel-row');
        let contentHTML ='';
try {
    fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
        for (const hero of json.data.results) {
        const { path, extension} = hero.thumbnail
        const {name} = hero
            let urlHero = hero.urls[0].url;
            contentHTML += `
            <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                    <img src="${path}.${extension}" alt="${name}" class="img-thumbnail">
                </a>
                <h3 class="title">${name}</h3>
            </div>`;
        }
        container.innerHTML = contentHTML;
        })
} catch (error) {
    console.log(error)
}
        
    }
};
marvel.render();
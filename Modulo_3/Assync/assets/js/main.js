const url = "https://aws.random.cat/meow"
const carregamento = document.getElementById('carregamento')

window.onload = async () => {
    let imgCat = document.getElementById('imgCat')
    imgCat.src = await consultaApi(url)
}

const changeCat = async (id) => {
    let imgCat = document.getElementById(id)
    imgCat.style.display = "none"
    carregamento.style.display = "block"
    imgCat.src = await consultaApi(url)
    imgCat.style.display = "block"
    carregamento.style.display = "none"
}

async function consultaApi(url) {
    try {
        const data = await fetch(url)
        const json = await data.json()
        return json.file
    }catch(e){
        console.log(e)
    }
}

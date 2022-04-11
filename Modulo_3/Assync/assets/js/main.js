const url = "https://aws.random.cat/meow"

window.onload = async () => {
    let imgCat = document.getElementById('imgCat')
    imgCat.src = await consultaApi(url)
}

const changeCat = async (id) => {
    let imgCat = document.getElementById(id)
    imgCat.src = await consultaApi(url)
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

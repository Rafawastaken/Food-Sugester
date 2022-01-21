// Api Link https://spoonacular.com/food-api

const tituloReceita = document.querySelector('.titulo-receita');
const howToReceita = document.getElementById('recipe-howto');
const btnNovaReceita = document.getElementById('btn-gerar')
const imgLink = document.getElementById('image-receita');

let apiResponse = {};

// Fetch Request
function getRequest(){
    const resultFetch =  fetch('https://api.spoonacular.com/recipes/random?apiKey=API')
        .then(function(response){
            return response.json();
        })
        .then(function(res){
            createPage(res)
        })

    return resultFetch;
}

function createPage(apiResponse){
    foodTitle = apiResponse.recipes[0].title
    howTo = apiResponse.recipes[0].instructions
    imagem = apiResponse.recipes[0].image;

    tituloReceita.innerHTML = foodTitle;
    howToReceita.innerHTML = howTo;
    imgLink.src = imagem;
    
    console.log(apiResponse)

    return
}

btnNovaReceita.addEventListener('click', function(e){
    e.preventDefault();
    getRequest()
})

getRequest();
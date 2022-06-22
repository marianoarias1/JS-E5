const Pizzas = [
    {
        id: 1,
        nombre: "especial",
        ingredientes: ["morron", "jamon", "queso", "aceitunas", "salsa"],
        precio: 600,
        imagen: "https://safariresto.com.ar/wp-content/uploads/2020/10/pizza-especial.jpg"
    },

    {
        id:2,
        nombre: "muzzarella",
        ingredientes: ["queso muzzarella", "oregano", "aceitunas"],
        precio: 450,
        imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/133/466/products/copia-de-pizza-mozarella1-f27baa3e01887f9e6416299067526593-640-0.jpg"
    },

    {
        id:3,
        nombre: "calabresa",
        ingredientes: ["pimineta", "oregano", "aceitunas", "queso", "calabresa en rodajas","salsa"],
        precio: 500,
        imagen: "https://2.bp.blogspot.com/-m6RfYv5vpew/V963mokwP6I/AAAAAAAAAQo/4yaWS4kkAvsAEBGFGNr6sHigjzmaddPAACLcB/w1200-h630-p-k-no-nu/pizza%2Bcalabresa.jpg"
    },

    {
        id:4,
        nombre: "albahaca",
        ingredientes: ["jamon", "queso","tomate","albahaca","salsa"],
        precio: 350,
        imagen: "https://recetinas.com/wp-content/uploads/2017/09/pizza-de-albahaca-y-tomatitos-cherry-receta.jpg"
    },

    {
        id:5,
        nombre: "jamon crudo",
        ingredientes:["queso","jamon crudo","aceitunas","salsa"],
        precio: 600,
        imagen: "https://www.recetasnatura.com.ar/sites/default/files/styles/receta_cuerpo/public/pizza-de-jamon-crudo-rucula-y-tomates-secos.jpg?itok=jdGKX1y9"
    },

    {
        id:6,
        nombre: "cuatro quesos",
        ingredientes: ["queso muzzarella","queso roquefort","queso cremoso","queso parmesano","aceitunas"],
        precio:350,
        imagen: "https://assets.unileversolutions.com/recipes-v2/216503.jpg"
    }
    
]


const buttonSend=  document.getElementById('button_send');
const mensajeInicial= document.getElementById('mensaje_inicial');
const contPizzas= document.getElementById('cont-pizzas');
const inputPizza= document.getElementById('pizza_ID');

const renderPizzas= ()=>{
    Pizzas.forEach(e => {

        const cardSeparator= document.createElement('div');
        cardSeparator.classList.add('card_separator');
    
        const cardPizzas= document.createElement('div');
        cardPizzas.classList.add('card_pizzas');
    
        const contIMG= document.createElement('div');
        contIMG.classList.add('cont_img');
        const imagenCard= document.createElement('img');
        imagenCard.setAttribute('src', e.imagen);
        contIMG.appendChild(imagenCard);
    
        const contNamePrice= document.createElement('div');
        contNamePrice.classList.add('cont_name_price');
        const PizzaName= document.createElement('span');
        const pizzaNameText= document.createTextNode(e.nombre);
        PizzaName.appendChild(pizzaNameText);
        const PizzaPrice= document.createElement('span');
        const pizzaPriceText= document.createTextNode(`$${e.precio}`);
        PizzaPrice.appendChild(pizzaPriceText);
        contNamePrice.appendChild(PizzaName);
        contNamePrice.appendChild(PizzaPrice);
    
        const contIngredientes= document.createElement('div');
        contIngredientes.classList.add('cont_ingredientes');
    
        e.ingredientes.map((ingrediente)=>{
            const ingredientesSelected= document.createElement('span');
            const ingredientesText= document.createTextNode(ingrediente);
            ingredientesSelected.appendChild(ingredientesText);
            contIngredientes.appendChild(ingredientesSelected);
        });
    
        cardPizzas.appendChild(contIMG);
        cardPizzas.appendChild(contNamePrice);
        cardPizzas.appendChild(contIngredientes);
    
        
        cardSeparator.appendChild(cardPizzas);
        contPizzas.appendChild(cardSeparator);
    });

}

document.addEventListener('DOMContentLoaded', ()=>{
    const PizzasLocal= localStorage.setItem('Pizzas', JSON.stringify(Pizzas));
    renderPizzas(Pizzas);
})

/*
 <div class="card_separator">

    <div class="card_pizzas">
        <div class="cont_img">
            <img src="https://www.recetasnatura.com.ar/sites/default/files/styles/receta_cuerpo/public/pizza-de-jamon-crudo-rucula-y-tomates-secos.jpg?itok=jdGKX1y9" alt="">
        </div>

        <div class="cont_name_price">
            <span id="pizza_name">Nombre</span>
            <span id="pizza_price">Precio</span>
        </div>

        <div class="cont_ingredientes">
            <span>ingrediente</span>
            <span>ingrediente</span>
            <span>ingrediente</span>
            <span>ingrediente</span>
        </div>

    </div>

</div> 
*/



const funcionPizzas=(Pizzas)=>{

    buttonSend.addEventListener('click',(e)=>{

        let valorInput= inputPizza.value.toLowerCase();
        const pizzaSelected= Pizzas.find((Pizzas)=>Pizzas.nombre === valorInput);
        
        if(!pizzaSelected){
            alert('Ingresa un nombre válido!');
            inputPizza.value=''
            
            while (contPizzas.firstChild) {
                contPizzas.removeChild(contPizzas.lastChild);
            }

            renderPizzas(Pizzas)
        }
        else{
            while (contPizzas.firstChild) {
                contPizzas.removeChild(contPizzas.lastChild);
            }

            const cardSeparator= document.createElement('div');
            cardSeparator.classList.add('card_separator');
        
            const cardPizzas= document.createElement('div');
            cardPizzas.classList.add('card_pizzas');
        
            const contIMG= document.createElement('div');
            contIMG.classList.add('cont_img');
            const imagenCard= document.createElement('img');
            imagenCard.setAttribute('src', pizzaSelected.imagen);
            contIMG.appendChild(imagenCard);
        
            const contNamePrice= document.createElement('div');
            contNamePrice.classList.add('cont_name_price');
            const PizzaName= document.createElement('span');
            const pizzaNameText= document.createTextNode(pizzaSelected.nombre);
            PizzaName.appendChild(pizzaNameText);
            const PizzaPrice= document.createElement('span');
            const pizzaPriceText= document.createTextNode(`$${pizzaSelected.precio}`);
            PizzaPrice.appendChild(pizzaPriceText);
            contNamePrice.appendChild(PizzaName);
            contNamePrice.appendChild(PizzaPrice);
        
            const contIngredientes= document.createElement('div');
            contIngredientes.classList.add('cont_ingredientes');
        
            pizzaSelected.ingredientes.map((ingrediente)=>{
                const ingredientesSelected= document.createElement('span');
                const ingredientesText= document.createTextNode(ingrediente);
                ingredientesSelected.appendChild(ingredientesText);
                contIngredientes.appendChild(ingredientesSelected);
            });
        
            cardPizzas.appendChild(contIMG);
            cardPizzas.appendChild(contNamePrice);
            cardPizzas.appendChild(contIngredientes);
        
            
            cardSeparator.appendChild(cardPizzas);
            contPizzas.appendChild(cardSeparator);

        }
    })
}

funcionPizzas(Pizzas);
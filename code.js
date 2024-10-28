let peticion = fetch("https://v6.exchangerate-api.com/v6/3384d4efe3a09df310fb9f8c/latest/USD");

let ingresaCantidad = document.getElementById("quantity");
let ingresarMoneda = document.getElementById("currency_i_have");
let ingresarMonedaCompra = document.getElementById("currency_i_want");
let boton = document.getElementById("boton");
let cant = 0;
let moneda = "USD";
let monedaCompra = "ARS";
let divResultado = document.getElementById("result");
let convertido = conversion();
let contenidoDiv = `<p class="section__form__div__p"> Sus ${moneda}${cant} tienen un valor de ${monedaCompra}${convertido}</p>`

ingresarMoneda.addEventListener("change", ()=> moneda = ingresarMoneda.value);
ingresaCantidad.addEventListener("change", ()=> cant = ingresaCantidad.value);
ingresarMonedaCompra.addEventListener("change", ()=> monedaCompra = ingresarMonedaCompra.value);
boton.addEventListener("click", ()=> {
    divResultado.style.display = "block";
    // console.log(`Quiere cambiar ${moneda}${cant} a ${monedaCompra}`);//test
});

//GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD

peticion
    .then(res=>res.text())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

console.log(peticion);

const conversion = ()=> {
    
}
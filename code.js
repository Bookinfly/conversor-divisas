let peticion = fetch("https://v6.exchangerate-api.com/v6/3384d4efe3a09df310fb9f8c/latest/USD");

let ingresaCantidad = document.getElementById("quantity");
let ingresarMoneda = document.getElementById("currency_i_have");
let ingresarMonedaCompra = document.getElementById("currency_i_want");
let boton = document.getElementById("boton");
let cant = 0;
let moneda = document.getElementById("currency_i_have").value;
let monedaCompra = document.getElementById("currency_i_want").value;
let divResultado = document.getElementById("result");
// let convertido = conversion();
let contenidoDiv = `<p class="section__form__div__p"> Sus ${moneda}${cant} tienen un valor de ${monedaCompra}${cant}</p>`
let conversiones;

ingresarMoneda.addEventListener("change", ()=> moneda = ingresarMoneda.value);
ingresaCantidad.addEventListener("change", ()=> cant = ingresaCantidad.value);
ingresarMonedaCompra.addEventListener("change", ()=> monedaCompra = ingresarMonedaCompra.value);
boton.addEventListener("click", ()=> {
    let res;
    divResultado.style.display = "block";
    res = conversion();
    divResultado.innerHTML = ` ${moneda }${cant} tiene un valor de ${monedaCompra }${res}`;
});

//GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD

const conversion = ()=> {
    let modAUSD = conversiones[moneda];//notacion de corchetes para acceder a una key de un json con el valor de una variable
    let dolarizado = cant / modAUSD;//de ser USD es 1/1 no hace dif y ninguna moneda vale 0 como para tener un 0/0 que de problemas
    let modARes = conversiones[monedaCompra];
    valorFinal = monedaCompra != "USD"? (dolarizado * modARes) : dolarizado;
    return valorFinal;
}

peticion
    .then(res=>res.json())
    .then(res=>{
        conversiones = res.conversion_rates
        console.log(conversiones)
    })
    .catch(err=>console.log(err));









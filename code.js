let peticion = fetch("https://v6.exchangerate-api.com/v6/3384d4efe3a09df310fb9f8c/latest/USD");

let ingresaCantidad = document.getElementById("quantity");
let ingresarMoneda = document.getElementById("currency_i_have");
let ingresarMonedaCompra = document.getElementById("currency_i_want");
let boton = document.getElementById("boton");
let sectionTable = document.getElementsByClassName("section--comparation")[0];
let cant = 0;
let moneda = document.getElementById("currency_i_have").value;
let monedaCompra = document.getElementById("currency_i_want").value;
let divResultado = document.getElementById("result");//seleccionamos el div dondé vamos a insertar el HTML
let contenidoDiv = `<p class="section__form__div__p"> Sus ${moneda} ${cant} tienen un valor de ${monedaCompra} ${cant}</p>`
let conversiones, pesosAr, pesosUr, euros, dolar, reales, fecha;

ingresarMoneda.addEventListener("change", ()=> moneda = ingresarMoneda.value);
ingresaCantidad.addEventListener("change", ()=> cant = ingresaCantidad.value);
ingresarMonedaCompra.addEventListener("change", ()=> monedaCompra = ingresarMonedaCompra.value);
boton.addEventListener("click", ()=> {
    let res;
    res = conversion();
    divResultado.innerHTML = ` ${moneda }${cant} tiene un valor de ${monedaCompra }${res}`;
    divResultado.style.display = "block";//muestra el div oculto
});

const conversion = ()=> {
    let modifAUSD = conversiones[moneda];//notacion de corchetes para acceder a una key de un json con el valor de una variable
    let dolarizado = cant / modifAUSD;//de ser USD es 1/1 no hace dif y ninguna moneda vale 0 como para tener un 0/0 que de problemas
    let modARes = conversiones[monedaCompra];
    valorFinal = monedaCompra != "USD"? (dolarizado * modARes) : dolarizado;
    return valorFinal;
}

const crearTabla = ()=>{
    let table =
    `<table class="section__table">
        <caption class="section__table__caption">Valores Actuales</caption>
        <thead class="section__table__thead">
            <tr>
                <th>Moneda</th>
                <th>1 Dólar es igual a</th>
            </tr>
        </thead>
        <tr>
            <td>Pesos Argentinos</td>
            <td>${pesosAr}</td>
        </tr>
        <tr>
            <td>Euros</td>
            <td>${euros}</td>
        </tr>
        <tr>
            <td>Reales</td>
            <td>${reales}</td>
        </tr>
        <tr>
            <td>Pesos Uruguayos</td>
            <td>${pesosUr}</td>
        </tr>
        <tfoot>
            <tr>
                <td class="borde1">Fecha: </td>
                <td class="borde2">${fecha}</td>
            </tr>
        </tfoot>
    </table>`
    sectionTable.innerHTML = table;
}

peticion
    .then(res=>res.json())
    .then(res=>{
        conversiones = res.conversion_rates
        pesosAr = conversiones.ARS;
        pesosUr = conversiones.UYU;
        reales = conversiones.BRL;
        euros = conversiones.EUR;
        fecha = res.time_last_update_utc
        console.log(fecha)
        crearTabla();
    })
    .catch(err=>console.log(err));





////los valores de la tabla requieren ajustarse para ser comparados con 1 dólar
////la tabla no aparece, algún problema hay




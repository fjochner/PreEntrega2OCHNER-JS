//Saludar
function saludar (nombre, apellido) {
    alert(`Bienvenido ${nombre} ${apellido} a Coder Burger. Por favor, seleccione su pedido`)
}
nombre = prompt ("Escriba su nombre")
apellido = prompt ("Escriba su apellido")

saludar (nombre, apellido)

//contenido

const hamburguesa = document.querySelector(".hamburguesa")
const acompaniamiento = document.querySelector(".acompaniamiento")
const bebida = document.querySelector(".bebida")


//hamburguesa

let hamburguesas = [
    {id: 101, nombre: "Simple", precio: 1000, descripcion: "Hamburguesa con 100 gramos de carne 100% vacuna sola.", demora: 20},
    {id: 102, nombre: "a caballo", precio: 2000, descripcion: "Hamburguesa con 100 gramos de carne 100% vacuna con huevo frito.", demora: 25},
    {id: 103, nombre: "Cheeseburger", precio: 2300, descripcion: "Hamburguesa con 100 gramos de carne 100% vacuna con queso cheddar.", demora: 30}
]

const hamburguesaContainer = document.querySelector('.hamburguesa');

hamburguesas.forEach(c => {
    let column = document.createElement('div')
    column.classList.add('col-md-4')

    let burger = document.createElement("div")
    burger.innerHTML = `
    <div class="bg-black bg-opacity-10 m-5 p-4">
        <h3>Hamburguesa ${c.nombre}</h3>
        <h4><b>$${c.precio}</b></h4>
        <p>${c.descripcion}</p>
        <button class="btn btn-warning">Seleccionar Hamburguesa</button>
    </div>
    `

    column.appendChild(burger)
    hamburguesaContainer.appendChild(column)
})
//acompañamiento

let acompaniamientos = [
    {id: 201, nombre: "Papas fritas", precio: 1000, descripcion: "Acompañamiento de papas fritas solas.", demora: 15},
    {id: 202, nombre: "Papas fritas con cheddar y bacon", precio: 1200, descripcion: "Acompañamiento de papas fritas con queso cheddar y bacon.", demora: 25},
    {id: 203, nombre: "Ensalada Mixta", precio: 1500, descripcion: "Acompañamiento de ensalada mixta de Lechuga, Tomate y Cebolla", demora: 20}
]

const acompaniamientoContainer = document.querySelector('.acompaniamiento')

acompaniamientos.forEach(b => {
    let column = document.createElement('div')
    column.classList.add('col-md-4')

    let acomp = document.createElement("div")
    acomp.innerHTML = `
    <div class="bg-light bg-opacity-10 m-5 p-4">
        <h3>${b.nombre}</h3>
        <h4><b>$${b.precio}</b></h4>
        <p>${b.descripcion}</p>
        <button class="btn btn-warning">Seleccionar Acompañamiento</button>
    </div>
    `

    column.appendChild(acomp);
    acompaniamientoContainer.appendChild(column)
})

//bebida

let bebidas = [
    {id: 301, nombre: "Agua", precio: 500, demora: 0},
    {id: 302, nombre: "Jugo de Naranja", precio: 600, demora: 0},
    {id: 303, nombre: "Coca Cola", precio: 700, demora: 0}
]

const bebidaList = document.querySelector('.bebida-list')

bebidas.forEach(a => {
    let column = document.createElement('div')
    column.classList.add('col-md-4')

    let beb = document.createElement("div")
    beb.innerHTML = `
    <div class="bg-black bg-opacity-10 m-5 p-4">
        <h3>${a.nombre}</h3>
        <h4><b>$${a.precio}</b></h4>
        <button class="btn btn-warning">Seleccionar Bebida</button>
    </div>
    `

    column.appendChild(beb)
    bebidaList.appendChild(column)
})

//Realizar pedido

//pedido de hamburguesas
let pedidoHamburguesa = prompt(`Seleccione su hamburguesa (solo numero): 
1- Simple
2- A caballo
3- Cheeseburger`)

if(pedidoHamburguesa == 1) {
    pedidoHamburguesa = hamburguesas [0]
}else if(pedidoHamburguesa == 2) {
    pedidoHamburguesa = hamburguesas [1]
}else if(pedidoHamburguesa == 3) {
    pedidoHamburguesa = hamburguesas [2]
}else {
    pedidoHamburguesa = "Solicitud invalida"
}
//pedido de acompañamiento
let pedidoAcompaniamiento = prompt(`Seleccione su acompañamiento (solo numero):
1- Papas fritas
2- Papas fritas con cheddar y bacon
3- Ensalada Mixta`)

if(pedidoAcompaniamiento == 1) {
    pedidoAcompaniamiento = acompaniamientos [0]
}else if(pedidoAcompaniamiento == 2) {
    pedidoAcompaniamiento = acompaniamientos [1]
}else if(pedidoAcompaniamiento == 3) {
    pedidoAcompaniamiento = acompaniamientos [2]
}else {
    pedidoAcompaniamiento = "Solicitud invalida"
}

//pedido de bebida
let pedidoBebida = prompt(`Seleccione su bebida (solo numero):
1- Agua
2- Jugo de naranja
3- Coca Cola`)

if(pedidoBebida == 1) {
    pedidoBebida = bebidas [0]
}else if(pedidoBebida == 2) {
    pedidoBebida = bebidas [1]
}else if(pedidoBebida == 3) {
    pedidoBebida = bebidas [2]
}else {
    pedidoBebida = "Solicitud invalida"
}

//pedido final
let suPedido = []

suPedido.push (pedidoHamburguesa.nombre, pedidoAcompaniamiento.nombre, pedidoBebida.nombre, pedidoHamburguesa.precio + pedidoAcompaniamiento.precio + pedidoBebida.precio, Math.max(pedidoHamburguesa.demora, pedidoAcompaniamiento.demora, pedidoBebida.demora))


function pedido (principal, compania, beber, precio, demora) {
   if ((principal == undefined) || (compania == undefined) || (beber == undefined)) {
    alert (`${nombre}, su pedido no es valido.
    Por favor, asegurece de haber seleccionado correctamente todas las opciones.`)
   } else {
    alert (`Su pedido es:
    Hamburguesa ${principal} con ${compania}
    La bebida seleccionada es ${beber}
    Tiene un valor de $${precio}
    y estara lista en ${demora} minutos aproximadamente
    Lo podra ver en la web`)
   }
}
pedido (suPedido[0], suPedido [1], suPedido [2], suPedido[3], suPedido[4])
   
//ver pedido en el html
const carrito = document.querySelector(".su__compra")

let compra = document.createElement("li")

if ((suPedido [0] == undefined) || (suPedido [1] == undefined) || (suPedido [2] == undefined)){
compra.innerHTML = `
<div class="bg-light bg-opacity-10 m-3 p-3">
<img src="Images/ISO-W001.png" class="w-25" alt="Advertencia" class="h-25">
<h3 class="p-3">${nombre}, su pedido no es valido.</h3>
<h3 class="p-3">Por favor, asegurece de haber seleccionado correctamente todas las opciones.</h3>
<button class="btn btn-warning m-3"><h4><b>Realice nuevamente su pedido</b></h4></button>
</div>
`
} else {
    compra.innerHTML = `
    <div class="bg-warning bg-opacity-10 m-3 p-3">
    <h3 class="p-3">${nombre}, hemos tomado su orden:</h3>
    <h4 class="p-1">Hamburguesa ${suPedido [0]}</h4>
    <h4 class="p-1">con ${suPedido [1]}</h4>
    <h4 class="p-1">Su bebida es ${suPedido [2]}</h4>
    <h4 class="p-1">Debe abonar $${suPedido [3]}</h4>
    <p>*Demora estimada ${suPedido [4]} minutos</p>
    <button class="btn btn-warning m-1"><h4><b>Medios de pago</b></h4></button>
    </div>
    `
}
carrito.appendChild(compra)
const carrito = [

]

const productos = [
    { imagen: '💻', codigo: 1, tipo: 'Mother Asrock B365M BULK', precio: 9000 },
    { imagen: '💻', codigo: 2, tipo: 'Mother ASUS PRIME H510M-E Socket 1200', precio: 29.400 },
    { imagen: '', codigo: 3, tipo: 'Placa de Video GeForce MSI G210 1GB DDR3 Low Profile', precio: 14350 },
    { imagen: '', codigo: 4, tipo: 'Placa de Video GALAX GeForce RTX 3080 10GB GDDR6X SG LHR (1-Click OC)', precio: 284999 },
    { imagen: '🖥️', codigo: 5, tipo: 'Gabinete Aureox Alboryx ARX 310G 2x12cm', precio: 23.999 },
    { imagen: '🖥️', codigo: 6, tipo: 'Gabinete AZZA Crimson 211G Templado 2x12cm LED', precio: 27499 },
    { imagen: '💽', codigo: 7, tipo: 'Disco SSD ADATA 120Gb SU650 SATA3', precio: 8599 },
    { imagen: '💽', codigo: 8, tipo: 'Disco SSD Supertalent 256GB Teradrive SATA3', precio: 11199 },
    { imagen: '🧩', codigo: 9, tipo: 'Micro Intel Core I3 10100F 4 Núcleos / 8 Threads HT 4.3Ghz (10ma Gen) LGA1200', precio: 39999 },
    { imagen: '🧩', codigo: 10, tipo: 'Micro Intel Core I5 10400F 6 Núcleos / 12 Threads HT 4.3Ghz (10ma Gen) LGA1200', precio: 73999 }]

const mensajeInicial2 = "Selecciona  tu producto con el  código numérico del 1 al 10:"



function buscarProductos(codigo) {
    let resultado = productos.find((producto) => producto.codigo === parseInt(codigo))
    return resultado
}

function finalizarCompra() {
    if (carrito.length === 0) {
        console.warn("El carrito está vacío.")
        return
    }

    const tienda = new Compra(carrito)
    alert('💰 El costo total es de: $ ' + tienda.obtenerSubtotal())

    let descuento = 0.90



    let respuesta = confirm("¿Deseas confirmar tu pago?")
    if (respuesta === true) {
        alert('✅ Confirmamos su pago de: $ ' + (tienda.obtenerSubtotal() * descuento) + "\n Muchas gracias ")
        carrito.length = 0
    }
}

function verCarrito() {
    console.table(carrito)
}

function comprar() {

    let codigo = prompt(mensajeInicial2)
    if (!parseInt(codigo)) {
        alert("⛔️ Error en el código ingresado.")
        let respuesta = confirm("¿Deseas intentar de nuevo?")
        if (respuesta === true) {
            comprar()
        }
        return
    }

    let productoElegido = buscarProductos(codigo)
    if (productoElegido === undefined) {
        alert("⛔️ Error en el código ingresado.")
        return
    }

    alert(productoElegido.imagen + ' ' + productoElegido.tipo + ' - ha sido agregada al carrito.')
    carrito.push(productoElegido)

    let respuesta = confirm("¿Deseas llevar otro producto?")
    if (respuesta === true) {
        comprar()
    } else {
        finalizarCompra()
    }
}

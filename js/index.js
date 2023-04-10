let continuar = true
let importe = 0


const mensajeInicial = "Ingresa el codigo del producto a consultar: \n" +
    "a) Procesador \n" +
    "b) Memoria ram \n" +
    "c) Mothers \n" +
    "d) Almacenamiento \n" +
    "e) Gabinete \n "


function iniciarConsulta() {
    let resultado = prompt(mensajeInicial).toLowerCase().trim()
    if (resultado !== "a" && resultado !== "b" && resultado !== "c" && resultado !== "d" &&
        resultado !== "e") {
        alert(" ⛔ Debes elegir un codigo de articulo valido.")

    } else {
        switch (resultado) {
            case "a":
                alert("💲costo del Procesador $ 81.500")
                importe = 81500
                break
            case "b":
                alert("💲costo de la Memoria ram $ 21.500")
                importe = 21500
                break

            case "c":
                alert("💲costo del Mothers $ 51.300")
                importe = 51300

                break
            case "d":
                alert("💲costo del Almacenamiento $ 16.200")
                break
                importe = 16200
            case "e":
                alert("💲costo del Gabinete $ 31.900")
                importe = 31900
                break
            default:
                console.error("no entedi tu consulta.")
        }


    }
}
function preguntarPrecios() {
    while (continuar) {
        iniciarConsulta()
        continuar = confirm("¿Deseas conocer el precio de otro producto?")


    }
    alert("Gracias por tu tiempo")
}
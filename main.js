const IVA = 0.21;
const productosTienda = [
    {id: 1, producto: "Remera de Futbol", precio: 50_000},
    {id: 2, producto: "Short de Futbol", precio: 30_000},
    {id: 3, producto: "Botines de Futbol", precio: 70_000},
];

// Carrito donde se van a guardar los productos que seleccione el usuario
let carrito = [];


// funcion para elegir productos de la tienda
function elegirProducto() {

    let continuar = true;

    while (continuar) {
        let mensaje = "Elegi tu producto:\n";
        for (let i = 0; i < productosTienda.length; i++) {
            mensaje += productosTienda[i].id + ". " + productosTienda[i].producto +"-$ " + productosTienda[i].precio + "\n";
        }

        mensaje += "\nEscribí el número del producto que querés comprar.\nO escribí terminar para finalizar.";

        let respuesta = prompt(mensaje);

        if (respuesta === "terminar") {
            continuar = false;
        } else {
            let id = parseInt(respuesta);
            let productoSeleccionado = null;

            for (let i = 0; i < productosTienda.length; i++) {
                if (productosTienda[i].id === id) {
                    productoSeleccionado = productosTienda[i];
                }
            }
            if (productoSeleccionado) {
                let yaAgregado = false;
                for (let i = 0; i < carrito.length; i++) {
                    if (carrito[i].id === productoSeleccionado.id) {
                        yaAgregado = true;
                    }
                }

                if (yaAgregado) {
                    alert("Ese producto ya esta en el carrito")
                } else {
                    carrito.push(productoSeleccionado);
                    alert("Agregaste: " + productoSeleccionado.producto)
                }

            } else {
                alert("Producto no válido, intentá de nuevo.");
            }
        }
    }
}


// funcion para calcular el total de los productos seleccionados por el usuario en el carrito
function calcularTotal(carrito) {
    let total = 0;
    for (let productosTienda of carrito) {
        total += productosTienda.precio;
    }

    return total;
}


// funcion para finalizar la compra y calcular el total
function finalizarCompra() {
    if (carrito.length === 0) {
        alert("No tenes ningun producto en el carrito");
        return;
    }

    let resumen = "Resumen de tu compra\n";
    for (let i = 0; i < carrito.length; i++) {
        resumen += "- " + carrito[i].producto + ": $" + carrito[i].precio + "\n";
    }

    let total = calcularTotal(carrito);
    

    alert(resumen);
    alert("El total de tu compra es: $" + total);
    alert("¡Gracias por tu compra!")


 // Imprime mensaje en consola con el total de los productos 
  console.log("==== COMPRA FINALIZADA ====");
  for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].producto + ": $" + carrito[i].precio);
    }

    console.log("El total de tu compra es: $" + total)
    console.log("Gracias por tu compra!.")

}

const productosCaros = productosTienda.filter(function(items){
    return items.precio > 60_000;
});

const productosBaratos = productosTienda.filter(function(items){
    return items.precio < 60_000;
});

const busquedaNombre = productosTienda.find(productos => productos.producto === "Remera de Futbol");


console.table(busquedaNombre);
console.table(productosCaros);
console.table(productosBaratos);
elegirProducto();
finalizarCompra();
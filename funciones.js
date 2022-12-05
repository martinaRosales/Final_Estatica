var tarjeta = document.getElementById("tarjetas");
tarjeta.addEventListener("click", funcionModal())

function encontrarArticulo(nombre, tipo){
    tipo.forEach(producto => {
        if (producto.nombre==nombre){
            articulo = producto.nombre;
        }
    });
    return articulo;
}

function funcionModal(){
    nombreArticulo = document.getElementById("nombreProducto");
    console.log(nombreArticulo);
    modal = document.getElementById("modalCompra");
    articulo = encontrarArticulo(nombreArticulo, )
    stockArticulo = accesorios.find(articulo).stock;
    inputCantidad = document.getElementById("cantCompra");
    cantDeseada = inputCantidad.value;
    console.log(stockArticulo);
    console.log(cantDeseada);
    hayStock = modal.addEventListener("submit",elegirCantidad(stockArticulo,cantDeseada));
    if (!hayStock){
        inputCantidad.style.border = '2px solid red';
    } else {
        inputCantidad.style.border = '0.5px solid black';
    }
}

function elegirCantidad (stock,cantDeseada){
    var hayStock = false;
    if (cantDeseada != null){
        if(cantDeseada <= stock){
            hayStock = true;
        } 
    }
    return hayStock;
}
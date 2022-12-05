//se crea el constructor de objetos

function producto (nombre, precio, descripcion, imagen, stock, antiguedad ){
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.stock = stock;
    this.antiguedad = antiguedad;
}

//arreglos de productos


//ACCESORIOS
var accesorios = new Array();
accesorios[0]=new producto('Llaveros varios', '500', 'Llaveros de acrílico, imágenes varias', 'Img/Accesorios/Llaveros.jpeg', 200, 2 );
accesorios[1]=new producto('Aritos Hito Hito no mi', '800', 'aros impresos 3D de One Piece.', 'Img/Accesorios/Aritos Hito Hito no Mi.jpeg', 7, 1);
accesorios[2]=new producto('Pins varios', '300', ' Pins impresos 3D, imágenes varias.', 'Img/Accesorios/Pins.jpeg', 450, 3);

//PRODUCTOS 2D
var P2D = new Array();

//PRODUCTOS 3D
var P3D = new Array();

//ARREGLO DE ARREGLOS
var productos = new Array();
productos[0]=accesorios;

//funciones con objetos

function tipoProducto(arrayName){
    if (arrayName!=null){
        var tipoProducto=null;
        switch (arrayName){
            case "accesorios":
                tipoProducto = productos[0];
            break;
            case "P2D":
                tipoProducto = productos[1];
            break;
            case "P3D":
                tipoProducto = productos[2];
            break
        }
        //mostrarProducto(tipoProducto);
        return tipoProducto;
    }
}


//mostrar producto
function mostrarProducto(tipoProducto){
        titulo = document.getElementById("tituloProducto");
        tarjetas = document.getElementById("tarjetas");
        tarjetaS = Array();
        tipoProducto.forEach(producto => {
            parametro = "'"+producto.nombre+"'";
            tarjeta = '<div class="card mx-2" style="width: 18rem; height: fit-content;" id="productos">'+
            '<img src="'+producto.imagen+'" class="card-img-top mt-3" alt="'+producto.nombre+'">'+
            '<div class="card-body">'+
              '<h5 class="card-title" id="nombreProducto">'+producto.nombre+'</h5>'+
              '<p class="card-text">'+
                '<b>Descripci&oacute;n: </b>'+producto.descripcion+'<br>'+
                '<b>Precio: </b> $'+ producto.precio+'<br>'+
                '<b>Stock: </b>'+producto.stock+
              '</p>'+
              '<div class="card-footer">'+
              '<a href="#" class="btn text-light" data-bs-toggle="modal" data-bs-target="#ModalCompra" onclick="funcionModal()" id="botonModal">Comprar</a>'+
              '</div>'+
            '</div>'+
          '</div>';
            tarjetaS.push(tarjeta);
        });
        tarjetas.innerHTML = tarjetaS;
    }
    

function ordenarProductos(arrayName){
    var select = document.getElementById("ordenProductos");
    var orden = select.value;
    var arrayProductos = tipoProducto(arrayName);
    switch (orden){
        case "default":
            arrayOrdenado = arrayProductos;
            break;
        case "alfabetico":
            arrayOrdenado = arrayProductos.sort((a,b) => {
                return a.nombre > b.nombre;
            } );

            console.table(arrayOrdenado);
            break;
        case "antiguedad":
            arrayOrdenado = arrayProductos.sort((a,b) => {
                return a.antiguedad > b.antiguedad;
            } );
            break;
        case "precio":
            arrayOrdenado = arrayProductos.sort((a,b) => {
                return a.precio > b.precio;
            } );
            break;
        }
        mostrarProducto(arrayOrdenado);
}



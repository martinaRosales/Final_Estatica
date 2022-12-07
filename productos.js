
//se crea el constructor de objetos

function producto (id, nombre, precio, descripcion, imagen, stock, antiguedad ){
    this.id = id;
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
accesorios[0]=new producto(1,'Llaveros varios', 500, 'Llaveros de acrílico, imágenes varias', 'Img/Accesorios/Llaveros.jpeg', 200, 2 );
accesorios[1]=new producto(2,'Aritos Hito Hito no mi', 800, 'aros impresos 3D de One Piece.', 'Img/Accesorios/Aritos Hito Hito no Mi.jpeg', 7, 3);
accesorios[2]=new producto(3,'Pins varios', 300, ' Pins impresos 3D, imágenes varias.', 'Img/Accesorios/Pins.jpeg', 450, 1);

//PRODUCTOS 2D
var P2D = new Array();
P2D[0]=new producto(1,'Stickers', 100, 'Stickers de varios animes, juegos, etc. Se venden de a 3 unidades', 'Img/P2D/Stickers.jpeg', 459, 2);
P2D[1]=new producto(2,'Tarjetas Genshin Impact', 200, 'Tarjetas del juego Genshin Impact, vienen con un soporte impreso 3D de color surtido', 'Img/P2D/Tarjetas Genshin.jpeg',124, 1);

//PRODUCTOS 3D
var P3D = new Array();
P3D[0]=new producto(1,'Anya', 1500, 'Figura 3D de Anya Forger, 10cm de alto', 'Img/P3D/Anya.jpeg', 15, 5);
P3D[1]=new producto(2,'Bo', 1200, 'Figura 3D de Bo, de Studio Ghibli, 10cm de alto', 'Img/P3D/Bo.jpeg', 7, 2);
P3D[2]=new producto(3,'Bulbasaur',1200,'Figura 3D de Bulbasaur, 8cm de alto. Puede pedirse Shiny','Img/P3D/Bulbasaur.jpeg',17,3);
P3D[3]=new producto(4,'Chopper',2500, 'Figura 3D de Chopper, 15cm de alto', 'Img/P3D/Chopper.jpeg',4,8);
P3D[4]=new producto(5,'Eevee',1200,'Figura 3D de Eevee, 8cm de alto. Puede pedirse Shiny','Img/P3D/Eevee.jpeg',13,1);
P3D[5]=new producto(6,'Eva 01',3000,'Figura 3D del Eva 01, 15cm de alto','Img/P3D/Eva 01.jpeg',2,4);
P3D[6]=new producto(7,'Gengar',1200,'Figura 3D de Gengar, 8cm de alto','Img/P3D/Gengar.jpeg',15,7);
P3D[7]=new producto(8,'Totoro',1500,'Figura 3D de Totoro, 15cm de alto','Img/P3D/Totoro.jpeg',7,6);

//ARREGLO DE ARREGLOS
var productos = new Array();
productos[0]= accesorios;
productos[1]= P2D;
productos[2]= P3D;

//funciones con objetos

const botonSelect = document.getElementById("botonSelect");


botonSelect.addEventListener('click', ()=>{
    var productType = document.getElementById("producto").value;
        switch(productType){
            case "accesorios":
                localStorage.setItem("tipo", 'accesorios');
                break;
            case "P2D":
                localStorage.setItem("tipo", 'P2D');
                break;
            case "P3D":
                    localStorage.setItem("tipo", 'P3D');
                break;
        }

   buscarOrden(); 
   ordenarProductos(productType);
} );

function buscarOrden (){
    var orden = document.getElementById("ordenProductos").value;
    switch(orden){
        case "default":
            localStorage.setItem("orden", 'default');
            break;
        case "nombre":
            localStorage.setItem("orden", 'nombre');
            break;
        case "antiguedad":
                localStorage.setItem("orden", 'antiguedad');
            break;
        case "precio":
                localStorage.setItem("orden",'precio');
            break;
    }


}

function ordenarProductos(arrayName){
    tipoStorage = localStorage.getItem("tipo");
    arrayProductos = tipoProducto(arrayName);
    orden = localStorage.getItem("orden");
    console.log(tipoStorage);
    console.log(orden);
    var arrayOrdenado = [];
    if (tipoStorage == arrayName ){
        switch (orden){
            case "default":
                arrayOrdenado = arrayProductos.sort((a,b) => 
                a.id > b.id ? 1 : -1 );
                break;
            case "nombre":
                arrayOrdenado = arrayProductos.sort((a,b) => 
                     a.nombre > b.nombre ? 1 : -1 );
                break;
            case "antiguedad":
                arrayOrdenado = arrayProductos.sort((a,b) => 
                    a.antiguedad > b.antiguedad ? 1 : -1 );
                break;
            case "precio":
                arrayOrdenado = arrayProductos.sort((a,b) => 
                     a.precio > b.precio ? 1 : -1 );
                break;
            }
    } else {
        arrayOrdenado = arrayProductos.sort((a,b) => 
        a.id > b.id ? 1 : -1 );
        localStorage.setItem("tipo", arrayName);
    }
    
        mostrarProducto(arrayOrdenado);
}


function tipoProducto(arrayName){
    var typeProduct= "";
    if (arrayName!=null){
        switch (arrayName){
            case "accesorios":
                typeProduct = productos[0];
            break;
            case "P2D":
                typeProduct = productos[1];
            break;
            case "P3D":
                typeProduct = productos[2];
            break;
        }
        return typeProduct;
    }
}


//mostrar producto
function mostrarProducto(typeProduct){
        titulo = document.getElementById("tituloProducto");
        tarjetas = document.getElementById("tarjetas");
        tarjetaS = Array();;
        typeProduct.forEach(producto => {
            parametro = "'"+producto.nombre+"'";
            tarjeta = '<div class="card mx-2 mt-1 mb-2" style="width: 18rem; height: fit-content;" id="productos">'+
            '<img src="'+producto.imagen+'" class="card-img-top mt-3" alt=" foto '+producto.nombre+'">'+
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
    





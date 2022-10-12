

let contactos = [];

function agregarContactos(){
const contacto ={};
contacto.id = prompt("ingresar id");
contacto.nombre = prompt("ingresar nombre");
contacto.apellido = prompt("ingresar apellido");
contacto.telefono = prompt("ingresa telefono")
contacto.region = prompt("ingrese region");
contacto.ciudad = prompt("ingresa ciudad");
contacto.direccion = prompt("ingresa direccion");

contactos.push(contacto);
}
function eliminarContacos(contacto){
    contactos = contactos.filter((nombre => contacto === nombre));
    
}
 function actualizarContactos(){
    const contacto ={};

    contacto.id = prompt("ingresar id actualizar");
    contacto.nombre = prompt("ingresar nombre actualizar");
    contacto.apellido = prompt("ingresar apellido actualizar");
    contacto.telefono = prompt("ingresa telefono actualizar")
    contacto.region = prompt("ingrese region actualizar");
    contacto.ciudad = prompt("ingresa ciudad actualizar");
    contacto.direccion = prompt("ingresa direccion actualizar");

    for (let i = 0; i < contactos.length; i++){
        if (contacto.id === contactos[i].id) (contactos[i]= contacto)
    }
}

agregarContactos();






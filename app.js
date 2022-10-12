

let contactos = [];

function agregarContactos(){
const contacto ={};
contacto.id = prompt("ingresa id");
contacto.nombre = prompt("ingresa nombre");
contacto.apellido = prompt("ingresa apellido");
contacto.telefono = prompt("ingresa telefono")
contacto.region = prompt("ingrese region");
contacto.ciudad = prompt("ingresa ciudad");
contacto.direccion = prompt("ingresa direccion");

contactos.push(contacto);
return contactos;
}
function eliminarContactos(id){
    contactos = contactos.filter(x => x.id != id);
    return contactos;
}

 function actualizarContactos(){
    const contacto ={};

    contacto.id = prompt("ingrese id para actualizar");
    contacto.nombre = prompt("ingrese nombre para actualizar");
    contacto.apellido = prompt("ingrese apellido para actualizar");
    contacto.telefono = prompt("ingrese telefono para actualizar")
    contacto.region = prompt("ingrese region para actualizar");
    contacto.ciudad = prompt("ingresa ciudad para actualizar");
    contacto.direccion = prompt("ingresa direccion para actualizar");

    for (let i = 0; i < contactos.length; i++){
        if (contacto.id === contactos[i].id) (contactos[i]= contacto)
    }
    return contactos;
}

agregarContactos();


/*contactos = prompt("ingresar contacto a elminiar");
eliminarContacos(contactos);*/



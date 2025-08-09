var contactos=[
  { nombre: "ana lopez", telefono: "+584143417985"},
  { nombre: "carlos oropeza", telefono: "+584143487245"},
  { nombre: "maría barile", telefono: "+584143457975"},
  { nombre: "juan guerrero", telefono: "+584143419585"},
  { nombre: "marcos chirinos", telefono: "+584143413687"},
  { nombre: "ana ortega", telefono: "+584143415005"}
]

const div=document.getElementById("div")
const btnBuscar= document.querySelector("#btnBuscar")

btnBuscar.addEventListener("click", () => {
  const nombreIngresado= document.querySelector("#nombreIngresado").value.toLowerCase()
  if(nombreIngresado===""){
    alert("Debes ingresar un nombre o apellido")
    return
  }
  let contactosFiltrados = contactos.filter((contacto) => contacto.nombre.includes(nombreIngresado))
  if(contactosFiltrados.length===0)
    alert("No hay coincidencias")
  else if (contactosFiltrados.length>=1)
    div.innerHTML=" "
    for(let contacto of contactosFiltrados){
    const contactosMostrados=document.createElement("li")
    contactosMostrados.innerHTML=contacto.nombre + " " + contacto.telefono
    contactosMostrados.classList.add('estilos')
    div.appendChild(contactosMostrados)
    document.querySelector("#nombreIngresado").value=" "
    }
  }
);
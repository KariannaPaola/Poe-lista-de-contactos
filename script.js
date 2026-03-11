let contactos=[
  { nombre: "ana lopez", telefono: "+584143417985"},
  { nombre: "carlos oropeza", telefono: "+584143487245"},
  { nombre: "maria barile", telefono: "+584143457975"},
  { nombre: "juan guerrero", telefono: "+584143419585"},
  { nombre: "marcos chirinos", telefono: "+584143413687"},
  { nombre: "ana ortega", telefono: "+584143415005"}
]

const div=document.getElementById("div")
const btnBuscar= document.querySelector("#btnBuscar")

btnBuscar.addEventListener("click", () => {
  const nombreIngresado= document.querySelector("#nombreIngresado").value.toLowerCase().trim()
  if(nombreIngresado===""){
    alert("Debes ingresar un nombre o apellido")
    return
  }
  let contactosFiltrados = contactos.filter((contacto) => contacto.nombre.includes(nombreIngresado))
  if(contactosFiltrados.length===0){
    alert("No hay coincidencias")
  }
  else if (contactosFiltrados.length>=1){
    div.innerHTML=""
    for(let contacto of contactosFiltrados){
      const contactosMostrados = document.createElement("li");
      contactosMostrados.className =
      "flex justify-between items-center bg-teal-50 border border-teal-200 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition";
      contactosMostrados.innerHTML = `
        <span class="font-semibold text-gray-800">${contacto.nombre}</span>
        <span class="text-gray-600 text-sm">${contacto.telefono}</span>
      `;
      div.appendChild(contactosMostrados);
        document.querySelector("#nombreIngresado").value=""
    }
  }
}
);
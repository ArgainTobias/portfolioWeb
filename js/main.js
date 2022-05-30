const nodoProyects = document.querySelector(".our-projects");
const nodoTechnolgies = document.querySelector(".technologies");

const mostrarProyectos = () =>{

    proyects.forEach((proyect)=>{

        const contenedorInfo = document.createElement("div");
        contenedorInfo.innerHTML = `<div">
            <img src="${proyect.image}">
            <h3>${proyect.name}</h3>
            <a href="${proyect.url}" target="_blank">View project</a>
        </div>`;
        nodoProyects.appendChild(contenedorInfo);
    })
}

const mostrarTecnologias = () =>{

    technologies.forEach((technology) => {
        const ulTechnologies = document.createElement("ul");
        ulTechnologies.innerHTML = `<li>${technology}</li>`;
        nodoTechnolgies.appendChild(ulTechnologies);
    })

}

const init = () => {

    mostrarProyectos();
    mostrarTecnologias();
}

init();
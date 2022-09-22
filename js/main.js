const nodoProyects = document.querySelector(".our-projects");
const nodoTechnolgies = document.querySelector(".technologies");
const nodoCertificates = document.querySelector(".certificates")

const mostrarProyectos = () =>{

    proyects.forEach((proyect)=>{

        const contenedorInfo = document.createElement("div");
        contenedorInfo.innerHTML = `
            <img src="${proyect.image}">
            <h4>${proyect.name}</h4>
            <a href="${proyect.url}" target="_blank">Ver proyecto</a>
            <p>${proyect.description}</p>   
        `;
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

const mostrarCertificados = () =>{

    certificates.forEach((certificate)=>{

        const contenedorCertificate = document.createElement("div");
        contenedorCertificate.classList.add("contenedor-certificados")
        contenedorCertificate.innerHTML = `
            <div class="img">
                <img src="${certificate.image}">
                <div class="ver">
                    <a href="${certificate.url}" target="_blank">Ver certificado</a>
                </div>
            </div>`;
        nodoCertificates.appendChild(contenedorCertificate);
    })
}

const init = () => {

    mostrarProyectos();
    mostrarTecnologias();
    mostrarCertificados();
}

init();
const nodoProyects = document.querySelector(".our-projects");
const nodoTechnolgies = document.querySelector(".technologies");
const nodoCertificates = document.querySelector(".certificates")

const mostrarProyectos = () =>{

    proyects.forEach((proyect)=>{

        const contenedorInfo = document.createElement("div");
        contenedorInfo.innerHTML = `
            <img src="${proyect.image}">
            <h4>${proyect.name}</h4>
            <a href="${proyect.url}" target="_blank">View project</a>
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
        contenedorCertificate.innerHTML = `
            <img src="${certificate.image}">
            <h4>${certificate.name}</h4>
            <a href="${certificate.url}" target="_blank">View certificate</a>`;
        nodoCertificates.appendChild(contenedorCertificate);
    })
}

const init = () => {

    mostrarProyectos();
    mostrarTecnologias();
    mostrarCertificados();
}

init();
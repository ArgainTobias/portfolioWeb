const nodoProyects = document.querySelector(".our-projects");
const nodoTechnolgies = document.querySelector(".container-technologies");
const nodoCertificates = document.querySelector(".certificates");

const mostrarProyectos = () => {
  const fragmentoProyectos = document.createDocumentFragment();

  proyects.forEach((proyect) => {
    const contenedorInfo = document.createElement("div");
    contenedorInfo.innerHTML = `
            <img src="${proyect.image}">
            <h4>${proyect.name}</h4>
            <a href="${proyect.url}" target="_blank">Ver proyecto</a>
            <p>${proyect.description}</p>   
        `;
    fragmentoProyectos.appendChild(contenedorInfo);
  });
  nodoProyects.appendChild(fragmentoProyectos);
};

const mostrarTecnologias = () => {
  const fragmentoTecnologias = document.createDocumentFragment();

  technologies.forEach((technology) => {
    const divTechnologies = document.createElement("div");
    divTechnologies.classList.add("div-icono-tech");

    divTechnologies.innerHTML = `<img src=${technology.icono} alt='${technology.nombre}' style="height:120px;">`;

    fragmentoTecnologias.appendChild(divTechnologies);
  });
  nodoTechnolgies.appendChild(fragmentoTecnologias);
};

const mostrarCertificados = () => {
  const fragmentoCertificados = document.createDocumentFragment();

  certificates.forEach((certificate) => {
    const contenedorCertificate = document.createElement("div");
    contenedorCertificate.classList.add("contenedor-certificados");
    contenedorCertificate.innerHTML = `
            <div class="img">
                <img src="${certificate.image}">
                <div class="ver">
                    <a href="${certificate.url}" target="_blank">Ver certificado</a>
                </div>
            </div>`;
    fragmentoCertificados.appendChild(contenedorCertificate);
  });
  nodoCertificates.appendChild(fragmentoCertificados);
};

const init = () => {
  mostrarProyectos();
  mostrarTecnologias();
  mostrarCertificados();
};

init();

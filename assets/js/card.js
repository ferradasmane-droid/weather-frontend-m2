const contenedor = document.getElementById("contenedor-localidades");

if (contenedor) {
  ciudades.forEach((ciudad) => {
    let iconoDia="bi-cloud";
    if (ciudad.estado==="Lluvia")iconoDia="bi-cloud-rain";
    if (ciudad.estado==="Soleado")iconoDia="bi-sun";
    if (ciudad.estado==="Parcial")iconoDia="bi-cloud-sun";
    if (ciudad.estado==="Nublado")iconoDia="bi-cloud";
    if (ciudad.estado==="Vientoso")iconoDia="bi-wind";
    contenedor.innerHTML += `
      <div class="col-12 col-sm-6 col-lg-4 mb-4">
        <aticle class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <h3 class="card-title">${ciudad.nombre}</h3>
            <p class="card-text fs-4">${ciudad.temperatura}</p>
            <p class="card-text">
            <i class="bi ${iconoDia}"></i> ${ciudad.estado}</p>
            <button class="btn btn-primary" onclick="verDetalle(${ciudad.id})">
              Ver detalle
            </button>
          </div>
        </article>
      </div>
    `;
  });
}

function verDetalle(id) {
  localStorage.setItem("ciudadSeleccionada", id);
  window.location.href = "detalle.html";
}

const detalle = document.getElementById("detalle-ciudad");
const pronostico = document.getElementById("pronostico");

if (detalle && pronostico) {
  const id = localStorage.getItem("ciudadSeleccionada");
  const ciudad = ciudades.find((c) => c.id == id);

  if (ciudad) {
    let iconoDia="bi-cloud"
    if (ciudad.estado==="Lluvia")iconoDia="bi-cloud-rain"
    if (ciudad.estado==="Soleado")iconoDia="bi-sun"
    if (ciudad.estado==="Parcial")iconoDia="bi-cloud-sun"
    if (ciudad.estado==="Nublado")iconoDia="bi-cloud"
    if (ciudad.estado==="Vientoso")iconoDia="bi-wind"

    detalle.innerHTML = `
      <div class="card shadow">
        <div class="card-body">
          <h1>${ciudad.nombre}</h1>
          <p><strong>Temperatura:</strong> ${ciudad.temperatura}</p>
          <p><strong>Estado:</strong> <i class="bi ${iconoDia}"></i> ${ciudad.estado}</p>
          <p><strong>Humedad:</strong> ${ciudad.humedad}</p>
          <p><strong>Viento:</strong> ${ciudad.viento}</p>
        </div>
      </div>
    `;

    ciudad.pronostico.forEach((dia, index) => {
      
      let iconoDia= "bi-cloud";
      if (dia ==="Lluvia") iconoDia="bi-cloud-rain";
      if (dia ==="Soleado") iconoDia="bi-sun";
      if (dia ==="Parcial") iconoDia="bi-cloud-sun";
      if (dia ==="Nublado") iconoDia="bi-cloud";
      if (dia ==="Vientoso") iconoDia="bi-wind";
      pronostico.innerHTML += `
        <div class="col-6 col-md-3 mb-3">
          <div class="card pronostico-card text-center h-100">
            <div class="card-body">
              <h5>Día ${index + 1}</h5>
              <p>
              <i class="bi ${iconoDia} fs-3"></i> <br>
              ${dia}</p>
            </div>
          </div>
        </div>
      `;
    });
  }
}

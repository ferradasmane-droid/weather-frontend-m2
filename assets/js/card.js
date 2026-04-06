const contenedor = document.getElementById("contenedor-localidades");

if (contenedor) {
  ciudades.forEach((ciudad) => {
    contenedor.innerHTML += `
      <div class="col-12 col-sm-6 col-lg-4 mb-4">
        <aticle class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <h3 class="card-title">${ciudad.nombre}</h3>
            <p class="card-text fs-4">${ciudad.temperatura}</p>
            <p class="card-text">${ciudad.estado}</p>
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
    detalle.innerHTML = `
      <div class="card shadow">
        <div class="card-body">
          <h1>${ciudad.nombre}</h1>
          <p><strong>Temperatura:</strong> ${ciudad.temperatura}</p>
          <p><strong>Estado:</strong> ${ciudad.estado}</p>
          <p><strong>Humedad:</strong> ${ciudad.humedad}</p>
          <p><strong>Viento:</strong> ${ciudad.viento}</p>
        </div>
      </div>
    `;

    ciudad.pronostico.forEach((dia, index) => {
      pronostico.innerHTML += `
        <div class="col-6 col-md-3 mb-3">
          <div class="card pronostico-card text-center h-100">
            <div class="card-body">
              <h5>Día ${index + 1}</h5>
              <p>${dia}</p>
            </div>
          </div>
        </div>
      `;
    });
  }
}

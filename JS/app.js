// 4- Crear una web con un reloj que muestre la siguiente información: Fecha completa con palabras y año inclisve. luego hh:mm:ss

const fechaActual = new Date();

// Creo el objeto Fecha
const opcionesFecha = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const fechaFormateada = fechaActual.toLocaleDateString(
  undefined,
  opcionesFecha
);

document.getElementById("fecha").textContent = fechaFormateada; // Busca en el html el id fecha, y ahí coloca la fecha que quedó formateada

function actualizarHora() {
  // función para actualizar la hora cada segundo
  const ahora = new Date();
  let horas = ahora.getHours();
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");

  const ampm = horas >= 12 ? "PM" : "AM";
  horas = horas % 12 || 12;

  horas = String(horas).padStart(2, "0");

  const horaCompleta = `${horas} : ${minutos} : ${segundos} ${ampm}`;
  document.getElementById("hora").textContent = horaCompleta;
}

actualizarHora(); //  Llamos a la función
setInterval(actualizarHora, 1000); //  Se ejecuta infinitamente

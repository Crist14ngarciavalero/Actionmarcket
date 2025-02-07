const galleryContent = {
  diseños: [
    '../assets/FOTO4.webp',
    '../assets/FOTO2.jpg',
    '../assets/FOTO3.webp',
    '../assets/FOTO5.webp',
    '../assets/FOTO6.jpeg',
    '../assets/FOTO7.png',
    '../assets/FOTO8.jpg',
    '../assets/FOTO9.jpg',
  ],
  tiendasOnline: [
    '../assets/TO1.png',
    '../assets/TO2.png',
    '../assets/TO3.png',
    '../assets/TO4.jpg',
    '../assets/TO5.png',
    '../assets/TO6.png',
    '../assets/TO7.jpg',
    '../assets/TO8.jpg',
  ],
  blogs: [
    '../assets/BLOG1.jpeg',
    '../assets/BLOG2.png',
    '../assets/BLOG3.jpeg',
    '../assets/BLOG4.webp',
    '../assets/BLOG5.png',
    '../assets/BLOG6.jpg',
    '../assets/BLOG7.webp',
    '../assets/BLOG9.webp',
  ],
  reels: [
    '../assets/videos/reel1.mp4',
    '../assets/videos/reel2.mp4',
    '../assets/videos/reel3.mp4'
  ]
};
function mostrarGaleria(seccion) {
  let galeria = document.getElementById("galeria");
  galeria.innerHTML = "";

  // Eliminar la clase "activa" de todas las secciones
  document.querySelectorAll(".seccion").forEach(item => {
      item.classList.remove("activa");
  });

  // Agregar la clase "activa" a la sección seleccionada
  let seccionActiva = document.querySelector(`[onclick="mostrarGaleria('${seccion}')"]`);
  if (seccionActiva) {
      seccionActiva.classList.add("activa");
  }

  // Insertar imágenes o videos en la galería
  galleryContent[seccion].forEach(item => {
      let elemento;
      if (item.endsWith(".mp4")) {
          elemento = document.createElement("video");
          elemento.src = item;
          elemento.controls = true;
      } else {
          elemento = document.createElement("img");
          elemento.src = item;
      }
      elemento.onclick = () => abrirModal(item);
      galeria.appendChild(elemento);
  });
}

// Para que al cargar la página, se seleccione "Diseños" automáticamente
document.addEventListener("DOMContentLoaded", function() {
  mostrarGaleria('diseños');
});


// Función para abrir el modal
function abrirModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const modalVideo = document.getElementById("modalVideo");

  if (src.includes(".mp4")) {
      modalImg.style.display = "none";
      modalVideo.style.display = "block";
      modalVideo.src = src;
  } else {
      modalVideo.style.display = "none";
      modalImg.style.display = "block";
      modalImg.src = src;
  }

  modal.style.display = "flex";
}

// Cerrar el modal
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}






document.addEventListener("DOMContentLoaded", function() {
  // Mostrar la galería de 'diseños' cuando se cargue la página
  mostrarGaleria('diseños');
});

function mostrarGaleria(seccion) {
  let galeria = document.getElementById("galeria");
  galeria.innerHTML = ""; // Limpiar la galería antes de agregar nuevas imágenes

  galleryContent[seccion].forEach(item => {
      let elemento;
      if (item.includes(".mp4")) {
          elemento = document.createElement("video");
          elemento.src = item;
          elemento.controls = true;
      } else {
          elemento = document.createElement("img");
          elemento.src = item;
      }

      elemento.onclick = () => abrirModal(item);
      galeria.appendChild(elemento);
  });
}

// Cambiar este número si se añaden o quitan fotos de img/galeria/
  const TOTAL_FOTOS = 47;

  // GitHub Pages distingue mayúsculas de minúsculas (foto1.JPG ≠ foto1.jpg),
  // así que probamos varias extensiones habituales hasta que una funcione.
  const EXTENSIONES = ['JPG', 'jpg', 'jpeg', 'JPEG', 'png', 'PNG'];

  const carousel = document.getElementById('carousel');
  for (let i = 1; i <= TOTAL_FOTOS; i++) {
    const img = document.createElement('img');
    img.alt = `Foto artística ${i}`;
    img.dataset.num = i;
    img.dataset.ext = 0; 
    carousel.appendChild(img);
  }

  const carouselImgs = Array.from(document.querySelectorAll('#carousel img'));
  const counterCurrent = document.getElementById('counter-current');
  const counterTotal = document.getElementById('counter-total');
  counterTotal.textContent = carouselImgs.length;
  let current = 0;

  // Carga una foto solo cuando hace falta (la actual y sus vecinas),
  // para que la web no descargue las 47 fotos de golpe.
  function cargarFoto(i) {
    const img = carouselImgs[(i + carouselImgs.length) % carouselImgs.length];
    if (img.dataset.cargada) return;
    img.dataset.cargada = 'true';
    const intentar = () => {
      const ext = EXTENSIONES[Number(img.dataset.ext)];
      img.src = `img/galeria/foto${img.dataset.num}.${ext}`;
    };
    img.onerror = () => {
      const siguiente = Number(img.dataset.ext) + 1;
      if (siguiente < EXTENSIONES.length) {
        img.dataset.ext = siguiente;
        intentar();
      } else {
        img.dataset.fallida = 'true'; 
      }
    };
    intentar();
  }

  function actualizarCarrusel() {
    carouselImgs.forEach((img, i) => img.classList.toggle('active', i === current));
    counterCurrent.textContent = current + 1;
    cargarFoto(current);
    cargarFoto(current + 1);
    cargarFoto(current - 1);
  }

  function moverCarrusel(dir) {
    // salta las fotos que no se hayan podido cargar
    for (let n = 0; n < carouselImgs.length; n++) {
      current = (current + dir + carouselImgs.length) % carouselImgs.length;
      if (!carouselImgs[current].dataset.fallida) break;
    }
    actualizarCarrusel();
  }

  actualizarCarrusel();
  setInterval(() => moverCarrusel(1), 5000);
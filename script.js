// Cambia este número si añades o quitas fotos de img/galeria/
  const TOTAL_FOTOS = 47;

  // GitHub Pages distingue mayúsculas de minúsculas (foto1.JPG ≠ foto1.jpg),
  // así que probamos varias extensiones habituales hasta que una funcione.
  const EXTENSIONES = ['JPG', 'jpg', 'jpeg', 'JPEG', 'png', 'PNG'];

  const carousel = document.getElementById('carousel');
  for (let i = 1; i <= TOTAL_FOTOS; i++) {
    const img = document.createElement('img');
    img.alt = `Foto artística ${i}`;
    img.dataset.num = i;
    img.dataset.ext = 0; // índice de la extensión que se está probando
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
        img.dataset.fallida = 'true'; // no se encontró con ninguna extensión
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

  // Pase automático: se pausa si el ratón está encima o la vista ampliada está abierta
  let pausado = false;
  setInterval(() => { if (!pausado) moverCarrusel(1); }, 5000);
  carousel.addEventListener('mouseenter', () => pausado = true);
  carousel.addEventListener('mouseleave', () => pausado = false);

  // ---------- Vista ampliada (lightbox) ----------
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCounter = document.getElementById('lb-counter');

  function mostrarLightbox() {
    const img = carouselImgs[current];
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt;
    lbCounter.textContent = `${current + 1} / ${carouselImgs.length}`;
  }
  function abrirLightbox() {
    mostrarLightbox();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lb-open');
    pausado = true;
  }
  function cerrarLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lb-open');
    pausado = false;
  }
  function moverLightbox(dir) { moverCarrusel(dir); mostrarLightbox(); }

  // clic en la foto (no en las flechas) abre la vista ampliada
  carousel.addEventListener('click', e => {
    if (e.target.closest('.carousel-btn')) return;
    if (carouselImgs[current].dataset.fallida) return;
    abrirLightbox();
  });
  document.getElementById('lb-close').addEventListener('click', cerrarLightbox);
  document.getElementById('lb-prev').addEventListener('click', () => moverLightbox(-1));
  document.getElementById('lb-next').addEventListener('click', () => moverLightbox(1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) cerrarLightbox(); });

  // Teclado: ← → para cambiar, Esc para cerrar
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') cerrarLightbox();
    if (e.key === 'ArrowLeft') moverLightbox(-1);
    if (e.key === 'ArrowRight') moverLightbox(1);
  });

  // Gestos táctiles: deslizar el dedo a izquierda/derecha cambia de foto
  function swipe(el, alDeslizar) {
    let x0 = null, y0 = null;
    el.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    el.addEventListener('touchend', e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      const dy = e.changedTouches[0].clientY - y0;
      x0 = null;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) alDeslizar(dx < 0 ? 1 : -1);
    }, { passive: true });
  }
  swipe(carousel, dir => moverCarrusel(dir));
  swipe(lightbox, dir => moverLightbox(dir));
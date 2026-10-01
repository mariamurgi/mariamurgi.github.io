// Cambiar este número si añades o quitas fotos de img/galeria/
  const TOTAL_FOTOS = 47;

  const carousel = document.getElementById('carousel');
  for (let i = 1; i <= TOTAL_FOTOS; i++) {
    const img = document.createElement('img');
    img.src = `img/galeria/foto${i}.jpg`;
    img.alt = `Foto artística ${i}`;
    if (i === 1) img.classList.add('active');
    carousel.appendChild(img);
  }

  const carouselImgs = document.querySelectorAll('#carousel img');
  const counterCurrent = document.getElementById('counter-current');
  const counterTotal = document.getElementById('counter-total');
  counterTotal.textContent = carouselImgs.length;
  let current = 0;

  function actualizarCarrusel() {
    carouselImgs.forEach((img, i) => img.classList.toggle('active', i === current));
    counterCurrent.textContent = current + 1;
  }
  function moverCarrusel(dir) {
    current = (current + dir + carouselImgs.length) % carouselImgs.length;
    actualizarCarrusel();
  }
  setInterval(() => moverCarrusel(1), 5000);
// =====================================================================
// EFECTOS DE SCROLL E INTERACCIÓN
// =====================================================================
(function () {
  const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tactil = window.matchMedia('(hover: none)').matches;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // ---------- 1. Aparición al hacer scroll (con dirección y escalonado) ----------
  const grupos = [
    ['section h2', ''],
    ['.about-text p', ''],
    ['.about-photo', 'from-right'],
    ['.stat', ''],
    ['.exp-item', 'from-left'],
    ['.edu-item', 'from-left'],
    ['.lang-item', 'from-right'],
    ['.tile', 'zoom'],
    ['.carousel', 'zoom']
  ];
  const elementos = [];
  grupos.forEach(([sel, clase]) => {
    $$(sel).forEach((el, i) => {
      el.classList.add('reveal');
      if (clase) el.classList.add(clase);
      el.dataset.delay = (i % 5) * 0.08; // escalonado dentro de cada grupo
      elementos.push(el);
    });
  });

  if (reducido || !('IntersectionObserver' in window)) {
    elementos.forEach(el => el.classList.add('visible', 'ready'));
  } else {
    const obs = new IntersectionObserver((entradas) => {
      entradas.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        el.style.transitionDelay = el.dataset.delay + 's';
        el.classList.add('visible');
        obs.unobserve(el);
        // limpiamos el retraso para que el hover/tilt responda al instante
        setTimeout(() => {
          el.style.transitionDelay = '';
          el.classList.add('ready');
        }, 1200);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    elementos.forEach(el => obs.observe(el));
  }

  // ---------- 2. Cinta (marquee): duplicamos el contenido para el bucle ----------
  const cinta = $('#marquee-track');
  if (cinta) cinta.innerHTML += cinta.innerHTML;

  // ---------- 3. Cifras que cuentan ----------
  function contar(el) {
    const fin = Number(el.dataset.count);
    const prefijo = el.dataset.prefix || '';
    if (reducido) { el.textContent = prefijo + fin; return; }
    const dur = 1400, ini = performance.now();
    (function paso(t) {
      const p = Math.min(Math.max((t - ini) / dur, 0), 1);
      const suave = 1 - Math.pow(1 - p, 3);
      el.textContent = prefijo + Math.round(fin * suave);
      if (p < 1) requestAnimationFrame(paso);
    })(ini);
  }
  if ('IntersectionObserver' in window) {
    const obsNum = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { contar(e.target); obsNum.unobserve(e.target); } });
    }, { threshold: 0.6 });
    $$('.stat-num[data-count]').forEach(el => obsNum.observe(el));
  }

  // ---------- 4. Scroll: progreso, parallax, línea de tiempo, menú activo ----------
  const barra = $('#scroll-progress');
  const parallax = $$('[data-speed]');
  const timeline = $('#timeline');
  const enlaces = $$('nav a[href^="#"]');
  const secciones = enlaces
    .map(a => ({ a, sec: document.getElementById(a.getAttribute('href').slice(1)) }))
    .filter(x => x.sec);
  let pendiente = false;

  function actualizar() {
    pendiente = false;
    const y = window.scrollY;
    const alto = document.documentElement.scrollHeight - window.innerHeight;
    if (barra) barra.style.setProperty('--sp', alto > 0 ? (y / alto).toFixed(4) : 0);

    if (!reducido) {
      parallax.forEach(el => {
        const r = el.parentElement.getBoundingClientRect();
        if (r.bottom < -300 || r.top > window.innerHeight + 300) return;
        const v = parseFloat(el.dataset.speed) || 0;
        const centro = r.top + r.height / 2 - window.innerHeight / 2;
        el.style.setProperty('--py', (-centro * v).toFixed(1) + 'px');
      });
    }

    if (timeline) {
      const r = timeline.getBoundingClientRect();
      const p = (window.innerHeight * 0.65 - r.top) / r.height;
      timeline.style.setProperty('--tl', Math.max(0, Math.min(1, p)).toFixed(3));
    }

    // sección activa: la última cuya parte superior ya pasó el 35% de la pantalla
    let activa = null;
    secciones.forEach(({ a, sec }) => {
      if (sec.getBoundingClientRect().top <= window.innerHeight * 0.35) activa = a;
    });
    enlaces.forEach(a => a.classList.toggle('active', a === activa));
  }
  function pedir() { if (!pendiente) { pendiente = true; requestAnimationFrame(actualizar); } }
  window.addEventListener('scroll', pedir, { passive: true });
  window.addEventListener('resize', pedir);
  actualizar();

  // ---------- 5. Proyectos: botones, barra, arrastrar con ratón, inclinación 3D ----------
  const pista = $('.proyectos-track');
  const bPrev = $('#tc-prev'), bNext = $('#tc-next'), barP = $('#track-bar');
  if (pista) {
    const paso = () => (pista.querySelector('.tile')?.offsetWidth || 300) + 22;

    function estadoPista() {
      const max = pista.scrollWidth - pista.clientWidth;
      const p = max > 0 ? pista.scrollLeft / max : 0;
      if (barP) {
        const ancho = max > 0 ? Math.max(12, pista.clientWidth / pista.scrollWidth * 100) : 100;
        barP.style.width = ancho + '%';
        // el tramo recorrible de la barra es (100 - ancho)% del total; como translateX usa % del propio ancho:
        barP.style.setProperty('--tx', (p * (100 - ancho) / ancho * 100).toFixed(1) + '%');
      }
      if (bPrev) bPrev.disabled = pista.scrollLeft <= 4;
      if (bNext) bNext.disabled = pista.scrollLeft >= max - 4;
    }
    pista.addEventListener('scroll', estadoPista, { passive: true });
    window.addEventListener('resize', estadoPista);
    estadoPista();

    bPrev && bPrev.addEventListener('click', () => pista.scrollBy({ left: -paso(), behavior: 'smooth' }));
    bNext && bNext.addEventListener('click', () => pista.scrollBy({ left: paso(), behavior: 'smooth' }));

    // arrastrar con el ratón (en táctil ya se desliza con el dedo)
    let abajo = false, x0 = 0, s0 = 0, movido = false;
    pista.addEventListener('mousedown', e => {
      if (e.button !== 0) return;
      abajo = true; movido = false; x0 = e.pageX; s0 = pista.scrollLeft;
    });
    window.addEventListener('mousemove', e => {
      if (!abajo) return;
      const dx = e.pageX - x0;
      if (Math.abs(dx) > 5) { movido = true; pista.classList.add('dragging'); }
      if (movido) pista.scrollLeft = s0 - dx;
    });
    window.addEventListener('mouseup', () => {
      if (!abajo) return;
      abajo = false;
      pista.classList.remove('dragging');
    });
    // si se arrastró, no abrir el enlace de la tarjeta
    pista.addEventListener('click', e => { if (movido) { e.preventDefault(); movido = false; } }, true);
    pista.addEventListener('dragstart', e => e.preventDefault());

    // inclinación 3D siguiendo el ratón
    if (!tactil && !reducido) {
      $$('.tile', pista).forEach(t => {
        t.addEventListener('mousemove', e => {
          if (abajo) return;
          const r = t.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          t.style.setProperty('--ry', (x * 9).toFixed(2) + 'deg');
          t.style.setProperty('--rx', (-y * 9).toFixed(2) + 'deg');
        });
        t.addEventListener('mouseleave', () => {
          t.style.setProperty('--rx', '0deg');
          t.style.setProperty('--ry', '0deg');
        });
      });
    }
  }

  // ---------- 6. Antes y después: los dos marcos se desplazan a la vez (en proporción) ----------
  const bA = $('#ba-antes'), bD = $('#ba-despues');
  if (bA && bD) {
    let origen = null;
    const prog = el => el.scrollTop / Math.max(1, el.scrollHeight - el.clientHeight);
    const sync = (de, a) => () => {
      if (origen && origen !== de) return;      // ignora el eco del otro marco
      origen = de;
      a.scrollTop = prog(de) * (a.scrollHeight - a.clientHeight);
      clearTimeout(sync.t); sync.t = setTimeout(() => { origen = null; }, 120);
    };
    bA.addEventListener('scroll', sync(bA, bD), { passive: true });
    bD.addEventListener('scroll', sync(bD, bA), { passive: true });
  }
})();
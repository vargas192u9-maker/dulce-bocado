(() => {
  'use strict';
  const config = window.DULCE_BOCADO;
  if (config) {
    const wa = (message) => `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`;
    const links = {whatsapp: wa(config.mensajePedido), menu: wa(config.mensajeMenu), instagram: config.instagram, google: config.google};
    document.querySelectorAll('[data-link]').forEach(link => {
      if (links[link.dataset.link]) link.href = links[link.dataset.link];
    });
    document.querySelectorAll('[data-product]').forEach(link => {
      link.href = wa(`¡Hola, Dulce Bocado! Me gustaría pedir ${link.dataset.product}. ¿Me comparten las opciones, los precios y la disponibilidad?`);
    });
  }
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    nav.classList.remove('is-open');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
  window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if(event.matches) closeMenu(); });

  const products = [...document.querySelectorAll('[data-category]')];
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(filter => {
      const active = filter === button;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    let visible = 0;
    products.forEach(product => {
      product.hidden = button.dataset.filter !== 'todo' && product.dataset.category !== button.dataset.filter;
      if (!product.hidden) visible++;
    });
    document.querySelector('.filter-status').textContent = `${visible} ${visible === 1 ? 'antojo disponible en esta selección' : 'antojos disponibles en esta selección'}.`;
  }));
  document.getElementById('year').textContent = new Date().getFullYear();

  let toastTimeout;
  const showToast = (message) => {
    const toast = document.getElementById('toast');
    clearTimeout(toastTimeout);
    toast.textContent = message;
    toast.classList.add('is-visible');
    toastTimeout = setTimeout(() => toast.classList.remove('is-visible'), 4000);
  };
  const dialog = document.getElementById('share-dialog');
  document.getElementById('cerrar-compartir').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
  document.getElementById('share-url').addEventListener('click', event => event.target.select());
  document.getElementById('compartir').addEventListener('click', async () => {
    const url = location.protocol === 'https:' ? location.href.split('#')[0] : (config?.instagram || 'https://www.instagram.com/dulce_bocado_n1212/');
    const shareData = {title:'Dulce Bocado', text:'¿Un frappé, unos elotes y una buena plática? Vamos a Dulce Bocado.', url};
    try {
      if (navigator.share && (!navigator.canShare || navigator.canShare(shareData))) { await navigator.share(shareData); return; }
      if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(url); showToast('Enlace copiado. ¡Comparte el antojo!'); return; }
    } catch (error) { if (error.name === 'AbortError') return; }
    document.getElementById('share-url').value = url;
    dialog.showModal();
  });
})();

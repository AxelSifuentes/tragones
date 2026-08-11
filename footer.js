// Tragones Footer v1 - Inyectable en todas las páginas
// Uso: <div id="tragones-footer"></div> + <script src="footer.js"></script>

(function(){
  const footerHTML = `
<footer class="bg-[#1a1a1a] text-white pt-12 pb-6 px-4 border-t border-[#333]">
  <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-10">
    <div class="flex-1 min-w-[280px] text-center md:text-left">
      <img src="https://tragoneslicoreriadelivery.com/wp-content/uploads/2021/09/LOGO-TRAGONES-chiki.png" alt="Tragones Logo" class="w-[110px] mx-auto md:mx-0 mb-5">
      <ul class="space-y-2 text-[13px] text-[#ccc]">
        <li><a href="nosotros.html" class="hover:text-[#ffaa00]">Nosotros</a></li>
        <li><a href="tienda.html" class="hover:text-[#ffaa00]">Nuestra Tienda</a></li>
        <li><a href="promociones.html" class="hover:text-[#ffaa00]">Promociones</a></li>
        <li><span>Consultas: info@tragoneslicoreriadelivery.com</span></li>
        <li><span>Trabaja con Nosotros</span></li>
      </ul>
    </div>
    <div class="flex-1 min-w-[280px] text-center md:text-left">
      <h3 class="font-bold text-[16px] uppercase border-b-2 border-white inline-block pb-1 mb-5">Servicio al cliente</h3>
      <ul class="space-y-2 text-[13px] text-[#ccc]">
        <li><a href="contactos.html" class="hover:text-[#ffaa00]">Contacto</a></li>
        <li><a class="hover:text-[#ffaa00]">Política de entregas y devoluciones</a></li>
        <li><a class="hover:text-[#ffaa00]">Términos y condiciones</a></li>
        <li><a class="hover:text-[#ffaa00]">Política de privacidad</a></li>
      </ul>
      <div class="mt-6 text-[12px] text-[#999] leading-6"><p><strong class="text-white">Tragones Licorería Delivery</strong></p><p>Surquillo, San Isidro, Magdalena, Lince, Miraflores, Pueblo Libre, San Miguel, Jesus Maria, Breña</p></div>
    </div>
    <div class="flex-1 min-w-[280px] text-center md:text-left">
      <h3 class="font-bold text-[16px] uppercase border-b-2 border-white inline-block pb-1 mb-5">Transacciones 100% seguras</h3>
      <div class="flex gap-2 flex-wrap justify-center md:justify-start mb-6">
        <img src="https://w7.pngwing.com/pngs/195/263/png-transparent-visa-icon.png" alt="Visa" class="h-[28px] bg-white p-1 rounded">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" class="h-[28px] bg-white p-1 rounded">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" class="h-[28px] bg-white p-1 rounded">
        <img src="https://panuts.com/wp-content/themes/panuts/img/cards/yape-negative.svg" alt="Yape" class="h-[28px] bg-white p-1 rounded">
      </div>
      <div class="flex justify-center md:justify-start">
        <img src="https://panuts.com/wp-content/themes/panuts/img/icon-claims-book.png" alt="Libro de Reclamaciones" class="w-[130px]">
      </div>
    </div>
  </div>
  <div class="border-t border-[#333] mt-10 pt-5 text-center text-[11px] text-[#666]">&copy; 2026 Tragones Licorería Delivery. Todos los derechos reservados.</div>
</footer>
`;

  function initFooter(){
    const container = document.getElementById('tragones-footer');
    if(container){
      container.innerHTML = footerHTML;
    } else {
      document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initFooter);
  } else {
    initFooter();
  }
})();

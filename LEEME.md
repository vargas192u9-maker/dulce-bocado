# Dulce Bocado

Abre **index.html** con doble clic. No requiere instalación, compilación, cuentas ni servidor. Los archivos de estilo, el código, la tipografía y la imagen son locales. Para abrir WhatsApp, Instagram o Google necesitas conexión a Internet.

Incluye diseño adaptable a celular, catálogo de dos antojos con filtros, mensajes de consulta por producto, menú por WhatsApp, ubicación en Google Maps, Instagram, horario de DiDi Food y preguntas frecuentes.

## Datos incorporados

- WhatsApp: +52 614 313 1207.
- Instagram: https://www.instagram.com/dulce_bocado_n1212/
- Ubicación: Av. Quinta Real, Chihuahua, Chih., CP 31384. Fuente: la ficha de Google Maps del negocio, consultada el 4 de noviembre de 2026: https://www.google.com/maps?cid=1348596595115795399
- DiDi Food: lunes a miércoles, 5:30 a 11:00 p. m.; jueves a domingo, 4:30 a 11:00 p. m. Estos horarios los proporcionó el usuario y corresponden a la app. No se presentan como horarios del local.
- Calificación: 5.0 de 5, basada en 3 opiniones de Google. Se confirmó la ficha del mismo negocio. La opinión de America Lerma se reproduce como fragmento del texto proporcionado por el usuario.

## Editar

Los enlaces y mensajes de pedido se centralizan en **config.js**. Los textos, horarios, dirección, metadatos, teléfono de llamada y enlaces de respaldo sin JavaScript están en **index.html**. Si cambias el teléfono o las redes, actualiza ambos archivos. Los colores y tamaños están en **styles.css**.

No se inventaron precios ni un menú completo. Los botones consultan precios y disponibilidad al negocio; no procesan pagos, confirman pedidos ni envían mensajes automáticamente.

## Publicar después

Sube el contenido de esta carpeta a cualquier alojamiento de sitios estáticos, conservando las rutas. La portada debe ser index.html. Esta entrega es local: no se publicó en Internet ni se registró un dominio.

Para una vista previa enriquecida en redes, después de elegir el dominio sustituye el valor relativo de og:image por la URL HTTPS absoluta de assets/antojos.png y agrega og:url con la dirección pública. Para mejorar el posicionamiento local, conserva una dirección y un teléfono consistentes entre el sitio, Instagram y Google Maps.

## Imagen y tipografías

**assets/antojos.png** es una imagen ilustrativa generada con la herramienta integrada ImageGen, no una fotografía real del negocio. Se identifica como ilustrativa en el sitio. Reemplázala por fotografías propias si las tienes. Prompt y procedencia en **assets/CREDITOS.md**.

Tipografías Fraunces y DM Sans, distribuidas bajo SIL Open Font License; se incluyen sus licencias en assets/fonts. No hay rastreadores, formularios de datos personales, dependencias de CDN ni analítica.

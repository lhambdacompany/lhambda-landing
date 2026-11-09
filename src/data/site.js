// Todo el texto de la página vive acá. Para cambiar un dato, se edita este archivo.

export const img = (name) => `/img/${name}`

export const contact = {
  email: 'benjamin@lhambda.com',
  mailto: `mailto:benjamin@lhambda.com?subject=${encodeURIComponent('Consulta desde lhambda.com')}`,
  whatsapp: `https://wa.me/5493454955395?text=${encodeURIComponent(
    'Hola Benjamín, vi lhambda.com y quiero consultarte por un desarrollo.'
  )}`,
  instagram: 'https://www.instagram.com/lhambda/',
}

// Conversación de ejemplo (datos inventados). `me` = el cliente, `d` = segundos hasta que aparece.
export const chat = [
  { me: true, d: 0.6, time: '23:41', text: 'Hola, ¿sigue disponible el 2 ambientes de Pichincha?' },
  { d: 1.9, time: '23:41', text: '¡Hola! Sí, sigue disponible: 2 ambientes, 48 m², USD 78.000. ¿Es para vivir o para invertir?' },
  { me: true, d: 3.3, time: '23:42', text: 'Para vivir. Tengo hasta 80 mil.' },
  { d: 4.6, time: '23:42', text: 'Entra en tu presupuesto. ¿Lo querés ver el sábado a las 11 o el lunes a las 17?' },
  { me: true, d: 6, time: '23:43', text: 'Sábado a las 11' },
  { d: 7.2, time: '23:43', text: 'Listo, quedó agendado. Le paso tu consulta a Marcela, la asesora, con el resumen para que te espere.' },
]

export const services = [
  {
    title: 'Agentes de WhatsApp',
    desc: 'Contestan consultas las 24 horas con la información de tu negocio, hacen las preguntas que harías vos, agendan y te pasan el contacto con un resumen. Cuando quieras, tomás la conversación. Funcionan sobre la API oficial de WhatsApp Business.',
  },
  {
    title: 'Apps móviles',
    desc: 'Apps para iOS y Android con React Native y Expo: reservas, pagos, notificaciones, mapas y chat. Te acompaño en la publicación en App Store y Google Play.',
  },
  {
    title: 'Sistemas web y paneles',
    desc: 'Sitios con catálogo propio, paneles de administración, portales de clientes y la parte que no se ve: bases de datos, APIs y servidores en AWS.',
  },
]

export const rubros = [
  { name: 'Inmobiliarias', desc: 'Un agente que atiende y califica cada consulta, una web propia con tus propiedades y un CRM simple.' },
  { name: 'Gimnasios y centros fitness', desc: 'App de socios con reserva de clases, cobro de cuotas y control de acceso.' },
  { name: 'Estudios contables', desc: 'Un portal para que tus clientes suban documentación y un agente que responde las consultas repetidas.' },
  { name: 'Concesionarias y agencias de autos', desc: 'Respuesta inmediata a cada interesado, agenda de pruebas de manejo y seguimiento.' },
  { name: 'Transporte y movilidad', desc: 'Reservas, rutas, pagos y seguimiento en vivo, como en Carpuling.' },
]

export const steps = [
  { title: 'Charla de 15 minutos', desc: 'Me contás cómo funciona tu negocio hoy.' },
  { title: 'Propuesta por escrito', desc: 'Con el alcance y el precio, sin letra chica.' },
  { title: 'Demo con datos de ejemplo', desc: 'Ves cómo quedaría antes de decidir.' },
  { title: 'Entrega y soporte', desc: 'Te lo dejo funcionando y sigo a tu lado.' },
]

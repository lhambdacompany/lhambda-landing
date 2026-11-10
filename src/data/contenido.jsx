import { Building2, Calculator, Car, Dumbbell, Rocket, Route } from 'lucide-react'

// Todo el texto del sitio vive acá. Para cambiar un dato se edita este archivo.
export const WHATSAPP = '5493454955395'
export const contact = {
  phone: '+54 9 3454 95-5395',
  email: 'benjamin@lhambda.com',
  instagram: 'https://www.instagram.com/lhambda/',
  instagramUser: '@lhambda',
  place: 'Concordia, Entre Ríos, Argentina',
}
export const wa = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`
export const mailto = (subject, body = '') => `mailto:${contact.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`

export const nav = [
  { name: 'Servicios', to: '/servicios' },
  { name: 'Soluciones', to: '/soluciones' },
  { name: 'Proyectos', to: '/proyectos' },
  { name: 'Proceso', to: '/proceso' },
  { name: 'Nosotros', to: '/nosotros' },
]

export const tech = ['React', 'React Native', 'Expo', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'LangChain', 'WhatsApp Business API']

export const servicios = [
  {
    id: 'software',
    titulo: 'Software a medida',
    resumen: 'Sistemas y plataformas pensados para cómo trabaja tu empresa, no al revés.',
    texto: 'Reemplazamos planillas, papeles y herramientas sueltas por un sistema que tu equipo usa todos los días: claro, rápido y preparado para crecer.',
    items: ['Sistemas de gestión', 'Paneles de administración y CRM', 'Reservas y turnos', 'Portales para clientes', 'APIs e integraciones'],
  },
  {
    id: 'mobile',
    titulo: 'Aplicaciones móviles',
    resumen: 'Apps para iOS y Android, de punta a punta.',
    texto: 'Diseño, desarrollo, servidor y publicación en las tiendas. Una sola app para los dos sistemas, con la experiencia que esperan tus clientes.',
    items: ['Apps para clientes y equipos', 'Reservas, pagos y notificaciones', 'Mapas y seguimiento en tiempo real', 'Servidor y panel de administración', 'Publicación en App Store y Google Play'],
  },
  {
    id: 'ia',
    titulo: 'Automatización e inteligencia artificial',
    resumen: 'Menos tareas manuales, más tiempo para lo importante.',
    texto: 'Conectamos tus procesos y sumamos inteligencia artificial donde de verdad ayuda. El resto es software tradicional bien hecho.',
    items: ['Asistentes de WhatsApp sobre la API oficial', 'Asistentes internos para tu equipo', 'Búsqueda sobre tus documentos (RAG)', 'Integraciones entre sistemas', 'Agentes que ejecutan tareas'],
  },
]

export const planes = [
  { nombre: 'Básico', texto: 'Que el sistema siga funcionando.', items: ['Corrección de errores', 'Soporte por WhatsApp', 'Monitoreo del servicio'] },
  { nombre: 'Profesional', texto: 'Mantener y mejorar de a poco.', items: ['Todo lo de Básico', 'Mantenimiento mensual', 'Pequeñas mejoras incluidas', 'Cambios prioritarios'], destacado: true },
  { nombre: 'Enterprise', texto: 'Evolución continua del producto.', items: ['Todo lo de Profesional', 'Soporte prioritario', 'Gestión de infraestructura', 'Hoja de ruta de nuevas funciones'] },
]

export const industrias = [
  { icon: Building2, nombre: 'Inmobiliarias', reto: 'Consultas que llegan fuera de horario y se enfrían.', solucion: 'Un asistente que atiende y califica cada consulta, una web propia con tus propiedades y seguimiento de cada contacto.', ancho: true },
  { icon: Dumbbell, nombre: 'Gimnasios y centros fitness', reto: 'Cuotas, clases y accesos gestionados a mano.', solucion: 'Una app de socios con reserva de clases, cobro de cuotas y control de acceso.' },
  { icon: Calculator, nombre: 'Estudios contables', reto: 'Documentación que llega por todos lados.', solucion: 'Un portal para que tus clientes suban lo que necesitás y un asistente que responde las consultas repetidas.' },
  { icon: Car, nombre: 'Concesionarias y agencias de autos', reto: 'Interesados que esperan una respuesta.', solucion: 'Respuesta inmediata a cada interesado, agenda de pruebas de manejo y seguimiento comercial.', ancho: true },
  { icon: Route, nombre: 'Transporte y movilidad', reto: 'Reservas, rutas y pagos en distintos lugares.', solucion: 'Plataformas con reservas, rutas, cobros y seguimiento en tiempo real, como la que construimos en Carpuling.', ancho: true },
  { icon: Rocket, nombre: 'Empresas y startups', reto: 'Procesos en planillas y mensajes sueltos, o una idea sin producto.', solucion: 'Ordenamos y automatizamos lo que hoy es manual, o llevamos tu idea del prototipo al lanzamiento.' },
]

export const pasos = [
  { titulo: 'Descubrimos', texto: 'Entendemos tu problema, tu proceso actual y qué te está costando tiempo.' },
  { titulo: 'Diseñamos', texto: 'Definimos la solución, el alcance y un presupuesto por escrito.' },
  { titulo: 'Desarrollamos', texto: 'Construimos en ciclos cortos. Ves lo que se va armando funcionando.' },
  { titulo: 'Lanzamos', texto: 'Ponemos el sistema en producción y medimos el resultado real.' },
  { titulo: 'Evolucionamos', texto: 'Seguimos mejorándolo: soporte, mantenimiento y nuevas funciones.' },
]

export const faqs = [
  { q: '¿Cuánto tarda un proyecto?', a: 'Depende del alcance. En la propuesta definimos etapas y fechas por escrito, antes de empezar.' },
  { q: '¿Cómo se cobra?', a: 'Un pago inicial por el desarrollo y, si querés, un plan mensual de mantenimiento y evolución.' },
  { q: '¿Trabajan con empresas de otras ciudades o países?', a: 'Sí. Trabajamos de forma remota, con videollamadas y avances periódicos.' },
  { q: '¿Puedo empezar con algo chico?', a: 'Sí. Muchos proyectos arrancan con un módulo o una automatización puntual y después crecen.' },
  { q: '¿Qué pasa después del lanzamiento?', a: 'Seguimos acompañando: soporte, mantenimiento y nuevas funciones, según el plan que elijas.' },
  { q: '¿Usan inteligencia artificial en todo?', a: 'Solo donde suma. La IA resuelve tareas repetitivas y consultas; el resto es software tradicional bien hecho.' },
]

export const carpuling = {
  titulo: 'Carpuling',
  resumen: 'Plataforma de viajes compartidos entre ciudades.',
  texto: 'Conecta a quienes viajan con conductores que ya hacen ese viaje. La diseñamos y construimos completa, y está disponible en App Store y Google Play.',
  capacidades: ['App móvil para pasajeros y conductores', 'Publicación de viajes y solicitudes de viaje', 'Chat en tiempo real por viaje', 'Mapas y rutas', 'Notificaciones push', 'Calificaciones y reseñas', 'Servidor y API en tiempo real', 'Panel de administración', 'Cobros integrados'],
  stack: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Socket.IO'],
}

export const principios = [
  { titulo: 'Claridad', texto: 'Alcance, plazos y precio por escrito antes de empezar. Sin letra chica.' },
  { titulo: 'Avances visibles', texto: 'Trabajamos en ciclos cortos y mostramos funcionando lo que se construye.' },
  { titulo: 'Producto propio', texto: 'Desarrollamos Carpuling y aplicamos lo que aprendemos a cada proyecto.' },
  { titulo: 'Acompañamiento', texto: 'El lanzamiento no es el final: seguimos con soporte y evolución.' },
]

import { chat, img } from '../data/site'

// Lo único llamativo de la página: una conversación de ejemplo que aparece mensaje a mensaje.
export default function PhoneChat() {
  return (
    <figure className="phone" aria-label="Conversación de ejemplo con un agente de WhatsApp">
      <div className="screen">
        <div className="bar">
          <span className="avatar"><img src={img('lhambda-black.png')} alt="" /></span>
          <span>Inmobiliaria Ejemplo<small>en línea</small></span>
        </div>
        <ol className="chat">
          {chat.map((m) => (
            <li key={m.d} className={m.me ? 'msg me' : 'msg'} style={{ '--d': `${m.d}s` }}>
              {m.text}
              <time>{m.time}</time>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="note">Ilustración de cómo conversaría el asistente. Nombres y datos inventados.</figcaption>
    </figure>
  )
}

import { contact } from '../data/site'
import PhoneChat from './PhoneChat'

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div>
          <h1>Programo lo que tu negocio hoy hace a mano.</h1>
          <p className="lede">
            Agentes de WhatsApp, apps móviles y sistemas web para inmobiliarias, gimnasios, estudios
            contables, concesionarias y más. Hablás conmigo de principio a fin.
          </p>
          <div className="actions">
            <a className="btn" href={contact.whatsapp}>Escribime por WhatsApp</a>
            <a className="link" href={contact.mailto}>o por mail: {contact.email}</a>
          </div>
        </div>
        <PhoneChat />
      </div>
    </section>
  )
}

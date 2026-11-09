import { contact } from '../data/site'

export default function Contact() {
  return (
    <section className="contact">
      <div className="wrap">
        <h2>Hablemos 15 minutos</h2>
        <p>Escribime qué hacés a mano hoy. Te respondo yo.</p>
        <div className="actions">
          <a className="btn" href={contact.whatsapp}>Escribime por WhatsApp</a>
          <a className="link" href={contact.mailto}>o por mail: {contact.email}</a>
        </div>
      </div>
    </section>
  )
}

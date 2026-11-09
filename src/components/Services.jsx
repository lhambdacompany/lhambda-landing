import { services } from '../data/site'

export default function Services() {
  return (
    <section>
      <div className="wrap">
        <h2>Qué puedo construir</h2>
        <div className="rows">
          {services.map((s) => (
            <article className="row" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Fragment } from 'react'
import { rubros } from '../data/site'

export default function Rubros() {
  return (
    <section>
      <div className="wrap split">
        <h2>Por dónde empezaría en cada rubro</h2>
        <div>
          <dl>
            {rubros.map((r) => (
              <Fragment key={r.name}>
                <dt>{r.name}</dt>
                <dd>{r.desc}</dd>
              </Fragment>
            ))}
          </dl>
          <p className="ask">¿Tu rubro no está? Contame qué hacés a mano hoy y te digo si se puede automatizar.</p>
        </div>
      </div>
    </section>
  )
}

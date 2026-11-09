import { steps } from '../data/site'

export default function Process() {
  return (
    <section>
      <div className="wrap">
        <h2>Cómo trabajamos</h2>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.title}>
              <b>{s.title}</b>
              {s.desc}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

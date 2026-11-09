import { contact, img } from '../data/site'

export default function Header() {
  return (
    <header>
      <div className="wrap top">
        <a className="brand" href="#" aria-label="Lhambda, inicio">
          <picture>
            <source srcSet={img('lhambda-white.png')} media="(prefers-color-scheme:dark)" />
            <img src={img('lhambda-black.png')} alt="" width="31" height="32" />
          </picture>
          Lhambda
        </a>
        <a className="mail" href={contact.mailto}>Escribime</a>
      </div>
    </header>
  )
}

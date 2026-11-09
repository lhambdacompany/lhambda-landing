import { contact } from '../data/site'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>Lhambda. Benjamín Vallory, desarrollador de software. Concordia, Entre Ríos, Argentina.</span>
        <a href={contact.instagram}>Instagram</a>
      </div>
    </footer>
  )
}

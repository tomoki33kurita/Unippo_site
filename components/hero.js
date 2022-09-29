import styles from 'styles/hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div>
      <div className={styles.text}>
        <h1 className={styles.title}>
          <FontAwesomeIcon icon={faHouseChimney} />
          {title}
        </h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && <figure> [画像] </figure>}
    </div>
  )
}
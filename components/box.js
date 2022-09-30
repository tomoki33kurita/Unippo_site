import styles from 'styles/box.module.css'
import Image from 'next/image'

export default function Box({ children, img='/card_01.JPG', circleOn=false, flagOn=false, centerOn=false }) {
  return (
    <div className={styles.box}>
      <figure className={circleOn ? styles.circleImg : flagOn ? styles.flagImg : styles.boxImg}>
        <Image
          src={img}
          alt=""
          layout='fill'
          objectFit='cover'
        />
      </figure>
      <div className={centerOn ? styles.titleCenter : styles.title}>{children}</div>
    </div>
  )
}
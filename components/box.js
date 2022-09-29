import styles from 'styles/box.module.css'
import Image from 'next/image'

export default function Box({ children, circleOn=false, centerOn=false }) {
  return (
    <div className={styles.box}>
      <figure className={circleOn ? styles.circleImg : styles.boxImg}>
        <Image
          src='/testimg_001.png'
          alt=""
          layout='fill'
          objectFit='cover'
        />
      </figure>
      <div className={centerOn ? styles.titleCenter : styles.title}>{children}</div>
    </div>
  )
}
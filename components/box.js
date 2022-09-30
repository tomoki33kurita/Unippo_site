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
      {/*
      <svg width="0" height="0" viewBox="0 0 204 143">
        <defs>
          <clipPath id="clipshape" clipPathUnits="objectBoundingBox">
            <path transform="scale(0.00490196,0.00699301)" d="M0 9.62917C24.6557 -8.26736 96.9973 4.13573 101.444 4.82241C105.891 5.50908 178.298 19.1398 204 2.76236V135.292C158.24 147.174 138.018 143.433 102 136.665C59.6961 131.989 37.5961 133.836 0 142.159V9.62917Z" fill="#D9D9D9"/>
          </clipPath>
        </defs>
      </svg>
      */}
      <div className={centerOn ? styles.titleCenter : styles.title}>{children}</div>
    </div>
  )
}
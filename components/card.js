import styles from 'styles/card.module.css'
import Image from 'next/image'
import Button from 'components/button'

export default function Card({ children, title='寄付による支援', circleOn=false, innerOn=false }) {
  return (
    <div className={innerOn ? styles.altCard : styles.card}>
      {innerOn ? '' : <h3 className={styles.title}>{title}</h3>}
      <figure className={circleOn ? styles.circleImg : styles.cardImg}>
        <Image
          src='/eyecatch_001.jpg'
          alt=""
          layout='fill'
          objectFit='cover'
        />
      </figure>
      <div className={innerOn ? styles.innerDesctiption : styles.description}>{children}</div>
      {innerOn ? <h3 className={innerOn ? styles.innerTitle : styles.title}>{title}</h3> : ''}
      {innerOn ? <Button altColor>詳しく見る</Button> : <Button>詳しく見る</Button>}
    </div>
  )
}
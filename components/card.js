import styles from 'styles/card.module.css'
import Image from 'next/image'
import Button from 'components/button'

export default function Card({ children, title='寄付による支援', img='/card_01.jpg', innerOn=false }) {
  return (
    <div className={innerOn ? styles.altCard : styles.card}>
      {innerOn ? '' : <h3 className={styles.title}>{title}</h3>}
      <figure className={innerOn ? styles.altCardImg : styles.cardImg}>
        <Image
          src={img}
          alt=""
          layout='fill'
          objectFit='cover'
        />
      </figure>
      <div className={[styles.cardInner,innerOn ? styles.gray : ''].join(' ')}>
        <div className={innerOn ? styles.innerDesctiption : styles.description}>{children}</div>
        {innerOn ? <h3 className={innerOn ? styles.innerTitle : styles.title}>{title}</h3> : ''}
        {innerOn ? <Button altColor>詳しく見る</Button> : <Button>詳しく見る</Button>}
      </div>
    </div>
  )
}
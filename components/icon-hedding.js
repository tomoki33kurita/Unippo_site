import styles from 'styles/icon-hedding.module.css'
import Image from 'next/image'
import rflag from 'images/flag_red.png'
import bflag from 'images/flag_blue.png'
import yflag from 'images/flag_yellow.svg'

export default function IconHedding({ children, color='blue', borderOff = false }) {
  return (
    <div className={styles.lineUpContainer}>
      <h2 className={borderOff ? styles[color] : styles[`${color}Line`]}>
        {children}
      </h2>
    </div>
  )
}
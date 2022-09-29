import styles from 'styles/describe.module.css'
import Image from 'next/image'

export default function Describe({ children, imgOn = false, img = '/eyecatch_001.jpg', radiusOn = false }) {
  if(imgOn){
    return (
      <div className={[styles.imgBox, radiusOn && styles.leftRadius].join(" ")}>
        <Image
          src={img}
          alt=""
          layout='fill'
          objectFit='cover'
        />
      </div>
    )
  }else {
    return (
      <div className={[styles.textBox, radiusOn && styles.rightRadius].join(" ")}>
        {children}
      </div>
    )
  }
}
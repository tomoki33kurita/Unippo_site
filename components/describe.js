import styles from 'styles/describe.module.css'
import Image from 'next/image'

export default function Describe({ children, imgOn = false, img = '/eyecatch_001.jpg', radiusOn = false }) {
  // JSX部分のif文による分割は、普段やらないです。この場合コンポーネントを2つに分割し、呼び出す側のコンポーネントでロジック(if文の条件となる論理)を管理した方が良いですね
  // →つまり、1つのコンポーネントに "return"が1つしか書かないのが一般的な認識です
  if(imgOn){ 
    return (
      <div className={[styles.imgBox, radiusOn && styles.leftRadius].join(" ")}>
        <figure>
        {radiusOn ?
          <Image
            src={img}
            alt=""
            layout='fill'
            objectFit='cover'
          /> :
          <Image
            src={img}
            alt=""
            layout="responsive"
            sizes="100vw"
            width={1800}
            height={1400}
            objectFit='contain'
          />
        }
      </figure>
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
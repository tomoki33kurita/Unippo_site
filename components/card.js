import styles from 'styles/card.module.css'
import Image from 'next/image'
import Button from 'components/button'

// funciton Card(children, title...) { 処理 }  ではなく、 const Card = (children, title...) => { 処理 } と記載する方が一般的かもです
export default function Card({ children, title='寄付による支援', img='/card_01.JPG', innerOn=false, basicStyle=false}) {
  return ( // return(...) 部分、すなわちJSXが書かれるファイルは、拡張子を .jsxにしています。(Typescriptの場合は、.tsx)  
    <div className={basicStyle ? styles.basic : innerOn ? styles.altCard : styles.card}>
      {/* 以下のような三項演算子は、必要になるまでは消してしまっても良いのかなと思います */}
      {/* {!innerOn && <h3 className={styles.title}>{title}</h3>}  と等価でもあります。*/}
      {innerOn ? '' : <h3 className={styles.title}>{title}</h3>} 
      <figure className={innerOn ? styles.altCardImg : styles.cardImg}>
        {innerOn||basicStyle  ?
          <Image // 直下のImageタグとの差分は、layoutの値の違い、sizes, width, height の有無です→この差分だけ可変にした オリジナルなImageコンポーネントを作ることもありかと思いました。 
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
            width={400}
            height={240}
            objectFit='contain'
          />
        }
      </figure>
      <div className={[styles.cardInner,innerOn ? styles.gray : ''].join(' ')}>
        <div className={innerOn || basicStyle ? styles.innerDesctiption : styles.description}>{children}</div>
        {/* 以下のような三項演算子は、必要になるまでは消してしまっても良いのかなと思います */}
        {/* {innerOn && <h3 className={styles.title}>{title}</h3>}  と等価でもあります。*/}
        {innerOn ? <h3 className={innerOn ? styles.innerTitle : styles.title}>{title}</h3> : ''}
        {basicStyle ? '' : innerOn ? <Button altColor>詳しく見る</Button> : <Button>詳しく見る</Button>}
      </div>
    </div>
  )
}

/**
 * component の作り方のTipsみたいな話しについて↓
 * 
 * コンポーネントはディレクトリの切り方で整理を心がけていたりします。
 * "Atomc design" というデザインの思想を取り入れてコンポーネント設計すると良いと思います。
 * → https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B
 * Atomic design は賛否あったりしますが、Reactの走り初めとしては参考になると思います
 */

/**
 * "YAGNI"、すなわち「機能は実際に必要となるまでは追加しないのが良いとする」という原則があります。
 * 結構、この段階で三項演算子( isA ? aの処理 : bの処理　) を多用されている一方、片方の処理・描画が空っぽなケースも結構見受けられました。
 * 片方の処理・描画が定まってないない場合は、三項演算子を取り払った方が、シンプルになって、管理もしやすいと思います。
 */

/**
 * prettier (プリティア)、 eslint (イーエスリント)、といった開発を助けてくれる機能があります。
 * Unippo＿siteというプロジェクトや、VSCodeといったエディタにプラグインとして追加できます。
 * コードを自動フォーマットしてくれたりして便利なので、ぜひ導入してみてください。
 */

/**
 * TypeScript というスーパーセット(プログラミング言語みたいなもの)があります。
 * JavaScriptに、静的な型情報を付与してくれます。
 * Next.jsは、デフォルトでTypeScriptに対応しています。
 * モダンな開発現場は、ほぼTypeScriptを用いると思うので、もし興味があればこちらも触ってみてください
 */

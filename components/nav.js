import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <a>Unippo</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>私たちについて</a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a>お知らせ</a>
          </Link>
        </li>
        <li>
          <Link href="/activity">
            <a>活動内容</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>支援について</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>コラム</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

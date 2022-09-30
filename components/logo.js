import Link from 'next/link'
import styles from 'styles/logo.module.css'
import Image from 'next/image'

export default function Logo({ boxOn = false }) {
  return (
    <div style={{width:'200px',margin:'var(--space-xs) 0'}}>
      <Link href="/">
        <a className={styles.basic}>
          <Image
            src='/logo_main.png'
            alt="logo"
            layout="responsive"
            width={500}
            height={121}
          />
          <span className='sr-only'>Unippo</span>
        </a>
      </Link>
    </div>
  )
}
import styles from 'styles/section.module.css'

export default function Section({ children, fullWidth = false, color = 'yellow' }) {
  return (
    <section className={ fullWidth ? `${styles.fullwidth} ${styles[color]}` : styles.basic}>
      <div className={styles.inner}>
        {children}
      </div>
    </section>
  )
}
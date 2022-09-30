import styles from 'styles/column.module.css'

export default function Container({ children, large = false }) {
  return (
    <div className={styles.basic}>
      {children}
    </div>
  )
}
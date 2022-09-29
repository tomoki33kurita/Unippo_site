import styles from 'styles/grid.module.css'

export default function Grid({ children,rows = 'grid4' }) {
  return (
    <div className={styles[rows]}>
      {children}
    </div>
  )
}
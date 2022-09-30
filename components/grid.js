import styles from 'styles/grid.module.css'

export default function Grid({ children,rows = 'grid4', gap = 'unset' }) {
  return (
    <div className={styles[rows]} style={{gap:[`${gap}`]}}>
      {children}
    </div>
  )
}
import styles from '@/styles/Technologies.module.css'
import { technologies } from '@/lib/technologies'

export default function Technologies() {
  return (
    <div name="technologies" className={styles.container}>
      <h3 className={`${styles.header} dark:text-white dark:bg-black`}>
        Technologies I frequently use...
      </h3>
      <div className={styles.list}>
        {technologies.map((item) => (
          <div key={item.name} className={styles.item}>
            <span className="md:text-4xl">{item.icon}</span>{' '}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

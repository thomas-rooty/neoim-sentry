import styles from './Neopreview.module.css'
import Image from 'next/image'
import Asteroid from '../../public/assets/asteroids/1.png'

const Neopreview = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>2017 WT28</h1>
        </div>
        <div className={styles.right}>
          <div className={styles.previewBtn}>
            Details
          </div>
        </div>
      </div>
      <div className={styles.toolbar}>
        <div className={styles.toolbarItem}>
          <span>Pause</span>
        </div>
        <div className={styles.toolbarItem}>
          <span>Reset</span>
        </div>
        <div className={styles.toolbarItem}>
          <span>Wireframe</span>
        </div>
        <div className={styles.toolbarItem}>
          <span>Infrared</span>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.detailsItem}>
          <span className={styles.detailsLabel}>E(Mt)</span>
          <span className={styles.detailsValue}>1.273e-02</span>
        </div>
        <div className={styles.detailsItem}>
          <span className={styles.detailsLabel}>M(kg)</span>
          <span className={styles.detailsValue}>7.42e+05</span>
        </div>
        <div className={styles.detailsItem}>
          <span className={styles.detailsLabel}>D(km)</span>
          <span className={styles.detailsValue}>0.0082</span>
        </div>
        <div className={styles.detailsItem}>
          <span className={styles.detailsLabel}>Designation</span>
          <span className={styles.detailsValue}>2017 WT28</span>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={Asteroid}
          alt="Neo"
        />
      </div>
    </div>
  )
}

export default Neopreview
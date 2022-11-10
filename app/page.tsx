import styles from './page.module.css'
import Navbar from '../components/navbar/Navbar'
import Neopreview from "../components/neopreview/Neopreview";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Neopreview />
      </main>
    </div>
  )
}

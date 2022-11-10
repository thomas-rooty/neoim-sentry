import styles from './page.module.css'
import Navbar from '../components/navbar/Navbar'
import Neo from "../components/cards/Neo";
import List from "../components/cards/List";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Neo />
        <List />
      </main>
    </div>
  )
}

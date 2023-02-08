import styles from '../page.module.css'
import Navbar from '../../components/navbar/Navbar'
import ListMongo from "../../components/cards/ListMongo";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Navbar/>
        <ListMongo/>
      </main>
    </div>
  )
}

import styles from './page.module.css'
import Navbar from '../components/navbar/Navbar'
import Neo from "../components/cards/Neo";
import ImpactsDetails from "../components/cards/ImpactsDetails";
import PlotSection from "../components/cards/PlotSection";
import List from "../components/cards/List";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Navbar/>
        <div className={styles.upperCards}>
          <Neo/>
          <ImpactsDetails/>
          <PlotSection/>
        </div>
        <List/>
      </main>
    </div>
  )
}

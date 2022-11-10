'use client';
import {useState, useEffect} from "react";
import styles from './Neo.module.css'
import Image from 'next/image'
import Asteroid from '../../public/assets/asteroids/1.png'

const Neopreview = () => {
  const [neo, setNeo] = useState(null);
  useEffect(() => {
    /*
    const fetchData = async () => {
      const res = await fetch('/api/neo/2017 WT28');
      const data = await res.json();
      setNeo(data.neo);
      console.log(data.neo);
    };
    fetchData();
    */
  }, []);

  if (!neo) {
    return <div>Fetching data from <i>CNEOS Sentry System</i>...</div>;
  } else {
    return (
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>{neo['summary']['des']}</h1>
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
            <span className={styles.detailsValue}>{neo['summary']['energy']}</span>
          </div>
          <div className={styles.detailsItem}>
            <span className={styles.detailsLabel}>M(kg)</span>
            <span className={styles.detailsValue}>{neo['summary']['mass']}</span>
          </div>
          <div className={styles.detailsItem}>
            <span className={styles.detailsLabel}>D(meter)</span>
            <span className={styles.detailsValue}>{Math.floor(neo['summary']['diameter']*100000)/100}</span>
          </div>
          <div className={styles.detailsItem}>
            <span className={styles.detailsLabel}>Designation</span>
            <span className={styles.detailsValue}>{neo['summary']['des']}</span>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src={Asteroid}
            alt="Neo"
          />
        </div>
      </div>
    );
  }
}

export default Neopreview
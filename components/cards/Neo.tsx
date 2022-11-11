'use client';
import {useEffect, Suspense} from "react";
import styles from './Neo.module.css'
import {useStore} from "../../store/zustore";
import {Canvas} from "@react-three/fiber";
import AsteroidModel from "./AsteroidModel";
import {Environment, OrbitControls} from '@react-three/drei'

const Neo = () => {
  const [neo, setNeo] = useStore(state => [state.neo, state.setNeo]);
  const [choosenNeo] = useStore(state => [state.choosenNeo]);
  const [loadingNEO, setLoadingNEO] = useStore(state => [state.loadingNEO, state.setLoadingNEO]);
  useEffect(() => {
    setLoadingNEO(true);
    const fetchData = async () => {
      const res = await fetch('/api/neo/' + choosenNeo);
      const data = await res.json();
      setNeo(data.neo);
      setLoadingNEO(false);
    };
    fetchData();
  }, [choosenNeo]);

  if (loadingNEO) {
    return (
      <div className={styles.card}>
        <div>Fetching data from <i>CNEOS Sentry System</i>...</div>
      </div>
    );
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
            <span className={styles.detailsValue}>{Math.floor(neo['summary']['diameter'] * 100000) / 100}</span>
          </div>
          <div className={styles.detailsItem}>
            <span className={styles.detailsLabel}>Designation</span>
            <span className={styles.detailsValue}>{neo['summary']['des']}</span>
          </div>
        </div>
        <div className={styles.image}>
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight color="#FFCCCB" position={[0, 0, 5]} intensity={2} />
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={0.5}
            />
            <Suspense fallback={null}>
              <AsteroidModel/>
              <Environment preset="sunset"/>
            </Suspense>
          </Canvas>
        </div>
      </div>
    );
  }
}

export default Neo
'use client';
import {useEffect, Suspense, useState} from "react";
import styles from './Neo.module.css'
import {useStore} from "../../store/zustore";
import {Canvas} from "@react-three/fiber";
import AsteroidModel from "./AsteroidModel";
import {Environment, OrbitControls} from '@react-three/drei'

const Neo = () => {
  // Current NEO
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

  // Toolbar buttons state
  const [pause, setPause] = useState(false);
  const [wireframe, setWireframe] = useState(false);

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
          <div className={styles.toolbarItem} onClick={() => setPause(!pause)}>
            <div className={pause ? styles.toolbarItemTextActive : styles.toolbarItemText}>Pause</div>
          </div>
          <div className={styles.toolbarItem} onClick={() => setWireframe(!wireframe)}>
            <div className={wireframe ? styles.toolbarItemTextActive : styles.toolbarItemText}>Wireframe</div>
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
            <ambientLight intensity={0.5}/>
            <directionalLight color="#FFA4A2" position={[0, 0, 10]} intensity={1}/>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              autoRotate={!pause}
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Suspense fallback={null}>
              <AsteroidModel wireframe={wireframe} />
              <Environment preset="sunset"/>
            </Suspense>
          </Canvas>
          <div className={styles.imageRotation}>
            <span>Preview</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Neo
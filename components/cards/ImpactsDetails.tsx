'use client';
import styles from './ImpactsDetails.module.css'
import {useStore} from "../../store/zustore";
import {useEffect, useState} from "react";

const ImpactsDetails = () => {
  const [neo] = useStore(state => [state.neo, state.setNeo]);
  const [impacts, setImpacts] = useState(undefined);

  useEffect(() => {
    setImpacts(neo['data']);
  }, [neo]);

  if (!impacts) {
    return (
      <div className={styles.card}>
        <div className={styles.loading}>Fetching data from <i>CNEOS Sentry System</i>...</div>
      </div>
    );
  } else {
    return (
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>Impact details overview</h1>
          </div>
        </div>
        <div className={styles.container}>
          <table className={styles.table}>
            <thead>
            <tr>
              <th>Energy</th>
              <th>Impact Probability</th>
              <th>Presumed date</th>
              <th>Sigma Vi</th>
            </tr>
            </thead>
            <tbody>

            {// @ts-ignore
              impacts.map((impact, index) => (
                <tr key={index}>
                  <td>{impact['energy']}</td>
                  <td>{impact['ip']}</td>
                  <td>{impact['date']}</td>
                  <td>{impact['sigma_vi']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ImpactsDetails
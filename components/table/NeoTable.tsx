'use client';
import styles from './NeoTable.module.css';
import {useEffect} from "react";
import {useStore} from "../../store/zustore";

const NeoTable = () => {
  // Fetch from /api/neo all the neos and store in state to be used in the table
  const [neos, setNeos] = useStore(state => [state.neos, state.setNeos]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/neo');
      const data = await res.json();
      setNeos(data.neos);
      console.log(data.neos);
    };
    fetchData();
  }, []);

  if (neos.length === 0) {
    return <div>Fetching NEOs from <i>CNEOS Sentry System</i>...</div>;
  } else {
    return (
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
          <tr>
            <th>Designation</th>
            <th>Year Range</th>
            <th>Potential Impacts</th>
            <th>Impact Probability</th>
            <th>Velocity (km/s)</th>
            <th>H (mag)</th>
            <th>Diameter (km)</th>
            <th>Paiermo Scale (cum.)</th>
            <th>Paiermo Scale (max.)</th>
            <th>Torino Scale (max.)</th>
          </tr>
          </thead>
          <tbody>
          {neos.map((neo: any) => (
            <tr key={neo.des}>
              <td>{neo.des}</td>
              <td>{neo.range}</td>
              <td>{neo.n_imp}</td>
              <td>{neo.ip}</td>
              <td>{neo.v_inf}</td>
              <td>{neo.h}</td>
              <td>{neo.diameter}</td>
              <td>{neo.ps_cum}</td>
              <td>{neo.ps_max}</td>
              <td>{neo.ts_max}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default NeoTable;
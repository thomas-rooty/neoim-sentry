'use client';
import styles from './NeoTable.module.css';
import {useEffect} from "react";
import {useStore} from "../../store/zustore";

const NeoTable = () => {
  // Loading state
  const [loadingNEOs, setLoadingNEOs] = useStore(state => [state.loadingNEOs, state.setLoadingNEOs]);

  // Set choosenNeo
  const setChoosenNeo = useStore(state => state.setChoosenNeo);

  // Fetch from /api/neo all the neos and store in state to be used in the table
  const [neos, setNeos] = useStore(state => [state.neos, state.setNeos]);
  const [hMax] = useStore(state => [state.hMax]);
  const [ps] = useStore(state => [state.ps]);
  const [ipMin] = useStore(state => [state.ipMin]);
  useEffect(() => {
    setLoadingNEOs(true);
    const fetchData = async () => {
      const res = await fetch('/api/neo/' + hMax + '/' + ps + '/' + ipMin);
      const data = await res.json();
      setNeos(data.neos);
      console.log(data.neos);
      setLoadingNEOs(false);
    };
    fetchData();
  }, [hMax, ps, ipMin]);

  const handleRowClick = (e: any) => {
    // Console log the id of the row clicked
    console.log(e.target.parentNode.id);
    // Set the choosenNeo to the id of the row clicked
    setChoosenNeo(e.target.parentNode.id);
  }

  if (loadingNEOs) {
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
            <tr id={neo.des} key={neo.des} onClick={handleRowClick}>
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
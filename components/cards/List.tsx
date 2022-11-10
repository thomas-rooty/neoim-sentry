'use client';
import styles from './List.module.css'
import NeoTable from "../table/NeoTable";
import {useStore} from "../../store/zustore";

const List = () => {
  const [hMax, setHMax] = useStore(state => [state.hMax, state.setHMax]);
  const [ps, setPs] = useStore(state => [state.ps, state.setPs]);
  const [ipMin, setIpMin] = useStore(state => [state.ipMin, state.setIpMin]);
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.settings}>
          <h3>Table Settings</h3>
          <div className={styles.settingsContainer}>
            <div className={styles.settingsItem}>
              <select name="observed" id="observed">
                <option value="all">Observed anytime</option>
                <option value="today">Observed within 30 last days</option>
                <option value="week">Observed within 60 last days</option>
                <option value="month">Observed within 180 last days</option>
              </select>
            </div>
            <div className={styles.settingsItem}>
              <select name="ip" id="ip" value={ipMin} onChange={e => setIpMin(e.target.value)}>
                <option value="1e-10">Any Impact Probability</option>
                <option value="1e-2">1e-2</option>
                <option value="1e-4">1e-4</option>
                <option value="1e-6">1e-6</option>
              </select>
            </div>
            <div className={styles.settingsItem}>
              <select name="ps" id="ps" value={ps} onChange={(e) => setPs(e.target.value)}>
                <option value="-10">Any Paiermo scale</option>
                <option value="0">Paiermo scale {'>'}= 0</option>
                <option value="-2">Paiermo scale {'>='} -2</option>
                <option value="-4">Paiermo scale {'>='} -4</option>
                <option value="-6">Paiermo scale {'>='} -6</option>
                <option value="-8">Paiermo scale {'>='} -8</option>
              </select>
            </div>
            <div className={styles.settingsItem}>
              <select name="h" id="h" value={hMax} onChange={(e) => setHMax(e.target.value)}>
                <option value="99">Any H</option>
                <option value="18">H (mag) {'<='} 18</option>
                <option value="20">H (mag) {'<='} 20</option>
                <option value="22">H (mag) {'<='} 22</option>
                <option value="24">H (mag) {'<='} 24</option>
                <option value="26">H (mag) {'<='} 26</option>
                <option value="28">H (mag) {'<='} 28</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <NeoTable />
    </div>
  );
}

export default List;
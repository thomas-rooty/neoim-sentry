'use client';
import styles from './List.module.css'
import {useStore} from "../../store/zustore";
import NeoTableMongo from "../table/NeoTableMongo";

const List = () => {
  const [hMax, setHMax] = useStore(state => [state.hMax, state.setHMax]);
  const [ps, setPs] = useStore(state => [state.ps, state.setPs]);

  const resetToDefaults = () => {
    setHMax('99');
    setPs('-4');
  }
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.settings}>
          <div className={styles.settingsHeader}>
            <h3>Mongo API</h3>
            <div className={styles.settingsReset}>
              <button onClick={resetToDefaults}>Reset to default</button>
            </div>
          </div>
          <div className={styles.settingsContainer}>
            <div className={styles.settingsItem}>
              <select name="ps" id="ps" value={ps} onChange={(e) => setPs(e.target.value)}>
                <option value="-10">Any Palermo scale</option>
                <option value="0">Palermo scale {'>'}= 0</option>
                <option value="-2">Palermo scale {'>='} -2</option>
                <option value="-4">Palermo scale {'>='} -4</option>
                <option value="-6">Palermo scale {'>='} -6</option>
                <option value="-8">Palermo scale {'>='} -8</option>
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
      <NeoTableMongo/>
    </div>
  );
}

export default List;

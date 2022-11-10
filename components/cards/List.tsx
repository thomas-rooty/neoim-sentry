import styles from './List.module.css'
import NeoTable from "../table/NeoTable";

const List = () => {
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
              <select name="ip" id="ip">
                <option value="all">All</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className={styles.settingsItem}>
              <select name="ps" id="ps">
                <option value="all">All</option>
                <option value="sup0">Paiermo scale {'>'}= 0</option>
                <option value="sup2">Paiermo scale {'>='} -2</option>
                <option value="sup4">Paiermo scale {'>='} -4</option>
                <option value="sup6">Paiermo scale {'>='} -6</option>
                <option value="sup8">Paiermo scale {'>='} -8</option>
              </select>
            </div>
            <div className={styles.settingsItem}>
              <select name="h" id="h">
                <option value="all">All</option>
                <option value="sup18">H (mag) {'<='} 18</option>
                <option value="sup20">H (mag) {'<='} 20</option>
                <option value="sup22">H (mag) {'<='} 22</option>
                <option value="sup24">H (mag) {'<='} 24</option>
                <option value="sup26">H (mag) {'<='} 26</option>
                <option value="sup28">H (mag) {'<='} 28</option>
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
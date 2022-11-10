import styles from './List.module.css'
import NeoTable from "../table/NeoTable";

const List = () => {
  return (
    <div className={styles.card}>
      <NeoTable />
    </div>
  );
}

export default List;
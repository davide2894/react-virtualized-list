import { memo } from "react";
import styles from "./ListItem.module.css";
const MemoizedListItem = memo(function ListItem(props: {
  description: String;
  name: String;
  price: number;
  position: number;
  height: number;
}) {
  return (
    <tr data-position={props.position} className={styles.tr}>
      <td className={styles.td}>{props.name}</td>
      <td className={styles.td}>{props.description}</td>
      <td className={styles.td}>{props.price}</td>
    </tr>
  );
});

export default MemoizedListItem;

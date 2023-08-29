import { memo } from "react";

const MemoizedListItem = memo(function ListItem(props: {
  description: String;
  name: String;
  price: number;
  position: number;
  height: number;
}) {
  return (
    <tr
      data-position={props.position}
      style={{
        display: "flex",
        height: props.height,
        lineHeight: `${props.height}px`,
        minWidth: "200px",
        width: "100",
      }}>
      <td
        style={{
          marginLeft: `${props.height}px`,
        }}>
        {props.name}
      </td>
      <td
        style={{
          marginLeft: `${props.height}px`,
        }}>
        {props.description}
      </td>
      <td>{props.price}</td>
    </tr>
  );
});

export default MemoizedListItem;

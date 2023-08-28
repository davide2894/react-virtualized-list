import { Row } from "@/types";
import { memo } from "react";

const MemoizedListItem = memo(function ListItem(props: {
  item: Row;
  height: any;
}) {
  const { item, height } = props;
  return (
    <li
      data-position={item.position}
      style={{
        display: "flex",
        height,
        lineHeight: `${height}px`,
        width: "100%",
      }}>
      <div>{item.position}</div>
      <div
        style={{
          marginLeft: `${height}px`,
        }}>
        {item.name}
      </div>
      <div
        style={{
          marginLeft: `${height}px`,
        }}>
        {item.description}
      </div>
    </li>
  );
});

export default MemoizedListItem;

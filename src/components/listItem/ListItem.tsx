import { Row } from "@/types";
import log from "@/utils/log";
import { memo } from "react";

const MemoizedListItem = memo(function ListItem(props: {
  description: String;
  name: String;
  position: number;
  height: any;
}) {
  log(`rendered list item with position ${props.position}`);

  return (
    <li
      data-position={props.position}
      style={{
        display: "flex",
        height: props.height,
        lineHeight: `${props.height}px`,
        width: "100%",
      }}>
      <div>{props.position}</div>
      <div
        style={{
          marginLeft: `${props.height}px`,
        }}>
        {props.name}
      </div>
      <div
        style={{
          marginLeft: `${props.height}px`,
        }}>
        {props.description}
      </div>
    </li>
  );
});

export default MemoizedListItem;

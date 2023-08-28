import { Row } from "@/types";
import log from "@/utils/log";
import React, { useState, useEffect, Key } from "react";
import MemoizedListItem from "../listItem/ListItem";

const VirtualizedList = (props: { data: any[] }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerHeight = 400; // Set your container height
  const itemHeight = 50; // Set your item height

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    props.data.length - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight)
  );
  const visibleItems = props.data.slice(startIndex, endIndex);
  const invisibleItemsHeight =
    (startIndex + visibleItems.length - endIndex) * itemHeight;

  // log({ startIndex, endIndex, visibleItems });

  const handleScroll = (e: any) => {
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div
      style={{
        height: containerHeight,
        overflowY: "scroll",
      }}
      onScroll={handleScroll}>
      <div
        style={{
          height: `${props.data.length * itemHeight}px`,
        }}>
        <div
          style={{
            position: "relative",
            height: `${visibleItems.length * itemHeight}px`,
            top: `${startIndex * itemHeight}px`,
          }}>
          <ul>
            {visibleItems.map((item: Row, index: number) => (
              <MemoizedListItem
                key={item.id as Key}
                description={item.description}
                position={item.position}
                name={item.name}
                height={itemHeight}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VirtualizedList;

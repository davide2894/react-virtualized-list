import { Row } from "@/types";
import log from "@/utils/log";
import React, { useState, useEffect, Key, useRef, useCallback } from "react";
import MemoizedListItem from "../listItem/ListItem";
import { useThrottle } from "@uidotdev/usehooks";
import MemoizedBackToTopButton from "../backToTopButton/BackToTopButton";
import AddNewRowButton from "../addNewRowButton/AddNewRowButton";
import { useAppSelector } from "@/customHooks/useAppSelector";

const VirtualizedList = (props: { data: Array<Row> }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const divRef = useRef<HTMLInputElement>(null);
  const containerHeight = 400;
  const itemHeight = 50;
  const throttledScrollTop = useThrottle(scrollTop, 500);

  const startIndex = Math.floor(throttledScrollTop / itemHeight);
  const endIndex = Math.min(
    props.data.length - 1,
    Math.ceil((throttledScrollTop + containerHeight) / itemHeight)
  );
  const visibleItems = props.data.slice(startIndex, endIndex);

  const handleScroll = (e: any) => {
    setScrollTop(e.target.scrollTop);
    log("handleScroll called");
  };

  const cachedOnClick = useCallback(() => {
    if (divRef && divRef.current && divRef.current.scrollTo) {
      divRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <AddNewRowButton />
      <div
        ref={divRef}
        style={{
          height: containerHeight,
          overflowY: "scroll",
        }}
        onScroll={handleScroll}>
        <div
          style={{
            height: `${props.data.length * itemHeight}px`,
          }}>
          <table
            style={{
              position: "relative",
              height: `${visibleItems.length * itemHeight}px`,
              top: `${startIndex * itemHeight}px`,
            }}>
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
              </tr>
            </thead>
            <tbody>
              {visibleItems.map((item: Row) => (
                <MemoizedListItem
                  key={item.id as Key}
                  description={item.description}
                  position={item.position}
                  price={item.price}
                  name={item.name}
                  height={itemHeight}
                />
              ))}
            </tbody>
          </table>
        </div>
        <MemoizedBackToTopButton onClick={cachedOnClick} />
      </div>
    </>
  );
};

export default VirtualizedList;

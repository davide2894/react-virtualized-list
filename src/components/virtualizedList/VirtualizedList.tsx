import { Row } from "@types";
import log from "@utils/log";
import { useState, Key, useRef, useCallback } from "react";
import MemoizedListItem from "@components/listItem/ListItem";
import { useThrottle } from "../../vendor/hooks/useThrottle";
import MemoizedBackToTopButton from "@components/backToTopButton/BackToTopButton";
import AddNewRowButton from "@components/addNewRowButton/AddNewRowButton";
import { loadMoreDataThunk } from "@loadMoreDataThunk";
import { useAppDispatch } from "@customHooks/useAppDispatch";
import styles from "./VirtualizedList.module.css";

const VirtualizedList = (props: { data: Array<Row> }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const dispatch = useAppDispatch();
  const divRef = useRef<HTMLInputElement>(null);
  const dataLength = props.data.length;
  const containerHeight = 400;
  const itemHeight = 50;
  const throttledScrollTop = useThrottle(scrollTop, 500);
  const loadMoreThreshold = 30;
  const startIndex = Math.floor(throttledScrollTop / itemHeight);
  const endIndex = Math.min(
    props.data.length - 1,
    Math.ceil((throttledScrollTop + containerHeight) / itemHeight)
  );
  const visibleItems = props.data.slice(startIndex, endIndex);

  const handleScroll = (e: any) => {
    setScrollTop(e.target.scrollTop);
    log();
    log("handleScroll called");
  };

  function handleInfiniteLoad() {
    if (
      divRef &&
      divRef.current &&
      divRef.current.dataset &&
      divRef.current.dataset.endindex
    ) {
      log({
        dataLength: props.data.length,
        endIndex: divRef.current.dataset.endindex,
      });
      const isNearEnd =
        dataLength - 1 - parseInt(divRef.current.dataset.endindex) <=
        loadMoreThreshold;
      log({
        isNearEnd,
      });
      if (isNearEnd) {
        dispatch(loadMoreDataThunk({}));
      }
    }
  }

  const cachedOnClick = useCallback(() => {
    if (divRef && divRef.current && divRef.current.scrollTo) {
      divRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  log({
    dataLength,
    containerHeight,
    itemHeight,
    throttledScrollTop,
    loadMoreThreshold,
    startIndex,
    endIndex,
    visibleItems,
  });

  return (
    <div
      className={styles.container}
      data-testid="virtualizedListTestAttribute">
      <AddNewRowButton />
      <div
        data-testid="scrollContainerTestAttribute"
        data-endindex={endIndex}
        ref={divRef}
        style={{
          overflowY: "scroll",
          height: containerHeight,
        }}
        onScroll={(e) => {
          handleScroll(e);
          handleInfiniteLoad();
        }}>
        <div
          style={{
            height: `${props.data.length * itemHeight}px`,
          }}>
          <table
            className={styles.table}
            style={{
              position: "relative",
              height: `${visibleItems.length * itemHeight}px`,
              top: `${startIndex * itemHeight}px`,
            }}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>Column 1</th>
                <th className={styles.th}>Column 2</th>
                <th className={styles.th}>Column 3</th>
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
    </div>
  );
};

export default VirtualizedList;

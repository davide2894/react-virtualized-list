import log from "@utils/log";
import React, { memo } from "react";
import styles from "./BackToTopButton.module.css";

const MemoizedBackToTopButton = memo(function BackToTopButton(props: {
  onClick: () => void;
}) {
  log("rendered MemoizedBackToTopButton");
  return (
    <button
      data-testid="backToTopButtonTestAttribute"
      onClick={props.onClick}
      className={styles.backToTopButton}>
      Back to top
    </button>
  );
});

export default MemoizedBackToTopButton;

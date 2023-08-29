import log from "@/utils/log";
import React, { memo } from "react";

const MemoizedBackToTopButton = memo(function BackToTopButton(props: {
  onClick: () => void;
}) {
  log("rendered MemoizedBackToTopButton");
  return (
    <button
      onClick={props.onClick}
      style={{
        background: "red",
        position: "sticky",
        bottom: "10px",
      }}>
      Back to top
    </button>
  );
});

export default MemoizedBackToTopButton;

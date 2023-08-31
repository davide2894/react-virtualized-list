import { useState, useRef, useEffect } from "react";
import { AnyIfEmpty } from "react-redux";

// Source https://github.com/uidotdev/usehooks/blob/e5d445ead108b57e081fd1177f440b05ebc5d184/index.js#L1209C1-L1230C2
// I put it here because jest doesn't support ECMAScript modules (or ESM) yet.
// More info here: https://jestjs.io/docs/ecmascript-modules
export function useThrottle(value: any, interval = 500) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastUpdated = useRef(0);

  useEffect(() => {
    const now = Date.now();

    if (
      lastUpdated &&
      lastUpdated.current &&
      now >= lastUpdated.current + interval
    ) {
      lastUpdated.current = now;
      setThrottledValue(value);
    } else {
      const id = window.setTimeout(() => {
        lastUpdated.current = now;
        setThrottledValue(value);
      }, interval);

      return () => window.clearTimeout(id);
    }
  }, [value, interval]);

  return throttledValue;
}

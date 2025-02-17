import { useEffect, useRef } from 'react';
import { useClickOutside as useRCOH } from 'react-click-outside-hook';

function useClickOutside(onCloseCallback: () => void) {
  const [ref, hasClickedOutside] = useRCOH();
  const closeRef = useRef(onCloseCallback);

  useEffect(() => {
    closeRef.current = onCloseCallback;
  }, [onCloseCallback]);

  useEffect(() => {
    if (hasClickedOutside) {
      closeRef.current();
    }
  }, [hasClickedOutside]);

  return ref;
}

export default useClickOutside;

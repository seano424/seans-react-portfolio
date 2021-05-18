import { useState } from "react";

export default function useToggle() {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}

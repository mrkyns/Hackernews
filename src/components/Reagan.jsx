import { useState, useEffect } from "react";

export default function Reagan() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.add("reagan_mod");
      setActive(!active);
    }
  }, []);

  return (
    <div
      onClick={function toggleBtn() {
        document.body.classList.toggle("reagan_mod");
        setActive(!active);
      }}
      className="Reagan"
    >
      {active ? "Newshacker mod" : "Reagan mod"}
    </div>
  );
}

import { useState } from "react";

export default function Reagan() {
  const [active, setActive] = useState(false);
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

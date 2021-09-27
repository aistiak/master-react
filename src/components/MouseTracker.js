import { useEffect, useState } from "react";

const MouseTracker = () => {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {}, []);
  const handelMouseMove = (event) => {
    setMouse({
        x : event.clientX ,
        y : event.clientY ,
    })
  };
  return (
    <div
      style={{ height: "25vh", border: "1px solid" }}
      onMouseMove={handelMouseMove}
    >
      mouse position  ( { mouse.x } , { mouse.y} )
    </div>
  );
};

export default MouseTracker;

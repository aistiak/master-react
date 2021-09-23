import { useContext } from "react";
import { useCurrentTheme, useSetCurrentTheme } from "../ThemeProvider";

const SomeComponent = () => {
  const theme = useCurrentTheme();
  const setTheme = useSetCurrentTheme();
  const myStyle = {
    height: 300,
    width: 300,
    backgroundColor: theme ? "grey" : "lime",
  };
  return (
    <div style={myStyle}>
      <button onClick={setTheme}> toggle </button>
      <div>this is some component</div>
    </div>
  );
};

export default SomeComponent;

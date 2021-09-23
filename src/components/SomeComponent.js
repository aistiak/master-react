import { useContext } from "react";
import { ThemeContext } from "../App";

const SomeComponent = () => {
  const theme = useContext(ThemeContext);

  const myStyle = {
    height: 300,
    width: 300,
    backgroundColor: theme ? "grey" : 'lime',
  };
  return <div style={myStyle}>this is some component  </div>;
};

export default SomeComponent;

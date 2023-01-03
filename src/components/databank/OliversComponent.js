import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataBankContext } from "../../providers/DataBankProvider";
const OliversComponent = () => {
  const { characters } = useContext(DataBankContext);
  const { key } = useParams();

  return (
    <div style={{ color: "white" }}>
      <h1> Hello, my id is {key}</h1>
      <h2>My name is: {characters[key].name}</h2>
      <h3>My descriptiption: {characters[key].description}</h3>
      <h4>My photo</h4>
      <img src={characters[key].image} alt='' />
    </div>
  );
};

export default OliversComponent;

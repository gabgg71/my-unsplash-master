import { useState } from "react";

export const ListItem = ({ imagen , ind,  setEliminar, setTarget}) => {
  const [verdad, setState] = useState(false);
  

  const hazAlgo = () => {
    setState(true);
  };

  const normal = () => {
    setState(false);
  };

  const muestra = () => {
    document.querySelector(".column").style.filter= "brightness(50%)";
    document.body.style.background = "grey";
    setEliminar(true);
    setTarget(imagen._id);
  };

  return (
    <div className="container" onMouseEnter={hazAlgo} onMouseLeave={normal}>
      {verdad && (
        <button className="btn btn-outline-danger" onClick={muestra}>
          delete
        </button>
      )}
      <img src={imagen.url} alt={imagen.title}></img>
      {verdad && <p>{imagen.title}</p>}
    </div>
  );
};

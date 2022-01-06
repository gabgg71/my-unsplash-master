import React, { useState } from "react";
import "../style.css";
import { Add } from "./Add";
import { Delete } from "./Delete";
import { ListItem } from "./ListItem";
import { useContext } from "react";
import { userContext } from "../hooks/userContext";

export const List = ({ imagenes, handleDelete, handleAdd }) => {
  const [eliminar, setEliminar] = useState(false);
  const [target, setTarget] = useState();
  const { add } = useContext(userContext);

  return (
    <>
      <div className="column">
        {imagenes.map((imagen, i) => (
          <ListItem
            imagen={imagen}
            ind={i}
            setEliminar={setEliminar}
            setTarget={setTarget}
          />
        ))}
      </div>
      <b>
        Made with
        <span className="material-icons love">favorite</span>
        by Gabriela Galindo
      </b>
      {add && <Add handleAdd={handleAdd} />}
      {eliminar && (
        <Delete
          setEliminar={setEliminar}
          handleDelete={handleDelete}
          target={target}
        />
      )}
    </>
  );
};

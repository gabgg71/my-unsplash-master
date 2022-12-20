import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const Delete =({setEliminar, handleDelete, target})=>{
    const [ {password}, handlePassChange ] = useForm({
        password: ''
    });
    const [error, setError] = useState(false);
    
    const salir =()=>{
        document.querySelector(".column").style.filter= "none";
        document.querySelector("input").style.background= "white";
        document.querySelector(".logo").style.opacity= 1;
        document.body.style.background = "white";
        setEliminar(false);
    }

    const deleteImage =()=>{
       console.log(target);
        if(password === process.env.REACT_APP_PASS){
            handleDelete(target);
            salir();
        }else{
            document.querySelector('.buttons').style.margin = "5px";
            setError(true);
        }
    }


    return (
        <div className="over">
            <h4>Are you sure?</h4>
            <label>Password</label>
            <input type="password" placeholder="***************" 
            name="password" value={password} onChange={handlePassChange}></input>
            {error && <span>Wrong password, try again!</span>}
            <div className="buttons">
            <button className="btn cancel" onClick={salir}>Cancel</button>
            <button className="btn btn-danger end" onClick={deleteImage}>Delete</button>
            </div>
        </div>
    )
}
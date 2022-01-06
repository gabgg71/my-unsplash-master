import {useContext} from 'react';
import { useForm } from '../hooks/useForm';
import { userContext } from "../hooks/userContext";
export const Add = ({handleAdd})=>{
    const [ imageValues, handleImageChange ] = useForm({
        title: '',
        url: ''
    });

    const { title, url} = imageValues;

    const { setAdd} = useContext(userContext);


    const close =()=>{
        document.querySelector(".column").style.filter= "none";
        document.querySelector("input").style.background= "white";
        document.body.style.background = "white";
        setAdd(false);
    }

    const addImage=async()=>{
        await handleAdd({url, title});
        close();
    }
    return (
        <div className="add">
            <h4>Add a new photo</h4>
            <label>Label</label>
            <input type="text" placeholder="Image title" name = "title" 
            value = {title} onChange={handleImageChange }></input>
            <label>Photo URL</label>
            <input type="text" placeholder="https://" name = "url" 
            value={url} onChange={handleImageChange }></input>
            <div className="buttons">

            <button className="btn cancel" onClick={close}>Cancel</button>
            <button type="submit" className="btn btn-success" onClick={addImage}>Submit</button>
            </div>
        </div>
    )
}
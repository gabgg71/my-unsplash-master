import {useContext} from 'react';
import { userContext } from "../hooks/userContext";
export const Header = ({searching}) => {
  const {setAdd} = useContext(userContext);
    const addI =()=>{
        document.querySelector(".column").style.filter= "brightness(50%)";
        document.querySelector("input").style.background= "grey";
        document.body.style.background = "grey";
        setAdd(true);
    }

    const look =(e)=>{
      if (e.keyCode === 13) {
        searching(e.target.value);
    }
    }

    const focus=()=>{
      document.querySelector('input').placeholder = 'Search and enter';
    }
  return (
    <div className="row">
      <div className="col-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Unsplash_wordmark_logo.svg/2560px-Unsplash_wordmark_logo.svg.png" className="logo" alt="logo"></img>
      </div>
      <div className="col-8">
        <input type="text" placeholder="Search by name" onKeyDown={look} onFocus={focus}/>
      </div>
      <div className="col-2">
        <button className="btn btn-success" onClick={addI}>Add a photo</button>
      </div>
    </div>
  );
};

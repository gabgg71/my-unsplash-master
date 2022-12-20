import {useContext} from 'react';
import { userContext } from "../hooks/userContext";
export const Header = ({searching}) => {
  const {setAdd} = useContext(userContext);
    const addI =()=>{
        document.querySelector(".column").style.filter= "brightness(50%)";
        document.querySelector("input").style.background= "grey";
        document.querySelector(".logo").style.opacity= 0.01;
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
        <img src="https://raw.githubusercontent.com/gabgg71/my-unsplash-master/67d8911221d2adaf23f01bfcc0cbf562fe7459d7/public/my_unsplash_logo.svg" className="logo" alt="logo"></img>
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

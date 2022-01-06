import { useReducer, useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { userContext } from "./hooks/userContext";
import { imageReducer } from "./reducer/reducer";
export let images =[];
export const UnsplashApp = () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const [imagenes, dispatch] = useReducer(imageReducer, images);
  const [add, setAdd] = useState(false);

  window.addEventListener('load', async()=>{
        images= await getData();
        images = images.reverse();
        dispatch({
            type:'change',
            payload: images
        });
  })

  const getData =async()=>{
      const resp = await fetch(`${ baseUrl }`);
      const body = await resp.json();
      if(body.ok){
          return body.msg;
      }
  }

  const handleDelete = async(id) => {
    const resp = await fetch(`${baseUrl}/delete/${id}`,{
        method:'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    });
    const body = await resp.json();
    if(body.ok){
        dispatch({
            type: "delete",
            payload: id,
          })
    }
    
  };

  const handleAdd = async (newImage) => {
    const resp = await fetch(`${baseUrl}/new`,{
        method:'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newImage)
    });
    const body = await resp.json();
    newImage.id = body.image._id;
    images.unshift(newImage);
    if (body.ok) {
      dispatch({
        type: "add",
        payload: newImage,
      });
    }
  };

  const searching = (title) => {
    dispatch({
      type: "search",
      payload: title.toLowerCase(),
    });
  };

  return (
    <userContext.Provider value={{ add, setAdd }}>
      <Header searching={searching} />
      <List
        imagenes={imagenes}
        handleDelete={handleDelete}
        handleAdd={handleAdd}
      />
    </userContext.Provider>
  );
};

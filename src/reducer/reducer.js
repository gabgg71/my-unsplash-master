import { images } from "../UnsplashApp";

export const imageReducer = (state = images, action) => {
  switch (action.type) {
    case "add":
      return state;
    case "delete":
      images.splice(images.findIndex( im => im._id === action.payload),1);
      return state.filter((image) => image._id !== action.payload);
    case "search":
      return images.filter((image) => image.title.toLowerCase().startsWith(action.payload));
    case "change":
      return action.payload;
    default:
      return state;
  }
};

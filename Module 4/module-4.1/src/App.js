import "./App.css";
import { useState } from "react";

function App() {
  const user = {
    name: "J. Robert Oppenheimer",
    imgurl: "https://img.celebrities.id/okz/300/N5Gn10/master_PP7Ev50N79_1175_mengenal_oppenheimer.jpg",
  };
  const [name, setName] = useState(user.name);
  const [imgurl, setImgUrl] = useState(user.imgurl);

  function handleClick() {
    name === "J. Robert Oppenheimer" ? setName("Stephen Hawking") : setName("J. Robert Oppenheimer");
    imgurl === "https://img.celebrities.id/okz/300/N5Gn10/master_PP7Ev50N79_1175_mengenal_oppenheimer.jpg"
      ? setImgUrl("https://hips.hearstapps.com/hmg-prod/images/stephen-hawking-on-october-10-1979-in-princeton-new-jersey-photo-by-santi-visalligetty-images.jpg")
      : setImgUrl("https://img.celebrities.id/okz/300/N5Gn10/master_PP7Ev50N79_1175_mengenal_oppenheimer.jpg");
  }
  return (
    <>
      <img src={imgurl} alt="avatar" className="avatar" />
      <h1>{name}</h1>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}

export default App;

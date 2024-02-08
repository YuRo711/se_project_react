import { defaultClothingItems } from "../../utils/constants.js";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer.js";
import React from "react";
import sunny from "../../images/weather sunny.png";


function App() {
  const [clothes, updateClothes] = React.useState(defaultClothingItems);

  return (
    <div className="App">
      <Header />
      <Main weatherImage={sunny}
        temperature={"75°F"}
        cards={defaultClothingItems}
      />
      <Footer />
      {/*
      <ModalWithForm />
      <ItemModal /> */}
    </div>
  );
}

export default App;

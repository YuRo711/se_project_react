import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  return (
    <main className="profile">
      <SideBar
        openModalHandler={props.openModalHandler}
      />
      <ClothesSection
        openModalHandler={props.openModalHandler}
        setItemModalInfo={props.setItemModalInfo}
        cards={props.cards}
      />
    </main>
  );
}

export default Profile;
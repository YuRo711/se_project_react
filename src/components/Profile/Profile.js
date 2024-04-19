import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile(props) {
  return (
    <main className="profile">
      <SideBar
        openModalHandler={props.openModalHandler}
        logOutHandler={props.logOutHandler}
      />
      <ClothesSection
        openModalHandler={props.openModalHandler}
        setItemModalInfo={props.setItemModalInfo}
        cards={props.cards}
        onCardLike={props.onCardLike}
      />
    </main>
  );
}

export default Profile;
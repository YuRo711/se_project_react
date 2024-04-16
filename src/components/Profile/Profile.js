import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile(props) {
  return (
    <main className="profile">
      <SideBar
        currentUser={props.currentUser}
      />
      <ClothesSection
        openModalHandler={props.openModalHandler}
        setItemModalInfo={props.setItemModalInfo}
        cards={props.cards}
        currentUser={props.currentUser}
      />
    </main>
  );
}

export default Profile;
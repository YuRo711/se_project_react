import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile(props) {
  return (
    <main className="profile">
      <SideBar />
      <ClothesSection
        openModalHandler={props.openModalHandler}
        setItemModalInfo={props.setItemModalInfo}
        cards={props.cards}
      />
    </main>
  );
}

export default Profile;
import "./App.css";
import Content from "./education/Content";
import Formation from "./education/Formation";
import Pied from "./education/Pied";
import Address from "./profile/Address";
import FullName from "./profile/FullName";
import ProfilePhoto from "./profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="image">
          <ProfilePhoto />
          <FullName />
        </div>
        <div className="adresse">
          <Address />
        </div>
      </header>

      <Formation />
      <Content />

      <Pied />
    </div>
  );
}

export default App;

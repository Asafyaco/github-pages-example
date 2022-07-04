import './App.css';
import profileImage from "./assets/‏‏תמונה מסוכות חתוכה - עותק.jpeg";

function App() {
  return (
    <div className="App">
      <h1>My React app</h1>
      <h2>Author: Asaf Yacobovich</h2>
      <img src={profileImage} alt="profle-image"/>
    </div>
  );
}

export default App;

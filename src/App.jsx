import "./App.css";
import { Header } from "./stories/Header/Header";
import { Subheading } from "./stories/Subheading/Subheading";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Subheading label="Welcome!"></Subheading>
    </div>
  );
}

export default App;

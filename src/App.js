import "./App.css";
import MainHeader from "./components/MainHeader";
import ImgComponent from "./components/ImgComponent";
import BtnToNaver from "./components/BtnToNaver";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import Inline from "./components/Inline";
import EventHandler from "./components/EventHandler";
import Example1 from "./components/Example1";
import State from "./components/State";
import State2 from "./components/State2";
import Counter from "./components/Conter";
import Condition from "./components/Condition";
import Emoji from "./components/Emoji";
import ClassState from "./components/ClassState";
import StateAndVariable from "./components/StateAndVariable";
import StateProblem from "./components/StateProblem";
import List from "./components/List";
import Modal from "./components/Modal";
import PropsHeader from "./components/PropsHeader";
import MultiProps from "./components/MultiProps";
import ClassProps from "./components/ClassProps";
import ListChild from "./components/ListChild";
import ItemList from "./components/ItemList";
import CustomList from "./components/CustomList";
import CustomObj from "./components/CustomObj";
import ExampleChangeObj from "./components/ExampleChangeObj";

function App() {
  const nameArr = ["뽀로로", "루피", "크롱이"];
  const pororoObj = {
    name: "뽀로로",
    age: "5",
    nickName: "사고뭉치",
  };

  return (
    <div className="App">
      <ExampleChangeObj />
    </div>
  );
}

export default App;

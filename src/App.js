import {useState} from 'react';
import './App.css';
import Header from './components/header/header';
import Step01 from './components/step-01/step-01';
import Step02 from './components/step-02/step-02';
import Footer from "./components/footer/footer";

function App() {

  const config = {
    stepTitle: [
      "Укажите тип промокампании:",
      "Укажите период проведения промокампании:",
    ]
  }

  const [state, setState] = useState("")
  const [step, setStep] = useState("step01")

  function step01Checker(card) {
    console.log("card " + card)
    if(card === "variant01") setState("variant01")
    if(card === "variant02") setState("variant02")
    if(card === "variant03") setState("variant03")
    if(card === "variant04") setState("variant04")
  }

  function nextCard(){
    console.log("next")
    setStep("step02")
  }

  return (
    <section className="main-wrapper">
      <Header/>
      <Step01
        onCheck={step01Checker}
        activeCard={state}
        currentStep={step}
      />
      <Step02
        currentStep={step}
      />
      <Footer
        onNext={nextCard}
      />
    </section>
  );
}


export default App;

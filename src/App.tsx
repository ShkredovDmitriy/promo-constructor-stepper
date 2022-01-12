import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import log from "./_helpers/log";
import promoConfig from "./promoConfig";
import Header from './components/header/header';
import Stepper from './components/stepper/stepper';
import Footer from "./components/footer/footer";
import { Stick } from './elements/stick/stick';


// TODO: add validation + sticks
// TODO: add 3 jest test
// TODO: add total summ in header
// TODO: refactoring

function App() {

  log("App", promoConfig);

  const [stepData, setStepData] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [step, setStep] = useState(0);

  function showNextStep(): void{
    log("onClickNext")
    const nextStep = step + 1;
    if(nextStep < promoConfig.steps.length){
      setStep(nextStep);
      setStepData(promoConfig.steps[nextStep]);
    }
  }

  function showPrevStep(): void{
    log("onClickNext")
    const prevStep = step - 1;
    if (prevStep >= 0){
      setStep(prevStep);
      setStepData(promoConfig.steps[prevStep]);
    }
  }

  useEffect(function(){
    setStepData(promoConfig.steps[0]);
  }, [])

  return (
    <section className="main-wrapper">
      <Header
        stepData = { stepData }
        totalPrice = {totalPrice}
      />
      <Stepper
        stepData = { stepData }
      />
      <Footer
        step = { step }
        stepCount = {promoConfig.steps.length}
        onClickNext={showNextStep}
        onClickPrev={showPrevStep}
      />
      <Stick message={"Выберите один из вариантов"}/>
    </section>
  );
}


export default App;
import {useState, useEffect} from 'react';
import './App.css';
import log from "./_helpers/log";
import promoConfig from "./promoConfig";
import Header from './components/header/header';
import Stepper from './components/stepper/stepper';
import Footer from "./components/footer/footer";

function App() {

  log("App", promoConfig);

  const [stepData, setStepData] = useState({});
  const [totalPrice, setTotalPrice] = useState([]);
  const [step, setStep] = useState(0);

  function showNextStep(){
    log("onClickNext")
    const nextStep = step + 1;
    if(nextStep < promoConfig.steps.length){
      setStep(nextStep);
      setStepData(promoConfig.steps[nextStep]);
    }
  }

  function showPrevStep(){
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
      />
      <Stepper
        stepData = { stepData }
      />
      <Footer
        stepData = { stepData }
        onClickNext={showNextStep}
        onClickPrev={showPrevStep}
      />
    </section>
  );
}


export default App;

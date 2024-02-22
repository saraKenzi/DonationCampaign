import { createContext, useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import {  purple, red, orange,  } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

import axios from "axios";

import './App.css';
import AllDonation from "./AllDonation";
import FormDonation from "./FormDonation";
import { calcAmount, calcPercent,isSucssesCangeFormt } from './Functions';
import NavBar from "./NavBar";
import Home from "./Home";


export const MyCurrency = createContext();
const dayStyle = createTheme({
  palette: {
    primary: {
      light: purple[200],
      main: purple[500],
      dark: purple[700],
      contrastText: '#000',
    },
  }
});
const nightStyle = createTheme({
  palette: {
    primary: {
      light: red[400],
      main: red[300],
      dark: red[900],
      contrastText: '#000',
    },
    background: {
      default: orange[50],
      paper: orange[50]
    }
  }
});


function App() {
  document.dir = 'rtl';


  let [arrDonation, setArrDonation] = useState([
    { name: "אסתי פישהוף", amount: 350, note: "ללידה קלה...", date: new Date("2023-12-22"), id: 2 },
    { name: "דבורי גולדנברג", amount: 600, note: "הצלחה בצילומי חוץ...", date: new Date("2023-11-17"), id: 3 },
    { name: "שרה קנזי", amount: 30000, note: "נחת מהילדים", date: new Date("2023-12-24"), id: 4 },
  ]);


  const targetDonationInt = 200000;
  let [sumOfAllAmount, setSumOfAllAmount] = useState(calcAmount(arrDonation));
  let [cntDonation, setCntDonation] = useState(0);
  let [percent, setPercent] = useState(calcPercent(sumOfAllAmount, targetDonationInt));


  useEffect(() => {
    setSumOfAllAmount(calcAmount(arrDonation));
    setCntDonation(arrDonation.length);


  }, [arrDonation]);
  useEffect(() => {
    setPercent(calcPercent(sumOfAllAmount, targetDonationInt));
  }, [sumOfAllAmount]);

    useEffect(() => {            //טעינת שער המטבע בעת טעינת הדף
    axios.get("https://v6.exchangerate-api.com/v6/aa56942a32141dc51b41c3fc/latest/USD")
      .then(res => {
        setCurrency((prevCurrency) => { return { ...prevCurrency, USD: res.data.conversion_rates.ILS } });
      }).catch(error => console.log(error));
  }, [])


  const [buttonOfStyle, setButtonOfStyle] = useState("day");

  const changeToDayOrNight = () => {
    setButtonOfStyle(buttonOfStyle === "day" ? "night" : "day")

  };

  let [currency, setCurrency] = useState({ USD: 3.5, format: 'ILS' });

  const changeFormat = () => {
    let copy = {...currency};
    if (currency.format === "USD") {
      copy.format = "ILS";
      setCurrency(copy);
      setTimeout(()=>{
        isSucssesCangeFormt(copy.format);

      },500);
    }
    else {
      copy.format = "USD";
      setCurrency(copy);
      setTimeout(()=>{
        isSucssesCangeFormt(copy.format);

      },500);
       
      }
  }


  

  return (<>
    <ThemeProvider theme={buttonOfStyle === "day" ? dayStyle : nightStyle}>
      <MyCurrency.Provider value={currency} >
        <CssBaseline />

        <NavBar onClickChangeStyle={changeToDayOrNight} funcChangeFormatr={changeFormat} buttonOfStyle={buttonOfStyle}  sumOf={sumOfAllAmount} cntOf={cntDonation} percentOf={percent} targetOf={targetDonationInt} />
        <Routes>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/AllDonation" element={<AllDonation buttonOfStyle={buttonOfStyle} arr={arrDonation} setArr={setArrDonation} />}></Route>
          <Route path="/FormDonation" element={<FormDonation buttonOfStyle={buttonOfStyle} arr={arrDonation} setArr={setArrDonation} cntDonation={cntDonation} />}></Route>
        </Routes>
      </MyCurrency.Provider>
    </ThemeProvider>


  </>
  );
}
export default App;

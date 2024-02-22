import * as React from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import './ProgressBar.css';

import { purple, red } from '@mui/material/colors';
import {showByFormat} from './Functions'


import { MyCurrency } from './App';
import { useContext } from "react";
const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            light: purple[200],
            main: purple[300],
            dark: purple[700],
            contrastText: '#000',
        },

    }
});
const nightStyle = createTheme({
    palette: {
        mode: "light",
        primary: {
            light: red[200],
            main: red[300],
            dark: red[700],
            contrastText: '#000',
        },

    }
});
const ProgressBar = ({ percent, sum, cnt, target, buttonOfStyle }) => {
buttonOfStyle==="day"?theme.palette.primary.main="#ba68c8":theme.palette.primary.main="#e57373"
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 15, //גובה הפס
        width: 1100, //רוחב הפס

        borderRadius: 10, //עיגול קצוות הפס
        [`&.${linearProgressClasses.primary}`]: {
            
            // שקיפות של הרקע מאחורה
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 900],
        }
    }));

    let objCurrency = useContext(MyCurrency);


    return (<>


        <div className='divAllItemOfProgress'>
            <div className='up-div'>
                {buttonOfStyle==="day"&& <p className='sum'><b><span style={{ color: theme.palette.primary.dark }}> {showByFormat(sum,objCurrency)}  </span> </b> </p>}
                {buttonOfStyle==="night"&& <p className='sum'><b><span style={{ color: nightStyle.palette.primary.dark }}> {showByFormat(sum,objCurrency)} </span> </b> </p>}
                {buttonOfStyle==="day"&& <p className='percent'><b> <span style={{ color: theme.palette.primary.dark }}>{percent}% </span> גוייסו </b></p>}
                {buttonOfStyle==="night"&& <p className='percent'><b> <span style={{ color: nightStyle.palette.primary.dark }}>{percent}% </span> גוייסו </b></p>}
            </div>
            <div className='div-pro-bar'>
                {buttonOfStyle === "day" && <img className='icon' src='./pic/heart_day.png' alt='heart' style={{ left: `${percent - 2}%` }} />}
                {buttonOfStyle === "night" && <img className='icon' src='./pic/heart_night.png' alt='heart' style={{ left: `${percent - 2}%` }} />}
                <label className='lable-percent' style={{ left: `${percent - 1}%` }}>{percent}%  </label>

                <ThemeProvider theme={theme} >
                    <BorderLinearProgress className='pro-bar' variant="determinate" value={percent} />
                </ThemeProvider>
            </div>
            <div className='down-div'>
            {buttonOfStyle==="day"&& <p className='cnt'><b> מספר תורמים: <span style={{ color: theme.palette.primary.dark }}>{cnt.toLocaleString()}</span></b>   </p>}
            {buttonOfStyle==="night"&& <p className='cnt'><b> מספר תורמים: <span style={{ color: nightStyle.palette.primary.dark }}>{cnt.toLocaleString()}</span></b>   </p>}
            {buttonOfStyle==="day"&& <p className='target'><b> יעד: <span style={{ color: theme.palette.primary.dark }}>{showByFormat(target,objCurrency)}</span></b></p>}
            {buttonOfStyle==="night"&& <p className='target'><b> יעד: <span style={{ color: nightStyle.palette.primary.dark }}>{showByFormat(target,objCurrency)}</span></b></p>}
            </div>
        </div>

    </>
    );
}

export default ProgressBar;
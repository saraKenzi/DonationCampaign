
import * as React from 'react';
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { purple, red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import './FormDonation.css'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import { MyCurrency } from './App';
import { saveByIls } from './Functions'





const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});



const FormDonation = ({ arr, setArr, percentOf, sumOf, targetOf, cntDonation, buttonOfStyle }) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();



    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = () => {
        if (!loading) { // אם  לא סיים לטעון
            setSuccess(false); //false משתנה 
            setLoading(true); // true וטעינה 
            timer.current = window.setTimeout(() => { //הפעלת הפונקציה
                setSuccess(true);// true  משתנה
                setLoading(false); //false טעינה 
            }, 600); // הזמן שיקח לו להטען
        }
        setTimeout(() => {
            handleClickOpen()
        }, 1000);
    }


    ///////////////
    let objCurrency = useContext(MyCurrency);
    //////////////////////

    let [oneDonation, setOneDonation] = useState({
        name: "",
        amount: 0,
        note: "כל הישועות!",
        date: new Date()

    });
    let [myErrors, setMyErrors] = useState({});
    const checkDetails = () => {
        let error = {};
        if (!oneDonation.amount)
            error.amount = "נא הקש סכום לתרומה";
        else if (oneDonation.amount <= 0)
            error.amount = "הסכום לתרומה אינו תקין";
        if (!oneDonation.name) {
            oneDonation.name = "החפץ בעילום שמו"
        }
        if (!oneDonation.note || oneDonation.note === "") {
            oneDonation.note = " כל הישועות!"
        }
        else

            setMyErrors(error);
        return error;

    }

    const change = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        let inputType = e.target.type;
        if (inputType === "checkbox")
            inputValue = e.target.checked;
        if (inputName === 'amount')
            inputValue = +inputValue;


        let copy = { ...oneDonation };
        copy[inputName] = inputValue;
        setOneDonation(copy);
    }

    const sendForm = (e) => {
        e.preventDefault();
        let result = checkDetails();

        if (Object.keys(result).length === 0) {
            oneDonation = { ...oneDonation, id: cntDonation + 1, amount: saveByIls(oneDonation.amount, objCurrency) }

            let copy = [...arr, oneDonation];
            setArr(copy);


            handleButtonClick();

            return true;
        }
        else
            setMyErrors(result);
        return false;
    }

    const navigate = useNavigate();
    const handleGoToAllDonation = () => navigate("/AllDonation");



    return (<>
        {buttonOfStyle === "day" && <h1 style={{ textAlign: "center", color: purple[800] }}>הכנס פרטי תרומה</h1>}
        {buttonOfStyle === "night" && <h1 style={{ textAlign: "center", color: red[800] }}>הכנס פרטי תרומה</h1>}
        <CacheProvider value={cacheRtl}>
            <Box
                component="form" onSubmit={sendForm}
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate autoComplete="off">


                <TextField

                    id="outlined-search" //עיצוב
                    name='name'
                    label="שם פרטי ומשפחה" //כותרת האינפוט
                    onBlur={change}
                    placeholder='ניתן לתרום בעילום שם'
                />


                <TextField className={myErrors.amount ? 'error-input' : ''}
                    required
                    id="outlined-start-adornment"
                    name='amount'
                    label="הסכום לתרומה"
                    error={Boolean(myErrors.amount)}
                    onBlur={change}
                    InputProps={{
                        endAdornment: < InputAdornment position="end" > {objCurrency.format === 'USD' ? '$' : '₪'}</InputAdornment>
                    }}
                />
                <div>{myErrors.amount && <span className='error-message'>{myErrors.amount}</span>}</div>


                <TextField

                    id="outlined-search" //עיצוב
                    name='note'
                    label=" הקדשה" //כותרת האינפוט
                    multiline
                    maxRows={4}
                    placeholder=' לא יודע למה לתרום?         ניתן להקדיש גם לרפואה/להצלחה/לזיווג הגון/לזרע של קיימא ועוד....'
                    onBlur={change}
                />


                <React.Fragment>
                    <Button variant="contained"
                        onClick={sendForm}>


                        {<SendIcon />}
                        תרום כעת
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {" תרומתך התקבלה"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                בזכותך נוכל להציל עוד משפחה של דובים,
                                הנמצאת בסכנת הכחדה קיומית.
                                כעת, תוכל לעבור לדף התרומות הכולל
                                או להשאר בדף הנוכחי
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>לתרומה נוספת</Button>
                            <Button onClick={handleGoToAllDonation} autoFocus>
                                לצפיה בדף התרומות
                            </Button>
                        </DialogActions>
                    </Dialog>
                </React.Fragment>

            </Box>


        </CacheProvider >

    </>


    );
}


export default FormDonation;




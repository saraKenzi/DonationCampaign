import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {showByFormat} from './Functions'
import { MyCurrency } from './App';
import { useContext } from "react";

import {funcCalcOverTime} from "./Functions";
import "./OneDonate.css";

const OneDonate = ({ itemFromAllDonation }) => {
    let objCurrency = useContext(MyCurrency);

return (<Card className="one-donate"  elevation={10} sx={{ width: 275 }}>
    <CardContent >
        <Typography variant="h6" component="div">
            {itemFromAllDonation.name}
        </Typography>

        < Typography className="amount" variant="h5" sx={{ mb: 1.5 }} color="text.secondary" >
            {showByFormat(itemFromAllDonation.amount,objCurrency)}
        </Typography>
        

        <Typography>
        <p className="Italic-style">{itemFromAllDonation.note}</p>
        </Typography>

        <Typography variant="body2">
        {funcCalcOverTime(itemFromAllDonation.date)}
        </Typography>

    </CardContent>
</Card >
);
}

export default OneDonate;
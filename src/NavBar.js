
import SvgIcon from '@mui/material/SvgIcon';
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from "react-router-dom";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProgressBar from "./ProgressBar";
import './NavBar.css';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import PublishedWithChangesRoundedIcon from '@mui/icons-material/PublishedWithChangesRounded';
import IconButton from '@mui/material/IconButton';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { styled } from '@mui/material/styles';

import {  purple, red } from '@mui/material/colors';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { MyCurrency } from './App';
import { useContext } from "react";


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 35,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,

    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));


const NavBar = ({ sumOf, cntOf, percentOf, targetOf, onClickChangeStyle, buttonOfStyle, funcChangeFormatr }) => {

  let objCurrency = useContext(MyCurrency);
  const [x, setX] = React.useState(0);

  


  return (<>
    {buttonOfStyle === "day" && <img src="./pic/navBarPic_day.png" alt="navBarPic" style={{ width: "100%" }} />}
    {buttonOfStyle === "night" && <img src="./pic/navBarPic_night.png" alt="navBarPic" style={{ width: "100%" }} />}
    {objCurrency.format === "ILS" && <IconButton size="large" onClick={funcChangeFormatr}>
      <CurrencyExchangeIcon className='USD-ILS' sx={{ color: "black", fontSize: 32 }} />
    </IconButton>}
    {objCurrency.format === "ILS" && <span style={{fontStyle:"italic"}}>לחץ לתצוגת האתר בדולרים</span>}
    {objCurrency.format === "USD" && <IconButton size="large" onClick={funcChangeFormatr}>
      <SvgIcon className='USD-ILS' sx={{ fontSize: 30 }}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="4950.000000pt" height="4907.000000pt" viewBox="0 0 4950.000000 4907.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,4907.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M23750 49049 c-410 -16 -845 -49 -1175 -89 -88 -10 -232 -22 -320 -25 -3545 -134 -7061 -1204 -10376 -3156 -1245 -733 -2550 -1669 -3609 -2588 -356 -310 -914 -831 -1029 -961 -28 -33 -158 -157 -289 -277 -454 -416 -1087 -1062 -1496 -1528 -1725 -1965 -3080 -4317 -4016 -6970 -828 -2348 -1325 -4951 -1420 -7445 -11 -288 -14 -1079 -4 -1104 6 -15 208 -16 2193 -16 l2186 0 128 128 128 128 3 740 c3 764 11 985 56 1534 171 2072 664 3940 1503 5695 1778 3720 5127 6712 9777 8732 2063 896 4476 1617 6570 1963 348 57 459 68 850 85 1049 45 2032 41 3010 -11 4592 -243 8489 -1590 11436 -3952 1381 -1107 2551 -2456 3273 -3775 51 -93 110 -206 131 -253 l39 -84 -2734 0 -2735 0 0 -2185 0 -2185 6695 0 6695 0 0 6695 0 6695 -2185 0 -2185 0 -1 -3002 c0 -2770 -2 -3000 -16 -2968 -79 170 -213 439 -272 545 -839 1495 -2611 3257 -5106 5077 -546 398 -1313 922 -1669 1140 -100 61 -731 377 -1116 557 -3730 1752 -7613 2727 -11400 2861 -325 11 -1214 11 -1520 -1z" />
            <path d="M26285 34410 c-841 -21 -1807 -43 -2145 -49 -850 -16 -1259 -34 -1730 -77 -1838 -167 -3290 -609 -4400 -1338 -311 -204 -575 -419 -835 -680 -600 -601 -1000 -1302 -1205 -2111 -105 -414 -155 -887 -132 -1254 9 -134 3 -1583 -22 -6071 -19 -3242 -33 -5896 -32 -5898 2 -1 486 -22 1076 -47 728 -31 1179 -45 1400 -45 l327 0 6 448 c4 246 25 2614 47 5262 22 2648 44 4905 50 5015 28 568 129 1180 275 1659 337 1109 973 1818 1912 2135 535 180 990 232 2283 262 491 12 2300 6 2334 -7 15 -6 16 -443 16 -4930 l0 -4924 58 0 c31 0 599 -20 1262 -45 663 -25 1211 -45 1218 -45 9 0 12 1285 12 6390 l0 6390 -122 -1 c-68 -1 -811 -19 -1653 -39z" />
            <path d="M30556 32328 c-3 -178 -24 -2467 -46 -5088 -21 -2621 -44 -4934 -50 -5140 -6 -232 -17 -445 -29 -558 -206 -1913 -913 -3011 -2211 -3430 -492 -159 -930 -211 -2020 -242 -403 -11 -1805 -13 -2258 -3 l-302 6 0 4923 0 4922 -62 6 c-35 3 -574 24 -1198 46 -624 22 -1170 42 -1212 45 l-78 5 0 -6390 0 -6390 68 0 c63 0 3509 78 4422 100 577 14 994 41 1485 96 2450 272 4238 1084 5275 2394 502 634 822 1387 934 2195 37 265 44 462 33 945 -5 176 7 2839 26 6050 18 3154 33 5736 33 5736 -6 8 -2329 95 -2532 94 l-272 0 -6 -322z" />
            <path d="M44981 24046 l-134 -134 7 -394 c25 -1389 -112 -2834 -390 -4118 -422 -1945 -1158 -3692 -2237 -5310 -1878 -2816 -4779 -5124 -8532 -6787 -2105 -933 -4587 -1685 -6725 -2037 -394 -65 -461 -72 -765 -86 -1596 -70 -2957 -39 -4365 101 -2308 228 -4468 763 -6360 1576 -456 196 -1078 498 -1480 718 -1673 916 -3102 2057 -4261 3400 -482 559 -930 1182 -1260 1752 -97 168 -253 463 -264 501 l-6 22 2730 0 2731 0 0 2185 0 2185 -6695 0 -6695 0 0 -6695 0 -6695 2185 0 2185 0 2 3003 3 3002 29 -65 c16 -36 78 -162 137 -280 595 -1187 1799 -2544 3574 -4026 928 -776 2202 -1711 3200 -2349 234 -149 890 -477 1630 -815 3330 -1518 6891 -2433 10290 -2645 499 -31 660 -36 1250 -42 880 -8 1533 21 2160 97 88 10 232 22 320 25 3734 142 7446 1323 10885 3463 1486 925 2945 2061 4015 3126 138 137 304 298 370 359 674 618 1294 1266 1846 1928 1293 1551 2363 3321 3186 5269 483 1143 896 2391 1203 3635 386 1564 626 3152 715 4735 23 417 37 1012 30 1283 l-7 247 -2187 0 -2186 0 -134 -134z" />
          </g>
        </svg>
      </SvgIcon>
    </IconButton>}
    {objCurrency.format === "USD" && <span style={{fontStyle:"italic", width:2}}>לחץ לתצוגת האתר בשקלים</span>}


    <ProgressBar percent={percentOf} sum={sumOf} cnt={cntOf} target={targetOf} buttonOfStyle={buttonOfStyle} style={{ width: '90%' }} />



    <FormControlLabel className="color-button"
      control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked onChange={onClickChangeStyle} />}
    />
    <Tabs className='tabs' value={x}
      aria-label="icon label tabs example"
      centered >
      {buttonOfStyle === "day" && <Link to="/Home" style={{ color: purple[800] }} onClick={() => { setX(0) }} ><Tab icon={<PetsIcon />} label="דף הבית" /></Link>}
      {buttonOfStyle === "night" && <Link to="/Home" style={{ color: red[800] }} onClick={() => { setX(0) }} ><Tab icon={<PetsIcon />} label="דף הבית" /></Link>}
      {buttonOfStyle === "day" && <Link to="FormDonation" style={{ color: purple[800] }} onClick={() => { setX(1) }}><Tab icon={<VolunteerActivismRoundedIcon />} label="תרום עכשיו" /></Link>}
      {buttonOfStyle === "night" && <Link to="FormDonation" style={{ color: red[800] }} onClick={() => { setX(1) }}><Tab icon={<VolunteerActivismRoundedIcon />} label="תרום עכשיו" /></Link>}
      {buttonOfStyle === "day" && <Link to="AllDonation" style={{ color: purple[800] }} onClick={() => { setX(2) }}><Tab icon={<PublishedWithChangesRoundedIcon />} label="תרמו עד כה" /></Link>}
      {buttonOfStyle === "night" && <Link to="AllDonation" style={{ color: red[800] }} onClick={() => { setX(2) }}><Tab icon={<PublishedWithChangesRoundedIcon />} label="תרמו עד כה" /></Link>}
    </Tabs>

  </>
  );

}
export default NavBar;

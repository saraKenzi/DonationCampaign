import * as React from 'react';
import { useState, useEffect } from "react";

import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { CacheProvider } from '@emotion/react';
import { purple, red } from "@mui/material/colors";
import InputAdornment from '@mui/material/InputAdornment';
import createCache from '@emotion/cache';

import OneDonate from "./OneDonate";



const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});



const AllDonation = ({ arr, setArr, buttonOfStyle }) => {


    const [typeToSort, setTypeToSort] = useState('');
    const [selectedDinner, setSelectedDinner] = useState('');
    const [active, setActive] = useState([]);
    
    const handleChange = (e) => {
        setTypeToSort(e.target.value);
    };

    const handleFilter = () => {
        const filtered = arr.filter(arr => arr.note.includes(selectedDinner) || arr.name.includes(selectedDinner));
        setActive(filtered);
    };
    const onChange = (event) => {
        const value = event.target.value;
        setSelectedDinner(value);
    }
   


    useEffect(() => {
        setActive(arr);
    }, [arr]);

    useEffect(() => {
        sortBy(typeToSort);
    }, [typeToSort]);

    const sortBy = (typeToSort) => {
        let copy = [...arr];
        switch (typeToSort) {
            case 1:
                // sort by name Up
                copy.sort((a, b) => { return a.name > b.name ? 1 : -1; });
                setArr(copy);
                break;

            case 2: {
                // sort by name Down
                copy.sort((a, b) => { return a.name > b.name ? -1 : 1; });
                setArr(copy);
                break;

            }

            case 3:
                //sort by amount Up
                copy.sort((a, b) => { return a.amount - b.amount });
                setArr(copy);
                break;
            case 4:
                //sort by amount Down
                copy.sort((a, b) => { return b.amount - a.amount });
                setArr(copy);
                break;

            case 5:
                //sort by date Up
                copy.sort((a, b) => { return a.date.getTime() > b.date.getTime() ? 1 : -1; });
                setArr(copy);
                break;

            case 6:
                //sort by date Down
                copy.sort((a, b) => { return a.date.getTime() > b.date.getTime() ? -1 : 1; });
                setArr(copy);
                break;

            default:
                break;
        }
    }




    return (<div>
        <Box sx={{ flexGrow: 1 }}>

            <Stack spacing={0.1} direction="row"
                divider={<Divider flexItem />}
                sx={{ width: 150 }}>


                <FormControl sx={{ m: 1, minWidth: 250 }}>

                    <CacheProvider value={cacheRtl}>

                        <TextField id="outlined-basic" className='searchTextFile'
                            value={selectedDinner}
                            label="חפש שם / הקדשה"
                            onBlur={(event, newValue) => {
                                handleFilter(event, newValue)
                            }}
                            onChange={(event) => {
                                onChange(event)
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        {buttonOfStyle === "day" && <IconButton onClick={() => { handleFilter(); }}
                                            sx={{ color: purple[900] }} aria-label="add to shopping cart" >
                                            <SearchIcon />
                                        </IconButton>}
                                        {buttonOfStyle === "night" && <IconButton onClick={() => { handleFilter(); }}
                                            sx={{ color: red[900] }} aria-label="add to shopping cart" >
                                            <SearchIcon />
                                        </IconButton>}
                                    </InputAdornment>
                                )
                            }}
                        />





                    </CacheProvider>
                </FormControl>





                {/* sort button */}
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">מיון</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={typeToSort}
                        onChange={handleChange}
                        autoWidth
                        label="מיון"
                    >
                        <MenuItem value=""><em>ללא</em> </MenuItem>
                        <MenuItem value={1}>מיון מ-א עד ת </MenuItem>
                        <MenuItem value={2}>מיון מ-ת עד א </MenuItem>
                        <MenuItem value={3}>מיון לפי סכום תרומה סדר עולה</MenuItem>
                        <MenuItem value={4}>מיון לפי סכום תרומה סדר יורד</MenuItem>
                        <MenuItem value={5}>מיון לפי התרומה הישנה ביותר </MenuItem>
                        <MenuItem value={6}>מיון לפי התרומה החדשה ביותר</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
        </Box>
        
        {/* all donation */}
        <br />
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                {active.map((item) => {
                    return (<Grid item xs={2.8}>
                        {/* key is not work!!! */}
                        <OneDonate key={item.id} itemFromAllDonation={item} />
                    </Grid>)
                })}
            </Grid>
        </Box>

    </div >


    );
}


export default AllDonation;



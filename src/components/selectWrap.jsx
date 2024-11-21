import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl /* sx={{ m: 1, minWidth: 80 }} */>
        <InputLabel id="demo-simple-select-autowidth-label" sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"-10px"}}>60</InputLabel>
        <Select
          /* labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth" */
          value={age}
          onChange={handleChange}
          /* autoWidth */
          /* label="Age" */
          sx={{width:"80px",height:"30px"}}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={20}>70</MenuItem>
          <MenuItem value={21}>80</MenuItem>
          <MenuItem value={22}>90</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}


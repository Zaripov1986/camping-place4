import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function OutlinedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" style={{width:"390px",border: "2px solid var(--blue, #006DAB)",borderRadius:"10PX"}}>CREATE ACCOUNT</Button>
      
    </Stack>
  );
}
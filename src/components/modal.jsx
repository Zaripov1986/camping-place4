import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import play2 from "../../../assest/playicon.svg"
import iconplay from "../assests/Ellipse5.svg"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
      <img src={iconplay} alt="icon-img" style={{width:"50px",height:"50px",fill:" rgba(255, 255, 255, 0.30)",strokeWidth: "1px",stroke: "#FFF"}}/>
      <img src={play2} alt="play-icon" style={{display:"flex",alignItems:"center",justifyContent:"center"}}/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9NpSU-j6eV8?si=fdzghRp8ZWKbl8df" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
    </div>
  );
}

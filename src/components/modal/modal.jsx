import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import iconplay from "../../assests/Ellipse5.svg"
import playicon from "../../assests/palayicon.svg"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export  function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
      <img src={iconplay} alt="icon-img" style={{width:"50px",height:"50px",fill:" rgba(255, 255, 255, 0.30)",strokeWidth: "1px",stroke: "#FFF"}}/>
      <img src={playicon} alt="play-img" style={{marginLeft:"-35px"}}/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,borderRadius:"20px",border:"none"}}>
        <iframe width="560" height="315" style={{borderRadius:"20px"}} src="https://www.youtube.com/embed/9NpSU-j6eV8?si=zO92siLNAOLH2-Wm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
    </div>
  );
}

export  function BasicModal1() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
      <img src={iconplay} alt="icon-img" style={{width:"50px",height:"50px",fill:" rgba(255, 255, 255, 0.30)",strokeWidth: "1px",stroke: "#FFF"}}/>
      <img src={playicon} alt="play-img" style={{marginLeft:"-35px"}}/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,borderRadius:"20px",border:"none"}}>
        <iframe width="560" height="315" style={{borderRadius:"20px"}} src="https://www.youtube.com/embed/HJTLzUy6w8Y?si=ipwwuNMRgGlofER_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
    </div>
  );
}


export  function BasicModal2() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
      <img src={iconplay} alt="icon-img" style={{width:"50px",height:"50px",fill:" rgba(255, 255, 255, 0.30)",strokeWidth: "1px",stroke: "#FFF"}}/>
      <img src={playicon} alt="play-img" style={{marginLeft:"-35px"}}/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,borderRadius:"20px",border:"none"}}>
        <iframe width="560" height="315" style={{borderRadius:"20PX"}} src="https://www.youtube.com/embed/N6HZKTPzMPQ?si=cXN4MOBY2kV3JSZa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
    </div>
  );
}

export  function BasicModal3() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
      <img src={iconplay} alt="icon-img" style={{width:"50px",height:"50px",fill:" rgba(255, 255, 255, 0.30)",strokeWidth: "1px",stroke: "#FFF"}}/>
      <img src={playicon} alt="play-img" style={{marginLeft:"-35px"}}/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,borderRadius:"20px",border:"none"}}>
        <iframe width="560" height="315" style={{borderRadius:"20px"}} src="https://www.youtube.com/embed/qarm04mxLak?si=c1LpD4b9jgNHOfm3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
    </div>
  );
}


export  function BasicModal4() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
      <img src={iconplay} alt="icon-img" style={{width:"50px",height:"50px",fill:" rgba(255, 255, 255, 0.30)",strokeWidth: "1px",stroke: "#FFF"}}/>
      <img src={playicon} alt="play-img" style={{marginLeft:"-35px"}}/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,borderRadius:"20px",border:"none"}}>
        <iframe width="560" height="315" style={{borderRadius:"20px"}} src="https://www.youtube.com/embed/VZVmTaQxRgE?si=TlzePirSB20tfZkG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
    </div>
  );
}


export  function BasicModal5() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
      <img src={iconplay} alt="icon-img" style={{width:"50px",height:"50px",fill:" rgba(255, 255, 255, 0.30)",strokeWidth: "1px",stroke: "#FFF"}}/>
      <img src={playicon} alt="play-img" style={{marginLeft:"-35px"}}/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,borderRadius:"20px",border:"none"}}>
        <iframe width="560" height="315" style={{borderRadius:'20PX'}} src="https://www.youtube.com/embed/sThvM5wfCOQ?si=ozCV_BW3V5dUX81D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
    </div>
  );
}

export  function BasicModal6() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
      <img src={iconplay} alt="icon-img" style={{width:"50px",height:"50px",fill:" rgba(255, 255, 255, 0.30)",strokeWidth: "1px",stroke: "#FFF"}}/>
      <img src={playicon} alt="play-img" style={{marginLeft:"-35px"}}/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,borderRadius:"20px",border:"none"}}>
        <iframe width="560" height="315" style={{borderRadius:"20px"}} src="https://www.youtube.com/embed/LYlgK67aku4?si=xrO5qbyt_bJYeVMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
    </div>
  );
}


export  function BasicModal7() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
      <img src={iconplay} alt="icon-img" style={{width:"50px",height:"50px",fill:" rgba(255, 255, 255, 0.30)",strokeWidth: "1px",stroke: "#FFF"}}/>
      <img src={playicon} alt="play-img" style={{marginLeft:"-35px"}}/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,borderRadius:"20px",border:"none"}}>
        <iframe width="560" height="315" style={{borderRadius:"20px"}} src="https://www.youtube.com/embed/9VDjInQq2To?si=2d10Cv5k5qewhbM2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>
    </div>
  );
}
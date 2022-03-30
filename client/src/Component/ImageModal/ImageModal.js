import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CardMedia from "@mui/material/CardMedia";
import { images } from "../../utils/image";
import "./imageModal.css";



export default function ImageModal({ open, onClose, onImageSelect }) {
 

  return (
    <div>
      <Modal
        open={open}
        onClose={()=> onClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <>
        <Box className = "imageModal__box">

         {Object.keys(images).map(key=>{
             
            return  <CardMedia className= "imageModal__cardMedia"
             component="img"
            onClick={()=>{onImageSelect(key)}}
             image={images[key]}
             alt="random"
         />
         })}

        </Box>
        </>
      </Modal>
    </div>
  );
}
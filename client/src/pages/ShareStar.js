import React, { component } from "react";
import Button from "@mui/material/Button";

import 
{ LinkedinShareButton,
  LinkedinIcon 
} from "react-share";


export default function ShareStar (star)
 { 
        const shareUrl = 'https://siriuswm3.herokuapp.com/viewentries?starId=' + star.id;
        return (
            <div>
                <LinkedinShareButton url = {shareUrl}  >
                <LinkedinIcon size = {40} square ={true} />
                </LinkedinShareButton>
         </div>
        ); 
} 

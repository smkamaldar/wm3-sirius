import { useState } from "react";
import emailjs from "emailjs-com";
import { Card, CardContent, Grid, Stack, TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Home.css";



const initialState = {
  name: "",
  email: "",
  message: "",
};


export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box component="main" className="contact-main">
    <Typography className="contact-title" variant="h4" color="black" fontStyle="italic"> Contact Us ... </Typography>
    <Card className="contact-card"
      sx={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}
    >
      <CardContent sx={{ padding:"1.5rem" }} className="contact-">
        <Stack container spacing={2} >
          <Grid xs={12} sm={6} item>
            <TextField sx={{ backgroundColor: "white" }} label="First Name" placeholder="Enter First Name" fullWidth required  />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField sx={{ backgroundColor: "white" }} label="Last Name" placeholder="Enter Last Name" fullWidth required  />
          </Grid>
          <Grid xs={12} item>
            <TextField sx={{ backgroundColor: "white" }} type="email" label="Email" placeholder="Enter Email" fullWidth required  />
          </Grid>
          <Grid xs={12} item>
            <TextField sx={{ backgroundColor: "white" }} label="Message" placeholder="Enter Message" multiline={true} rows={4} fullWidth required  />
          </Grid>
          <Grid xs={12} item className="button-wrapper">
            <Button sx={{ margin: "0.8rem 0 0.3rem", backgroundColor: "black" }} className="contact-button" type="submit" variant="contained" align="center">Submit</Button>
          </Grid>
        </Stack>
      </CardContent>
    </Card>
    </Box>



















  //   <div>
  //     <div id='contact'>
  //       <div className='container'>
  //         <div className='col-md-8'>
  //           <div className='row'>
  //             <div className='section-title'>
  //               <h2>Get In Touch</h2>
  //               <p>
  //                 Please fill out the form below to send us an email and we will
  //                 get back to you as soon as possible.
  //               </p>
  //             </div>
  //             <form name='sentMessage' validate onSubmit={handleSubmit}>
  //               <div className='row'>
  //                 <div className='col-md-6'>
  //                   <div className='form-group'>
  //                     <input
  //                       type='text'
  //                       id='name'
  //                       name='name'
  //                       className='form-control'
  //                       placeholder='Name'
  //                       required
  //                       onChange={handleChange}
  //                     />
  //                     <p className='help-block text-danger'></p>
  //                   </div>
  //                 </div>
  //                 <div className='col-md-6'>
  //                   <div className='form-group'>
  //                     <input
  //                       type='email'
  //                       id='email'
  //                       name='email'
  //                       className='form-control'
  //                       placeholder='Email'
  //                       required
  //                       onChange={handleChange}
  //                     />
  //                     <p className='help-block text-danger'></p>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className='form-group'>
  //                 <textarea
  //                   name='message'
  //                   id='message'
  //                   className='form-control'
  //                   rows='4'
  //                   placeholder='Message'
  //                   required
  //                   onChange={handleChange}
  //                 ></textarea>
  //                 <p className='help-block text-danger'></p>
  //               </div>
  //               <div id='success'></div>
  //               <button type='submit' className='btn btn-custom btn-lg'>
  //                 Send Message 
  //               </button>
  //             </form>
  //           </div>
  //         </div>
  //         <div className='col-md-3 col-md-offset-1 contact-info'>
  //           <div className='contact-item'>
  //             <h3>Contact Info</h3>
  //             <p>
  //               <span>
  //                 <i className='fa fa-map-marker'></i> Address
  //               </span>
  //               {props.data ? props.data.address : "loading"}
  //             </p>
  //           </div>
  //           <div className="contact-item">
  //             <p>
  //               <span>
  //                 <i className='fa fa-phone'></i> Phone
  //               </span>{""}
  //               {props.data ? props.data.phone : "loading"}
  //             </p>
  //           </div>
  //           <div className='contact-item'>
  //             <p>
  //               <span>
  //                 <i className='fa fa-envelope-o'></i> Email
  //               </span>{""}
  //               {props.data ? props.data.email : "loading"}
  //             </p>
  //           </div>
  //         </div>
  //         <div className="col-md-12">
  //           <div className="row">
  //             <div className="social">
  //               <ul>
  //                 <li>
  //                   <a href={props.data ? props.data.facebook : "/"}>
  //                     <i className="fa fa-facebook"></i>
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a href={props.data ? props.data.twitter : "/"}>
  //                     <i className='fa fa-twitter'></i>
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a href={props.data ? props.data.youtube : "/"}>
  //                     <i className='fa fa-youtube'></i>
  //                   </a>
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
   );
};


export default Contact;
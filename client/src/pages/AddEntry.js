import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ImageModal from "../Component/ImageModal/ImageModal";
import "./Home.css";


import SignIn from "./SignIn";



const AddEntry = () => {
const [title, setTitle] = useState("");
const [situation, setSituation] = useState("");
const [task, setTask] = useState("");
const [action, setAction] = useState("");
const [result, setResult] = useState("");
const [competence, setCompetence] = useState("");
  const navigate = useNavigate();

const submitEntry = () => {

  fetch("/api/stars",
  {
    method:"POST",
    headers: { 'Content-Type' : 'application/json'},
    body : JSON.stringify({
      title,
      competence,
      situation,
      task,
      action,
      result
    })

  })
  .then((response)=> response.json())
  .then((data)=>{
    console.log(data)
    navigate("/viewentries")
  })
  alert("entry submitted successfully");
};

const handleGuestClick = () => {
  alert ("Please sign in, to add a Star entry");
  navigate("/signin")
}

return (
	<main className="main">
		<div className="EntryTitle">
			<h1>Add A Star</h1>
		</div>


		<div className="EntryForm">

 <Box className="Form"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 3, width: "60%" },
      }}
      noValidate
      autoComplete="off"
    >
		<TextField
          id="standard-multiline-static"
          label="Title"
          name="title"
          rows={4}
          placeholder="Choose a title for your entry"
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      <TextField
          id="standard-multiline-static"
          label="Competence"
          name="competence"
          rows={4}
          placeholder="Choose a title for your entry"
          variant="standard"
          value={competence}
          onChange={(e) => setCompetence(e.target.value)}
        />
				<TextField
          id="standard-multiline-static"
          label="Situation"
          name="situation"
          rows={3}
          placeholder="What is the situation?"
          variant="standard"
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
        />
				<TextField
          id="standard-multiline-static"
          label="Task"
          name="task"
          rows={4}
          placeholder="What is the task?"
          variant="standard"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
				<TextField
          id="standard-multiline-static"
          label="Action"
          name="action"
          rows={4}
          placeholder="What was the action you took?"
          variant="standard"
          value={action}
          onChange={(e) => setAction(e.target.value)}
        />
					<TextField
          id="standard-multiline-static"
          label="Results"
          name="results"
          rows={4}
          placeholder="What was the result of your actions?"
          variant="standard"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
	</Box>
	</div>

	<div className="button">

	<Button
   onClick={submitEntry}
   onClick ={handleGuestClick}
    style={{
    color: "white",
    backgroundColor: "rgb(0, 0, 0)",
    borderRadius: "5px",
    }} variant="contained"
    >Submit</Button>
	<Button
  onClick={() => navigate("/")}
  variant="outlined" color="primary"> Cancel </Button>
</div>

	</main>
  );
=======
import "./addEntry.css";

const AddEntry = () => {
	const [title, setTitle] = useState("");
	const [situation, setSituation] = useState("");
	const [task, setTask] = useState("");
	const [action, setAction] = useState("");
	const [result, setResult] = useState("");
	const [competence, setCompetence] = useState("");
	const [image, setImage] = useState("");
	const [isImageModalOpen, setIsImageModalOpen] = useState(false);
	const navigate = useNavigate();

	const submitEntry = () => {
		fetch("/api/stars", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				title,
				competence,
				situation,
				task,
				action,
				result,
				image,
			}),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}

				if (response.status === 401) {
					return navigate("/SignIn");
				}
			})
			.then((data) => {
				if (data) {
					navigate("/viewentries");
				}
			});
	};

	return (
		<main className="main">
			<div className="EntryTitle">
				<h1>Add A Star</h1>
			</div>

			<div className="EntryForm">
				<Box
					className="Form"
					component="form"
					sx={{
						"& .MuiTextField-root": { m: 3, width: "60%" },
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						width: "100%",
					}}
					noValidate
					autoComplete="off"
				>
					<TextField
						id="standard-multiline-static"
						label="Title"
						name="title"
						rows={4}
						placeholder="Choose a title for your entry"
						variant="standard"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<TextField
						id="standard-multiline-static"
						label="Competence"
						name="competence"
						rows={4}
						placeholder="Choose a title for your entry"
						variant="standard"
						value={competence}
						onChange={(e) => setCompetence(e.target.value)}
					/>
					<TextField
						id="standard-multiline-static"
						label="Situation"
						name="situation"
						rows={3}
						placeholder="What is the situation?"
						variant="standard"
						value={situation}
						onChange={(e) => setSituation(e.target.value)}
					/>
					<TextField
						id="standard-multiline-static"
						label="Task"
						name="task"
						rows={4}
						placeholder="What is the task?"
						variant="standard"
						value={task}
						onChange={(e) => setTask(e.target.value)}
					/>
					<TextField
						id="standard-multiline-static"
						label="Action"
						name="action"
						rows={4}
						placeholder="What was the action you took?"
						variant="standard"
						value={action}
						onChange={(e) => setAction(e.target.value)}
					/>
					<TextField
						id="standard-multiline-static"
						label="Results"
						name="results"
						rows={4}
						placeholder="What was the result of your actions?"
						variant="standard"
						value={result}
						onChange={(e) => setResult(e.target.value)}
					/>
					<div>
						<Button onClick={() => setIsImageModalOpen(true)}>
							Select a photo
						</Button>
						{image && <span>{`${image} selected.`}</span>}
					</div>
					<ImageModal
						open={isImageModalOpen}
						onClose={() => setIsImageModalOpen(false)}
						onImageSelect={(key) => {
							setImage(key);
							setIsImageModalOpen(false);
						}}
					/>
				</Box>
			</div>

			<div className="button-wrapper">
				<Button
					onClick={() => navigate("/")}
					variant="outlined"
					color="primary"
				>
					Cancel
				</Button>
				<Button
					onClick={submitEntry}
					style={{
						color: "white",
						backgroundColor: "rgb(0, 0, 0)",
						borderRadius: "5px",
					}}
					variant="contained"
				>
					Submit
				</Button>
			</div>
		</main>
	);
};

export default AddEntry;

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Home.css";



const AddEntry = () => (

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
          Title
          rows={4}
          defaultValue="Choose a title for your entry"
          variant="standard"
        />
				<TextField
          id="standard-multiline-static"
          label="Situation"
          Situation
          rows={3}
          defaultValue="What is the situation?"
          variant="standard"
        />
				<TextField
          id="standard-multiline-static"
          label="Task"
          Task
          rows={4}
          defaultValue="What is the task?"
          variant="standard"
        />
				<TextField
          id="standard-multiline-static"
          label="Action"
          Action
          rows={4}
          defaultValue="What was the action you took?"
          variant="standard"
        />
					<TextField
          id="standard-multiline-static"
          label="Results"
          Result
          rows={4}
          defaultValue="What was the result of your actions?"
          variant="standard"
        />
	</Box>
	</div>

	<div className="button">
	<Button style={{
                    color: "white",
                    backgroundColor: "rgb(0, 0, 0)",
                    borderRadius: "5px",
                }} variant="contained">Submit</Button>
	<Button variant="outlined" color="primary"> Cancel </Button>
</div>

	</main>
);

export default AddEntry;
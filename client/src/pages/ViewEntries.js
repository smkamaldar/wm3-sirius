import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12];

const theme = createTheme();

export default function ViewEntries() {
    return (
      <ThemeProvider theme={theme}>

        <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={6}>
              <Card
                sx={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "50%",
                    // 16:9
                    // pt: "56.25%",
                  }}
                  image="https://images.unsplash.com/photo-1538045698727-ac45d4365100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    STAR
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the
                    content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Share</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
    </ThemeProvider>
    );
    }



import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { DoneAllRounded } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import { colorTheme } from "./themes/colorScheme";
import styled from "styled-components";
import { Todos } from "./components/Todos";

const StyledPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .main-layout {
    flex-grow: 1;
    background-color: inherit;
  }
`;

// from macbook
const App = () => {
  return (
    <ThemeProvider theme={colorTheme}>
      <StyledPage>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <DoneAllRounded />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Chucha Todo
            </Typography>
            <Button color="inherit" variant="outlined">
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Todos />
      </StyledPage>
    </ThemeProvider>
  );
};

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Box } from '@mui/system';
import FirstPage from './HomeComponents/FIrstPage';
import SecondPage from './HomeComponents/SecondPage';
import ThirdPage from './HomeComponents/ThirdPage';
import Button from "@mui/material/Button";


function BasicExample() {
  const navigate = useNavigate();


  return <Box>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Fourth Assignment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button
              onClick={() => navigate("firstpage")}
            >
              First Page
            </Button>
            <Button
              onClick={() => navigate("secondpage")}
            >
              Second Page
            </Button>
            <Button
              onClick={() => navigate("thirdpage")}
            >
              Third Page
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Routes>
      <Route path="firstpage" element={<FirstPage />} />
      <Route path="secondpage" element={<SecondPage />} />
      <Route path="thirdpage" element={<ThirdPage />} />
    </Routes>
  </Box>
}



export default BasicExample;

import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Container} from "react-bootstrap"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/Homescreen";
import Productscreen from "./screens/Productscreen";
import Cartscreen from "./screens/Cartscreen";



function App() {
  return (

      <Router>
        <Header />
          <main>
            <Container>
              <Routes>
                <Route path='/' element={<Homescreen />} exact/>
                <Route path='/product/:id' element= {<Productscreen />} />
                <Route path='/cart/:id?'   element= {<Cartscreen />} />
              </Routes>
            </Container>
          </main>
        <Footer />
      </Router>
  );
}

export default App;

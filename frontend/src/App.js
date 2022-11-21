import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap"
import Homescreen from "./screens/Homescreen";

function App() {
  return (
    <>
      <Header />
        <main>
          <Container>
            {/* <h1>Welcome to my e shop</h1> */}
            <Homescreen />
          </Container>
        </main>
      <Footer />
    </>
  );
}

export default App;

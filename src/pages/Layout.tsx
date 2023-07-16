import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";

const Layout = () => {
  return (
    <>
    <header className="pb-3 mb-4 border-bottom">
        <Navigation />
    </header>

    <main className="flex-shrink-0">
        <Container>
            <Outlet />
        </Container>
    </main>

    <Footer /> 
    </>
  )
};

export default Layout;
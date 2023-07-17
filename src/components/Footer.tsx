import Container from 'react-bootstrap/Container';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer mt-auto py-3">
        <Container>
            <p className="float-end"><a className='text-decoration-none' href="#">Back to top</a></p>
            
            <div>&copy; <a className='text-decoration-none' href="https://nateshoffner.com">Nate Shoffner</a>, {currentYear}. All rights reserved</div>
            <small className='text-muted'>LCWC++ is not affiliated with <a className='text-decoration-none' href="https://www.lcwc911.us">LCWC</a>.</small>
            
        </Container>
    </footer>
  )
}

export default Footer
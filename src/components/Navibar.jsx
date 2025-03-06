import {  Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/Без названия21_20250215181131.png'

const Styles = styled.div`
	a,
	.navbar-brand,
	.navbar-nav .nav-link {
		color: #adb1b8;
		
		&:hover {
			color: #fff;
		}
	}

	.navbar {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999;
	}
	
	.main-content {
		margin-top: 1.5rem; 
	}
`

export default function Navibar() {

	return (
		<>
			<Styles>
				<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
					<Container>
						<Navbar.Brand className='ms-2'> <img src={logo} alt="logo" style={{ width: '40px'}} /> </Navbar.Brand>
						<Navbar.Toggle aria-controls='responsive-navbar-nav' />
						<Navbar.Collapse id='responsive-navbar-nav'>
							<Nav className='ms-auto'>
								<Nav.Link as={Link} to='/'>
									Main
								</Nav.Link>
								<Nav.Link as={Link} to='/galery'>
									Galery
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<div className='main-content'>
				</div>
			</Styles>

		</>
	)
}

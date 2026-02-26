'use client';
import { Navbar as BsNavbar, Nav, Container, Button } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';

const sections = [
    { id: 'basic-info', label: 'About' },
    { id: 'job-history', label: 'Experience' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'personal-projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

const SCROLL_OFFSET = -64;
const SCROLL_DURATION = 50;

export default function Navbar() {

    return (
        <BsNavbar
            bg="dark"
            variant="dark"
            expand="md"
            fixed="top"
            style={{ borderBottom: '1px solid #6c757d' }}
        >
            <Container>
                <BsNavbar.Brand
                    as={ScrollLink}
                    to="basic-info"
                    smooth={true}
                    duration={SCROLL_DURATION}
                    offset={SCROLL_OFFSET}
                    style={{ cursor: 'pointer' }}
                >
                    Damián Jankov
                </BsNavbar.Brand>
                <BsNavbar.Toggle aria-controls="main-nav" />
                <BsNavbar.Collapse id="main-nav">
                    <Nav className="ms-auto">
                        {sections.map(({ id, label }) => (
                            <Nav.Link
                                key={id}
                                as={ScrollLink}
                                to={id}
                                smooth={true}
                                duration={SCROLL_DURATION}
                                offset={SCROLL_OFFSET}
                                spy={true}
                                activeClass="active"
                                style={{ cursor: 'pointer' }}
                            >
                                {label}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <a href="/djcv.pdf" download="Damian_Jankov_CV.pdf">
                        <Button variant="outline-secondary" size="sm">
                            Download CV
                        </Button>
                    </a>
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
}

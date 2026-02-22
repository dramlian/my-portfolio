'use client';
import { useState } from 'react';
import { Navbar as BsNavbar, Nav, Container, Button } from 'react-bootstrap';

const sections = [
    { id: 'basic-info', label: 'About' },
    { id: 'job-history', label: 'Experience' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'personal-projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

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
                <BsNavbar.Brand href="#basic-info">
                    Damián Jankov
                </BsNavbar.Brand>
                <BsNavbar.Toggle aria-controls="main-nav" />
                <BsNavbar.Collapse id="main-nav">
                    <Nav className="ms-auto">
                        {sections.map(({ id, label }) => (
                            <Nav.Link
                                key={id}
                                href={`#${id}`}
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

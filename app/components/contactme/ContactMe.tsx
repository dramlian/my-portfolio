'use client';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import styles from "./ContactMe.module.css";

const RECIPIENT = 'jankovdamian@gmail.com';

export default function ContactMe() {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSend = () => {
        const gmailUrl =
            `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(RECIPIENT)}` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    };

    const isDisabled = subject.trim() === '' && body.trim() === '';

    return (
        <Row className="justify-content-center ms-5">
            {/* Left Side - Contact Methods */}
            <Col md={4}>
                <div className="d-flex flex-column gap-4 align-items-start">
                    <a href="mailto:jankovdamian@gmail.com" className={`d-flex align-items-center gap-3 text-decoration-none ${styles.contactItem}`}>
                        <FaEnvelope size={40} />
                        <div>
                            <div className="fw-semibold">Email</div>
                            <small className="text-muted">jankovdamian@gmail.com</small>
                        </div>
                    </a>
                    <a href="tel:+421907073599" className={`d-flex align-items-center gap-3 text-decoration-none ${styles.contactItem}`}>
                        <FaPhone size={40} />
                        <div>
                            <div className="fw-semibold">Phone</div>
                            <small className="text-muted">+421 907 073 599</small>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/damian-jankov-0577a8223/" target="_blank" rel="noopener noreferrer" className={`d-flex align-items-center gap-3 text-decoration-none ${styles.contactItem}`}>
                        <FaLinkedin size={40} />
                        <div>
                            <div className="fw-semibold">LinkedIn</div>
                            <small className="text-muted">Damian Jankov</small>
                        </div>
                    </a>
                    <a href="https://github.com/dramlian" target="_blank" rel="noopener noreferrer" className={`d-flex align-items-center gap-3 text-decoration-none ${styles.contactItem}`}>
                        <FaGithub size={40} />
                        <div>
                            <div className="fw-semibold">GitHub</div>
                            <small className="text-muted">dramlian</small>
                        </div>
                    </a>
                </div>
            </Col>

            {/* Right Side - Form */}
            <Col md={8}>
                <Form>
                    <Form.Group className="mb-3" controlId="mailSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="What's it about?"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="mailBody">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={6}
                            placeholder="Write your message here..."
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button
                            variant="secondary"
                            onClick={handleSend}
                            disabled={isDisabled}
                        >
                            Open in Gmail
                        </Button>
                    </div>
                </Form>
            </Col>
        </Row>
    );
}

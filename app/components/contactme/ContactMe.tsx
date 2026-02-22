'use client';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
        <Card>
            <Card.Body>
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
            </Card.Body>
        </Card>
    );
}

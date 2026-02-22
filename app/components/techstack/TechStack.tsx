'use client';
import { useState } from 'react';
import { Tab, Tabs, Card, Modal, Button } from 'react-bootstrap';
import styles from './TechStack.module.css';

type TechItem = {
    name: string;
    description: string;
    color: string;
};

const techData: Record<string, TechItem[]> = {
    backend: [
        { name: 'C#', description: 'C# is a modern object-oriented language.', color: 'secondary' },
        { name: '.NET', description: '.NET is a framework for building apps.', color: 'secondary' },
        { name: '.NET Core', description: '.NET Core is cross-platform.', color: 'secondary' },
        { name: 'ASP.NET MVC', description: 'ASP.NET MVC is a web framework.', color: 'secondary' },
        { name: 'Blazor', description: 'Blazor allows web apps with C#.', color: 'secondary' },
    ],
    frontend: [
        { name: 'Next.js', description: 'Next.js is a React framework for SSR.', color: 'primary' },
        { name: 'React', description: 'React is a UI library.', color: 'primary' },
        { name: 'Angular', description: 'Angular is a frontend framework.', color: 'primary' },
        { name: 'TypeScript', description: 'TypeScript adds types to JavaScript.', color: 'primary' },
    ],
    clouddevops: [
        { name: 'Terraform', description: 'Terraform is for infrastructure as code.', color: 'success' },
        { name: 'Docker', description: 'Docker is used for containerization.', color: 'success' },
        { name: 'Kubernetes', description: 'Kubernetes orchestrates containers.', color: 'success' },
    ],
    databases: [
        { name: 'MS SQL', description: 'Microsoft SQL Server is a relational DB.', color: 'warning' },
        { name: 'PostgreSQL', description: 'PostgreSQL is an open-source DB.', color: 'warning' },
    ],
    tools: [
        { name: 'Git', description: 'Git is a version control system.', color: 'info' },
        { name: 'Postman', description: 'Postman is used for API testing.', color: 'info' },
    ],
};

export default function TechStack() {
    const [show, setShow] = useState(false);
    const [modalText, setModalText] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    const handleShow = (name: string, description: string) => {
        setModalTitle(name);
        setModalText(description);
        setShow(true);
    };

    const renderItems = (items: TechItem[]) =>
        items.map((item) => (
            <button
                key={item.name}
                className={styles.techItem}
                onClick={() => handleShow(item.name, item.description)}
            >
                {item.name}
            </button>
        ));

    return (
        <>
            <Card>
                <Card.Body>
                    <Tabs defaultActiveKey="backend" className="mb-3">
                        {Object.entries(techData).map(([key, items]) => (
                            <Tab eventKey={key} title={key.charAt(0).toUpperCase() + key.slice(1)} key={key}>
                                <h5>{key.charAt(0).toUpperCase() + key.slice(1)}</h5>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem' }}>
                                    {renderItems(items)}
                                </div>
                            </Tab>
                        ))}
                    </Tabs>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalText}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
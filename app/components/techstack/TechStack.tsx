'use client';
import { useState } from 'react';
import { Tab, Tabs, Card, Modal, Button } from 'react-bootstrap';
import styles from './TechStack.module.css';

type TechItem = {
    name: string;
    description: string;
};

const techData: Record<string, TechItem[]> = {
    backend: [
        { name: 'C#', description: 'A modern, object-oriented language by Microsoft, primarily used for building .NET applications.' },
        { name: '.NET', description: 'A Microsoft framework for building cross-platform applications including web, desktop, and mobile.' },
        { name: 'ASP.NET MVC', description: 'A web framework for building scalable, standards-based web apps using the Model-View-Controller pattern.' },
        { name: 'ASP.NET Web API', description: 'A framework for building RESTful HTTP services on top of .NET, commonly used for backend APIs.' },
        { name: 'Blazor', description: 'A .NET framework for building interactive web UIs using C# instead of JavaScript.' },
        { name: 'TPL', description: 'Task Parallel Library — a set of APIs in .NET for writing concurrent and parallel code.' },
        { name: 'xUnit', description: 'A free, open-source unit testing framework for .NET applications.' },
        { name: 'Entity Framework', description: 'An ORM for .NET that enables developers to work with databases using .NET objects.' },
        { name: 'Python', description: 'A versatile, high-level programming language popular for scripting, data science, and backend development.' },
        { name: 'FastAPI', description: 'A modern, high-performance Python web framework for building APIs with automatic OpenAPI documentation.' },
        { name: 'SQLAlchemy', description: 'A Python SQL toolkit and ORM that gives full power and flexibility of SQL to Python developers.' },
        { name: 'Alembic', description: 'A lightweight database migration tool for SQLAlchemy, used to manage schema changes over time.' },
    ],
    frontend: [
        { name: 'React', description: 'A JavaScript library for building component-based user interfaces, maintained by Meta.' },
        { name: 'Angular', description: 'A TypeScript-based web application framework maintained by Google for building SPAs.' },
        { name: 'TypeScript', description: 'A strongly typed superset of JavaScript that compiles to plain JS, improving developer experience and code quality.' },
        { name: 'Bootstrap', description: 'A popular CSS framework for building responsive, mobile-first websites quickly.' },
        { name: 'HTML', description: 'The standard markup language for creating web pages and web applications.' },
        { name: 'CSS', description: 'A stylesheet language used to describe the presentation and layout of HTML documents.' },
        { name: 'WPF', description: 'Windows Presentation Foundation — a .NET UI framework for building Windows desktop applications.' },
    ],
    'cloud & devops': [
        { name: 'Terraform', description: 'An open-source infrastructure-as-code tool by HashiCorp for provisioning and managing cloud resources.' },
        { name: 'Azure Functions', description: 'A serverless compute service on Azure that lets you run event-driven code without managing infrastructure.' },
        { name: 'Azure Container Apps', description: 'A managed serverless container service on Azure for running microservices and containerized applications.' },
        { name: 'Azure Blob Storage', description: 'Microsoft\'s object storage solution for the cloud, optimized for storing large amounts of unstructured data.' },
        { name: 'Azure Key Vault', description: 'A cloud service for securely storing and accessing secrets, keys, and certificates in Azure.' },
        { name: 'Azure DevOps REST API', description: 'A set of REST APIs for programmatically interacting with Azure DevOps services like pipelines and repos.' },
        { name: 'Azure REST API', description: 'The set of HTTP APIs that allow programmatic access to Azure resources and services.' },
        { name: 'Docker', description: 'A platform for developing, shipping, and running applications in lightweight, portable containers.' },
        { name: 'Kubernetes', description: 'An open-source container orchestration system for automating deployment, scaling, and management of containerized apps.' },
        { name: 'IIS', description: 'Internet Information Services — Microsoft\'s web server for hosting .NET applications on Windows.' },
    ],
    databases: [
        { name: 'MS SQL', description: 'Microsoft SQL Server — a relational database management system for enterprise-grade data storage and querying.' },
        { name: 'PostgreSQL', description: 'A powerful, open-source object-relational database system known for reliability and feature richness.' },
    ],
    'tools & others': [
        { name: 'Selenium', description: 'A framework for automating web browser interactions, commonly used for end-to-end testing.' },
        { name: 'Git', description: 'A distributed version control system for tracking code changes and collaborating with teams.' },
        { name: 'SignalR', description: 'An ASP.NET library for adding real-time web functionality, enabling server-to-client push communication.' },
        { name: 'Redis', description: 'An in-memory data structure store used as a database, cache, and message broker.' },
        { name: 'GitHub Actions', description: 'A CI/CD platform integrated into GitHub for automating build, test, and deployment workflows.' },
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

    const toTitle = (key: string) => key.charAt(0).toUpperCase() + key.slice(1);

    return (
        <>
            <Card>
                <Card.Body>
                    <Tabs defaultActiveKey="backend" className="mb-3">
                        {Object.entries(techData).map(([key, items]) => (
                            <Tab eventKey={key} title={toTitle(key)} key={key}>
                                <h5>{toTitle(key)}</h5>
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
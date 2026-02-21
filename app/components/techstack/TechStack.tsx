'use client';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export default function TechStack() {
    return (
        <Card>
            <Card.Body>
                <Tabs defaultActiveKey="backend" className="mb-3">
                    <Tab eventKey="backend" title="Backend">
                        <h5>Backend</h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <Badge bg="secondary">C#</Badge>
                            <Badge bg="secondary">.NET</Badge>
                            <Badge bg="secondary">.NET Core</Badge>
                            <Badge bg="secondary">ASP.NET MVC</Badge>
                            <Badge bg="secondary">ASP.NET (Minimal) Web API</Badge>
                            <Badge bg="secondary">Blazor</Badge>
                            <Badge bg="secondary">TPL</Badge>
                            <Badge bg="secondary">xUnit</Badge>
                            <Badge bg="secondary">Nunit</Badge>
                            <Badge bg="secondary">Moq</Badge>
                            <Badge bg="secondary">RhinoMocks</Badge>
                            <Badge bg="secondary">Entity Framework</Badge>
                            <Badge bg="secondary">Dapper</Badge>
                            <Badge bg="secondary">Python</Badge>
                            <Badge bg="secondary">FastAPI</Badge>
                            <Badge bg="secondary">SQLAlchemy</Badge>
                            <Badge bg="secondary">Alembic</Badge>
                        </div>
                    </Tab>
                    <Tab eventKey="frontend" title="Frontend">
                        <h5>Frontend</h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <Badge bg="primary">Nextjs</Badge>
                            <Badge bg="primary">React</Badge>
                            <Badge bg="primary">Angular</Badge>
                            <Badge bg="primary">TypeScript</Badge>
                            <Badge bg="primary">Bootstrap</Badge>
                            <Badge bg="primary">HTML</Badge>
                            <Badge bg="primary">CSS</Badge>
                            <Badge bg="primary">WPF</Badge>
                            <Badge bg="primary">Avalonia UI</Badge>
                        </div>
                    </Tab>
                    <Tab eventKey="clouddevops" title="Cloud & DevOps">
                        <h5>Cloud & DevOps</h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <Badge bg="success">Terraform</Badge>
                            <Badge bg="success">Azure Functions</Badge>
                            <Badge bg="success">Azure Container Apps</Badge>
                            <Badge bg="success">Vercel</Badge>
                            <Badge bg="success">Azure Blob Storage</Badge>
                            <Badge bg="success">Azure Key Vault</Badge>
                            <Badge bg="success">Docker</Badge>
                            <Badge bg="success">Kubernetes</Badge>
                            <Badge bg="success">IIS</Badge>
                        </div>
                    </Tab>
                    <Tab eventKey="databases" title="Databases">
                        <h5>Databases</h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <Badge bg="warning" text="dark">MS SQL</Badge>
                            <Badge bg="warning" text="dark">PostgreSQL</Badge>
                            <Badge bg="warning" text="dark">MongoDB</Badge>
                        </div>
                    </Tab>
                    <Tab eventKey="tools" title="Tools & Others">
                        <h5>Tools & Others</h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <Badge bg="info">Selenium</Badge>
                            <Badge bg="info">Git</Badge>
                            <Badge bg="info">SignalR</Badge>
                            <Badge bg="info">Redis</Badge>
                            <Badge bg="info">Swagger</Badge>
                            <Badge bg="info">Postman</Badge>
                            <Badge bg="info">Insomnia</Badge>
                            <Badge bg="info">Azure DevOps REST API</Badge>
                            <Badge bg="info">Azure REST API</Badge>
                        </div>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    );
}
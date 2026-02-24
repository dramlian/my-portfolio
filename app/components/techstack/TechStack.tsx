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
        {
            name: 'C#',
            description: 'C# has been the core of most of my professional work. You can see many C# projects in the personal projects section. I prefer it for backend development because I appreciate its compiled nature and strong typing.'
        },
        {
            name: '.NET (Core)',
            description: 'I have developed numerous applications using the .NET framework, including backend systems both professionally and as personal projects. My experience spans modern .NET Core applications as well as legacy .NET Framework projects.'
        },
        {
            name: 'ASP.NET MVC',
            description: 'I have developed several applications at Siemens using the MVC architecture, which gave me solid experience with the workflow and Razor page rendering. For new projects from scratch, I usually prefer using Next.js.'
        },
        {
            name: 'ASP.NET Web API',
            description: 'I have built numerous endpoints and services, both professionally and as personal projects. You can check out RSTracker in the personal projects section, where I developed a robust backend system.'
        },
        {
            name: 'Blazor',
            description: 'I am familiar with Blazor and its component system, having worked with it at Siemens. However, I would not generally recommend it for new projects.'
        },
        {
            name: 'TPL',
            description: 'I have used the Task Parallel Library (TPL) in .NET to write concurrent and parallel code at Siemens, speeding up many applications that fetched large amounts of data from APIs.'
        },
        {
            name: 'xUnit / NUnit',
            description: 'I have used NUnit for legacy .NET projects and xUnit for newer projects, such as functional tests in RSTracker. You can check them out in the personal projects section.'
        },
        {
            name: 'Entity Framework',
            description: 'I prefer using Entity Framework for most data manipulations in .NET projects. I enjoy using LINQ for querying data. I used EF extensively in RSTracker and ChoreMaster, both shown in the personal projects section.'
        },
        {
            name: 'Dapper',
            description: 'I have used Dapper in several projects at Siemens. I prefer it for complex queries or when I need more control over SQL execution, though EF is sufficient for most scenarios.'
        },
        {
            name: 'Python',
            description: 'I have experience with Python from university projects, personal experiments (like SolanaTokenMaker in the personal projects section), and professional work at Volkswagen, developing scripts, FastAPI backends, and Azure Functions.'
        },
        {
            name: 'FastAPI',
            description: 'I have used FastAPI at Volkswagen to develop various fast API backends.'
        },
        {
            name: 'SQLAlchemy',
            description: 'I have used SQLAlchemy at Volkswagen as an ORM layer for managing database interactions.'
        },
        {
            name: 'Alembic',
            description: 'I have used Alembic to manage database schema changes over time in SQLAlchemy projects at Volkswagen.'
        }
    ],
    frontend: [
        {
            name: 'React',
            description: 'I was first introduced to React at Volkswagen, where I developed an internal user management dashboard using Azure API for user and privilege management. It was a modern React 18 project with Vite. Since then, I have enjoyed using React in various projects. Almost all web projects in the personal projects section use React or Next.js.'
        },
        {
            name: 'Angular',
            description: 'I am currently working with Angular at Panaxeo. I know the basics and can develop, fix, or debug standard components.'
        },
        {
            name: 'Next.js',
            description: 'I have used Next.js in several personal projects and enjoy it. I like the file-based routing and the fact that it is a fullstack framework, allowing me to develop both backend and frontend in the same project. This portfolio website and LifeOrganizer (in the personal projects section) were built with Next.js.'
        },
        {
            name: 'TypeScript',
            description: 'At Volkswagen, I was initially told to use JavaScript, but I was curious about why large projects prefer TypeScript. After trying it, all my personal projects now use TypeScript.'
        },
        {
            name: 'Bootstrap',
            description: 'I prefer Bootstrap for responsiveness and layout composition. It is used in all my web projects in the personal projects section.'
        },
        {
            name: 'HTML',
            description: 'I have extensive experience with HTML. My first website was a high school project.'
        },
        {
            name: 'CSS',
            description: 'I have extensive experience with CSS. My first website was a high school project.'
        },
        {
            name: 'WPF',
            description: 'I developed several desktop tools at Siemens using WPF and have also worked with Avalonia (MandelBrot project in the personal projects section) and other .NET desktop UI frameworks.'
        }
    ],
    'cloud & devops': [
        {
            name: 'Terraform',
            description: 'I learned Terraform at Volkswagen and experimented with it in my free time while working on ChoreMaster (see the personal projects section). I now have a solid understanding of its capabilities and importance.'
        },
        {
            name: 'Azure Functions',
            description: 'I developed several Azure Functions at Volkswagen for synchronizing data across projects using Python. I have also used it personally to build a messenger bot, CATBOT (see the personal projects section).'
        },
        {
            name: 'Azure Container Apps',
            description: 'I can configure container apps and backend services using Docker images, and set up pipelines for continuous integration and deployment.'
        },
        {
            name: 'Azure Static Web Apps',
            description: 'I have used Azure Static Web Apps mostly for small side projects. It is a simple and cost-effective option for lightweight websites.'
        },
        {
            name: 'Azure Blob Storage',
            description: 'I have used Azure Blob Storage at Volkswagen to store data and logs. In new projects, I would likely choose OpenTelemetry for observability and logging.'
        },
        {
            name: 'Azure Key Vault',
            description: 'I used Azure Key Vault at Volkswagen to securely store sensitive information such as API keys and connection strings. I also used it in RSTracker (see the personal projects section).'
        },
        {
            name: 'Azure DevOps REST API',
            description: 'I have used the Azure DevOps REST API extensively at Siemens to create tools for reporting ultrasound testing data.'
        },
        {
            name: 'Azure REST API',
            description: 'I am familiar with Azure’s HTTP APIs for programmatic access to resources and services.'
        },
        {
            name: 'Docker',
            description: 'I use Docker for local development and have used it in nearly all personal and professional projects for containerization and deployment.'
        },
        {
            name: 'Kubernetes',
            description: 'The Panaxeo project infrastructure runs on Kubernetes. While my role does not include direct cluster management, I am familiar with its concepts and have experimented with it locally.'
        },
        {
            name: 'IIS',
            description: 'All legacy .NET Framework projects I have worked on in the past were hosted on IIS.'
        }
    ],
    databases: [
        {
            name: 'SQL',
            description: 'Most of my .NET projects used MS SQL Server. I am comfortable with both basic and advanced concepts, including modifying stored procedures, optimizing queries, and navigating complex database structures. I have experience with a wide variety of SQL systems, so I did not list them individually.'
        },
        {
            name: 'MongoDB',
            description: 'I have used MongoDB in several personal projects, including Life Organizer (see the personal projects section). I am familiar with document-oriented databases and performing CRUD operations in MongoDB.'
        }
    ],
    'tools & others': [
        {
            name: 'Selenium',
            description: 'For my master’s thesis, I developed a testing bot using Selenium. The bot interacted with my web application, downloaded reports, and compared them to expected results to ensure functionality.'
        },
        {
            name: 'Git',
            description: 'I use Git for version control in all my projects, both personal and professional. I am familiar with branching, merging, rebasing, and resolving conflicts.'
        },
        {
            name: 'SignalR',
            description: 'I experimented with building a real-time chat application using SignalR. Although the project was not completed, I am familiar with its concepts and usage, and I would be open to working with it in the future.'
        },
        {
            name: 'Redis',
            description: 'I have professional experience with Redis, though my role did not involve deep architectural decisions. I also experimented locally and considered implementing it in RSTracker (see the personal projects section) for higher user counts. I find it a powerful technology and would be open to using it further.'
        },
        {
            name: 'GitHub Actions',
            description: 'At Siemens, I fixed several failing pipelines, mostly addressing the code issues causing crashes. I also developed a fully working pipeline in RSTracker that automated build, test, and deployment processes (see the personal projects section).'
        },
        {
            name: 'Vercel',
            description: 'I have used Vercel to host personal projects. It is excellent for frontend applications and serverless functions, with easy deployment and scalability. This website is hosted on Vercel, and I appreciate how simple deployment and automated pipelines are.'
        },
        {
            name: 'Supabase',
            description: 'For hosting databases in personal projects, I almost always use Supabase due to its generous free tier.'
        }
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
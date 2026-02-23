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
        { name: 'C#', description: 'Almost every single job that I ever did was heavily or exclusively based on C#. You can checkout the porftolio section it contains mostly C# projects.' },
        { name: '.NET (Core)', description: 'I have developed numerous applications using the .NET framework, many backend systems either professionally or in free time. I have worked with very new .NET Core projects and also very old ones in the .NET Framework.' },
        { name: 'ASP.NET MVC', description: 'I have developed several apps in Siemens that had MVC architecture. So I am quite familiar with the workflow and rendering of Razor pages. However if I can start doing something from scratch I usually go for NextJs.' },
        { name: 'ASP.NET Web API', description: 'I have built numerous endpoints and services either profesionally or in free time, checkout RSTracker in my portfolio section, I built a pretty robust backend system there.' },
        { name: 'Blazor', description: 'I am quite faimiliar with Blazor and the component system I have worked with it in Siemens, I would not however recommend it' },
        { name: 'TPL', description: 'I have used the Task Parallel Library (TPL) in .NET for writing concurrent and parallel code in Siemens I have sped up many apps that fetched a lot of data from API using this library' },
        { name: 'xUnit', description: 'I have used xUnit for unit testing in .NET projects, I wrote some functional tests in RSTracker you can check them out in my portfolio section.' },
        { name: 'Entity Framework', description: 'I highly prefer to use EF for most data manipulations in .NET projects. I really enjoy the usage of LINQ for querying data. You can checkout RSTracker and ChoreMaster in my portfolio section, I have used EF extensively in both projects.' },
        { name: 'Python', description: 'I have experience with Python from university projects and also some personal experiments (SolanaTokenMaker in the portfolio section). I have also used it profesionally in Volkswagen to develop various scripts, fast api backends and azure functions.' },
        { name: 'FastAPI', description: 'Worked with it in Volkswagen to develop various fast API backends.' },
        { name: 'SQLAlchemy', description: 'I have worked with this technology mostly in Volkswagen as a ORM layer for managing database interactions.' },
        { name: 'Alembic', description: 'I have used Alembic for managing database schema changes over time in SQLAlchemy projects in Volkswagen.' },
    ],
    frontend: [
        { name: 'React', description: 'My first introduction to React was in Volkswagen where I developed internal user management dashboard that utilized Azure API for management of users and priviledges. It was a modern React 18 with Vite. Since then I really enjoyed React and have used it in various projects. Basically all webprojects that you see in the portfolio section use React or NextJs.' },
        { name: 'Angular', description: 'I am working with Angular in Panaxeo. I know the basics and I am able to develop/fix/debug some basic components.' },
        { name: 'TypeScript', description: 'In Volkswagen I was told to use javascript, but I always wondered why all the big projects use Typescript. After trying it out all my personal projects have been using Typescript.' },
        { name: 'Bootstrap', description: 'I really prefer to use bootstrap especially for reponsivnes and composition. It is used in all my web projects in the portfolio section.' },
        { name: 'HTML', description: 'I think HTML and how much experience I have with it is self explanatory. I did my first website in highschool as a school project.' },
        { name: 'CSS', description: 'I think CSS and how much experience I have with it is self explanatory. I did my first website in highschool as a school project.' },
        { name: 'WPF', description: 'I developed couple of desktop tools in Siemens and I have also worked with Avalonia (MandelBrot project in the portfolio section) and other .NET desktop UI frameworks.' },
    ],
    'cloud & devops': [
        { name: 'Terraform', description: 'I have heard about Terraform and its capabilities in Volkswagen but my role did not involve using it directly. So in my free time I tried it out when working with Choremaster (checkout the portfolio section in this website). And I really understand now how good/important it is.' },
        { name: 'Azure Functions', description: 'I have developed couple Azure functions for Volkswagen for synchronizing data amoong projects using Python and I have also used it in my free time to develop a mesasnger bot CATBOT (checkout the portfolio section in this website).' },
        { name: 'Azure Container Apps', description: 'I am able to configure container apps, various backend using docker images and also configure pipelines for continuous integration and deployment.' },
        { name: 'Azure Blob Storage', description: 'I have used it in Volkswagen to store data, logs, however if I could choose I would most likely go for OpenTelemetry instead.' },
        { name: 'Azure Key Vault', description: 'I have used Azure Key Vault in Volkswagen to securely store and manage sensitive information such as API keys and connection strings. I have also used it in RSTracker (checkout the portfolio section in this website).' },
        { name: 'Azure DevOps REST API', description: 'I have used the REST API extensively in Siemens when creating various tools for reporting ultrasound testing data.' },
        { name: 'Azure REST API', description: 'The set of HTTP APIs that allow programmatic access to Azure resources and services.' },
        { name: 'Docker', description: 'When running something locally I use docker, I have also used it in almost every either personal or professional project for containerization and deployment.' },
        { name: 'Kubernetes', description: 'The infrastructure in the Panaxeo project runs also on Kubernetes, my role does not involve direct management of Kubernetes clusters, but I am familiar with its concepts and usage. I have also played around with it locally.' },
        { name: 'IIS', description: 'All legacy old .NET framework projects I have worked with in the past were hosted on IIS.' },
    ],
    databases: [
        { name: 'SQL', description: 'Most .NET projects used MS SQL Server. I understand both basics and more advanced concepts. I am able to modify stored procedures and optimize queries. I am able to see development maps and navigate through complex database structures.' },
        { name: 'MongoDB', description: 'I have used MongoDB in couple of personal projects (Life Organizer in the portfolio section) and I am familiar with the basics of document-oriented databases and how to perform CRUD operations using MongoDB.' },
    ],
    'tools & others': [
        { name: 'Selenium', description: 'I developed a testing bot using Selenium for my master thesis project. In very simple terms this bot interacted with my web app and downloaded reports and compared them to expected results ensuring the functionality of the application.' },
        { name: 'Git', description: 'I use Git for version control in all my projects, both personal and professional. I am familiar with branching, merging, rebasing, and resolving conflicts.' },
        { name: 'SignalR', description: 'I tried building real-time chatting application with SignalR, it is not included in the porfolio section because it was a failed project, but I am quite familiar with its concepts and usage. And I think it a cool technology that I would be open to work with.' },
        { name: 'Redis', description: 'I worked with professionally but my role never involved deep architectural decisions or advanced optimizations. I however setup a project locally that used Redis and wanted to implement in it RSTracker (checkout the portfolio section in this website) if the usercount would increase. I think it is a cool technology that I would be open to work with.' },
        { name: 'GitHub Actions', description: 'In my profesional experience especially in Siemens I fixed couple of failing pipelines mostly just the code that was making the pipelines crash but I developed fully working pipeline in RSTracker that automated the build, test, and deployment processes, checkout the portfolio section in this website to inspect it.' },
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
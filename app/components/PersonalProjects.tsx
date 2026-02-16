'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/esm/Accordion';
import PersonalProjectDto from '../interfaces/PerosnalProjectDto';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

export default function PersonalProjects({ personalProjects }: { personalProjects: PersonalProjectDto[] }) {
    return (
        <Container>
            <Accordion alwaysOpen>
                {personalProjects.map((project, index) => (
                    <Accordion.Item eventKey={index.toString()} key={project.id}>
                        <Accordion.Header>{project.title}</Accordion.Header>
                        <Accordion.Body>
                            <ReactMarkdown
                                components={{
                                    img: ({ ...props }) => (
                                        <img {...props} style={{ maxWidth: '100%', height: 'auto' }} />
                                    )
                                }}
                            >
                                {project.readme}
                            </ReactMarkdown>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    );
}  
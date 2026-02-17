'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/esm/Accordion';
import PersonalProjectDto from '../interfaces/PerosnalProjectDto';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { pascalCase } from 'change-case';

export default function PersonalProjects({ personalProjects }: { personalProjects: PersonalProjectDto[] }) {
    return (
        <Container>
            <Accordion alwaysOpen>
                {personalProjects.map((project, index) => (
                    <Accordion.Item eventKey={index.toString()} key={project.id}>
                        <Accordion.Header>{pascalCase(project.title)}</Accordion.Header>
                        <Accordion.Body>
                            <p><strong>Tech Stack:</strong> {project.techstack}</p>
                            <p><strong>Last Commit:</strong> {new Date(project.lastCommitDate).toLocaleDateString()}</p>
                            <p><strong>Commits:</strong> {project.commitCount}</p>
                            <p><a href={project.url} target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
                            <hr />
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
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
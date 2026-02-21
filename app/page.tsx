import PersonalProjects from "./components/personalprojects/PersonalProjects";
import JobHistory from "./components/jobs/JobHistory";
import TechStack from "./components/techstack/TechStack";

import { fetchPersonalProjects } from "./actions/githubfetcher";
import { Row, Container, Col } from "react-bootstrap";

export default async function Home() {
  const personalProjects = await fetchPersonalProjects();

  return (
    <Container className="p-4">
      <Row className="mb-4">
        <Col className="rounded border border-secondary p-2">
          <h1 className="p-3 mb-4" style={{ borderBottom: "1px solid #6c757d", display: "inline-block" }}>
            My tech stack
          </h1>
          <TechStack />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col className="rounded border border-secondary p-2">
          <h1 className="p-3 mb-4" style={{ borderBottom: "1px solid #6c757d", display: "inline-block" }}>
            Job history
          </h1>
          <JobHistory />
        </Col>
      </Row>
      <Row>
        <Col className="rounded border border-secondary p-2">
          <h1 className="p-3 mb-4" style={{ borderBottom: "1px solid #6c757d", display: "inline-block" }}>
            Personal projects
          </h1>
          <PersonalProjects personalProjects={personalProjects} />
        </Col>
      </Row>
    </Container>
  );
}

import PersonalProjects from "./components/personalprojects/PersonalProjects";
import JobHistory from "./components/jobs/JobHistory";
import TechStack from "./components/techstack/TechStack";
import ContactMe from "./components/contactme/ContactMe";
import BasicInfo from "./components/basicinfo/BasicInfo";

import { fetchPersonalProjects } from "./actions/githubfetcher";
import { Row, Container, Col } from "react-bootstrap";

export default async function Home() {
  const personalProjects = await fetchPersonalProjects();

  return (
    <Container className="p-4">
      <Row className="mb-4">
        <Col className="rounded border border-secondary p-2">
          <h1 className="p-3 mb-3" style={{ borderBottom: "1px solid #6c757d", display: "inline-block" }}>
            Basic info
          </h1>
          <BasicInfo />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col className="rounded border border-secondary p-2">
          <h1 className="p-3 mb-3" style={{ borderBottom: "1px solid #6c757d", display: "inline-block" }}>
            Job history
          </h1>
          <h6 className="ps-3 pb-3">These are relevant long term projects I have been involved in.</h6>
          <JobHistory />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col className="rounded border border-secondary p-2">
          <h1 className="p-3 mb-3" style={{ borderBottom: "1px solid #6c757d", display: "inline-block" }}>
            My tech stack
          </h1>
          <h6 className="ps-3 pb-3">Some technologies I work/worked with either professionally or in my free time.</h6>
          <TechStack />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col className="rounded border border-secondary p-2">
          <h1 className="p-3 mb-3" style={{ borderBottom: "1px solid #6c757d", display: "inline-block" }}>
            Personal projects
          </h1>
          <h6 className="ps-3 pb-3">These are some of my personal projects that I have worked on in my free time. Please keep in mind all of these are fetched from my GitHub and rendered here</h6>
          <PersonalProjects personalProjects={personalProjects} />
        </Col>
      </Row>
      <Row>
        <Col className="rounded border border-secondary p-2">
          <h1 className="p-3 mb-3" style={{ borderBottom: "1px solid #6c757d", display: "inline-block" }}>
            Mail me
          </h1>
          <h6 className="ps-3 pb-3">Have a question or want to get in touch? Fill in the form below and your Gmail email client will open with the message ready to send.</h6>
          <ContactMe />
        </Col>
      </Row>
    </Container>
  );
}

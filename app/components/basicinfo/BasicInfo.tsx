import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./BasicInfo.module.css";

export default function BasicInfo() {
    return (
        <Container className="p-2">
            <Row className="g-4 justify-content-center align-items-center">
                <Col md={4} className={`mb-3 ${styles.slideIn}`}>
                    <Image
                        src="/picofme.png"
                        alt="Damian Jankov"
                        width={400}
                        height={400}
                        style={{ objectFit: "cover" }}
                    />

                    <div className={`d-flex gap-5 mt-4 justify-content-center align-items-center ${styles.iconContainer}`}>
                        <a href="mailto:jankovdamian@gmail.com" className={styles.iconLink}>
                            <FaEnvelope size={28} />
                        </a>
                        <a href="tel:+421907073599" className={styles.iconLink}>
                            <FaPhone size={28} />
                        </a>
                        <a href="https://linkedin.com/in/damian-jankov0577a8223/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                            <FaLinkedin size={28} />
                        </a>
                        <a href="https://github.com/dramlian" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                            <FaGithub size={28} />
                        </a>
                    </div>
                </Col>
                <Col md={8} className="mb-5 mt-0">
                    <h5 className="mb-0" style={{ borderBottom: "1px solid #6c757d", paddingBottom: "0.4rem" }}>
                        About me
                    </h5>

                    <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                        My name is Damian and I am a software developer with a passion for learning new technologies and building innovative solutions. I have experience in both frontend and backend development, and I enjoy working on projects that challenge me to grow my skills. In my free time, I like to explore new programming languages, contribute to open-source projects, and stay up-to-date with the latest trends in the tech industry.
                    </p>

                    <div className="d-flex flex-column gap-4">
                        <h5 className="mb-0" style={{ borderBottom: "1px solid #6c757d", paddingBottom: "0.4rem" }}>
                            Education
                        </h5>

                        <div className="d-flex flex-column gap-1">
                            <div className="d-flex justify-content-between align-items-baseline">
                                <strong>Master&apos;s in Informatics</strong>
                                <span className="text-secondary small">2022 – 2024</span>
                            </div>
                            <span className="text-secondary small">Technical University Košice</span>
                            <ul className="text-secondary small mt-1 mb-0" style={{ paddingLeft: "1.2rem" }}>
                                <li>Thesis: <em>Application for generating test specifications and reports for various levels of ultrasound verification testing</em> (grade A)</li>
                                <li>Functional Programming, Metaprogramming, Semantics, Logical Thinking, Parallel Programming</li>
                            </ul>
                        </div>

                        <div className="d-flex flex-column gap-1">
                            <div className="d-flex justify-content-between align-items-baseline">
                                <strong>Bachelor of Computer Networking</strong>
                                <span className="text-secondary small">2019 – 2022</span>
                            </div>
                            <span className="text-secondary small">Technical University Košice</span>
                            <ul className="text-secondary small mt-1 mb-0" style={{ paddingLeft: "1.2rem" }}>
                                <li>Thesis: <em>Authenticated encryption mode OCB-AES</em> (grade A)</li>
                                <li>Mathematical basics, telecommunications, computer networking and cryptography</li>
                            </ul>
                        </div>

                        <div className="d-flex flex-column gap-1">
                            <h6 className="mb-1" style={{ borderBottom: "1px solid #6c757d", paddingBottom: "0.3rem" }}>
                                Additional education &amp; achievements
                            </h6>
                            <div className="d-flex justify-content-between align-items-baseline">
                                <span className="text-secondary small">B1 Deutsches Sprachdiplom — Gymnázium Trebišovská 12</span>
                                <span className="text-secondary small">2019</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-baseline">
                                <span className="text-secondary small">
                                    3rd place — <em>Živé IT projekty</em> competition &nbsp;
                                    <a href="https://kpi.fei.tuke.sk/sk/zive-it-projekty-2023-vyhercovia" target="_blank" rel="noopener noreferrer" className="text-decoration-none small">
                                        (see here)
                                    </a>
                                </span>
                                <span className="text-secondary small">2022</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

"use client";
import
{
    VerticalTimeline,
} from "react-vertical-timeline-component";
import JobComponent from "./JobComponent";
const JobHistory = () =>
{

    const jobData = [
        {
            imgPath: "/jobs/panaxeo.png",
            jobTitle: "Full Stack Engineer",
            companyName: "Panaxeo",
            jobDescription: "Working on a global Web application for a major US client in the medical field. The software supports clinical studies and clinical trial data collection worldwide. The project has an international development team and operates in a regulated environment.",
            jobDate: "Aug 2025 - Present"
        },
        {
            imgPath: "/jobs/volkswagen.svg",
            jobTitle: "Full Stack Engineer",
            companyName: "Volkswagen Group Services",
            jobDescription: "Designing and implementing an application for interactive visualization of autonomous driving data, enhancing both user engagement and data clarity. Simultaneously developing an admin dashboard for Audi services to manage Azure user data and privileges across internal projects.",
            jobDate: "Dec 2024 - Aug 2025"
        },
        {
            imgPath: "/jobs/siemens.png",
            jobTitle: ".NET Developer",
            companyName: "Siemens Healthineers",
            jobDescription: "Began as an intern and advanced to a pivotal position with complete accountability for managing the company's internal web/desktop applications, which are utilized by software engineers for reporting and collecting ultrasound testing data.",
            jobDate: "Jun 2022 - Dec 2024"
        }
    ];
    return (
        <VerticalTimeline>
            {jobData.map((job, index) => (
                <JobComponent
                    key={index}
                    imgPath={job.imgPath}
                    jobTitle={job.jobTitle}
                    companyName={job.companyName}
                    jobDescription={job.jobDescription}
                    jobDate={job.jobDate}
                />
            ))}
        </VerticalTimeline>
    );
};

export default JobHistory;
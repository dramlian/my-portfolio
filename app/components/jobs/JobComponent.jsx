import
{
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function JobComponent({ imgPath, jobTitle, companyName, jobDescription, jobDate })
{
    return (
        <VerticalTimelineElement
            contentStyle={{ background: "#fff", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date={jobDate}
            iconStyle={{ background: "#fff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}
            icon={
                <img
                    src={imgPath}
                    alt={`${companyName} Logo`}
                    style={{ width: "90%", height: "90%", objectFit: "contain", borderRadius: "10%" }}
                />
            }
        >
            <h3>{jobTitle}</h3>
            <h4>{companyName}</h4>
            <p>
                {jobDescription}
            </p>
        </VerticalTimelineElement>);
}
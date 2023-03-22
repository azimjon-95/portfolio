import React from "react";
import "./style.scss";
import Header from "../../components/pageHeaderContent/Header";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience, education } from "../../utils/experience";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <Header headerText="My Resume" icon={<BsInfoCircleFill size={40} />} />

      <div className="timeline">
        <div className="timeline_experience">
          <h3 className="timeline_experience_header">Work Experience</h3>
          <VerticalTimeline lineColor="var(--color-main)">
            {experience?.map((value, inx) => {
              return (
                <VerticalTimelineElement
                  key={inx}
                  className="timeline_experience_Vertical-Time-line"
                  contentStyle={{
                    background: "none",
                    color: "var(--color-text)",
                    border: "1.5px solid var(--color-main)",
                  }}
                  icon={<MdWork />}
                  iconStyle={{
                    background: "#181818",
                    color: "var(--color-main)",
                  }}
                >
                  <div className="Vertical-Time-line_title-w">
                    <h3 className="Vertical-Time-line_title">{value.title}</h3>
                    <h4 className="">{value.subTitle}</h4>
                  </div>
                  <div className="timeline_experience_Vertical-Time-line_Desc-box">
                    <h3>Year: {value.text}</h3>
                    <i>{value.desc}</i>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
        <div className="timeline_education">
          <h3 className="timeline_experience_header">Education</h3>
          <VerticalTimeline lineColor="var(--color-main)">
            {education?.map((value, inx) => {
              return (
                <VerticalTimelineElement
                  key={inx}
                  className="timeline_experience_Vertical-Time-line"
                  contentStyle={{
                    background: "none",
                    color: "var(--color-text)",
                    border: "1.5px solid var(--color-main)",
                  }}
                  icon={<FaUserGraduate />}
                  iconStyle={{
                    background: "#181818",
                    color: "var(--color-main)",
                  }}
                >
                  <div className="Vertical-Time-line_title-w">
                    <h3 className="Vertical-Time-line_title">{value.title}</h3>
                    <h4 className="">{value.subTitle}</h4>
                  </div>
                  <div className="timeline_experience_Vertical-Time-line_Desc-box">
                    <h3>Year: {value.text}</h3>
                    <i>{value.desc}</i>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;

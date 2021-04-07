import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faAngleDoubleUp,
  faAward
} from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

function Timeline() {
  return (
    <div className="timeline">
      <h1>Timeline</h1>
      <VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element-work"
          date=" Oct 2019"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faAward} />}
        >
          <h1>AWS Certified Developer - Associate</h1>
          <h2>Amazon Web Service</h2>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element-work"
          date=" May 2019"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faAward} />}
        >
          <h1>MCSD - App Builder</h1>
          <h2>Microsoft Certified Solutions Developer</h2>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element-work"
          date=" May 2019"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faAward} />}
        >
          <h1>MCSA - Web Application</h1>
          <h2>Microsoft Certified Solutions Associate</h2>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" Sep 2017 - Present"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h1>Education Horizons Group</h1>
          <h2>Web Developer</h2>
        </VerticalTimelineElement>
    
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" Apr 2016 - Jul 2016"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h1>PowerFront</h1>
          <h2>Junior Web Developer</h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faAngleDoubleUp} />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;

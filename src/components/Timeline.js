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
          className="vertical-timeline-element--work"
          date=" Sep 2017 - Present"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h1>Synergetic Management Systems</h1>
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

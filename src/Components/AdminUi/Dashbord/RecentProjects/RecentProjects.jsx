import React from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "../RecentProjects/ProjectCard"; 

import {
  user1,
  user2,
  user3,
  user4,
  user5,
} from "../../../../assets/Image/users/Users";

const RecentProjects = () => {



  return (
    <Container>
      <div className="row">
        <div className="col-lg-12">
          <h4 className="mb-3 mt-0 fs-20">Recent Projects</h4>
          <Row className="my-2">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default RecentProjects;
export  const projects = [
  {
      date: "Aug 09, 2020",
      title: "Shreyu - Design Updates",
      status: "Designing",
      description: "Update shreyu with modern and latest trends...",
      progress: 75,
      avatars: [user1, user2],
      cusprogressbar: { variant: "success", now: 75 }
  },
  {
      date: "Aug 10, 2020",
      title: "Appexy v2.0",
      status: "Planning",
      description: "Plan new features and functionality for Appexy...",
      progress: 50,
      avatars: [user3, user2],
   cusprogressbar: { variant:"danger", now: 50 }
  },
  {
      date: "Aug 11, 2020",
      title: "Hyper React v4.0",
      status: "Development",
      description: "Hyper React with modern and latest trends...",
      progress: 60,
      avatars: [user4, user3],
      cusprogressbar: { variant:"warning", now: 60 }
  },
];
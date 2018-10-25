import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            { projects && projects.map( p => (
                <Link to={'/project/' + p.id}  key={p.id}>
                    <ProjectSummary project={p}></ProjectSummary>
                </Link>
            ))}
        </div>
    );
}

export default ProjectList;
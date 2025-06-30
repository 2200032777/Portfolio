import React, { useState } from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        // If live link is provided, open in new tab
        if (project.w_link) {
            window.open(project.w_link, "_blank");
        } else {
            setSelectedProject(project);
        }
    };

    const handleCloseDetails = () => {
        setSelectedProject(null);
    };

    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My latest work</h1>
                {/* The theme_pattern image was here and has been removed */}
            </div>

            <div className="mywork-grid-container">
                {mywork_data.map((work, index) => (
                    <div
                        key={index}
                        className={`project-card project-node-${index}`}
                        onClick={() => handleProjectClick(work)}
                    >
                        <img src={work.w_img} alt={work.w_name} className='project-image'/>
                        <div className="project-content">
                            <h2>{work.w_name}</h2>
                            <p>{work.w_description}</p>
                            <span className="project-tags">{work.w_tags}</span>
                        </div>
                    </div>
                ))}

                {/* Network lines */}
                <div className="network-line line-0-1"></div>
                <div className="network-line line-1-2"></div>
                <div className="network-line line-2-3"></div>
                <div className="network-line line-3-4"></div>
                <div className="network-line line-4-5"></div>
                <div className="network-line line-5-0"></div>
            </div>

            {/* Optional detail modal (only shows if no link is provided) */}
            {selectedProject && !selectedProject.w_link && (
                <div className="project-detail-overlay">
                    <div className="project-detail-card">
                        <button className="close-button" onClick={handleCloseDetails}>&times;</button>
                        <img src={selectedProject.w_img} alt={selectedProject.w_name} className='project-detail-image'/>
                        <div className="project-detail-content">
                            <h2>{selectedProject.w_name}</h2>
                            <p>{selectedProject.w_long_description || selectedProject.w_description}</p>
                            <div className="project-detail-meta">
                                <span className="project-tags">{selectedProject.w_tags}</span>
                                {selectedProject.w_link && (
                                    <a href={selectedProject.w_link} className="project-link" target="_blank" rel="noopener noreferrer">
                                        View Live Project <img src={arrow_icon} alt="arrow" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="arrow icon" />
            </div>
        </div>
    );
};

export default MyWork;
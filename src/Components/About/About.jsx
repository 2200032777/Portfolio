import React from 'react';
import './About.css';

import profile_img from '../../assets/about_profile1.jpg';
import theme_pattern from '../../assets/theme_pattern.svg';

// Import logo images
import python_logo from '../../assets/python.png';
import cpp_logo from '../../assets/c++.png';
import js_logo from '../../assets/javascript.png';
import react_logo from '../../assets/react1.png';
import java_logo from '../../assets/java.png';
import aws_logo from '../../assets/aws1.png';
import api_logo from '../../assets/png.png';
import ml_logo from '../../assets/machinelearning.jpg';
import html_logo from '../../assets/hml1.png';
import css_logo from '../../assets/css1.png';
import sql_logo from '../../assets/Sql.png';

const About = () => {
    const categorizedSkills = [
        {
            category: 'Languages',
            skills: [
                { name: 'C++', icon: cpp_logo },
                { name: 'Java', icon: java_logo },
                { name: 'JavaScript', icon: js_logo },
                { name: 'Python', icon: python_logo },
            ],
        },
        {
            category: 'Frontend & Backend',
            skills: [
                { name: 'React', icon: react_logo },
                { name: 'HTML5', icon: html_logo },
                { name: 'CSS3', icon: css_logo },
            ],
        },
        {
            category: 'Cloud & AI/ML ',
            skills: [
                { name: 'AWS', icon: aws_logo },
                { name: 'AI/ML', icon: ml_logo },
            ],
        },
        {
            category: 'Database & Tools',
            skills: [
                { name: 'SQL', icon: sql_logo },
                { name: 'REST APIs', icon: api_logo },
            ],
        },
    ];

    const achievementsData = [
        { value: '2+', label: 'Volunteer Leadership Roles' },
        { value: '300+', label: 'Competitive Programming' },
        { value: '4+', label: 'AI/ML & other Projects' }
    ];

    return (
        <section id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="decorative pattern" />
            </div>

            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="Siddhartha's profile" />
                    <div className="about-education">
                        <h2 className="education-title">Education</h2>
                        <div className="education-content">
                            <p><strong>B.Tech in Computer Science</strong></p>
                            <p>KL University | 2022–2026</p>
                            <p>Specialization: Artificial Intelligence & Integral Process Automation</p>
                        </div>
                    </div>
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I’m <span className="highlight">Chinthapatla Siddhartha</span>, an aspiring tech innovator passionate about blending intelligence with code.
                        </p>
                        <p>
                            My journey revolves around <span className="highlight">AI/ML</span> and <span className="highlight">full-stack development</span>, where I aim to build meaningful, impactful solutions.
                        </p>
                        <p>
                            Armed with skills in <span className="highlight">Python</span>, <span className="highlight">C++</span>, <span className="highlight">React</span>, and <span className="highlight">AWS</span>, I thrive on solving complex challenges through smart engineering.
                        </p>
                        <p>
                            Always curious. Always coding. Always evolving.
                        </p>
                    </div>

                    <div className="skills-grid-container">
                        {categorizedSkills.map((categoryItem, index) => (
                            <div key={index} className="skill-category">
                                <h3 className="skill-category-title">{categoryItem.category}</h3>
                                <div className="skill-list">
                                    {categoryItem.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="skill-card">
                                            <img src={skill.icon} alt={`${skill.name} logo`} className="skill-icon" />
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                {achievementsData.map((item, i) => (
                    <div key={i} className="about-achievement">
                        <h1>{item.value}</h1>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;

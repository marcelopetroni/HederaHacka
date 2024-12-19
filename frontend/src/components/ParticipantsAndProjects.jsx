import React from 'react';
import './ParticipantsAndProjects.sass';

// Dados dos participantes com imagens
const participants = [
  { name: 'Nicole Marshall', skill: 'Full-Stack Developer', team: 'No time', country: 'USA', image: '/images/nicole.png' },
  { name: 'Jack Anthony', skill: 'Data Scientist', team: 'No time', country: 'ENG', image: '/images/jack.png' },
  { name: 'Cameron Harris', skill: 'Back-end Developer', team: 'No time', country: 'USA', image: '/images/cameron.png' },
  { name: 'Sophia Clark', skill: 'UI/UX Designer', team: 'No time', country: 'BRA', image: '/images/sophia.png' },
  { name: 'James Carter', skill: 'Full-Stack Developer', team: 'No time', country: 'USA', image: '/images/james.png' },
];

// Dados dos projetos
const projects = [
  { name: 'formafo', author: 'Olivia Brown', image: '/images/formafo.png' },
  { name: 'Keo', author: 'Jackson Miller', image: '/images/keo.png' },
  { name: 'Click', author: 'Jack Anthony', image: '/images/click.png' },
  { name: 'Econecta', author: 'Sophia Clark', image: '/images/eco.png' },
];

const ParticipantsAndProjects = () => {
  return (
    <div className="participants-and-projects">
      {/* Tabela de Participantes */}
      <h3 className="section-title">Registered Participants - 350</h3>
      <table className="participants-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Skill area</th>
            <th>Team</th>
            <th>Country</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <tr key={index}>
              <td>
                <img
                  src={participant.image}
                  alt={participant.name}
                  className="participant-image"
                />
              </td>
              <td>{participant.name}</td>
              <td>{participant.skill}</td>
              <td>{participant.team}</td>
              <td>{participant.country}</td>
              <td>
                <button className="details-button">View details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Submissão de Projetos */}
      <div className="projects-section">
        <h3 className="section-title">Project Submissions - 100</h3>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="project-details">
                <h4>{project.name}</h4>
                <p>{project.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParticipantsAndProjects;

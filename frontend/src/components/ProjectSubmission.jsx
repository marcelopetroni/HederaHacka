import './ProjectSubmission.sass'

import UploadIcon from '../assets/UploadIcon.svg'
import AddIcon from '../assets/AddIcon.svg'

const ProjectSubmission = () => {
  return (
    <div className="project-submission">
    <div className='input-container'>  
      <div className="input-group">
        <label>Team name</label>
        <input type="text" placeholder="Team Rec OB1" />
      </div>
      <div className="input-group">
        <label>Project name</label>
        <input type="text" placeholder="Agora" />
      </div>
    </div>
      <div className="deliverables-group">
        <label>Deliverables</label>
        <div className="file-upload">
          <span>Upload here!</span>
          <img src={UploadIcon} className='upload-icon' />
        </div>
      </div>
      <div className="team-members">
        <h4>Team members</h4>
        <div className="members-list">
          <span>Breno Amaral</span>
          <span>Marcelo Nunes</span>
          <span>Wictor Melo</span>
          <span>Gabriella Graciano</span>
          <img src={AddIcon} />
        </div>
      </div>
      <div className="submission-actions">
        <button className="cancel-button">Cancel</button>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default ProjectSubmission;

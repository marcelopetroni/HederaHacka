import './MentorshipScheduling.sass'

const MentorshipScheduling = () => {
  const scheduledMentorships = [
    { name: "Nicholas Jerry", photo: '../../public/images/NicholasPhoto.png', time: "12-15 (3pm est)", status1: "Join", status2: "Cancel" },
    { name: "Joseph Adam", photo: '../../public/images/JosephPhoto.png', time: "12-14 (2pm est)", status1: "Join", status2: "Cancel" },
    { name: "Selena Jones", photo: '../../public/images/SelenaPhoto.png', time: "12-16 (5pm est)", status1: "Join", status2: "Cancel"  },
  ];

  const availableMentors = [
    { name: "Nicholas Jerry", photo: '../../public/images/NicholasPhoto.png', description: "AI specialist helping teams for real-world solutions" },
    { name: "Joseph Adam", photo: '../../public/images/JosephPhoto.png', description: "Full-stack developer with scalable backend tools and applications" },
    { name: "Selena Jones", photo: '../../public/images/SelenaPhoto.png', description: "UX/UI expert focused on creating impactful designs" },
  ];

  return (
    <div className="mentorship-scheduling">
      <h3>Scheduled Mentorships</h3>
      <div className="scheduled-mentors">
        {scheduledMentorships.map((mentor, index) => (
          <div className="mentor-card-container" key={index}>
            <img src={mentor.photo} />
              <div className="mentor-card">
                <p className='mentor-card-text'><strong>{mentor.name}</strong></p>
                <p className='mentor-card-text'>{mentor.time}</p>
                <button className="join-button">{mentor.status1}</button>
                <button className="join-button-2">{mentor.status2}</button>
              </div>
          </div>
        ))}
      </div>

      <h3>Available Mentors</h3>
      <div className="available-mentors">
        {availableMentors.map((mentor, index) => (
          <div className="mentor-card-available" key={index}>
            <img src={mentor.photo} />
            <p><strong>{mentor.name}</strong></p>
            <p>{mentor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorshipScheduling;

import './Description.sass'

const Description = () => {
  return (
    <div className="description">
      <p>
        The Hello Future Hackathon is a global innovation competition aimed at empowering developers, designers, and tech enthusiasts to build solutions that shape the future of technology. Participants collaborate in diverse teams to tackle real-world challenges, leveraging cutting-edge tools and platforms. With a focus on innovation, creativity, and problem-solving, the event offers mentorship, networking opportunities, and a chance to win exciting prizes. Whether you're a seasoned professional or a curious beginner, the Hello Future Hackathon provides the perfect space to learn, create, and innovate for a better tomorrow.
      </p>
      <div className="event-period">
        <h1 className='h1'>Hackathon Period: 11 Nov - 18 Dec</h1> 
        <button className="guidelines-button">Download the Guidelines</button>
      </div>
    </div>
  );
};

export default Description;

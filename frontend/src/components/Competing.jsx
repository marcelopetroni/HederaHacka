import React from 'react';
import './Competing.styles.sass';

const Competing = () => {
  const events = [
    {
      id: 1,
      title: 'Hedera Hello Future Hackathon 2.0',
      deadline: '12-18-2024',
      status: 'Project sent ✔',
      image: '/images/event1.png',
    },
    {
      id: 2,
      title: 'Hackathon Women in Tech',
      deadline: '12-15-2024',
      status: 'Project submission',
      image: '/images/event2.png',
    },
    {
      id: 3,
      title: 'Hackathon Women in Tech',
      deadline: '12-14-2024',
      status: 'Waiting on results',
      image: '/images/event3.png',
    },
  ];

  return (
    <div className="competing">
      <h2 className="competing-title">Competing</h2>
      <div className="competing-cards">
        {events.map((event) => (
          <div className="competing-card" key={event.id}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${event.image})` }}
            >
            </div>
            <div className="card-content">
              <p>
                <strong>Title:</strong> {event.title}
              </p>
              <p>
                <strong>Deadline:</strong> {event.deadline}
              </p>
              <p>
                <strong>Status:</strong> {event.status}
              </p>
            </div>
            <div className="card-action">
              <a href='/event'>
                <button className="view-button">View</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competing;

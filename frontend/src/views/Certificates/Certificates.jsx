import React from "react";
import "./Certificates.styles.sass";
import Sidebar from "../../components/Sidebar";
import Certificate from "../../assets/certificate.png";
import Certificate2 from "../../assets/certificate2.png";
import Certificate3 from "../../assets/certificate3.png";
import SearchIcon from '../../assets/SearchIcon.svg'

const certificates = [
  {
    id: 1,
    name: "Certificate of Participation",
    image: Certificate,
  },
  {
    id: 2,
    name: "Participation Certification Peter Parker",
    image: Certificate2,
  },
  {
    id: 3,
    name: "Certificate of Achievement",
    image: Certificate3,
  },
];

const Certificates = () => {
  return (
    <div className="certificates-page">
      <Sidebar />
      <div className="certificates-content">
        <header className="certificates-header">
          <h2>Hello, Peter!</h2>
          <button className="my-account">My account</button>
        </header>

        <div className="certificates-main">
          <h3>Certificates</h3>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for your certificate name here"
            />
            <button className="search-button">
              <img className='search-button' src={SearchIcon} alt='Search Icon' />
            </button>
          </div>

          <div className="filter-buttons">
            <button className="active">View all</button>
            <button>
              Issue Date <i className="fas fa-calendar"></i>
            </button>
          </div>

          <div className="certificates-list">
            {certificates.map((certificate) => (
              <div className="certificate-card" key={certificate.id}>
                <img
                  src={certificate.image}
                  alt={certificate.name}
                  className="certificate-image"
                />
                <div className="certificate-actions">
                  <button className="download-button">Download</button>
                  <button className="mint-button">Mint NFT</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;

import React from "react";
import "./Certificates.styles.sass";
import Sidebar from "../../components/Sidebar";

// Lista de certificados (dados simulados)
const certificates = [
  {
    id: 1,
    name: "Certificate of Participation",
    image: "/images/certificate1.png",
  },
  {
    id: 2,
    name: "Participation Certification Peter Parker",
    image: "/images/certificate2.png",
  },
  {
    id: 3,
    name: "Certificate of Achievement",
    image: "/images/certificate3.png",
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
              <i className="fas fa-search"></i>
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

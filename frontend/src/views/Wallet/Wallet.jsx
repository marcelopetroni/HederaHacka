import React, { useState, useEffect } from "react";
import "./Wallet.styles.sass";
import Sidebar from "../../components/Sidebar";

import ConnectWallet from '../../assets/ConnectWallet.svg'

const Wallet = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this app.");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
      });

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  return (
    <div className="wallet-page">
      <Sidebar />
      <div className="wallet-content">
        <header className="wallet-header">
          <h2>Hello, Peter!</h2>
          <button className="my-account">My account</button>
        </header>

        <div className="wallet-main">
          <h3>Wallet Management</h3>
          <div className="wallet-management">
            <div className="wallet-overview">
              <div className="wallet-overview-top">
              <h3>Your Wallet Overview</h3>
                <select className="currency-dropdown">
                  <option>HBAR</option>
                  <option>ETH</option>
                  <option>BTC</option>
                </select>
              </div>
              <p>Current Balance: 1,250 HBAR</p>
            </div>

            <div className="connect-wallet">
              <button onClick={connectWallet}>
                {walletAddress
                  ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                  : <img src={ConnectWallet} alt="" /> }
              </button>
            </div>

            <div className="transaction-history">
              <h3>Transaction History</h3>
              <ul>
                <li style={{color: '#F8787A'}}>-150 HBAR <span style={{color: '#F8787A'}}>12/16</span></li>
                <li>+200 HBAR <span >12/13</span></li>
                <li>+300 HBAR <span>12/10</span></li>
                <li style={{color: '#F8787A'}}>-50 HBAR <span style={{color: '#F8787A'}}>12/09</span></li>
                <li style={{color: '#F8787A'}}>-100 HBAR <span style={{color: '#F8787A'}}>12/09</span></li>
                <li>+200 HBAR <span>11/29</span></li>
                <li style={{color: '#F8787A'}}>-100 HBAR <span style={{color: '#F8787A'}}>11/25</span></li>
              </ul>
            </div>

            <div className="add-withdraw-section">
              <div className="add-funds">
                <h4>Add Funds</h4>
                <button>Add Funds</button>
              </div>
              <div className="withdraw-funds">
                <h4>Withdraw Funds</h4>
                <input type="number" placeholder="Enter amount" />
                <button>Withdraw</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;

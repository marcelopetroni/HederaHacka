import React from 'react';
import './Prizes.sass';

const Prizes = () => (
  <div className="prizes">
    <div className="table-wrapper">
      <table className="prizes-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Prize Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1st Place</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>2nd Place</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>3rd Place</td>
            <td>$200</td>
          </tr>
          <tr>
            <td>4th Place</td>
            <td>$150</td>
          </tr>
          <tr>
            <td>5th Place</td>
            <td>$100</td>
          </tr>
        </tbody>
        
      </table>
    </div>
    <p className="add-position">+ Add a Position</p>
  </div>
);

export default Prizes;

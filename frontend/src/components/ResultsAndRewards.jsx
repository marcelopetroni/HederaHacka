import './ResultsAndRewards.sass';


const ResultsAndRewards = () => {
  const projects = [
    { rank: 1, project: 'Formafo', score: '8,7', prize: '$75,000', category: 'Overall Winners', color: '#6F2DA8' },
    { rank: 2, project: 'Keo', score: '7,9', prize: '$25,000', category: 'Overall Winners', color: '#D5B9F1' },
    { rank: 3, project: 'Click', score: '7,6', prize: '$15,000', category: 'Overall Winners', color: '#AFAFAF' },
  ];

  return (
    <div className="results-container">
      <h3 className="results-title">Winning projects</h3>
      <table className="results-table">
        <thead>
          <tr>
            <th></th>
            <th>Project</th>
            <th>Score</th>
            <th>Prize (USD)</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.rank}>
              <td>
                <div
                  className="rank-badge"
                  style={{ backgroundColor: project.color }}
                >
                  {project.rank}
                </div>
              </td>
              <td>{project.project}</td>
              <td>{project.score}</td>
              <td>{project.prize}</td>
              <td>{project.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ResultsAndRewards;

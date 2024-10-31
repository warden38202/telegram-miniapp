function StatsCards() {
    return (
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-card-bg p-5 rounded-lg">
          <h4>Total Users</h4>
          <p className="text-2xl font-semibold text-card-text">250</p>
        </div>
        <div className="bg-card-bg p-5 rounded-lg">
          <h4>New Users</h4>
          <p className="text-2xl font-semibold text-card-text">15</p>
        </div>
        <div className="bg-card-bg p-5 rounded-lg">
          <h4>Total Cases</h4>
          <p className="text-2xl font-semibold text-card-text">200</p>
        </div>
        <div className="bg-card-bg p-5 rounded-lg">
          <h4>Completed Cases</h4>
          <p className="text-2xl font-semibold text-card-text">35</p>
        </div>
      </div>
    );
  }
  
  export default StatsCards;
  
function CasesTable() {
    const cases = [
      { id: 'lex231456797', user: 'johndoe321', type: 'Online Fraud', date: '25-10-2024', status: 'Completed' },
      { id: 'lex231456798', user: 'johndoe321', type: 'Online Fraud', date: '25-10-2024', status: 'In Progress' },
      { id: 'lex231456799', user: 'johndoe321', type: 'Online Fraud', date: '25-10-2024', status: 'Pending' },
    ];
  
    const statusColor: any = {
      Completed: 'text-completed',
      'In Progress': 'text-in-progress',
      Pending: 'text-pending',
    };
  
    return (
      <div className="bg-card-bg p-5 rounded-lg overflow-x-auto">
        <table className="w-full text-left text-sm text-card-text">
          <thead>
            <tr>
              <th className="px-4 py-2">Case ID</th>
              <th className="px-4 py-2">User ID</th>
              <th className="px-4 py-2">Crime Type</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((caseItem, index) => (
              <tr key={index} className="border-t border-card-text">
                <td className="px-4 py-2">{caseItem.id}</td>
                <td className="px-4 py-2">{caseItem.user}</td>
                <td className="px-4 py-2">{caseItem.type}</td>
                <td className="px-4 py-2">{caseItem.date}</td>
                <td className={`px-4 py-2 font-semibold ${statusColor[caseItem.status]}`}>
                  {caseItem.status}
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 mr-2">Edit</button>
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default CasesTable;
  
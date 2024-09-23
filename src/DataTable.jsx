
const DataTable = () => {
  return (
    <div className="container">
      <div className="add-container">
        <div className="info-container">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={""}
            onChange={() => {}}
          />

          <input
            type="text"
            placeholder="Gender"
            name="gender"
            value={""}
            onChange={() => {}}
          />

          <input
            type="number"
            placeholder="Age"
            name="age"
            value={""}
            onChange={() => {}}
          />   
        </div>
        
        <button className="add">Add</button>
      </div>
      <div className="search-table-container">
        <input
          type="search"
          placeholder="Search"
          name="search"
          value={""}
          onChange={() => {}}
          className="search-input"
        />

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Henry</td>
                <td>Male</td>
                <td>22</td>
                <td className="actions">
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;

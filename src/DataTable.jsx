import { useState } from "react";

const DataTable = () => {
  const [formData, setFormData] = useState({ name: "", gender: "", age: "" });
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddData = () => {
    if (formData.name && formData.gender && formData.age) {
      const newItem = {
        id: Date.now(),
        name: formData.name,
        gender: formData.gender,
        age: formData.age,
      };
      setData([...data, newItem]);
      setFormData({ name: "", gender: "", age: "" });
    }
  };

  return (
    <div className="container">
      <div className="add-container">
        <div className="info-container">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <input
            type="text"
            placeholder="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          />

          <input
            type="number"
            placeholder="Age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>

        <button onClick={handleAddData} className="add">
          Add
        </button>
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
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.age}</td>

                <td className="actions">
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;

import React, { useEffect, useState } from "react";

const Hcrud = () => {
  const [data, setData] = useState([]);
  const [unchanged, setUnchanged] = useState([]);
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [username, setUsername] = useState("");
  const [newSurname, setNewsurname] = useState("");
  const [variable, setVariable] = useState("");
  const [selected, setSelected] = useState(null);

  console.log(name, username);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setUnchanged(res);
      });
  }, []);
  const onDelete = (DelId) => {
    var deletion = data.filter((value, index) => value.id !== DelId);
    setData(deletion);
  };
  const onAdd = () => {
    var AddingData = { id: data.length + 1, name: name, username: username };
    setData([...data, AddingData]);
  };
  const onSelect = (value) => {
    setVariable(value);
  };
  const onSearch = (e) => {
    var SearchVariable = e.target.value;
    var searched = unchanged.filter((value, index) =>
      value[variable].toLowerCase().includes(SearchVariable)
    );
    setData(searched);
  };
  const onEdit = (EditData) => {
    setSelected(EditData);
    setNewName(EditData.name);
    setNewsurname(EditData.username);
  };
  const onEditSave = () => {
    var array = data.map((value) =>
      selected.id == value.id
        ? { ...value, name: newName, username: newSurname }
        : value
    );
    setData(array);
    setSelected(null);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>
      <div>
        <select onChange={(e) => onSelect(e.target.value)}>
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="username">UserName</option>
        </select>
        <input type="text" onChange={onSearch} />
      </div>
      <table border="1" width="50%">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr key={value.id}>
                <th>{index + 1}</th>
                {selected?.id == value.id ? (
                  <th>
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                    />
                  </th>
                ) : (
                  <th>{value.name}</th>
                )}
                {selected?.id == value.id ? (
                  <th>
                    <input
                      type="text"
                      value={newSurname}
                      onChange={(e) => setNewsurname(e.target.value)}
                    />
                  </th>
                ) : (
                  <th>{value.username}</th>
                )}
                <th width="250px">
                  {value.id == selected?.id ? (
                    <>
                      <button onClick={() => setSelected(null)}>Cancel</button>
                      <button onClick={onEditSave}>Save</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => onEdit(value)}>Edit</button>
                      <button onClick={() => onDelete(value.id)}>Delete</button>
                    </>
                  )}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Hcrud;

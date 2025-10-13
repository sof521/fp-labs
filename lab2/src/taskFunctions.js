export const addTask = (text, arr) => [
  ...arr, 
  { id: Date.now(), text, completed: false, createdAt: new Date().toISOString()}
];

export const deleteTask = (id, arr) => arr.filter(obj => obj.id !== id)

export const changeStatus = (id, arr) => 
    arr.map(obj => obj.id === id ? {
        ...obj,
        completed: !obj.completed,
    } : obj);

export const filterTasks = (filter, arr) => {
  if (filter === "all") {
    return arr;
  } else if (filter === "completed") {
    return arr.filter(obj => obj.completed);
  } else {
    return arr.filter(obj => !obj.completed);
  }
}
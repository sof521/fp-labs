export const addTask = (text, arr) => arr.concat({
    id: Date.now(),
    text: text,
    completed: false
})

export const deleteTask = (id, arr) => arr.filter(obj => obj.id !== id)

export const changeStatus = (id, arr) => 
    arr.map(obj => obj.id === id ? {
        id: obj.id,
        text: obj.text,
        completed: !obj.completed
    } : obj);

export const getFilter  = (filter) => {
    if (filter === "completed")
        return obj => obj.completed
    else if (filter === "active")
        return obj => !obj.completed
    else
        return obj => obj.completed || !obj.completed
}

export const filterTasks = (filter, arr) => arr.filter(getFilter(filter))
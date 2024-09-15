import fs from 'fs';
import path from 'path';


// Path to the tasks.json file
const tasksFile = path.join(__dirname, 'tasks.json');

// Function to load tasks from JSON
const loadTasks = () => {
    const dataBuffer = fs.readFileSync(tasksFile);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
};

// Function to save tasks to JSON
const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(tasksFile, dataJSON);
};

export {loadTasks, saveTasks};
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Path to the tasks.json file
const tasksFile = path.join(__dirname, 'tasks.json');

const initialzeTaskFile  = () => {
    if(!fs.existsSync(tasksFile)){
        fs.writeFileSync(tasksFile, JSON.stringify({}));
        const data = {
            uid: 0,
            incomplete: [],
            progress: [],
            completed: []
        };
        saveTasks(data);
    }
}

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


export {loadTasks, saveTasks, initialzeTaskFile };
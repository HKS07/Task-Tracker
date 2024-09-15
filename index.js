import { addTask, listTasks, completeTask, progressTask } from "./commands";

// Basic command line interface
const command = process.argv[2];
const arg = process.argv[3];

switch (command) {
    case 'list':
        listTasks();
        break;
    case 'add':
        addTask(arg);
        break;
    case 'progess':
        progressTask(arg);
    case 'complete':
        completeTask(parseInt(arg));
        break;
    default:
        console.log('Usage: node index.js [add|list|complete] [task|taskId]');
        break;
}

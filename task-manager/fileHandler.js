
const fs = require('fs');

function saveTasks(filePath, tasks)
{
    const data = JSON.stringify(tasks);
    fs.writeFileSync(filePath, data)
}

function loadTasks(filePath)
{
    if(!fs.existsSync(filePath))
        {
            return []; //Return empty array on file not existing
        }
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log(content);
}

module.exports = 
{saveTasks, loadTasks,}
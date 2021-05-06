const fs = require('fs');

const questionPool = fs.readFileSync('question-pools/technician/question-pool.txt', 'utf8');
console.log(questionPool);

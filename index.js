const express = require('express');
const { exec } = require('child_process');

const app = express();

app.get('/execute-cpp', (req, res) => {
    const command = './native_code.out';

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing the command: ${error}`);
            res.status(500).send('An error occurred');
            return;
        }

        const output = stdout || stderr || 'No output';

        res.send(`${output}`);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
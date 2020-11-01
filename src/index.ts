const express = require('express');
const process = require('process');

import { processEnv } from './utils/util';

export const app = express();
process.title = processEnv.PROCESS_NAME;

const server = app.listen(processEnv.PORT || 3000, () => {
    const message = `Server started, listen at ${processEnv.PORT || 3000} , PID ${process.pid}`;
    console.log(message);
})
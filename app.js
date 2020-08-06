const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.listen(8001, () => {
    console.log('8001번 포트에서 서버 실행중입니다.');
});

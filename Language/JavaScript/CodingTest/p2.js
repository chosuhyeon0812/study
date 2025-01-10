// 2. 데이터 처리(비동기 작업)

// JSON 파일 data.json에서 데이터를 읽고, 나이가 30 이상인 사용자 목록을 반환하는 API를 구현하세요

const express = require('express');
const fs = require('fs').promises; // fs 모듈의 promises 객체를 가져온다. fs 모듈 : 파일 시스템을 조작하는 모듈
const app = express();

// GET /users/over30
app.get('/users/over30', async(req, res) => {
    try {
        // JSON 파일 읽기
        const data = await fs.readFile('data.json', 'utf-f');   // data.json 파일을 읽어온다. await 키워드를 사용하는 이유 : 비동기 작업을 동기적으로 처리하기 위해
        const users = JSON.parse(data);                         // 읽어온 데이터를 JSON 형태로 변환한다.

        // 나이가 30 이상인 사용자 필터링
        const filteredUsers = users.filter(user => user.age >= 30);

        res.status(200).json(filteredUsers);                     // 30 이상인 사용자 데이터를 반환한다.
    } catch (error) {
        res.status(500).json({message: 'Error reading data file', error});  // 데이터 파일을 읽는 도중 에러가 발생할 경우 500 에러를 반환한다.
    }
})

// 서버 시작
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
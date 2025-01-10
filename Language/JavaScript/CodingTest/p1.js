// 1. API 구현하기 : 사용자 데이터를 저장하는 API 구현하기

// POST /users : 이름과 나이를 받아 저장하고 저장된 사용자 목록을 반환
// GET /users : 저장된 모든 사용자 목록을 반환

const express = require('express'); // express 모듈을 가져온다. express 모듈 : 웹 서버를 쉽게 구축할 수 있게 해주는 모듈
const app = express();              // express 모듈을 사용하여 app 객체를 생성한다. app 객체 : express 모듈을 통해 생성된 웹 서버 

app.use(express.json());            // express 모듈의 json() 메소드를 사용하여 JSON 형태의 데이터를 파싱할 수 있게 한다.

// In-memoty 데이터베이스 (테스트 용도)
let users = [];                     // 사용자 데이터를 저장할 배열

// POST /users 
app.post('/users', (req, res) => {
    const { name, age } = req.body; // 요청의 body에서 name과 age를 추출한다.

    if(!name || !age) {
        return res.status(400).json({message: "Name and age are required"}); // name과 age가 없을 경우 400 에러를 반환한다.
    }

    const newUser = { id: users.length + 1, name, age}; // 새로운 사용자 데이터를 생성한다.
    users.push(newUser);            // 생성한 사용자 데이터를 배열에 추가한다.
    res.status(201).json(newUser);  // 생성한 사용자 데이터를 반환한다.
})

// GET /users
app.get('/users', (req, res) => {
    res.status(200).json(users);     // 사용자 데이터 배열을 반환한다.
})

// 서버 시작
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
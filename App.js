import React, { useState } from 'react';

function App() {
  const [제목, 제목변경] = useState("");      // 제목 저장
  const [내용, 내용변경] = useState("");      // 내용 저장
  const [목록, 목록변경] = useState([]);      // 목록 저장

  function 글작성(e) {
    e.preventDefault();

    const 추가 = {
      id: new Date().getTime(),
      title: 제목,
      content: 내용
    };

    목록변경([...목록, 추가]);   // 새 글 추가
    제목변경("");
    내용변경("");
  }
}

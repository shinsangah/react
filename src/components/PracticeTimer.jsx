import React, { useState } from 'react';

export default function PracticeTimer() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && <Timer />}
      <button onClick={() => setShow(!show)}>시간</button>
    </>
  );
}

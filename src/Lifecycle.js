import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("mount!!");

    // unmount되는 시점에 호출
    return () => {
      console.log("unmount!!");
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};

const Lifecyle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(() => {
    console.log("update");
  });

  useEffect(() => {
    console.log(`count update : ${count}`);
    if (count > 5) {
      alert("카운트가 5를 넘었습니다. 따라서 1로 초기화 합니다");
      setCount(1);
    }
  }, [count]);

  useEffect(() => {
    console.log(`count update : ${text}`);
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <button onClick={toggle}>on/off</button>
        {isVisible && <UnmountTest />}
      </div>
    </div>
  );
};

export default Lifecyle;

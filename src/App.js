import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "asdf",
    content: "hihih",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "zxcv",
    content: "hidddhih",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "fjfififkjf",
    content: "hihih33333",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "asdf12e3",
    content: "hihih6",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;

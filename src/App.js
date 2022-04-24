import './App.css';
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

function App() {
  const diaryList = [
    {
      id: 1,
      author: "작성자1",
      content: "오늘의 일기1",
      emotion: 1,
      created_date: new Date().getTime(),
    },
    {
      id: 2,
      author: "작성자2",
      content: "오늘의 일기2",
      emotion: 2,
      created_date: new Date().getTime(),
    },
    {
      id: 3,
      author: "작성자3",
      content: "오늘의 일기3",
      emotion: 3,
      created_date: new Date().getTime(),
    },
  ];
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={diaryList} />
    </div>
  );
}

export default App;

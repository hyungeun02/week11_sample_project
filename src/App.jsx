import CourseList from "./components/CourseList.jsx";

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="topline">OPEN SOURCE STUDIO · WEEK 11</p>
          <h1>MY 수업 관리 프로그램</h1>
          <p className="subtitle">My Courses for Computer Science</p>
        </div>
        <span className="tag">STUDENT STARTER</span>
      </header>
      <CourseList />
      <footer className="bottom">
        <span>OSS Week 11</span>
        <span>Local state only · Refresh resets data</span>
      </footer>
    </main>
  );
}

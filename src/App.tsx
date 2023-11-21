import { Route, Routes } from "react-router-dom";
import "./App.css";
import PostContainer from "./components/PostConteiner";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostContainer />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;

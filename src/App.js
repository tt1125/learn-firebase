import { useEffect, useState } from "react";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => { //data取得
    getDocs(collection(db, "posts")).then((snapshot) => {
      console.log(snapshot.docs.map(doc => doc.data()))
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data() })))
    })
  }, [])

  return (
    <div className="app">
      {posts.map((post) => {
        return (
          <div>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
            <p>{post.timestamp}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;

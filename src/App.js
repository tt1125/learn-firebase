import { useEffect, useState } from "react";
import db from "./firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => { //data取得
    const postData = collection(db, 'posts')
    getDocs(postData).then((snapshot) => {
      console.log(snapshot.docs.map(doc => doc.data()))
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data() })))
    })

    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => ({ ...doc.data() })))
    })
  }, [])

  return (
    <div className="app">
      <div>
        {posts.map((post) => {
          return (
            <div keys={post.title}>
              <h1>{post.title}</h1>
              <p>{post.text}</p>
            </div>
          )
        })}</div>
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import PostForm from './components/PostForm'
// import ClassCounter from './components/ClassCounter'
// import Counter from './components/Counter'
// import PostItem from './components/PostItem'
import PostList from './components/PostList'
// import MyButton from './components/UI/button/MyButton'
// import MyInput from './components/UI/input/MyInput'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'JavaScript 1',
      body: 'Пост рассказывает о JavaScript',
    },
    {
      id: 2,
      title: 'JavaScript 2',
      body: 'Пост рассказывает о JavaScript',
    },
    {
      id: 3,
      title: 'JavaScript 3',
      body: 'Пост рассказывает о JavaScript',
    },
  ])
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  // Получаем (post) из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={posts}
          title={'Список постов про Js'}
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
      )}
    </div>
  )
}

export default App

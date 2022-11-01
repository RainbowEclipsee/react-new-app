import React, { useState, useRef } from 'react'
// import ClassCounter from './components/ClassCounter'
// import Counter from './components/Counter'
// import PostItem from './components/PostItem'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'Пост рассказывает о JavaScript' },
    { id: 2, title: 'JavaScript 2', body: 'Пост рассказывает о JavaScript' },
    { id: 3, title: 'JavaScript 3', body: 'Пост рассказывает о JavaScript' },
    { id: 4, title: 'JavaScript 4', body: 'Пост рассказывает о JavaScript' },
    { id: 5, title: 'JavaScript 5', body: 'Пост рассказывает о JavaScript' },
    { id: 6, title: 'JavaScript 6', body: 'Пост рассказывает о JavaScript' },
  ])

  const [title, setTitle] = useState('Бла-бла-бла')
  const [body, setBody] = useState('')

  const addNewPost = (b) => {
    b.preventDefault()
    // Создаем новый пост
    const newPost = {
      id: Date.now(),
      title,
      body,
    }
    // Добавляем созданный объект в уже созданный массив постов setPosts
    setPosts([...posts, newPost])
    //Очищаем наши input`s
    setTitle('')
    setBody('')
  }

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент на onChange реализовано двуст.связывание*/}
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        ></MyInput>
        <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Описание поста"
        ></MyInput>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={'Список постов про Js'} />
    </div>
  )
}

export default App

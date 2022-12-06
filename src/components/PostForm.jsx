import React from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'
import { useState } from 'react'

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (b) => {
    b.preventDefault()
    // Добавляем созданный объект в уже созданный массив постов setPosts
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost)
    //Очищаем наши input`s
    setPost({ title: '', body: '' })
  }

  return (
    <form>
      {/* Управляемый компонент на onChange реализовано двуст.связывание*/}
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      ></MyInput>
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      ></MyInput>
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  )
}

export default PostForm

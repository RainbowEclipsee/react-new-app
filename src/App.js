import React, { useState } from 'react'
import PostForm from './components/PostForm'
// import ClassCounter from './components/ClassCounter'
// import Counter from './components/Counter'
// import PostItem from './components/PostItem'
import PostList from './components/PostList'
import MySelect from './components/UI/select/MySelect'
import MyInput from './components/UI/input/MyInput'
// import MyButton from './components/UI/button/MyButton'
// import MyInput from './components/UI/input/MyInput'
import './styles/App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSort, setSelectedSort] = useState('')
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
  const sortedPosts = getSortedPosts()
  function getSortedPosts() {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      )
    }
    return posts
  }
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  // Получаем (post) из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <div>
        <hr style={{ margin: '15px 0' }} />
      </div>
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
          }}
          placeholder={'Поиск...'}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedPosts}
          title={'Список постов про Js'}
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
      )}
    </div>
  )
}

export default App

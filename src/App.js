import React, { useState, useMemo } from 'react'
import PostForm from './components/PostForm'
// import ClassCounter from './components/ClassCounter'
// import Counter from './components/Counter'
// import PostItem from './components/PostItem'
import PostList from './components/PostList'
// import MySelect from './components/UI/select/MySelect'
// import MyInput from './components/UI/input/MyInput'
// import MyButton from './components/UI/button/MyButton'
// import MyInput from './components/UI/input/MyInput'
import './styles/App.css'
import PostFilter from './components/PostFilter'

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
  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      )
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    )
  }, [filter.query, sortedPosts])

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
      <div>
        <hr style={{ margin: '15px 0' }} />
      </div>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={'Список постов про Js'}
      />
    </div>
  )
}

export default App


import Post from './components/Post'

import {useState} from 'react'

function App() {

  const [ posts, changePosts ] = useState([
    {
      id: 1,
      text: 'Post about my car',
      liked: false
    },
    {
      id: 2,
      text: 'Post about my house',
      liked: true
    },
    {
      id: 3,
      text: 'Post about my job',
      liked: false
    }
  ])

  const like = item => () => {
    item.liked = !item.liked
    changePosts([ ...posts ])
  }

  const remove = key => () => {
    posts.splice( key, 1 )
    changePosts([ ...posts ])
  }

  return (
    <div className="row">
      {
        posts.map( ( item, key) => <Post text={item.text} liked={item.liked} like={like( item )} remove={remove( key )} key={item.id}></Post> )
      }
    </div>
  )
}

export default App

<template>
  <div class="row">
    <Post
        v-for="( item, key ) in posts"
        :key="key"
        :text="item.text"
        :liked="item.liked"
        @like="like( item )"
        @remove="remove( key )"
    ></Post>
  </div>
</template>

<script>

import Post from '@/components/Post'

export default {

  name: 'App',

  data: () => ({
    posts: [
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
    ]
  }),

  components: {
    Post
  },

  methods: {
    like ( item ) {
      item.liked = !item.liked
    },
    remove ( key ) {
      this.posts.splice( key, 1 )
    }
  }

}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://unicons.iconscout.com/release/v3.0.3/css/line.css');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: none;
}
body {
  color: rgba( 50, 50, 50, 1 );
  background: #efefef;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
}
.flex {
  display: flex;
}
.flex.justify-end {
  justify-content: flex-end;
}
.row {
  padding: 10px;
}
hr {
  margin: 0;
  padding: 0;
  border: none;
  height: 1px;
  background: rgba( 50, 50, 50, 0.1 );
}
button {
  cursor: pointer;
  background: transparent;
  border: 2px solid transparent;
  transition: .3s;
}
button.icon {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  transition: 0.2s;
  font-size: 20px;
}
button.icon:hover {
  background: rgba( 0, 0, 0, 0.05 );
}
button.icon:active {
  background: rgba( 0, 0, 0, 0.15 );
}
button.red {
  color: #EA2027;
}
.post {
  max-width: 500px;
  border-radius: 10px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 2px 0px;
}
.post .footer {
  padding-top: 5px;
  padding-bottom: 5px;
}

</style>

<template>
  <div>
    <div class="row">
      <div class="post">
        <div class="body row">
          <div class="row">
            {{ text }}
          </div>
        </div>
        <hr>
        <div class="footer row flex justify-end">
          <div class="row">
            <button class="icon" @click="$emit( 'remove' )">
              <i class="uil uil-times"></i>
            </button>
          </div>
          <div class="row">
            <button :class="classList" @click="$emit( 'like' )">
              <i class="uil uil-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: 'Post',

  props: {
    liked: {
      default: () => false
    },
    text: {
      default: () => 'Default text'
    }
  },

  computed: {
    classList () {
      return this.liked ? 'icon red' : 'icon'
    }
  }

}

</script>

<style scoped>

</style>

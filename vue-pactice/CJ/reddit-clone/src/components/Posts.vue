/* eslint-disable max-len */
<template>
  <div class="hello mt-3">
    <ul class="list-unstyled">
      <li v-for="(post,index) in posts" :key="index" class="media p-3">
        <img class="mr-3" :src="post.data.thumbnail" alt="img" />
        <div class="media-body">
          <h5 class="mt-0 mb-1"><a :href="createUrl(post.data.permalink)">
            {{ post.data.title}}</a></h5>
          <section>
            <h3 class="text-danger">{{post.data.ups}} ↑</h3>
            <p>created
              <span class="text-white">{{post.data.created | formatDate}}</span>
             ago by <span class="text-info">{{post.data.author}}</span></p>
            <span class="badge badge-pill badge-secondary">
              {{post.data.num_comments}} comments</span>
              <button type="button" v-if="isImage(post)" class="btn btn-primary"
              @click="post.showImage=!post.showImage">
              <!--
              <span v-if="post.showImage" class="text-dark">Hidden Image</span>
              <span v-else>Show Image</span> -->
              {{post.showImage ? 'Hidden' : 'Show'}} Image
              </button>
              <div v-if="post.showImage">
                <img :src="post.data.url" alt="" class="img-size">
              </div>
          </section>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import format from 'date-format';

export default {
  name: 'Posts',
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.load();
  },
  filters: {
    // date 这里从api获取的date是一个秒数
    formatDate(date) {
      let createdTime = format('yyyy-MM-dd', new Date(date * 1000));
      let currentTime = new Date().getTime() / 1000;
      // eslint-disable-next-line radix
      let pastHours = parseInt((currentTime - date) / 3600);
      // TODO 这里还可以进一步优化，如果超过24就用天，超过了7天就用周，超过了4周就用月。。。
      if (pastHours < 36) {
        return `${createdTime}  ${pastHours} hours`;
      }
      if (pastHours < 168) {
        let pastDays = Math.floor(pastHours / 24);
        return `${createdTime}  ${pastDays} days`;
      }
      if (pastHours < 720) {
        let pastWeeks = (pastHours / 168).toFixed(2);
        return `${createdTime}  ${pastWeeks} weeks`;
      }
      if (pastHours < 8760) {
        let pastMonths = (pastHours / 720).toFixed(1);
        return `${createdTime}  ${pastMonths} months`;
      }
      if (pastHours > 8760) {
        // eslint-disable-next-line prefer-const
        let pastYears = Math.floor(pastHours / 8760);
        return `${createdTime}  ${pastYears} years`;
      }
      return `${createdTime}`;
    },
  },
  methods: {
    load() {
      const url = 'https://www.reddit.com/r/rarepuppers/.json';
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          result.data.children.forEach((child) => {
            // eslint-disable-next-line no-param-reassign
            child.showImage = false;
          });
          this.posts = result.data.children;
        });
    },
    createUrl(path) {
      return `https://www.reddit.com${path}`;
    },
    isImage(post) {
      return post.data.url.match(/\.(jpg|jpeg|png|bpm)$/);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-size{
  width: 40rem;
  height: 30rem;
  background-size: cover;
}
</style>

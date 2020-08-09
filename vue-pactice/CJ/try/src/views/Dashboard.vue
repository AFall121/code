<template>
  <div>
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <!-- 视频教程的写法 显示不出应有的效果-->
              <!-- <v-list-item-avatar tile class="mt-n7">
                <v-sheet color="green" width="80" height="80">
                  <v-icon dark large>store</v-icon>
                </v-sheet>
              </v-list-item-avatar> -->
              <!-- 我修改后的写法 勉强显示 但依然无法正常显示elevation延边效果 -->
              <!-- <v-list-item-avatar tile size="100"  class="mt-n7">
                <v-sheet color="green" width="80" height="80" elevation="10">
                  <v-icon dark large>store</v-icon>
                </v-sheet>
              </v-list-item-avatar> -->
              <!-- 改良后的最终写法 OK！ -->
              <v-sheet color="green" width="80" height="80" class="mt-n7" elevation="10">
                <v-list-item-avatar size="80" class="mt-n1">
                  <v-icon dark large>store</v-icon>
                </v-list-item-avatar>
              </v-sheet>
              <v-list-item-content>
                <div class="overline text-right">Article</div>
                <v-list-item-title class="headline mb-1 text-right">523615</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">person</v-icon>
              <div class="overline">Iyad</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-sheet color="green" width="80" height="80" class="mt-n7" elevation="10">
                <v-list-item-avatar size="80" class="mt-n1">
                  <v-icon dark large>store</v-icon>
                </v-list-item-avatar>
              </v-sheet>
              <v-list-item-content>
                <div class="overline text-right">Article</div>
                <v-list-item-title class="headline mb-1 text-right">523615</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">person</v-icon>
              <div class="overline">Iyad</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-sheet color="green" width="80" height="80" class="mt-n7" elevation="10">
                <v-list-item-avatar size="80" class="mt-n1">
                  <v-icon dark large>store</v-icon>
                </v-list-item-avatar>
              </v-sheet>
              <v-list-item-content>
                <div class="overline text-right">Article</div>
                <v-list-item-title class="headline mb-1 text-right">523615</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">person</v-icon>
              <div class="overline">Iyad</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-sheet color="green" width="80" height="80" class="mt-n7" elevation="10">
                <v-list-item-avatar size="80" class="mt-n1">
                  <v-icon dark large>store</v-icon>
                </v-list-item-avatar>
              </v-sheet>
              <v-list-item-content>
                <div class="overline text-right">Article</div>
                <v-list-item-title class="headline mb-1 text-right">523615</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">person</v-icon>
              <div class="overline">Iyad</div>
            </v-card-actions>
          </v-card>
        </v-flex>

        <!-- <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
        </v-flex> -->
        <v-flex xs12 sm6 md4 lg3 v-for="(person, index) in team" :key="index">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="red lighten-2">
                <v-img :src="person.avatar" alt="avatar"></v-img>
                <!--效果是一样的 <img :src="person.avatar" alt="avatar"> -->
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <!-- 这里我给它添加了按钮的位置(居左居中居右都行），在外部加了一个v-flex进行布局 -->
              <v-flex text-right>
                <v-btn outlined color="orange">
                  <v-icon small left>message</v-icon>
                  <span >Message</span>
                </v-btn>
              </v-flex>
              <!-- <v-btn outlined color="orange">
                <v-icon small left>message</v-icon>
                <span >Message</span>
              </v-btn> -->
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Dashboard',
  data:()=>({
    team: [
      {      name:'Iyad',role:'Web developer',avatar:'/img1.png'    },
      {      name:'Reda',role:'Graphic designer',avatar:'/img2.png'    },
      {      name:'张三',role:'移动开发 工程师',avatar:'/img3.png'    },
      {      name:'李四',role:'牛肉 终结者',avatar:'/img4.png'    },
    ]
  }),
  components: {
    // HelloWorld
  }
}
</script>

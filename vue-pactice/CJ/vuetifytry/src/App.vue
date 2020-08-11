<template>
  <v-app>
    <nav>
      <v-app-bar prominent dense dark color="grey darken-2">
        <v-layout row wrap>
          <v-flex xs3 md4 lg5>
            <v-avatar
              size="avatarSize"
              color="red"
              class="ml-5"
            >
            <v-sheet width="3rem" height="3rem" >
              <img src="img1.png" alt="alt">
            </v-sheet>
            </v-avatar>
            <v-content>爱上y的eye</v-content>
          </v-flex>
        </v-layout>
      </v-app-bar>
    </nav>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

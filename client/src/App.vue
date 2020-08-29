<template>
<v-app>
<div>
  <v-app-bar
    color="primary"
    dark
  >
  <div class="d-flex align-center">
    <v-img
      alt="Vuetify Logo"
      class="shrink mr-2"
      contain
      src="https://itsasmileworld.com/wp-content/uploads/2020/05/its-a-smile-world-logo-wordmark-250x177-1.png"
      transition="scale-transition"
      width="40"
    />


    <h2 class="titleText">ItsASmileWolrd</h2>
  </div>

  <v-spacer></v-spacer>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/upload">Upload File</router-link> | 
    <router-link to="/hello-world">HelloWorld</router-link> | 
    <router-link to="/table">Table</router-link>
  </div>

  <v-btn
    to="/sign-in"
    text
  >
    <span class="mr-2">Sign In</span>
    <v-icon>mdi-open-in-new</v-icon>
  </v-btn>
</v-app-bar>   
</div>

    <router-view/>

  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.titleText{
  color: white;
}
</style>
<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

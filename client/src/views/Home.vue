<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  {{ info }}
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

/*axios.defaults.baseURL = process.env.VUE_APP_SERVER_API;*/

export default {
  name: 'Home',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    /*axios*/
      /*.get('https://api.coindesk.com/v1/bpi/currentprice.json')*/
      /*.then(response => (this.info = response))*/

    axios.defaults.withCredentials = true;

    axios.get(`http://localhost:8081/api/users`).then((response) => {
      this.info = response.data
    }).catch(function (error) {
        return JSON.stringify(error);
    });
  }
}

</script>

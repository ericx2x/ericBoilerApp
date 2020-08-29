<template>
  <v-container>
    <v-main>
      <Table/>
    </v-main>
  </v-container>
</template>

<script>
import Table from '../components/Table.vue';

export default {
  name: 'TableScreen',

  components: {
    Table,
  },
  data: () => ({
    //
  }),
};
</script>

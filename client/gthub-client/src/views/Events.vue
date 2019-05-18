<template>
  <div class="post">
    <h3>HI EVENTS</h3>
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="data" class="content">{{data | json}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      data: null,
      eror: null
    };
  },
  name: "gthEvents",
  created() {
    console.log(this);
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      this.axios.get("http://localhost:3000/calendar").then(response => {
        this.data = response;
        console.log(response.data);
      });
      this.loading = false;
    }
  }
};
</script>
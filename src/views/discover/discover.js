export default {
  data: function () {
    return {
      sports: '',
    }
  },
  mounted: function () {
    this.getSports();
  },
  methods: {
    getSports: function () {
      fetch('http://localhost:3000/sport/showAll', {

        method: 'get',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'app-token': 'YizLP0RMg1vRixE6k0RMgEitt7YT824qXCZQ',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        },

      })
      .then(response => { return response.text() })
      .then((data) => {
        this.sports = JSON.parse(data);
      })
    },
  }
}
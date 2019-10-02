var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
<<<<<<< HEAD
      fetch('dummy.php')
      .then( response => response.json() )
      .then( json => {waitingApp.patients = json})
      ;

      // Means the same at this
      // fetch('https://randomuser.me/api/')
      // .then(function(response) {return response.json()})
      // .then(function(json) {waitingApp.people = json});

=======
      fetch('api/waiting/')
      .then(response => response.json())
      .then(json => { waitingApp.patients = json })
>>>>>>> aff415c31274a80f1e3e4f7c527790ba0db6528f
    }
  },
  created() {
    this.fetchPatients();
  }
<<<<<<< HEAD
})






// var waitingApp = new Vue({
//   el: '#patientWaitingApp',
//   data: {
//     patients: []
//   },
//   methods: {
//     fetchPatients() {
//       fetch('dummy.php')
//       .then(response => response.json())
//       .then(json => {waitingApp.patients = json});
//
//       // Means the same at this
//       // fetch('https://randomuser.me/api/')
//       // .then(function(response) {return response.json()})
//       // .then(function(json) {waitingApp.people = json});
//
//     }
//   },
//   created: function() {
//     this.fetchPatients();
//   }
//
// })
=======
});
>>>>>>> aff415c31274a80f1e3e4f7c527790ba0db6528f

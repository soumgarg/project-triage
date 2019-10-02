<<<<<<< HEAD
var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    patients: [],
    formPatient: {
      firstName: '',
      lastName: '',
      dob: '',
      sexAtBirth: ''
    }
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => { patientRecordApp.patients = json })
    },
    handleCreateRecord(event) {
      // TODO: Post data to API
      // fetch(url, {method:'post', data: this.formPatient})
      // .then(...)
      this.patients.push(this.formPatient);
      this.formPatient = {
=======
var patientRecordsApp = new Vue({
  el: '#patientRecordsApp',
  data: {
    patients: [],
    recordPatient: {}
  },
  methods: {
    fetchPatients() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { patientRecordsApp.patients = json })
    },
    handleSubmit(event) {
      // fetch(url, {
      //   method: 'post',
      //   data: this.recordPatient
      // })
      // .then( ... )
      this.patients.push( this.recordPatient );
      this.handleReset();
    },
    handleReset() {
      this.recordPatient = {
>>>>>>> aff415c31274a80f1e3e4f7c527790ba0db6528f
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: ''
      }
    },
<<<<<<< HEAD
    handleRecordClick(patient) {
      // TODO: Pass this data to another Vue app
      console.log(patient);
    }
  },
  created() {
=======
    handleRowClick(patient) {
      patientTriageApp.patient = patient;
    }
  }, // end methods
  created() {
    this.handleReset();
>>>>>>> aff415c31274a80f1e3e4f7c527790ba0db6528f
    this.fetchPatients();
  }
});

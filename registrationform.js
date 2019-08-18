$(document).ready(function() {
  if ($('#registrationform').length > 0 ) {
  contactScript('forcontact');
}
});
//reset html
function reseter() {
  document.getElementById("registrationform").reset();
};
//firebase
function contactScript(value) {
  var config = {
    apiKey: "AIzaSyCJPHoPH_dBAvw8FoZNTqA22N2HgNfnFfg",
    authDomain: "fir-sps-f7bec.firebaseapp.com",
    databaseURL: "https://fir-sps-f7bec.firebaseio.com",
    projectId: "fir-sps-f7bec",
    storageBucket: "",
    messagingSenderId: "632529267290",
    appId: "1:632529267290:web:bf60e09278059c27"
  };
  firebase.initializeApp(config);
  var b = firebase.database();
  $("#registrationform").submit(function(a) {$(this), 
    console.log("Submit to Firebase");
    var c = $("#weddingName").val(),
      cc = $("#WeddinglastName").val(),
      d = $("#invitees").val(),
      f = { name: c, lastname: cc,invitees: d};
    console.log(f);
    return firebase.database().ref().push(f);
    reseter();
})};

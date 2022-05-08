var container = "ckContainer?"
console.log("initializing ...");
window.addEventListener('cloudkitloaded', function() {
  console.log("cloudkit loaded")
  CloudKit.configure({
    containers: [{
      containerIdentifier: 'iCloud.com.raywenderlich.TIL',
      apiToken: '1866a866aac5ce2fa732faf02fec27691027a3662d3af2a1456d8ccabe9058da',
      environment: 'development'
    }]
  })
  console.log("cloudkit configured")
  
  var self = this
  var container = CloudKit.getDefaultContainer()
  console.log("cloudkit container established: " + container)
  /*document.getElementById("ck-container").innerHTML = "<h2>CloudKit-Container: " + container + "</h2>"*/
})
console.log("waiting for cloudkit ...")


function ckContainer() {
  console.log("ckContaine()")
  return "ckContainer"
}

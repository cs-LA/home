var ckContainer = ""

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
  ckContainer = CloudKit.getDefaultContainer()
  console.log("cloudkit container established: " + ckContainer)
  
  ckIdentifier()
  ckDatabase()
})
console.log("waiting for cloudkit ...")


function ckIdentifier() {
  document.getElementById("ck-container").innerHTML = ckContainer.containerIdentifier
}

function ckDatabase() {
  console.log("ckDB1")
  document.getElementById("ck-database").innerHTML = ckContainer.publicCloudDatabase.databaseScope
}


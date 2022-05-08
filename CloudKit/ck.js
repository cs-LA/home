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
  ckEnvironment()
  ckDatabase()
})
console.log("waiting for cloudkit ...")


function ckIdentifier() {
  document.getElementById("ck-container").innerHTML = ckContainer.containerIdentifier
}

function ckEnvironment() {
  document.getElementById("ck-environment").innerHTML = ckContainer.environment
}

function ckDatabase() {
  var ckDB = ckContainer.publicCloudDatabase
  document.getElementById("ck-database").innerHTML = ckDB.databaseScope
  
  /*self.fetchRecords = function() {*/
    console.log("fetching records from " + ckDB)
    var query = { recordType: 'Acronym', sortBy: [{ fieldName: 'short'}] };
  
    return ckDB.performQuery(query).then(function(response) {
      if(response.hasErrors) {
        console.error(response.errors[0])
        document.getElementById("ck-recordcount").innerHTML = -1
        return
      }
      
      var records = response.records
      var numberOfRecords = records.length
      document.getElementById("ck-recordcount").innerHTML = numberOfRecords
  /*})*/
}
}


var orcid = function(){
  var pubSwagger = "https://pub.orcid.org/resources/swagger.json";
	var pubAPI = "https://pub.orcid.org/v2.0";
	var client = null;
	//initialises the swagger client.
	function createPublicV2ORCIDClient(onSuccess){
		if (client == null){
			client = new SwaggerClient({
				url: pubSwagger,
		    	success: onSuccess
		    });
		}
		return client;
	}
	function go(){
		//do nothing
	}

// Function for searching by ORCID iD
  function search(ORCIDiD) {
    if (ORCIDiD == undefined || ORCIDiD.length == 0) {
      return;
    }
    client.apis["Public API v2.0"].viewActivities({ORCIDiD}, function(data) {

			client.apis["Public API v2.0"].viewAddresses({ORCIDiD}, function(add) {
				if (add.obj && add.obj.address){
					$.each(add.obj.address, function(){
						$('#output').append('"COUNTRY","'+ORCIDiD +'","'+this.country.value+'"\n');
					});
				}
      });
    });
  }

  return {
  		createPublicV2ORCIDClient:createPublicV2ORCIDClient,
  		go:go,
      search:search
  	}
  }();

  $(document).ready(function () {
  // Create a form and enter key press event to submit the form
      $(window).keydown(function (event) {
          if (event.keyCode == 13) {
              event.preventDefault();
              $("#searchbutton").click();
          }
      });

      var client = orcid.createPublicV2ORCIDClient(orcid.go);
  // Initialize the form
  	$("form").each(function(){
  		this.reset()
  	});

  // Initialize the search box
    $("#searchbutton").click(function (e) {
      var value = $("#searchbox").val();
      orcid.search(value);
    });


});

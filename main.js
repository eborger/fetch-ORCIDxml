$(document).ready(function () {
    // Create a from and enter key press event to submit the form
    $(window).keydown(function (event) {
		// keycode 13 is for return or enter key
        if (event.keyCode == 13) {
            event.preventDefault();
            $("#searchbutton").click();
        }
    });



	// Initialize the form
	$("form").each(function(){
		this.reset()
	});

  // Initialize the search box
  $("#searchbutton").click(function (e) {
    var value = $("#searchbox").val();
    search(value);
  });

  // Function for searching by ORCID iD
  function search(ORCIDiD) {
    // If input nothing, just show nothing
    if (ORCIDiD == undefined || ORCIDiD.length == 0) {
      return;
    }
/*
    // Use standard http request for searching
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("output").innerHTML = this.responseText;;
          }
        };
        xhttp.open("GET", "https://pub.orcid.org/v2.0/" + ORCIDiD, true);
        xhttp.send();
      }
*/
		// Use jQuery to do fetch the data
        $.ajax({
          type: "GET",
          url: "https://pub.orcid.org/v2.0/" + ORCIDiD,
          dataType: "text",
          success: function (xml) {
            $("#output").text(xml);
          //  console.log(xml);
            ;
          },
			// If search fails, show an error message
      error: function(jqXHR, textStatus, errorThrown) {
          alert(jqXHR.status + " (" + errorThrown + ")");
      }
    });
}
});

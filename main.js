$(document).ready(function () {
// Create a form and enter key press event to submit the form
    $(window).keydown(function (event) {
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
    if (ORCIDiD == undefined || ORCIDiD.length == 0) {
      return;
    }
    // Use jQuery to do fetch the data
    $.ajax({
      type: "GET",
      url: "https://pub.orcid.org/v2.0/" + ORCIDiD,
      dataType: "text",
      //Authorization type: Bearer,
      //Access token: [Stored access token]
      success: function (data) {
        $("#output").text(data);
      },
      // If search fails, show an error message
      error: function(jqXHR, textStatus, errorThrown) {
        alert(jqXHR.status + " (" + errorThrown + ")");
      }
    });
  }
});

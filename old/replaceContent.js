replaceContent = function(newContent, targetDivId) {
	var request = new XMLHttpRequest()

	var theUrl = "http://gartma.github.io/"+newContent

	request.onreadystatechange = function () {
		if ( request.readyState == 4 ) {
			if ( request.status == 200 ) {
				document.getElementById(targetDivId).innerHTML = request.responseText

			}

			if ( request.status == 404) {

				document.getElementById(targetDivId).innerHTML = ""
			}
		}

	}



	request.open("GET", theUrl, true)
    request.send(null)

}

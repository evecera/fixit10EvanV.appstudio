
btnSubmit.onclick=function(){
  
  let check = inptState.value
    let query = "SELECT name FROM customer WHERE state = " + '"' + check + '"'  
 // alert(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ebv74541&pass=bia375&database=ebv74541&query=" + query)

    if (req1.status == 200) { //transit worked.
        // req1.responseText is a JSON object with the results of the query in it.
        // Now to format it in a nicer format that you can work with - 
        // parse it from JSON object (JS Object Notaton) into an array that holds
        // each row as an array in it. 
        let results = JSON.parse(req1.responseText)
        console.log(results)
    if (results.length == 0)
        NSB.MsgBox("There are no companies in that state.")
    else {        

        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i] + "\n"
        txtResults.value = message
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}



btnDelete.onclick=function(){
  
  let check = inptName.value
    let query = "SELECT * FROM customer WHERE name = " + '"' + check + '"'  
 // alert(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ebv74541&pass=bia375&database=ebv74541&query=" + query)

    if (req1.status == 200) { //transit worked.
        let results = JSON.parse(req1.responseText)
        console.log(results)
    if (results.length == 0)
        NSB.MsgBox("There are no companies with that name.")
    else {        
      query = "DELETE FROM customer WHERE name = " + '"' + check + '"'
      req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ebv74541&pass=bia375&database=ebv74541&query=" + query)
      query2 = "SELECT * FROM customer"
      req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ebv74541&pass=bia375&database=ebv74541&query=" + query2)
      results = JSON.parse(req3.responseText)
      console.log("the parsed JSON is " + results)
      let message = ""
      for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        txtResults1.value = message
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}





























btnUpdate.onclick=function(){
  
  let check = inptCustomer.value
  addedName = imptAddedName.value
    let query5 = "SELECT * FROM customer WHERE name = " + '"' + check + '"'  ;
 // alert(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ebv74541&pass=bia375&database=ebv74541&query=" + query5)

    if (req1.status == 200) { //transit worked.
        let results = JSON.parse(req1.responseText)
        console.log(results)
    if (results.length == 0)
        NSB.MsgBox("There are no customers with that name.")
    else {        
      query6 = "UPDATE customer SET name = " + '"' + addedName + '"' + "WHERE name =" + '"' + check + '"' ;
      req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ebv74541&pass=bia375&database=ebv74541&query=" + query6)
      query7 = "SELECT name FROM customer;"
      req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ebv74541&pass=bia375&database=ebv74541&query=" + query7)
      results = JSON.parse(req3.responseText)
      console.log("the parsed JSON is " + results)
      let message = ""
      for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        txtResults1.value = message
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}





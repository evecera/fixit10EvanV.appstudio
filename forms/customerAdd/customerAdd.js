btnSubmit1.onclick=function(){
    query3 = 'INSERT INTO customer (name, street, city, state, zipcode) VALUES ("Jesse Antiques", "1113 F St", "Omaha", "NE", 68178)'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ebv74541&pass=bia375&database=ebv74541&query=" + query3)
  if (req1.status == 200) { //transit worked
      query4 = "SELECT * FROM customer"
      req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ebv74541&pass=bia375&database=ebv74541&query=" + query4)
      results = JSON.parse(req2.responseText)
      console.log(results)
      var message = ""
      for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        txtaAddedCustomer.value = message
      } 
}

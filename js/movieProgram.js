console.log("helo world");




function moviee()
		{
			
			let apiString="";
			let movieTitle="";
			
			movieTitle= document.getElementById("movieTitle").value;
			apiString= 'http://www.omdbapi.com/?apikey=55edb02c&t=';
			
			apiString+= movieTitle;
		
			let xhr = new XMLHttpRequest;
					//Call the open function, GET-type of request, url, true-asynchronous
			
					xhr.open('GET', apiString, true);
					
					xhr.send();
					
					//call the on load 
					xhr.onload = function() 
					{
							//check if the status is 200(means everything is okay)
							if (this.status === 200) 
								{

									//return server response as an object with JSON.parse
									let json= JSON.parse(this.responseText);
									
									
									if(json.Response == "True")
									{
									
										document.getElementById("titleTag").style.display= "block";
										document.getElementById("RatingTag").style.display= "block";
										document.getElementById("plotTag").style.display= "block";
										//document.getElementById("moviePoster").style.display= "block";
										
										let movieRatings= json.Ratings[0];
										
										let poster= json.Poster;
						
										document.getElementById("titlee").innerHTML= JSON.stringify(json.Title).replace(/^"(.*)"$/, '$1');
										document.getElementById("ratingg").innerHTML= JSON.stringify(movieRatings.Value).replace(/^"(.*)"$/, '$1');
										document.getElementById("plott").innerHTML= JSON.stringify(json.Plot).replace(/^"(.*)"$/, '$1');
										
										document.body.style.backgroundImage = `url(${poster})`;
									
								   }
								   
								   else
								   {
										document.getElementById("titleTag").style.display= "block";
										document.getElementById("titlee").innerHTML= "Movie Not Found!"
								   }

								}
					}

		}
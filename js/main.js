var pemain = document.getElementById("player");
var btn = document.getElementById("btn");
	btn.addEventListener("click", function()
{
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://azharsaepudin.github.io/FootBallPlayer/AllPlayer.json');
ourRequest.onload = function() {
	
	var output = JSON.parse(ourRequest.responseText);
	//console.log(output[0]);
	renderHTML(output);
};
ourRequest.send();
});
i=0;
function renderHTML(data){
	var htmlString = "";
	
	//for(i=0;i<data.length;i++){
		//"<p>" +'<img src="'+data.result[i].Poster+'">'+ data.result[i].name + "</p>";
		htmlString += '<div class="col-sm-3">'
      				+ '<img src="'+data.result[i].Poster+'" width="250px" class="img-circle" alt="'+ data.result[i].name +'"><br><br>'
	  				+ '<center><a href="#" class="btn btn-primary" role="button">'+ data.result[i].name +'</a>'
      				+ '<p> #'+ data.result[i].no +'<br>'+ data.result[i].Position +'<br>'+ data.result[i].International +'</p>'
    				+ '</center></div>'
	//}
	i++;
	pemain.insertAdjacentHTML('beforeend', htmlString);
}
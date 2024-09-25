// function myFunction() {
// 	var x = document.getElementById("navbarTogglerDemo01");
// 	if (x.className === "navbar-toggler") {
// 	  x.className += " responsive";
// 	} else {
// 	  x.className = "navbar-toggler";
// 	}
//   }

// $(function() {
// 	$('span.navbar-toggler-icon').click(function() {
// 	  $('#navbarTogglerDemo01').toggle();
// 	});
//   })

document.querySelector("input").addEventListener("click",handleClick)

function handleClick(){
    alert("i hot clicked")
}
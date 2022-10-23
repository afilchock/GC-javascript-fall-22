$("#buttonPrompt").click(function() {
    let ask = prompt("Are these songs good or bad?");
    if (ask == 'bad'){
        $("h1").html("The Worst Songs Ever!");
    } 
    else if (ask == 'good'){
        alert("Thanks.");
        $("h1").html("The Best Songs Ever!");
    };
});
$("#noShow").hide();
// modify css styles for the button
$("#toggleSongs").css({
    "background-color": "orange",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "5px",
    "border": "2px solid black",
    "margin": "10px",
    "cursor": "pointer"
});
$("#toggleSongs").click(function() {
    $("#song").toggle();
  });
$("img").css({  
    "border-radius": "25px",
    "border": "2px solid #73AD21",
    "padding": "20px",
    "width": "200px",
    "height": "150px",})

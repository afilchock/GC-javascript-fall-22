// alert('My project is going to be awesome!');
$("#noShow").hide();
$("h1").html("30 Rock Songs!");
// modify css styles for the button
$("#toggleSongs").css({
    "background-color": "orange",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "5px",
    "border": "2px solid black",
    "margin": "10px"
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

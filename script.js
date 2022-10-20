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

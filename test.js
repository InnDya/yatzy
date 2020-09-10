var calc_button = document.getElementById("calc");
calc_button.addEventListener("click", function(event) {
    var ones = parseInt(document.getElementById("player1_ones").value, 10);
    var twos = parseInt(document.getElementById("player1_twos").value, 10);
    var threes = parseInt(document.getElementById("player1_threes").value, 10);
    var fours = parseInt(document.getElementById("player1_fours").value, 10);
    var fives = parseInt(document.getElementById("player1_fives").value, 10);
    var sixes = parseInt(document.getElementById("player1_sixes").value, 10);
    var sum = ones + twos + threes + fours + fives + sixes;
    document.getElementById("player1_sum").innerHTML = sum;
    console.log(sum);
    if (sum >= 63) {
        document.getElementById("player1_bonus").innerHTML = 50;
    } 
}) 
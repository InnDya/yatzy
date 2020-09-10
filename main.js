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
    var fullhouse = [ones, twos, threes, fours, fives, sixes];
    console.log(fullhouse);
    var count = 1;
    var found3 = false;
    var found2 = false;
    for (i = 0; i < fullhouse.length; i++) {
        count = 1;
        for (j = i + 1; j < fullhouse.length; j++) {
            if (fullhouse[i] == fullhouse[j]) {
                count += 1;
                console.log(fullhouse[i] + ", i = " + i + ", j = " + j);
            }
        }
        if (count == 3) {
            console.log("found 3 matches for " + fullhouse[i]);
            found3 = true;
        }
        else if (count == 2) {
            console.log("found 2 matches for " + fullhouse[i]);
            found2 = true;
        }
    }
    if (found2 && found3) {
        console.log("FULL HOUSE!!!");
    }
})  
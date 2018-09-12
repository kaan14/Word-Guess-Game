


$(document).ready(function () {


    var win = 0;
    var lose = 0;
    var wordBank = ["string", "taste", "shelf", "fool", "excite", "rail", "release", "enjoy", "trade", "dorks", "girl", "sticks",
        "pretend", "relieved", "pickle", "volleyball", "plate", "puncture", "panoramic", "name", "motionless", "wail", "sad", "knowledge"];


    // Generates random number for wordBank
    function generate() {
        return Math.floor(Math.random() * wordBank.length);
    }


    // press "enter" to start,
    $("#startGame").on("click", function () {

        var numberof_Array = 0;
        var used_Letter = [];
        var isComplete = false;
        var randomGenerate = generate();
        console.log(randomGenerate);

        // print dashed amount of the letter in the word
        var wordChoose = wordBank[randomGenerate];
        //console.log(randomGenerate);
        //console.log(wordChoose);
        var array_Choose = Array.from(wordChoose);
        console.log(array_Choose);
        var array_Target = [];

        //create dashes for #wordDashe
        for (var i = 0; i < wordChoose.length; i++) {
            array_Target.push("_");
        }
        $("#wordDash").html(array_Target.join(" "));
        // determine number of guesses
        numberof_Array = array_Target.length;
        $("#numberofGuess").html(numberof_Array);


        $(document).keypress(function (event) {
            //if entry is already in the list, alert user
            var keyCode = event.keyCode;
            var key = event.key.toLowerCase();
            console.log('key=' + key);
            if (used_Letter.includes(key)) {

                alert("You have already entered " + key);
                return;
            }
            console.log(typeof keyCode);
            if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {


                for (var i = 0; i < array_Choose.length; i++) {
                    //console.log(array_Choose[i]);
                    if (key == array_Choose[i]) {
                        array_Target[i] = key;
                        // console.log(event);
                    }
                }
                used_Letter.push(key);
                $("#lettersGuessed").html(used_Letter);
                $("#wordDash").html(array_Target);


            }
            else {
                alert("Please enter a letter");
                return;
            }

            numberof_Array = numberof_Array - 1;

            if (numberof_Array >= 0) {
                $("#numberofGuess").html(numberof_Array);
            }

            if (!array_Target.includes("_")) {
                   isComplete = true;
             }

             if (isComplete && numberof_Array >= 0){
                 win += 1; 
                 $("#NumberofWins").html(win); 
                 alert("you win");
                 
             }
             else if(!isComplete && numberof_Array == 0){
                 lose +=1;
                $("#otherSide").append("<p>" + "lose: " + lose + "</p>"); 
                alert("you lost");
                return; 
             }

    });
});





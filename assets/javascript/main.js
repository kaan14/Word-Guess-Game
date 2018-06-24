


$(document).ready(function () {



    var wordBank = ["string", "taste", "shelf", "fool", "excite", "rail", "release", "enjoy", "trade", "dorks", "girl", "sticks",
        "pretend", "relieved", "pickle", "volleyball", "plate", "puncture", "panoramic", "name", "motionless", "wail", "sad", "knowledge"];


    // Generates random number for wordBank
    function generate() {
        return Math.floor(Math.random() * wordBank.length);
    }


    // press "enter" to start,
    $("#startGame").on("click", function () {
      var win = 0;
      var lose = 0;
  var numberof_Array = 0;
      var letter_Not_in_wordChoose = [];
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

            //if ((event.keycode >= 65 && event.keycode <= 90) || (event.keycode >= 97 && event.keycode <= 122)) {
            //console.log(event);
            for (var i = 0; i < array_Choose.length; i++) {
                console.log(array_Choose[i]);
                if (event.key == array_Choose[i]){
                    array_Target[i] = array_Choose[i];
                    console.log(event);
                }
                else {
                    $("#lettersGuessed").html(event.key);
                }

            }
            $("#wordDash").html(array_Target);

            //}

            numberof_Array = numberof_Array - 1;

            if (numberof_Array >=0)
            {
              $("#numberofGuess").html(numberof_Array);
            }

        });
      });
});

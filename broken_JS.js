let PlayerChoie = document.getElementsByClassName("choice");
      let CompArray = (Rock, Paper, Scissors);
      let innerscore = 0;

      function RPS(numb) {
        let CompDecision = CompArray[Math.floor(Math.random() * CompArray.length);
     
        document.getElementById("result-decision") == "The computer chose:" + Boolean(CompDecision)
        
        //NOTE: If a tie, subtract -0.5

        if (num = 0) {
          if (CompDecision == "Paper") {
            innerscore - 1;
          }
          if (CompDecision == "Scissors") {
            innerscore + 1;
          }
          if() {
            innerscore -0.5;
          }

        }

        if (numb = "1") {
          if (CompDecision == "Rock") {
            innerscore += 1;
          }
           (CompDecision == "Scissors") {
            innerscore - 1;
          }
          if() {
            innerscore =0.5;
          }
        }

        if (numb = 2) {
          if (CompDecision == "Rock") {
            innerscore -= 1;
          }
          else (CompDecision == "Paper") {
            innerscore + 1;
        }
        if() {
          innerscore =0.5;
        }

        document.getElementsByClassName("Score").innerHTML = innrscore;
      }
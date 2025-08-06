
      const setOfWords = [
        "The quick brown fox jumps over the lazy dog, testing agility and speed",
        "Success comes to those who practice consistently and never give up.",
        "Coding is both an art and a science, requiring logic and creativity.",
        "Accuracy matters more than speed when mastering the art of typing.",
      ];

      const msg = document.getElementById("msg");
      const typeWords = document.getElementById("mywords");
      const btn = document.getElementById("btn");
      let startTime, endTime;

      const playGame = () => {
        let randomNumber = Math.floor(Math.random() * setOfWords.length);
        msg.innerText = setOfWords[randomNumber];
        startTime = new Date().getTime();
        btn.innerText = "Done";
      };

      const endPlay = () => {
        endTime = new Date().getTime();
        let totalTime = (endTime - startTime) / 1000;
        let totalStr = typeWords.value;
        let wordCount = wordCounter(totalStr);
        let speed = Math.round((wordCount / totalTime) * 60);
        let finalMsg = `Your Speed was: ${speed} words per minute.`;
        finalMsg += compareWords(msg.innerText, totalStr);
        msg.innerText = finalMsg;
      };

      const compareWords = (str1, str2) => {
        let word1 = str1.split(" ");
        let word2 = str2.split(" ");
        let cnt = 0;
        word1.forEach(function (item, index) {
          if (item === word2[index]) {
            cnt++;
          }
        });
        let errorWords = word1.length - cnt;
        return ` ${cnt} correct out of ${word1.length} words and the overall errors are ${errorWords}.`;
      };

      const wordCounter = (str) => {
        let trimStr = str.trim();
        if (trimStr === "") {
          return 0;
        }
        return trimStr.split(" ").length;
      };

      btn.addEventListener("click", function () {
        if (this.innerText == "Start") {
          typeWords.value = "";
          typeWords.disabled = false;
          playGame();
        } else if (this.innerText == "Done") {
          typeWords.disabled = true;
          btn.innerText = "Start";
          endPlay();
        }
      });

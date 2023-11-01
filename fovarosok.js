const countriesAndCapitals = {
    "Magyarország": "Budapest",
    "Németország": "Berlin",
    "Ausztria": "Bécs",
    "Csehország": "Prága",
    "Spanyolország": "Madrid",
    "Olaszország": "Róma",
    "Svédország": "Stockholm",
    "Finnország": "Helsinki",
    "Franciaország": "Párizs",
    "Egyesült Királyság": "London"
  };

  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const checkButton = document.getElementById("check-button");
  const resultElement = document.getElementById("result");
  const input = document.getElementById("answer");

  const countries = Object.keys(countriesAndCapitals);
  let currentCountryIndex = 0;
  let correctAnswers = 0;

  
  setNextQuestion();

  checkButton.addEventListener("click", checkAnswer);

  function setNextQuestion() {
    if (currentCountryIndex < countries.length) {
      const currentCountry = countries[currentCountryIndex];
      questionElement.textContent = `Mi ${currentCountry} fővárosa?`;
      answerInput.value = "";
      answerInput.focus();
    } else {
      
      questionElement.textContent = "Kvíz vége!";
      resultElement.textContent = `Helyes válaszok: ${correctAnswers} / ${countries.length}`;
      answerInput.style.display = "none";
      checkButton.style.display = "none";
    }
  }

  function checkAnswer() {
    const currentCountry = countries[currentCountryIndex];
    const correctCapital = countriesAndCapitals[currentCountry];
    const userAnswer = answerInput.value.trim().toLowerCase();

    if (userAnswer === correctCapital.toLowerCase()) {
      resultElement.textContent = "Helyes!";
      correctAnswers++;
    } else {
      resultElement.textContent = `Nem jó! A helyes válasz: ${correctCapital}`;
    }

    currentCountryIndex++;
    setNextQuestion();
  }

  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("check-button").click();}})

  
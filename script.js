conditions = [
    {
        name: "Flu",
        symptoms: " fever, headache, cough, sore throat, body aches, fatigue",
        treatment: "Rest, hydration, over-the-counter pain relievers",
        prevention: "Wash hands, avoid close contact with sick individuals, get vaccinated",
        severity: "Mild to Moderate",

    },
    {
        name: "Pneumonia",
        symptoms: "cough with phlegm, fever, chills, difficulty breathing",
        treatment: "Antibiotics, rest, fluids, over-the-counter pain relievers",
        prevention: "Vaccination, good hygiene, avoid smoking",
        severity: "Moderate to Severe",
    },
    {
        name: "Common Cold",
        symptoms: "runny nose, sneezing, sore throat, mild cough",
        treatment: "Rest, hydration, over-the-counter pain relievers",
        prevention: "Wash hands, avoid close contact with sick individuals",
        severity: "Mild",
    },
    {
        name: "Bronchitis",
        symptoms: "cough with mucus, wheezing, chest discomfort",
        treatment: "Rest, hydration, over-the-counter cough suppressants",
        prevention: "Avoid smoking, good hygiene",
        severity: "Mild to Moderate",

    }
];

function searchConditions(){
    const input = document.getElementById('symptomInput').value.toLowerCase();
    let matches = [];


    for (let i = 0; i < conditions.length; i++){
        let condition = conditions[i];

        for ( let j = 0; j < condition.symptoms.split(',').length; j++) {
            let symptom = condition.symptoms.split(',')[j].trim().toLowerCase();
            if (symptom.toLowerCase() === input.toLowerCase()){
                matches.push(condition);
                break; 
            }

           
        }
    }

    const results= document.getElementById('result');
     if (matches.length > 0) {
    results.innerHTML = 
      `<p class="mb-2 font-semibold">${matches.length} condition(s) found:</p>` +
      matches.map(condition =>
        `<div class="mb-4 p-4 border rounded bg-white shadow-sm">
          <h3 class="text-lg font-bold text-blue-600">${condition.name}</h3>
          <p><strong>Severity:</strong> ${condition.severity}</p>
          <p><strong>Treatment:</strong> ${condition.treatment}</p>
          <p><strong>Prevention:</strong> ${condition.prevention}</p>
        </div>`
      ).join("");
  } else {
    results.innerHTML = `<p class="text-red-600">No conditions found for: <strong>${input}</strong></p>`;
  }

}
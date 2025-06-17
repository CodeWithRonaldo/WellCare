// lets start with the conditions

let conditions = [
  {
    name: "Flu",
    symptoms: [
      "fever",
      "headache",
      "cough",
      "sore throat",
      "body aches",
      "fatigue",
    ],
    treatment: "Rest, hydration, over-the-counter pain relievers",
    prevention:
      "Wash hands, avoid close contact with sick individuals, get vaccinated",
    severity: "Mild to Moderate",
    recommendedActions:
      "Stay home, avoid contact with others, monitor symptoms",
  },
  {
    name: "Pneumonia",
    symptoms: ["cough with phlegm", "fever", "chills", "difficulty breathing"],
    treatment: "Antibiotics, rest, fluids, over-the-counter pain relievers",
    prevention: "Vaccination, good hygiene, avoid smoking",
    severity: "Moderate to Severe",
    recommendedActions:
      "Seek medical attention if symptoms worsen, follow doctor's advice",
  },
  {
    name: "Common Cold",
    symptoms: ["runny nose", "sneezing", "sore throat", "mild cough"],
    treatment: "Rest, hydration, over-the-counter pain relievers",
    prevention: "Wash hands, avoid close contact with sick individuals",
    severity: "Mild",
    recommendedActions:
      "Stay home, avoid contact with others, monitor symptoms",
  },
  {
    name: "Bronchitis",
    symptoms: ["cough with mucus", "wheezing", "chest discomfort"],
    treatment: "Rest, hydration, over-the-counter cough suppressants",
    prevention: "Avoid smoking, good hygiene",
    severity: "Mild to Moderate",
    recommendedActions:
      "Stay home, avoid contact with others, monitor symptoms",
  },
];

// then lets add a function to add a new condition

function addCondition(
  name,
  symptoms,
  treatment,
  prevention,
  severity,
  recommendedActions
) {
  let newCondition = {
    name: name,
    symptoms: symptoms,
    treatment: treatment,
    prevention: prevention,
    severity: severity,
    recommendedActions: recommendedActions,
  };

  // add condition to the conditions array

  conditions[conditions.length] = newCondition;
  console.log("Condition added: ", newCondition);
}
addCondition("Malaria", ["fever", "chills", "sweating"], "Use anti-malaria drugs", "Avoid mosquito bites", "Severe", "See doctor immediately");
// lets search by symptoms

function searchBySymptoms(symptom) {
  let found = false;

  for (let i = 0; i < conditions.length; i++) {
    let condition = conditions[i];

    for (let j = 0; j < condition.symptoms.length; j++) {
      if (condition.symptoms[j] === symptom) {
        found = true;

        console.log("Condition found: ", condition.name);
        console.log("Symptoms: ", condition.symptoms);
        console.log("Treatment: ", condition.treatment);
        console.log("Prevention: ", condition.prevention);
        console.log("Severity: ", condition.severity);
        console.log("Recommended Actions: ", condition.recommendedActions);

        break;
      }
    }
  }
  if (!found) {
    console.log("No condition found with the symptom: ", symptom);
  }
}
searchBySymptoms("fever");

// lets list all symptoms

function listAllSymptoms() {
  let listAllSymptoms = [];

  for (let i = 0; i < conditions.length; i++) {
    let condition = conditions[i];

    for (let j = 0; j < condition.symptoms.length; j++) {
      let symptom = condition.symptoms[j];
      let alreadyExists = false;

      // check if the symptom already exists in the list
      for (let k = 0; k < listAllSymptoms.length; k++) {
        if (listAllSymptoms[k] === symptom) {
          alreadyExists = true;
          break;
        }
      }
      if (!alreadyExists) {
        listAllSymptoms[listAllSymptoms.length] = symptom;
      }
    }
  }
  console.log("All Symptoms: ", listAllSymptoms);
  for (let i = 0; i < listAllSymptoms.length; i++) {
    console.log("-" + listAllSymptoms[i]);
  }
}

listAllSymptoms();
// /A. declare and initialize the following variables for our space shuttle

let engineIndicatorLight = "red blinking",
    spaceSuitsOn = true,
    shuttleCabinReady = true,
    crewStatus = spaceSuitsOn && shuttleCabinReady,
    computerStatusCode = 200,
    shuttleSpeed = 15000;
    
// /B. /ANS/ "engines are off" /


// /C. Write conditional expressions to satisfy the safety rules.

// /a. crewStatus
if (crewStatus) {
  console.log("Crew Ready");
} else {
  console.log("Crew Not Ready");
}


// /b. computerStatusCode
if (computerStatusCode === 200){
  console.log("Please stand by. Computer is rebooting");
} else if (computerStatusCode === 400){
  console.log("Success! Computer is rebooting");
} else {
  console.log("ALERT: Computer offline!");
}

// /b. shuttleSpeed
if (shuttleSpeed > 17500) {
  console.log("ALERT: Escape velocity reached");
} else if (shuttleSpeed < 8000) {
  console.log("ALERT: Cannot maintain orbit!");
} else {
  console.log("Stable speed");
}

// D. Predict
// /ANS/ Yes

// E. Monitor the shuttle's fuel status.
let fuelLevel,
    engineTemperature,
    message;

if ((fuelLevel > 20000) && (engineTemperature <= 2500)){
  message = "Full tank. Engines good";
  console.log("Full tank. Engines good");
}else if ((fuelLevel > 10000) && (engineTemperature <= 2500)){
  message = "Fuel level above 50%. Engines good";
  console.log("Fuel level above 50%. Engines good");
}else if ((fuelLevel > 5000) && (engineTemperature <= 2500)){
  message = "Fuel level above 25%. Engines good";
  console.log("Fuel level above 25%. Engines good");
}else if ((fuelLevel <= 5000) || (engineTemperature > 2500)){
  message = "Check fuel level. Engines running hot.";
  console.log("Check fuel level. Engines running hot.");
}else if((fuelLevel < 1000) || (engineTemperature > 3500) || engineIndicatorLight){
  message = "ENGINE FAILURE IMMINENT!";
  console.log("ENGINE FAILURE IMMINENT!");  
}else{
  message = "Fuel and engine status pending...";
  console.log("Fuel and engine status pending...");
}
// 6.
// a. 
let commandOverride = false;

  if (commandOverride) {
        console.log("Cleared to launch!");
    } else {
      console.log(message);
  }
  
// b.
  if (((fuelLevel > 20000) && !engineIndicatorLight) || commandOverride){
    console.log("Cleared to launch!");
  } else {
    console.log("Launch scrubbed!");
  }
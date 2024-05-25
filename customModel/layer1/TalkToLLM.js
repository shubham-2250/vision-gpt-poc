// Function to get response from the assistant
const { extractJSON, getAssistantResponse, extractText } = require("../utils");
// Example usage
//user will ask aq question we will select which format to use

const prompt =
  "Explain the benefits of using Node.js for server-side programming.";

export async function Layer1(prompt) {
  try {
    // const taskDescription = "You are given a list of JSONs and each JSON item has a nameOfFunction, Description and some other params that is required by the function.\nYour Task is to select a JSON based on the given description which will be best suited to resolve the user message and once the JSON is selected fill appropriately all other params (currently filled with garbage value i.e. 'abc' or -1) of the JSON object, and respond just with that JSON.\n\nList of JSON Items\n{\n\tnameOfFunction : 'generateBarGraph',\n\tdescription : 'This function helps with generating a bar graph',\n\txAxisFieldName : 'abc',\n\tyAxisFieldName : 'abc',\n\tlistOfBarValues : [-1, -1, -1],\n}\n\n{\n\tnameOfFunction : 'generatePieChart',\n\tdescription : 'This function helps with generating a pie chart',\n\tlistOfValueNames : ['abc', 'abc', 'abc'],\n\tlistOfCorrespondingValuesInPercentage : [-1, -1, -1] //remember all values here should add to 100\n}\n\n{\n\tnameOfFunction : 'generateForms',\n\tdescription : 'This function helps with generating forms',\n\tlistOfFieldNames : ['abc', 'abc', 'abc'],\n}\n\n{\n\tnameOfFunction : 'generateText',\n\tdescription : 'This function helps with generating Text response, if nothing from list suits, this should be selected',\n\tanswerToTheUSerQuestion : 'abc',\n}\n";
    // const taskDescription =
    //   "You are given a list of JSONs and each JSON item has a nameOfFunction, Description and some other params that is required by the function. Your Task is to select a JSON based on the given description which will be best suited to resolve the user message and once the JSON is selected fill appropriately all other params (currently filled with garbage value i.e. 'abc' or -1) of the JSON object, and respond just with that JSON.\n\nList of JSON Items\n{\n    nameOfFunction: 'generateBarGraph',\n    description: 'This function helps with generating a bar graph',\n    xAxisFieldName: 'abc',\n    yAxisFieldName: 'abc',\n    listOfValuesOnXAxis: ['abc', 'abc', 'abc'],\n    listOfValuesOnYAxis: [-1, -1, -1],\n}\n\n{\n    nameOfFunction: 'generatePieChart',\n    description: 'This function helps with generating a pie chart',\n    listOfValueNames: ['abc', 'abc', 'abc'],\n    listOfCorrespondingValuesInPercentage: [-1, -1, -1] //remember all values here should add to 100\n}\n\n{\n    nameOfFunction: 'generateForms',\n    description: 'This function helps with generating forms',\n    listOfFieldNames: ['abc', 'abc', 'abc'],\n}\n\n{\n    nameOfFunction: 'generateText',\n    description: 'This function helps with generating Text response, if nothing from list suits, this should be selected',\n    answerToTheUSerQuestion: 'abc',\n}";
    const taskDescription = `
      You are given a list of JSONs and each JSON item has a nameOfFunction, Description and some other params that is required by the function.
      Your Task is to select a JSON based on the given description which will be best suited to resolve the user message and once the JSON is selected fill appropriately all other params (currently filled with garbage value i.e. 'abc' or -1) of the JSON object, and respond just with that JSON.
      
      List of JSON Items
      {
          nameOfFunction : 'generateBarGraph',
          description : 'This function helps with generating a bar graph',
          nameOfGraph : 'abc',
          xAxisFieldName : 'abc',
          yAxisFieldName : 'abc',
          listOfValuesOnXAxis : ['abc', 'abc', 'abc'],
          listOfValuesOnYAxis : [-1, -1, -1],
      }
      
      {
          nameOfFunction : 'generatePieChart',
          description : 'This function helps with generating a pie chart',
          nameOfGraph : 'abc',
          listOfValueNames : ['abc', 'abc', 'abc'],
          listOfCorrespondingValuesInPercentage : [-1, -1, -1] //remember all values here should add to 100
      }
      
      {
          nameOfFunction : 'generateForms',
          description : 'This function helps with generating forms',
          nameOfGraph : 'abc',
          listOfFieldNames : ['abc', 'abc', 'abc'],
      }
      
      {
          nameOfFunction : 'generateText',
          description : 'This function helps with generating Text response, if nothing from list suits, this should be selected',
          nameOfGraph : 'abc',
          answerToTheUSerQuestion : 'abc',
      }
      `;

    const response = await getAssistantResponse(prompt, taskDescription);
    const json = extractJSON(response);
    return json;
  } catch (error) {
    console.error("Error getting response from OpenAI:", error);
    return "An error occurred while getting the response from the assistant.";
  }
}

export async function Layer2(jsonFromLayer1) {
  try {
    const response = await getAssistantResponse(
      prompt,
      ' Given a List of and parameters required select a json and fill appropriate parameters  \r\n ListOfFunctions :- \r\n { name : "get_weather" ,  location : "abc"}  \r\n { name : "get_temperature" ,  location : "abc"} '
    );
    const json = extractJSON(response);
    return json;
  } catch (error) {
    console.error("Error getting response from OpenAI:", error);
    return "An error occurred while getting the response from the assistant.";
  }
}

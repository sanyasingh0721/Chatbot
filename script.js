 // A simple chatbot that responds with some predefined answers
 function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
      output = "Hello, nice to meet you!";
    } else if (input.includes("how are you")) {
      output = "I'm doing fine, thank you for asking.";
    } else if (input.includes("what is your name")) {
      output = "My name is CHATiBOY, I'm a chatbot.";
    } else if (input.includes("what can you do")) {
      output = "I can chat with you and answer some simple questions.";
    } else if (input.includes("tell me a joke")) {
      output = "Why did the chicken go to the seance? To get to the other side.";
    } else if (input.includes("in which country do we live")) {
      output = "You live in India.";
    } else if (input.includes("president of india") || input.includes("who is prisident of india")) {
      output = "As of August 2024, the President of India is Droupadi Murmu. She has been in office since July 25, 2022.";
    } else if (input.includes("pm of india") || input.includes("who is prime minister of india")){
      output = "Prime Minister of India is Narendra Damodar Das Modi. He has been serving as the Prime Minister since May 2014, representing the Bharatiya Janata Party (BJP).";
    }  else if (input.includes("who is finance minister of india")) {
      output = "As of August 2024, the Finance Minister of India is Nirmala Sitharaman. She has been serving in this role since May 2019, overseeing the country's economic policies and financial matters.";
    } else if (input.includes("when is republic day")) {
      output = "Republic Day in India is celebrated on January 26th each year. It marks the day in 1950 when the Constitution of India came into effect, making India a republic. The day is observed with various events, including parades, cultural performances, and flag-hoisting ceremonies across the country.";
    } else if (input.includes("when is independance day")) {
      output = "Independence Day in India is celebrated on August 15th each year. It commemorates the day in 1947 when India gained independence from British rule. The day is marked by various events, including flag-hoisting ceremonies, parades, and cultural programs across the country.";
    } else {
      output = "Sorry my developer didnot feed in me .";
    }
    return output;
  }

  // Display the user message on the chat
  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Display the bot message on the chat
  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Send the user message and get the bot response
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }

  // Add a click event listener to the button
  document.getElementById("button").addEventListener("click", sendMessage);

  // Add a keypress event listener to the input
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });
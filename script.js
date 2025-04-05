const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("demo").innerHTML = "Today's date is " + date + "<br>Have a great day!";

const button = document.getElementbyId('toggle-chatbot');
const Closebtn = document.getElementById('x');
const Chatbotmessages = document.getElementById('Chatbot');
const Mymessages = document.getElementById('chat-input');

button.addEventListener('click', function(){
    chatbot.sendmessage(Mymessages);

    setTimeout({

    },1000);
});

function Mymessages() {
    if (typeof[Mymessages == String || Mymessages == Int32Array]) {
        getAIResponse();
    } else {
        return 'Please ask a question with either letters or numbers';
    }
}

async function getAIResponse(Mymessages) {
    const apiKey = 56f0121ed41d420a81e54187df079905;
    const apiURL = https://aimlapi.com/app/;

    try {
        const response = await
        fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'applocation/json',
                'Authorization': 'Bearers $ {apiKey}'
            },
            bosy: JSON.stringify({
                prompt: Mymessages,
            }),
        });

        if(!response.ok) {
            throw new Error('HTTP error! ststus: ${response.status}');
        }

        const data = await response.json();
        const Chatbotmessages = data.choices[0].text.trim();
    } catch (error) {
        console.error('Error fetching AI response:', error)
        return 'Sorry, I encountered an error.';
    }
}

//Example usage
async function handleUserInput(Mymessages) {
    const TextResponses = document.createElement(div);
    return 'You: ${Mymessages}';

    const AiResponse = document.createElement(div);
}
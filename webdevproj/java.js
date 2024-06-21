// alert(" welcome to holomag !!");
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

var counter = 1 ;
setInterval(function(){

    document.getElementById('radio'+counter).checked =true ;
    counter++;
    
    if(counter>5){
        counter=1;
    }

},5000);

<script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>

function initBotpressChat(){

    window.botpressWebChat.init({
        "composerPlaceholder": "Chat with bot",
        "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
        "botId": "f1eb8f70-9504-4e5f-b383-1cf41a1df578",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "f1eb8f70-9504-4e5f-b383-1cf41a1df578",
        "webhookId": "11999d41-7c6c-4d2e-ba02-eb296cad4b0b",
        "lazySocket": true,
        "themeName": "prism",
        "frontendVersion": "v1",
        "theme": "prism",
        "themeColor": "#2563eb",
        "allowedOrigins": []
    });

}


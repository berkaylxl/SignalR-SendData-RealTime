const connection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:44354/tenderHub',{
            skipNegotiation: true,
             transport: signalR.HttpTransportType.WebSockets
        
    })
    .build();
connection.start().then(()=>{
    console.log("connection start")
})

var button = document.getElementById("button")
var textbox = document.getElementById("textbox")
var priceText = document.getElementById("price")

button.addEventListener('click',()=>{
    let message=textbox.value
    connection.invoke("SendData",message)

})
connection.on("SendDataJs",message=>{
    priceText.innerText=message
})
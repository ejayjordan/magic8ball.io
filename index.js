function getResponse() {
    var fortunes = [
        'It will be',
        'Signs point to yes',
        'Live Mas',
        'Yes',
        'No',
        'Signs are unclear'
    ];
    response = fortunes[Math.floor(Math.random() * fortunes.length)];
    document.getElementById('outputDiv').innerHTML = response;
}
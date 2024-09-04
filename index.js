function getResponse() {
    var fortunes = [
        'It will be',
        'Signs point to yes',
        'Live Mas',
        'Yes',
        'No',
        'Signs are unclear'
    ];
    var colors = [
        '#C0D6E4',
        '#E5C1FA',
        '#D6FAC1',
        '#E07AB9',
        '#F1F7FC',
        '#18DFFC'
    ];

    const response = Math.floor(Math.random() * fortunes.length);
    const magic = fortunes[response];
    const color = colors[response];
    document.getElementById('outputDiv').innerHTML = magic;
    outputDiv.style.color = color;
}
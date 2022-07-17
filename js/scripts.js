// display more items
let btnMore = document.getElementById('btnMore').addEventListener('click', () => {
    let btnDisplay = document.getElementById('moreBox');
    
    if(btnDisplay.style.display === 'block')
    {
        btnDisplay.style.display = 'none'
    }else
    {
        btnDisplay.style.display = 'block'
    }
});

// functions more
let functionDark = document.getElementById('functionDark').addEventListener('click', () => {
    
    let bodyDOM = document.getElementById('body')

    if(bodyDOM.style.background = "#fefefe")
    {
        bodyDOM.style.background = "#888"
    }
});

let functionLight = document.getElementById('functionLight').addEventListener('click', () => {
    let bodyDOM = document.getElementById('body')

    if(bodyDOM.style.background = "#888")
    {
        bodyDOM.style.background = "#fefefe"
    }
})
let functionShare = document.getElementById('functionShare').addEventListener('click', () => {
    alert('Em Breve')
})
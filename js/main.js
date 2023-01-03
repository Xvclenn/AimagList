console.log(`№1. `, document.querySelector("li"))
console.log(`№2. `, document.querySelector("li:last-child"))
console.log(`№3. `, document.getElementById("aimag-315"))
console.log(`№4.    ®`)
console.log(`№5.    ® 

for (let i = 0; i < a2.length; i++) {
    if (a2[i].id.split('-')[1].charAt(0) === '1') 
    {
        a2[i].style.backgroundColor = "grey"
    }
    else if (a2[i].id.split('-')[1].charAt(0) === '2')
    {
        a2[i].style.backgroundColor = "white"
    }
    else if (a2[i].id.split('-')[1].charAt(0) === '3')
    {
        a2[i].style.backgroundColor = "#AFD7CE"
    }
    else if (a2[i].id.split('-')[1].charAt(0) === '4')
    {
        a2[i].style.backgroundColor = "#B29C6A"
    }
    else if (a2[i].id.split('-')[1].charAt(0) === '5')
    {
        a2[i].style.backgroundColor = "#5C3C"
    }
    else{
        console.log
    }
}`)
//___________________________//
// №4 ...
const aNames = document.getElementById("aimagNames")

aNames.style.color = "#034C52"
aNames.style.backgroundColor = "salmon"
aNames.style.border = "dashed 10px rgb(32, 33, 36)"
aNames.style.textAlign = "center"
aNames.style.listStyle = "none"
aNames.style.textTransform = "uppercase"
aNames.style.padding = "50px"
aNames.style.fontWeight = "bold"

//___________________________//
// №5 ...
const a2 = document.getElementsByTagName("li")

// a2[0].style.backgroundColor = "grey"
// a2[2].style.backgroundColor = "grey"
// a2[3].style.backgroundColor = "grey"
// a2[11].style.backgroundColor = "grey"
// a2[12].style.backgroundColor = "grey"
// a2[19].style.backgroundColor = "grey"

// a2[0].style.backgroundColor = "white"
// a2[1].style.backgroundColor = "white"
// a2[4].style.backgroundColor = "white"
// a2[10].style.backgroundColor = "white"
// a2[17].style.backgroundColor = "white"
// a2[18].style.backgroundColor = "white"

// a2[8].style.backgroundColor = "#AFD7CE"
// a2[14].style.backgroundColor = "#AFD7CE"
// a2[20].style.backgroundColor = "#AFD7CE"

// a2[5].style.backgroundColor = "#B29C6A"
// a2[6].style.backgroundColor = "#B29C6A"
// a2[7].style.backgroundColor = "#B29C6A"
// a2[9].style.backgroundColor = "#B29C6A"
// a2[13].style.backgroundColor = "#B29C6A"
// a2[15].style.backgroundColor = "#B29C6A"
// a2[16].style.backgroundColor = "#B29C6A"

// a2[21].style.backgroundColor = "#5C3C"



for (let i = 0; i < a2.length; i++) {
    if (a2[i].id.split('-')[1].charAt(0) === '1') 
    {
        a2[i].style.backgroundColor = "grey"
    }
    else if (a2[i].id.split('-')[1].charAt(0) === '2')
    {
        a2[i].style.backgroundColor = "white"
    }
    else if (a2[i].id.split('-')[1].charAt(0) === '3')
    {
        a2[i].style.backgroundColor = "#AFD7CE"
    }
    else if (a2[i].id.split('-')[1].charAt(0) === '4')
    {
        a2[i].style.backgroundColor = "#B29C6A"
    }
    else if (a2[i].id.split('-')[1].charAt(0) === '5')
    {
        a2[i].style.backgroundColor = "#5C3C"
    }
    else{
        console.log
    }
}
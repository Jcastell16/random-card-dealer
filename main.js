window.onload =()=> {
    //body
    let body = document.body;
    body.classList.add('body')

    //refresh
    let buttonRefresh = document.querySelector('#refresh')
    buttonRefresh.style.width = "200px"
    buttonRefresh.style.height = "50px"
    buttonRefresh.style.borderRadius = "5px"
    buttonRefresh.style.marginTop = "7px"
    buttonRefresh.style.marginButton = "7px"
    buttonRefresh.style.fontSize = "20px"
    buttonRefresh.style.color = "white"
    buttonRefresh.style.backgroundColor = "#2E86C1 "
    buttonRefresh.style.border = "2px solid #2E86C1 "

    //card
    let card = document.querySelector('#card')
     card.style.width = "400px";
     card.style.border = "3px solid black";
     card.style.height = "500px"
     card.style.margin = "0px"
     card.style.padding = "0px"
     card.style.fontSize = "100px"
     card.style.display = "flex"
     card.style.flexDirection = "column"
     card.style.alignContent = "space-around"
     card.style.backgroundColor = "white"
     card.style.borderRadius = "20px"
    //Ramdon Card
    let ramdonNumberCard = () =>{
        let ramdonNumberCard = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        value = Math.floor(Math.random()*ramdonNumberCard.length)
        return ramdonNumberCard[value]
    }
    //Ramdon Icons
    let iconCard = () => {
        let iconCard = ['♦', '♥', '♠', '♣']
        value = Math.floor(Math.random()*iconCard.length)
        return iconCard[value]
    }

    let iconramdon = iconCard()
    //Color
    let Colores = () => {
        if(iconramdon == '♥' || iconramdon == '♦'){
             return 'red'
         }else{
            return 'black'
        }
    }
    function reloadCard() {
        return window.location.reload();
    }
    window.setTimeout( function() {
        window.location.reload();
      }, 10000);


    //TopIcono
    let iconTop = document.createElement('span')
    iconTop.style.paddingLeft = "25px"
    iconTop.style.margin = "0px"
    iconTop.style.height = "150px"
    iconTop.style.fontSize = "120px"
    iconTop.style.color = Colores()
    iconTop.innerHTML = iconramdon
    card.appendChild(iconTop)

    //MiddlerIcono
    let iconMiddle = document.createElement('span')
    iconMiddle.style.padding = "0px"
    iconMiddle.style.margin = "0px auto"
    iconMiddle.style.height = "200px"
    iconMiddle.style.fontSize = "150px"
    iconMiddle.style.color = Colores()
    iconMiddle.innerHTML = ramdonNumberCard()
    card.appendChild(iconMiddle)

    //ButtonIcono
    let iconButton = document.createElement('span')
    iconButton.style.paddingLeft = "25px"
    iconButton.style.margin = "0px"
    iconButton.style.height = "150px"
    iconButton.style.fontSize = "120px"
    iconButton.style.transform = "rotate(180deg)"
    iconButton.style.textAlign = "left"
    iconButton.style.color = Colores()
    iconButton.innerHTML = iconramdon
    card.appendChild(iconButton)


    
    function reloadCard() {
        return window.location.reload();
    }
    
    }
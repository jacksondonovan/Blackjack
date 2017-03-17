var eachValue = []
var eachImg = []
var masterKey = 0;
var allMyCards = document.querySelectorAll('.playerCards img')
var allHisCards = document.querySelectorAll('.dealerCards img')
var howManyCardsDoYouHave = "You have " + allMyCards.length + " cards in your hand.";
var theWinner = document.querySelector('.whoWins')
var aceChange = 0
var dealerSideAces = 0
var lockedIn = 1
var letsTryBool = true
var handOver = true
var moneyYouBrought = 100
var moneyBank = document.querySelector('.showMeTheMoney')
moneyBank.textContent = "Betting Balance: " + moneyYouBrought
var userBet = 10
var bigBet = 0
var submitReady = false
var bringMoreMoneyNextTime = true
var betField = $('#bigBet').val()
var dontBet = true
var dontPressStartAgain = true
var yetAnotherTrigger = true
var yourWallet = parseInt(moneyYouBrought)
function buttonAddition(whichButton) {if(dontBet){
  bigBet += parseInt(whichButton)
  $('#bigBet').val(bigBet)
  }
}

function youMustBet() {
  if(dontPressStartAgain){
    bigBet = $('#bigBet').val()

    if(bigBet<1||bigBet>yourWallet||bigBet>150){
      submitReady = false
      theWinner.textContent = "Bet what you have! (Press Reset)"
      if(bigBet>150&&bigBet>yourWallet){
        theWinner.textContent = "Bet what you have! (Press Reset)"
      }
      else if(bigBet>150&&bigBet<yourWallet){
        theWinner.textContent = "TABLE LIMIT:  150     (Press Reset)"
      }
    }
    else{
      theWinner.textContent = "BlackJack"
      submitReady = true
      lockedIn = 1
    }
  }
  dontPressStartAgain = false
}


function masterCardList() {
  if(gamePlay){
    yourWallet -= parseInt(bigBet)
    moneyBank.textContent = "Betting Balance: " + yourWallet
    lockedIn = 1
    $.get("https://deckofcardsapi.com/api/deck/new/draw/?count=12",function(data){
      for (var i = 0; i < 12; i++) {
        if(data.cards[i].images.png === "http://deckofcardsapi.com/static/img/AD.png"){
          eachImg.push("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Cards-A-Diamond.svg/2000px-Cards-A-Diamond.svg.png")
        }
        else{
          eachImg.push(data.cards[i].images.png)
        }
        eachValue.push(handValue(data.cards[i].value))
        //masterKey++
      }
    })
    theWinner.textContent = "BlackJack"
    myHand = 2
    gamePlay = false
    aceChange = 0
    letsTryBool = true
    bigBet = 0
    $('#bigBet').val("")
    dontBet = true
    handOver = true
    dontPressStartAgain = true
    yetAnotherTrigger = true
    masterKey++
    dealerSideAces = 0
  }
  else{

    lockedIn = 1
    $.get("https://deckofcardsapi.com/api/deck/new/draw/?count=12",function(data){
      for (var i = 0; i < 12; i++) {
        if(data.cards[i].images.png === "http://deckofcardsapi.com/static/img/AD.png"){
          eachImg.push("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Cards-A-Diamond.svg/2000px-Cards-A-Diamond.svg.png")
        }
        else{
          eachImg.push(data.cards[i].images.png)
        }
        eachValue.push(handValue(data.cards[i].value))
        //masterKey++
      }
    })

    theWinner.textContent = "BlackJack"
    myHand = 2
    gamePlay = false
    aceChange = 0
    letsTryBool = true
    bigBet = 0
    $('#bigBet').val("")
    dontBet = true
    handOver = true
    dontPressStartAgain = true
    yetAnotherTrigger = true
    masterKey++
    dealerSideAces = 0
  }
}
function masterCardListTwo() {
  if(gamePlay&&bigBet>0){
    yourWallet -= parseInt(bigBet)
    moneyBank.textContent = "Betting Balance: " + yourWallet
    if(masterKey>0){
      masterKey++
      lockedIn = 1
      eachValue = []
      eachImg = []
      allHisCards = document.querySelectorAll('.dealerCards img')
      allMyCards = document.querySelectorAll('.playerCards img')
      $.get("https://deckofcardsapi.com/api/deck/new/draw/?count=12",function(data){
        for (var i = 0; i < 12; i++) {
          if(data.cards[i].images.png === "http://deckofcardsapi.com/static/img/AD.png"){
            console.log(" ! https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ace_of_diamonds.svg/2000px-Ace_of_diamonds.svg.png");
            eachImg.push("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Cards-A-Diamond.svg/2000px-Cards-A-Diamond.svg.png")
          }
          else{

            eachImg.push(data.cards[i].images.png)
          }
          eachValue.push(handValue(data.cards[i].value))
          //masterKey++
        }

      })
      playerTotal.textContent = "Your hand's total: "
      dealerTotal.textContent = "Dealer's total: "
      playerNumValTotal = 0
      dealerNumValTotal = 0
      card1.setAttribute('src','http://www.murphysmagicsupplies.com/images_email/Mandolin_BACK.jpg')
      card2.setAttribute('src','http://www.murphysmagicsupplies.com/images_email/Mandolin_BACK.jpg')
      dealShow.setAttribute('src','http://www.murphysmagicsupplies.com/images_email/Mandolin_BACK.jpg')
      dealHide.setAttribute('src','http://www.murphysmagicsupplies.com/images_email/Mandolin_BACK.jpg')
      if(allMyCards[2]){
        allMyCards[2].remove()
      }
      if(allMyCards[3]){
        allMyCards[3].remove()
      }
      if(allMyCards[4]){
        allMyCards[4].remove()
      }
      if(allHisCards[2]){
        allHisCards[2].remove()
      }
      if(allHisCards[3]){
        allHisCards[3].remove()
      }
      if(allHisCards[4]){
        allHisCards[4].remove()
      }
      theWinner.textContent = "BlackJack"
      myHand = 2
      gamePlay = false
      aceChange = 0
      letsTryBool = true
      bigBet = 0
      $('#bigBet').val("")
      dontBet = true
      handOver = true
      dontPressStartAgain = true
      yetAnotherTrigger = true
      dealerSideAces = 0
    }
  }
  else{
    if(masterKey>0){
      masterKey++
      lockedIn = 1
      eachValue = []
      eachImg = []
      allHisCards = document.querySelectorAll('.dealerCards img')
      allMyCards = document.querySelectorAll('.playerCards img')
      $.get("https://deckofcardsapi.com/api/deck/new/draw/?count=12",function(data){
        for (var i = 0; i < 12; i++) {
          if(data.cards[i].images.png === "http://deckofcardsapi.com/static/img/AD.png"){
            console.log("! https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ace_of_diamonds.svg/2000px-Ace_of_diamonds.svg.png");
            eachImg.push("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Cards-A-Diamond.svg/2000px-Cards-A-Diamond.svg.png")
          }
          else{
            eachImg.push(data.cards[i].images.png)
          }
          eachValue.push(handValue(data.cards[i].value))
          //masterKey++
        }
      })
      playerTotal.textContent = "Your hand's total: "
      dealerTotal.textContent = "Dealer's total: "
      playerNumValTotal = 0
      dealerNumValTotal = 0
      card1.setAttribute('src','http://www.murphysmagicsupplies.com/images_email/Mandolin_BACK.jpg')
      card2.setAttribute('src','http://www.murphysmagicsupplies.com/images_email/Mandolin_BACK.jpg')
      dealShow.setAttribute('src','http://www.murphysmagicsupplies.com/images_email/Mandolin_BACK.jpg')
      dealHide.setAttribute('src','http://www.murphysmagicsupplies.com/images_email/Mandolin_BACK.jpg')
      if(allMyCards[2]){
        allMyCards[2].remove()
      }
      if(allMyCards[3]){
        allMyCards[3].remove()
      }
      if(allMyCards[4]){
        allMyCards[4].remove()
      }
      if(allHisCards[2]){
        allHisCards[2].remove()
      }
      if(allHisCards[3]){
        allHisCards[3].remove()
      }
      if(allHisCards[4]){
        allHisCards[4].remove()
      }
      theWinner.textContent = "BlackJack"
      myHand = 2
      gamePlay = false
      aceChange = 0
      letsTryBool = true
      bigBet = 0
      $('#bigBet').val("")
      dontBet = true
      handOver = true
      dontPressStartAgain = true
      yetAnotherTrigger = true
      dealerSideAces = 0
    }
  }
}

function newDeck() {
  if(masterKey===0){
    masterCardList()
  }
  else{
    masterCardListTwo()
  }
}
newDeck()

var card5 = document.createElement('img');
var card6 = document.createElement('img');
var card7 = document.createElement('img');
var card8 = document.createElement('img');
var card9 = document.createElement('img');
var card10 = document.createElement('img');
var dealShow = document.querySelector('.dealerCardShow')
var dealHide = document.querySelector('.dealerCardHide')

var playerTotal = document.querySelector('.playerTotal')
var playerNumValTotal = 0
var dealerNumValTotal = 0
var dealerTotal = document.querySelector('.dealerTotal')


var card1 = document.querySelector('.cardOne')
var card2 = document.querySelector('.cardTwo')
var card3 = document.querySelector('.dealerCardShow')
var card4 = document.querySelector('.dealerCardHide')
var gamePlay

$('.startButton').click(function(){
  if(yetAnotherTrigger){
    youMustBet()
    grabPhotos()
  }
})
$('.resetButton').click(function(){
  newDeck()
})
$('.hitButton').click(function(){
  anotherCard()
  //gameWinner()
})
$('.stayButton').click(function(){
  stayingWith()
  //gameWinner()
  compareTotals()
})
$('.doubleButton').click(function(){
  doubleDown()
  if(bringMoreMoneyNextTime){
    stayingWith()
    compareTotals()
  }
})
$('.plusTenButton').click(function(){
  buttonAddition(5)
})
$('.plusTwentyFiveButton').click(function(){
  buttonAddition(10)
})
$('.plusFiftyButton').click(function(){
  buttonAddition(25)
})
$('.plusOneHundredButton').click(function(){
  buttonAddition(50)
})
$('.plusFiveHundredButton').click(function(){
  buttonAddition(100)
})

var cardCountPlayer = document.querySelectorAll('.playerCards img')
var numOcards = cardCountPlayer.length
var myHand = 2


function grabPhotos(){if(lockedIn>0 && submitReady){
  card1.setAttribute('src', eachImg[0])
  card2.setAttribute('src', eachImg[1])
  card3.setAttribute('src', eachImg[2])
  dealerNumValTotal += eachValue[2]
  dealerTotal.append(dealerNumValTotal)
  playerNumValTotal += ((eachValue[0])+(eachValue[1]))
  playerTotal.append(playerNumValTotal)}
  if(bigBet>0&&bigBet<=yourWallet){
    if(bigBet>150){
      submitReady = true
    }
    else{
      gamePlay = true
    }
  }
  dontBet = false
  lockedIn = 0
  if((eachValue[0] + eachValue[1])===21){
    gamePlay = false
    handOver = false
    yourWallet += parseInt(bigBet)
    moneyBank.textContent = "Betting Balance: " + yourWallet
    theWinner.textContent = "YOU WIN!"
  }
  if(eachValue[0]===11&&eachValue[1]===11){
    playerNumValTotal = 12
    playerTotal.textContent = "Your hand's total: " + (playerNumValTotal)
  }
  yetAnotherTrigger = false
}
function stayingWith(){if(gamePlay&&submitReady){
  gamePlay = false
  card4.setAttribute('src',eachImg[3])
  dealerNumValTotal += (eachValue[3])
  if(eachValue[2]===11&&eachValue[3]===11){
    dealerNumValTotal = 12
    dealerTotal.textContent = "Dealer's total: " + dealerNumValTotal
  }
  dealerTotal.textContent = "Dealer's total: " + dealerNumValTotal
  if((dealerNumValTotal)<=16){
    card8.setAttribute('src',eachImg[7])
    card8.setAttribute('class','activeCard')
    $('.dealerCards').append(card8)
    dealerNumValTotal += eachValue[7]
    //
    if(dealerNumValTotal > 21 && (eachValue[2]===11||eachValue[3]===11||eachValue[7]===11) && dealerSideAces === 0){
      dealerNumValTotal -= 10
      console.log(dealerNumValTotal);
      dealerSideAces++
    }
    dealerTotal.textContent = "Dealer's total: " + dealerNumValTotal
    allHisCards = document.querySelectorAll('.dealerCards img')
    if((dealerNumValTotal<=16)){
      card9.setAttribute('src',eachImg[8])
      card9.setAttribute('class','activeCard')
      $('.dealerCards').append(card9)
      dealerNumValTotal += (eachValue[8])
      //
      if(dealerNumValTotal > 21 && eachValue[8]===11 && (dealerSideAces === 1 || dealerSideAces === 0)){
        console.log(("FIX THIS ACE PROBLEM"))
        dealerNumValTotal -= 10
        if(dealerNumValTotal>21){

          gamePlay = false
          theWinner.textContent = "YOU LOSE!"
          yourWallet -= parseInt(bigBet)
          moneyBank.textContent = "Betting Balance: " + yourWallet
        }
        //dealerNumValTotal -= 10
        letsTryBool = false
      }
      dealerTotal.textContent = "Dealer's total: " + dealerNumValTotal
      allHisCards = document.querySelectorAll('.dealerCards img')
      if((dealerNumValTotal<=16)){
        card10.setAttribute('src',eachImg[9])
        card10.setAttribute('class','activeCard')
        $('.dealerCards').append(card10)
        dealerNumValTotal += (eachValue[9])
        dealerTotal.textContent = "Dealer's total: " + dealerNumValTotal
        allHisCards = document.querySelectorAll('.dealerCards img')
      }
    }
  }

 }
}
function doubleDown() {if(gamePlay&&submitReady){
  if((bigBet*2)<=yourWallet){
    if(myHand===2){
      card5.setAttribute('src',eachImg[4])
      card5.setAttribute('class','activeCard')
      $('.playerCards').append(card5)
      bigBet *= 2
      $('#bigBet').val(bigBet)
      playerNumValTotal += eachValue[4]
      if(playerNumValTotal > 21 && (eachValue[0]===11||eachValue[1]===11||eachValue[4]===11) && aceChange === 0){
        playerNumValTotal -= 10
        console.log(playerNumValTotal);
        aceChange++
      }
      if(playerNumValTotal > 21){
        theWinner.textContent = "YOU LOSE!"
        playerTotal.textContent = "Your hand's total: " + playerNumValTotal
        gamePlay = false
      }
      if(playerNumValTotal === 21){
        theWinner.textContent = "YOU WIN!"
        playerTotal.textContent = "Your hand's total: " + playerNumValTotal
        gamePlay = false
      }
      if(playerNumValTotal < 21){
        playerTotal.textContent = "Your hand's total: " + playerNumValTotal
        return
      }
      playerTotal.textContent = "Your hand's total: " + (playerNumValTotal)
    }
    if(myHand===3){
      card6.setAttribute('src',eachImg[5])
      card6.setAttribute('class','activeCard')
      $('.playerCards').append(card6)
      bigBet *= 2
      $('#bigBet').val(bigBet)
      playerNumValTotal += eachValue[5]
      if(playerNumValTotal > 21 && (eachValue[0]===11||eachValue[1]===11||eachValue[4]===11||eachValue[5]===11) && aceChange === 0){
        playerTotal.textContent = "Your hand's total: " + playerNumValTotal
        playerNumValTotal -= 10
        if(playerNumValTotal>21){
          gamePlay = false
          theWinner.textContent = "YOU LOSE!"
          //yourWallet -= parseInt((bigBet))
          moneyBank.textContent = "Betting Balance: " + yourWallet
        }
        //playerNumValTotal += eachValue[5]
        console.log(playerNumValTotal);
        aceChange++
      }
      if(playerNumValTotal > 21){
        theWinner.textContent = "YOU LOSE!"
        playerTotal.textContent = "Your hand's total: " + playerNumValTotal
        gamePlay = false
      }
      if(playerNumValTotal === 21){
        theWinner.textContent = "YOU WIN!"
        playerTotal.textContent = "Your hand's total: " + playerNumValTotal
        gamePlay = false
      }
      if(playerNumValTotal < 21){
        playerTotal.textContent = "Your hand's total: " + playerNumValTotal
        return
      }
      playerTotal.textContent = "Your hand's total: " + (playerNumValTotal)
    }
    if(myHand===4){
      card7.setAttribute('src',eachImg[6])
      card7.setAttribute('class','activeCard')
      $('.playerCards').append(card7)
      bigBet *= 2
      $('#bigBet').val(bigBet)
      playerNumValTotal += eachValue[6]
      if(playerNumValTotal > 21 && (eachValue[0]===11||eachValue[1]===11||eachValue[4]===11||eachValue[5]===11||eachValue[6]===11) && aceChange === 0){
        playerNumValTotal -= 10
        if(playerNumValTotal>21){
          gamePlay = false
          theWinner.textContent = "YOU LOSE!"
          //yourWallet -= parseInt((bigBet))
          moneyBank.textContent = "Betting Balance: " + yourWallet
        }
        if(eachValue[6]===11){
          //playerNumValTotal += 1
        }
        else{
          //playerNumValTotal += eachValue[6]
        }
        console.log(playerNumValTotal);
        aceChange++
      }
      if(playerNumValTotal > 21){
        theWinner.textContent = "YOU LOSE!"
        playerTotal.textContent = "Your hand's total: " + playerNumValTotal
        gamePlay = false
      }
      if(playerNumValTotal === 21){
        theWinner.textContent = "YOU WIN!"
        playerTotal.textContent = "Your hand's total: " + playerNumValTotal
        gamePlay = false
      }
      if(playerNumValTotal < 21){
        playerTotal.textContent = "Your hand's total: " + playerNumValTotal
        return
      }
      playerTotal.textContent = "Your hand's total: " + (playerNumValTotal)
    }
  }
  else{
    theWinner.textContent = "Bet what you have!"
    bringMoreMoneyNextTime = false
  }
 }
}

function handValue(stringVal){
  switch (stringVal) {
    case 'KING':
      return 10
      break;
    case 'QUEEN':
      return 10
      break;
    case 'JACK':
      return 10
      break;
    case 'ACE':
      return 11
      break;
    case '10':
      return 10
      break;
    case '9':
      return 9
      break;
    case '8':
      return 8
      break;
    case '7':
      return 7
      break;
    case '6':
      return 6
      break;
    case '5':
      return 5
      break;
    case '4':
      return 4
      break;
    case '3':
      return 3
      break;
    case '2':
      return 2
      break;
    default:
      return 1000
  }
}
function anotherCard(){if(gamePlay&&submitReady){
  if(myHand===2){
    card5.setAttribute('src',eachImg[4])
    card5.setAttribute('class','activeCard')
    $('.playerCards').append(card5)
    myHand++

    playerNumValTotal += eachValue[4]

    if(playerNumValTotal > 21 && (eachValue[0]===11||eachValue[1]===11||eachValue[4]===11) && aceChange === 0){
      playerNumValTotal -= 10
      console.log(playerNumValTotal);
      aceChange++
    }
    else if(playerNumValTotal > 21){
      theWinner.textContent = "YOU LOSE!"
      gamePlay = false
      yourWallet -= parseInt((bigBet))
      moneyBank.textContent = "Betting Balance: " + yourWallet
      handOver = false
      playerTotal.textContent = "Your hand's total: " + (playerNumValTotal)
    }

    playerTotal.textContent = "Your hand's total: " + (playerNumValTotal)

    if(playerNumValTotal === 21){
      theWinner.textContent = "YOU WIN!"
      gamePlay = false
      yourWallet += parseInt((bigBet))
      moneyBank.textContent = "Betting Balance: " + yourWallet
      handOver = false
    }
  }
  else if(myHand===3){
    card6.setAttribute('src',eachImg[5])
    card6.setAttribute('class','activeCard')
    $('.playerCards').append(card6)
    myHand++
    playerNumValTotal += eachValue[5]
    playerTotal.textContent = "Your hand's total: " + playerNumValTotal
    if(playerNumValTotal > 21 && (eachValue[0]===11||eachValue[1]===11||eachValue[4]===11||eachValue[5]===11) && (aceChange === 0)){
      playerNumValTotal -= 10
      playerTotal.textContent = "Your hand's total: " + playerNumValTotal
      if(playerNumValTotal>21){
        gamePlay = false
        theWinner.textContent = "YOU LOSE!"
        yourWallet -= parseInt((bigBet))
        moneyBank.textContent = "Betting Balance: " + yourWallet
        handOver = false
      }
      //playerNumValTotal -= 10
      console.log(playerNumValTotal);
      aceChange++
    }
    else if(playerNumValTotal > 21 && (eachValue[0]!==11||eachValue[1]!==11||eachValue[4]!==11||eachValue[5]!==11)){
      theWinner.textContent = "YOU LOSE!"
      gamePlay = false
      handOver = false
      yourWallet -= parseInt((bigBet))
      moneyBank.textContent = "Betting Balance: " + yourWallet
      playerTotal.textContent = "Your hand's total: " + playerNumValTotal
    }

    playerTotal.textContent = "Your hand's total: " + playerNumValTotal
    if(playerNumValTotal === 21){
      theWinner.textContent = "YOU WIN!"
      gamePlay = false
      handOver = false
      yourWallet += parseInt((bigBet))
      moneyBank.textContent = "Betting Balance: " + yourWallet
    }
  }
  else if(myHand===4){
    card7.setAttribute('src',eachImg[6])
    card7.setAttribute('class','activeCard')
    $('.playerCards').append(card7)
    myHand++
    playerNumValTotal += eachValue[6]
    playerTotal.textContent = "Your hand's total: " + playerNumValTotal
    if(playerNumValTotal > 21 && (eachValue[0]===11||eachValue[1]===11||eachValue[4]===11||eachValue[5]===11||eachValue[6]===11) && (aceChange === 0 || aceChange === 1)){
      playerNumValTotal -= 10
      playerTotal.textContent = "Your hand's total: " + playerNumValTotal
      if(playerNumValTotal>21&&(eachValue[0]!==11||eachValue[1]!==11||eachValue[4]!==11||eachValue[5]!==11)){
        gamePlay = false
        theWinner.textContent = "YOU LOSE!"
        yourWallet -= parseInt((bigBet))
        moneyBank.textContent = "Betting Balance: " + yourWallet
      }
      // if(eachValue[6]===11){
      //   playerNumValTotal += 1
      // }
      // else{
      //   playerNumValTotal += eachValue[6]
      // }
      console.log(playerNumValTotal);
      aceChange++
    }
    else if(playerNumValTotal > 21 &&(eachValue[0]!==11||eachValue[1]!==11||eachValue[4]!==11||eachValue[5]!==11)){
      theWinner.textContent = "YOU LOSE!"
      gamePlay = false
      handOver = false
      yourWallet -= parseInt((bigBet))
      moneyBank.textContent = "Betting Balance: " + yourWallet
    }

    playerTotal.textContent = "Your hand's total: " + playerNumValTotal

    if(playerNumValTotal === 21){
      theWinner.textContent = "YOU WIN!"
      gamePlay = false
      handOver = false
      yourWallet += parseInt((bigBet))
      moneyBank.textContent = "Betting Balance: " + yourWallet
    }
  }}
}

function compareTotals() {if(handOver){
  if(playerNumValTotal === 21){
    theWinner.textContent = "YOU WIN!"
    yourWallet += parseInt(bigBet)
    moneyBank.textContent = "Betting Balance: " + yourWallet
    handOver = false
  }
  if(playerNumValTotal > 21){
    theWinner.textContent = "YOU LOSE!"
    yourWallet -= parseInt(bigBet)
    moneyBank.textContent = "Betting Balance: " + yourWallet
    handOver = false
  }
  if(dealerNumValTotal > 21 && handOver===true){
    theWinner.textContent = "YOU WIN!"
    yourWallet += parseInt(bigBet)
    moneyBank.textContent = "Betting Balance: " + yourWallet
    handOver = false
  }
  if(dealerNumValTotal > 21 && playerNumValTotal < 21 && handOver===true){
    theWinner.textContent = "YOU WIN!"
    yourWallet += parseInt(bigBet)
    moneyBank.textContent = "Betting Balance: " + yourWallet
    handOver = false
  }
  else if(dealerNumValTotal === 21 && playerNumValTotal !== 21){
    theWinner.textContent = "YOU LOSE!"
    yourWallet -= parseInt(bigBet)
    moneyBank.textContent = "Betting Balance: " + yourWallet
    handOver = false
  }
  if(yourWallet===0){
    theWinner.textContent = "Leave my website, paying customers only."
  }
  if(yourWallet>2016){
    theWinner.textContent = "Congratulations! You win free lunch from Jackson! "
  }
  else if(dealerNumValTotal < 21 && playerNumValTotal < 21){
    if(dealerNumValTotal>playerNumValTotal){
      theWinner.textContent = "YOU LOSE!"
      yourWallet -= parseInt(bigBet)
      moneyBank.textContent = "Betting Balance: " + yourWallet
      handOver = false
    }
    else if(dealerNumValTotal<playerNumValTotal){
      theWinner.textContent = "YOU WIN!"
      yourWallet += parseInt(bigBet)
      moneyBank.textContent = "Betting Balance: " + yourWallet
      handOver = false
    }
    else if(dealerNumValTotal===playerNumValTotal){
      theWinner.textContent = "PUSH!"
      moneyBank.textContent = "Betting Balance: " + yourWallet
      handOver = false
    }
    if(yourWallet===0){
      theWinner.textContent = "Leave my website, paying customers only."
    }
    if(yourWallet>2016){
      theWinner.textContent = "Congratulations! You win free lunch from Jackson! "
    }
  }
}
}

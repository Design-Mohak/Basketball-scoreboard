let homeP = document.getElementById("home-scoreP")

let count = 0

function increase1() {
    count += 1
    homeP.textContent = count
    updateLeader() 
}

function increase2() {
    count += 2
    homeP.textContent = count
    updateLeader()
}

function increase3() {
    count += 3
    homeP.textContent = count
    updateLeader() 
}

let guestP = document.getElementById("guest-scoreP")

let count2 = 0

function increasea() {
    count2 += 1
    guestP.textContent = count2
    updateLeader()
}

function increaseb() {
    count2 += 2
    guestP.textContent = count2
    updateLeader()
}

function increasec() {
    count2 += 3
    guestP.textContent = count2
    updateLeader()
}

let foulGL= document.getElementById("foulG")

let count3 = 0

function foul_btnG() {
    count3 += 1
    foulGL.textContent = count3
}

let foulH= document.getElementById("foulH")

let count4 = 0

function foul_btnH() {
    count4 += 1
    foulH.textContent = count4
}

let Qtext = document.getElementById("Q_text")

count5 = 1

function Qbtn() {
    if (count5 < 4) { 
    count5 += 1
    Qtext.textContent = "Q" + count5
    }
}

let gametime = document.getElementById("game_T")

let totaltime = 12 * 60
let timerId = null  

function startClock_btn() {

    if (timerId === null) {
    
    timerId = setInterval( function() {
        totaltime = totaltime - 1

        let minutes = Math.floor(totaltime / 60) 
        let seconds = totaltime % 60 

        gametime.textContent = minutes + ":" + String(seconds).padStart(2, "0")

    }, 1000)

   }   else {
    clearInterval(timerId)
    timerId = null
}
}

function newgame() {
    count = 0
    count2 = 0
    count3 = 0
    count4 = 0
    count5 = 1
    totaltime = 12 * 60

    homeP.textContent = 0
    guestP.textContent = 0
    foulGL.textContent = 0
    foulH.textContent = 0
    Qtext.textContent = "Q1"
    gametime.textContent = "12:00"

    clearInterval(timerId)
    timerId = null
}

let homeBadge = document.getElementById("home-badge")
let guestBadge = document.getElementById("guest-badge")

function updateLeader() {
    if (count > count2) {
        
        homeBadge.style.visibility = "visible"
        guestBadge.style.visibility = "hidden"
    } else if (count2 > count) {
        
        guestBadge.style.visibility = "visible"
        homeBadge.style.visibility = "hidden"
    } else {
        
        homeBadge.style.visibility = "hidden"
        guestBadge.style.visibility = "hidden"
    }
}

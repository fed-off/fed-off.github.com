function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function showClockText() {
    let clockText = document.querySelector("div.clockText");
    clockText.classList.remove("hide");
    sleep(3000).then(() => {clockText.classList.add("hide");});    
}

let ten_of_ten = document.querySelector("div.cats.three p.ten_of_ten");
let nine_of_ten = document.querySelector("div.cats.three p.nine_of_ten");
let eight_of_ten = document.querySelector("div.cats.three p.eight_of_ten");
let seven_of_ten = document.querySelector("div.cats.three p.seven_of_ten");
let six_of_ten = document.querySelector("div.cats.three p.six_of_ten");
let five_of_ten = document.querySelector("div.cats.three p.five_of_ten");
let four_of_ten = document.querySelector("div.cats.three p.four_of_ten");
let three_of_ten = document.querySelector("div.cats.three p.three_of_ten");
let two_of_ten = document.querySelector("div.cats.three p.two_of_ten");
let one_of_ten = document.querySelector("div.cats.three p.one_of_ten");

let quest_one = document.querySelector("div.quest_one");
let quest_two = document.querySelector("div.quest_two");
let quest_three = document.querySelector("div.quest_three");
let quest_four = document.querySelector("div.quest_four");
let quest_five = document.querySelector("div.quest_five");
let quest_six = document.querySelector("div.quest_six");
let quest_seven = document.querySelector("div.quest_seven");
let quest_eight = document.querySelector("div.quest_eight");
let quest_nine = document.querySelector("div.quest_nine");
let quest_ten = document.querySelector("div.quest_ten");


function quest1() {
    let firstCat = document.querySelector("div.cats.one");
    firstCat.classList.add("hide");
    let secondCat = document.querySelector("div.cats.two");
    secondCat.classList.add("hide");
    ten_of_ten.classList.add("hide");
    nine_of_ten.classList.remove("hide");
    quest_one.classList.add("hide");
    quest_two.classList.remove("hide");
}

function quest2() {
    nine_of_ten.classList.add("hide");
    eight_of_ten.classList.remove("hide");
    quest_two.classList.add("hide");
    quest_three.classList.remove("hide");
}

function quest3() {
    eight_of_ten.classList.add("hide");
    seven_of_ten.classList.remove("hide");
    quest_three.classList.add("hide");
    quest_four.classList.remove("hide");
}

function quest4() {
    seven_of_ten.classList.add("hide");
    six_of_ten.classList.remove("hide");
    quest_four.classList.add("hide");
    quest_five.classList.remove("hide");
}

function quest5() {
    six_of_ten.classList.add("hide");
    five_of_ten.classList.remove("hide");
    quest_five.classList.add("hide");
    quest_six.classList.remove("hide");
}

function quest6() {
    five_of_ten.classList.add("hide");
    four_of_ten.classList.remove("hide");
    quest_six.classList.add("hide");
    quest_seven.classList.remove("hide");
}

function quest7() {
    four_of_ten.classList.add("hide");
    three_of_ten.classList.remove("hide");
    quest_seven.classList.add("hide");
    quest_eight.classList.remove("hide");
}

function quest8() {
    three_of_ten.classList.add("hide");
    two_of_ten.classList.remove("hide");
    quest_eight.classList.add("hide");
    quest_nine.classList.remove("hide");
}

function quest9() {
    two_of_ten.classList.add("hide");
    one_of_ten.classList.remove("hide");
    quest_nine.classList.add("hide");
    quest_ten.classList.remove("hide");
}

function quest10() {
    one_of_ten.classList.add("hide");
    quest_ten.classList.add("hide");
    document.querySelector("div.cats.three").classList.add("hide");
    document.querySelector("div.cats.four").classList.remove("hide");
    sleep(2000).then(() => {document.querySelector("div.cats.four p.what_name").classList.remove("hide");});
}

function ty() {
    let player = document.querySelector("div.cats.four p input").value;
    document.querySelector("div.cats.four p.what_name").classList.add("hide");
    document.querySelector("div.cats.four p.nice_meet").innerHTML = 
        "Спасибо за помощь, " + player + "! <br> Меня зовут Лёвка. <br>Приятно познакомиться!  <br><button class='end' onclick='eend()'>Взаимно!</button>";
    document.querySelector("div.cats.four p.nice_meet").classList.remove("hide");
}

function eend() {
    document.querySelector("div.cats.four").classList.add("hide");
    document.querySelector("section img.money").classList.remove("hide");
}

function money() {
    document.querySelector("section img.money").classList.add("hide");
}



//Интерьер 1

function step_one() {
    document.querySelector("p.e_rror").classList.add("hide");
    document.querySelector("p.welcome").classList.remove("hide");
}

function back() {
    document.querySelector("p.e_rror").classList.remove("hide");
    document.querySelector("p.welcome").classList.add("hide");
    document.querySelector("a.i").classList.add("hide");
    sleep(10).then(() => {document.querySelector("a.i").classList.remove("hide");});
}

function step_two() {
    document.querySelector("p.welcome").classList.add("hide");
    document.querySelector("p.one1").classList.remove("hide");
    document.querySelector("div.door_eye").classList.remove("hide");
}

function step_three() {
    document.querySelector("div.door_eye").classList.add("hide");
    document.querySelector("div.lamp").classList.remove("hide");
    document.querySelector("p.one1").classList.add("hide");
    document.querySelector("p.two1").classList.remove("hide");
}

function step_four() {
    document.querySelector("div.lamp").classList.add("hide");
    document.querySelector("div.hanger").classList.remove("hide");
    document.querySelector("p.two1").classList.add("hide");
    document.querySelector("p.three1").classList.remove("hide");
}

function step_five() {
    document.querySelector("div.hanger").classList.add("hide");
    document.querySelector("div.candle").classList.remove("hide");
    document.querySelector("p.three1").classList.add("hide");
    document.querySelector("p.four1").classList.remove("hide");
}

function step_six() {
    document.querySelector("p.help").classList.toggle("hide");
}

function name1() {
    let name3 = "1000011 11010000 10110010 11010000 10110101 11010001 10000111 11010000 10110000";
    let name2 = "11010001 10000001 11010000 10110010 11010000 10110101 11010001 10000111 11010000 10110000";
    let name1 = document.querySelector("input.name_unk").value;
    if (name1 === name2 || name1 === name3) {
        document.querySelector("p.help").classList.add("hide");
        document.querySelector("p.thanks").classList.remove("hide");
        document.querySelector("p.four1").classList.add("hide");
        document.querySelector("div.candle").classList.add("hide");
    } else {
        document.querySelector("p.wrong").classList.remove("hide");
        document.querySelector("p.help").classList.add("hide");
    }

}

function button_rep() {
    document.querySelector("p.help").classList.remove("hide");
    document.querySelector("p.wrong").classList.add("hide");
}

function ending() {
    document.querySelector("p.thanks").classList.add("hide");
    document.querySelector("a.i").classList.add("hide");
}


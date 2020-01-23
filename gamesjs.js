"use strict";

alert("Внимание!!!\n\nЭтот сайт некорректно отображается на Apple!");

var gameChecker = [];

function dGetId(parameter) {
    return document.getElementById(parameter);
}

dGetId("1331").style.border = "6px outset rgb(0, 255, 0)";
dGetId("1332").style.border = "6px outset rgb(0, 255, 0)";
dGetId("1333").style.border = "6px outset rgb(0, 255, 0)";
dGetId("2331").style.border = "6px outset rgb(0, 255, 0)";
dGetId("2332").style.border = "6px outset rgb(0, 255, 0)";
dGetId("2333").style.border = "6px outset rgb(0, 255, 0)";
dGetId("1a").style.width = "53%";
dGetId("20").style.width = "40%";
dGetId("count").style.width = "171%";
dGetId("date").style.width = "137%";
dGetId("startbutton2").style.marginTop = "20px";
dGetId("block").style.width = "100%";
dGetId("block").style.height = "700px";
dGetId("q").onclick = function() {
    window.open("ruleshtml.html");
}

dGetId("small").onclick = function() {
    window.open("ruleshtml.html");
}

dGetId("inter").onclick = function() {
    window.open("interactive.html");
}

dGetId("inter2").onclick = function() {
    window.open("calculator.html");
}

for (var i = 0; i <= 6; i++) {
    var span = document.createElement("span");
    span.className = "top";
    span.innerHTML = "Правила ^";

    span.onclick = function() {
        window.open("ruleshtml.html");
    }

    var h2s = document.getElementsByTagName("h2");
    h2s[i].appendChild(span);
}

function Again_A() {
    for (var i = 1; i <= 9; i++) {
        move(".red" + String(i))
            .duration(500)
            .set("opacity", 1)
            .set("opacity", 0.9)
            .set("opacity", 0.8)
            .set("opacity", 0.7)
            .set("opacity", 0.6)
            .set("opacity", 0.5)
            .set("opacity", 0.4)
            .set("opacity", 0.3)
            .set("opacity", 0.2)
            .set("opacity", 0.1)
            .set("opacity", 0)
            .end();
    }

    for (var i = 1; i <= 9; i++) {
        move(".green" + String(i))
            .duration(500)
            .set("opacity", 1)
            .set("opacity", 0.9)
            .set("opacity", 0.8)
            .set("opacity", 0.7)
            .set("opacity", 0.6)
            .set("opacity", 0.5)
            .set("opacity", 0.4)
            .set("opacity", 0.3)
            .set("opacity", 0.2)
            .set("opacity", 0.1)
            .set("opacity", 0)
            .end();
    }
}

function Again1() {
    setTimeout(() => {
        Again_A();
        setTimeout(() => {
            dGetId("12").style.opacity = "1";
            dGetId("11").style.opacity = "1";
            dGetId("22").style.opacity = "1";
            dGetId("21").style.opacity = "1";
            dGetId("32").style.opacity = "1";
            dGetId("31").style.opacity = "1";
            dGetId("42").style.opacity = "1";
            dGetId("41").style.opacity = "1";
            dGetId("52").style.opacity = "1";
            dGetId("51").style.opacity = "1";
            dGetId("62").style.opacity = "1";
            dGetId("61").style.opacity = "1";
            dGetId("72").style.opacity = "1";
            dGetId("71").style.opacity = "1";
            dGetId("82").style.opacity = "1";
            dGetId("81").style.opacity = "1";
            dGetId("92").style.opacity = "1";
            dGetId("91").style.opacity = "1";
            dGetId("12").style.display = "none";
            dGetId("11").style.display = "none";
            dGetId("22").style.display = "none";
            dGetId("21").style.display = "none";
            dGetId("32").style.display = "none";
            dGetId("31").style.display = "none";
            dGetId("42").style.display = "none";
            dGetId("41").style.display = "none";
            dGetId("52").style.display = "none";
            dGetId("51").style.display = "none";
            dGetId("62").style.display = "none";
            dGetId("61").style.display = "none";
            dGetId("72").style.display = "none";
            dGetId("71").style.display = "none";
            dGetId("82").style.display = "none";
            dGetId("81").style.display = "none";
            dGetId("92").style.display = "none";
            dGetId("91").style.display = "none";
            player = 1;
        }, 1000);
    }, 1000);
}

function CheckPlayers() {
    gameChecker.push(1);
    doubleDelete(gameChecker);

    if (dGetId("11").style.display == "block" && dGetId("21").style.display == "block" && dGetId("31").style.display == "block") {
        alert("Выиграли зелёные!");
        Again1();
        return true;
    }

    if (dGetId("41").style.display == "block" && dGetId("51").style.display == "block" && dGetId("61").style.display == "block") {
        alert("Выиграли зелёные!");
        Again1();
        return true;
    }

    if (dGetId("71").style.display == "block" && dGetId("81").style.display == "block" && dGetId("91").style.display == "block") {
        alert("Выиграли зелёные!");
        Again1();
        return true;
    }

    if (dGetId("11").style.display == "block" && dGetId("41").style.display == "block" && dGetId("71").style.display == "block") {
        alert("Выиграли зелёные!");
        Again1();
        return true;
    }

    if (dGetId("21").style.display == "block" && dGetId("51").style.display == "block" && dGetId("81").style.display == "block") {
        alert("Выиграли зелёные!");
        Again1();
        return true;
    }

    if (dGetId("31").style.display == "block" && dGetId("61").style.display == "block" && dGetId("91").style.display == "block") {
        alert("Выиграли зелёные!");
        Again1();
        return true;
    }

    if (dGetId("11").style.display == "block" && dGetId("51").style.display == "block" && dGetId("91").style.display == "block") {
        alert("Выиграли зелёные!");
        Again1();
        return true;
    }

    if (dGetId("31").style.display == "block" && dGetId("51").style.display == "block" && dGetId("71").style.display == "block") {
        alert("Выиграли зелёные!");
        Again1();
        return true;
    }

    if (dGetId("12").style.display == "block" && dGetId("22").style.display == "block" && dGetId("32").style.display == "block") {
        alert("Выиграли красные!");
        Again1();
        return true;
    }

    if (dGetId("42").style.display == "block" && dGetId("52").style.display == "block" && dGetId("62").style.display == "block") {
        alert("Выиграли красные!");
        Again1();
        return true;
    }

    if (dGetId("12").style.display == "block" && dGetId("22").style.display == "block" && dGetId("32").style.display == "block") {
        alert("Выиграли красные!");
        Again1();
        return true;
    }

    if (dGetId("72").style.display == "block" && dGetId("82").style.display == "block" && dGetId("92").style.display == "block") {
        alert("Выиграли красные!");
        Again1();
        return true;
    }

    if (dGetId("12").style.display == "block" && dGetId("42").style.display == "block" && dGetId("72").style.display == "block") {
        alert("Выиграли красные!");
        Again1();
        return true;
    }

    if (dGetId("22").style.display == "block" && dGetId("52").style.display == "block" && dGetId("82").style.display == "block") {
        alert("Выиграли красные!");
        Again1();
        return true;
    }

    if (dGetId("32").style.display == "block" && dGetId("62").style.display == "block" && dGetId("92").style.display == "block") {
        alert("Выиграли красные!");
        Again1();
        return true;
    }

    if (dGetId("12").style.display == "block" && dGetId("52").style.display == "block" && dGetId("92").style.display == "block") {
        alert("Выиграли красные!");
        Again1();
        return true;
    }

    if (dGetId("32").style.display == "block" && dGetId("52").style.display == "block" && dGetId("72").style.display == "block") {
        alert("Выиграли красные!");
        Again1();
        return true;
    }

    else {
        return false;
    }
}

var player = 1;

function game1() {
    if (dGetId("11").style.display != "block" && player === 1) {
        dGetId("12").style.display = "block";
        player++;
    } else if (dGetId("12").style.display != "block" && player === 2) {
        dGetId("11").style.display = "block";
        player--;
    } else {
        return;
    }

    var boolean = CheckPlayers();
    var ChArr = [];

    for (var i = 1; i <= 9; i++) {
        if (dGetId(i + "1").style.display == "block" || dGetId(i + "2").style.display == "block") {
            ChArr.push(true);
        } else {
            ChArr.push(false);
        }
    }

    var childBoolean = ChArr[0] && ChArr[1] && ChArr[2] && ChArr[3] && ChArr[4] && ChArr[5] && ChArr[6] && ChArr[7] && ChArr[8];

    if (!boolean && childBoolean) {
        alert("Ничья!");
        Again1();
    }
}

function game2() {
    if (dGetId("21").style.display != "block" && player === 1) {
        dGetId("22").style.display = "block";
        player++;
    } else if (dGetId("22").style.display != "block" && player === 2) {
        dGetId("21").style.display = "block";
        player--;
    } else {
        return;
    }

    var boolean = CheckPlayers();
    var ChArr = [];

    for (var i = 1; i <= 9; i++) {
        if (dGetId(i + "1").style.display == "block" || dGetId(i + "2").style.display == "block") {
            ChArr.push(true);
        } else {
            ChArr.push(false);
        }
    }

    var childBoolean = ChArr[0] && ChArr[1] && ChArr[2] && ChArr[3] && ChArr[4] && ChArr[5] && ChArr[6] && ChArr[7] && ChArr[8];

    if (!boolean && childBoolean) {
        alert("Ничья!");
        Again1();
    }
}

function game3() {
    if (dGetId("31").style.display != "block" && player === 1) {
        dGetId("32").style.display = "block";
        player++;
    } else if (dGetId("32").style.display != "block" && player === 2) {
        dGetId("31").style.display = "block";
        player--;
    } else {
        return;
    }

    var boolean = CheckPlayers();
    var ChArr = [];

    for (var i = 1; i <= 9; i++) {
        if (dGetId(i + "1").style.display == "block" || dGetId(i + "2").style.display == "block") {
            ChArr.push(true);
        } else {
            ChArr.push(false);
        }
    }

    var childBoolean = ChArr[0] && ChArr[1] && ChArr[2] && ChArr[3] && ChArr[4] && ChArr[5] && ChArr[6] && ChArr[7] && ChArr[8];

    if (!boolean && childBoolean) {
        alert("Ничья!");
        Again1();
    }
}

function game4() {
    if (dGetId("41").style.display != "block" && player === 1) {
        dGetId("42").style.display = "block";
        player++;
    } else if (dGetId("42").style.display != "block" && player === 2) {
        dGetId("41").style.display = "block";
        player--;
    } else {
        return;
    }

    var boolean = CheckPlayers();
    var ChArr = [];

    for (var i = 1; i <= 9; i++) {
        if (dGetId(i + "1").style.display == "block" || dGetId(i + "2").style.display == "block") {
            ChArr.push(true);
        } else {
            ChArr.push(false);
        }
    }

    var childBoolean = ChArr[0] && ChArr[1] && ChArr[2] && ChArr[3] && ChArr[4] && ChArr[5] && ChArr[6] && ChArr[7] && ChArr[8];

    if (!boolean && childBoolean) {
        alert("Ничья!");
        Again1();
    }
}

function game5() {
    if (dGetId("51").style.display != "block" && player === 1) {
        dGetId("52").style.display = "block";
        player++;
    } else if (dGetId("52").style.display != "block" && player === 2) {
        dGetId("51").style.display = "block";
        player--;
    } else {
        return;
    }

    var boolean = CheckPlayers();
    var ChArr = [];

    for (var i = 1; i <= 9; i++) {
        if (dGetId(i + "1").style.display == "block" || dGetId(i + "2").style.display == "block") {
            ChArr.push(true);
        } else {
            ChArr.push(false);
        }
    }

    var childBoolean = ChArr[0] && ChArr[1] && ChArr[2] && ChArr[3] && ChArr[4] && ChArr[5] && ChArr[6] && ChArr[7] && ChArr[8];

    if (!boolean && childBoolean) {
        alert("Ничья!");
        Again1();
    }
}

function game6() {
    if (dGetId("61").style.display != "block" && player === 1) {
        dGetId("62").style.display = "block";
        player++;
    } else if (dGetId("62").style.display != "block" && player === 2) {
        dGetId("61").style.display = "block";
        player--;
    } else {
        return;
    }

    var boolean = CheckPlayers();
    var ChArr = [];

    for (var i = 1; i <= 9; i++) {
        if (dGetId(i + "1").style.display == "block" || dGetId(i + "2").style.display == "block") {
            ChArr.push(true);
        } else {
            ChArr.push(false);
        }
    }

    var childBoolean = ChArr[0] && ChArr[1] && ChArr[2] && ChArr[3] && ChArr[4] && ChArr[5] && ChArr[6] && ChArr[7] && ChArr[8];

    if (!boolean && childBoolean) {
        alert("Ничья!");
        Again1();
    }
}

function game7() {
    if (dGetId("71").style.display != "block" && player === 1) {
        dGetId("72").style.display = "block";
        player++;
    } else if (dGetId("72").style.display != "block" && player === 2) {
        dGetId("71").style.display = "block";
        player--;
    } else {
        return;
    }

    var boolean = CheckPlayers();
    var ChArr = [];

    for (var i = 1; i <= 9; i++) {
        if (dGetId(i + "1").style.display == "block" || dGetId(i + "2").style.display == "block") {
            ChArr.push(true);
        } else {
            ChArr.push(false);
        }
    }

    var childBoolean = ChArr[0] && ChArr[1] && ChArr[2] && ChArr[3] && ChArr[4] && ChArr[5] && ChArr[6] && ChArr[7] && ChArr[8];

    if (!boolean && childBoolean) {
        alert("Ничья!");
        Again1();
    }
}

function game8() {
    if (dGetId("81").style.display != "block" && player === 1) {
        dGetId("82").style.display = "block";
        player++;
    } else if (dGetId("82").style.display != "block" && player === 2) {
        dGetId("81").style.display = "block";
        player--;
    } else {
        return;
    }

    var boolean = CheckPlayers();
    var ChArr = [];

    for (var i = 1; i <= 9; i++) {
        if (dGetId(i + "1").style.display == "block" || dGetId(i + "2").style.display == "block") {
            ChArr.push(true);
        } else {
            ChArr.push(false);
        }
    }

    var childBoolean = ChArr[0] && ChArr[1] && ChArr[2] && ChArr[3] && ChArr[4] && ChArr[5] && ChArr[6] && ChArr[7] && ChArr[8];

    if (!boolean && childBoolean) {
        alert("Ничья!");
        Again1();
    }
}

function game9() {
    if (dGetId("91").style.display != "block" && player === 1) {
        dGetId("92").style.display = "block";
        player++;
    } else if (dGetId("92").style.display != "block" && player === 2) {
        dGetId("91").style.display = "block";
        player--;
    } else {
        return;
    }

    var boolean = CheckPlayers();
    var ChArr = [];

    for (var i = 1; i <= 9; i++) {
        if (dGetId(i + "1").style.display == "block" || dGetId(i + "2").style.display == "block") {
            ChArr.push(true);
        } else {
            ChArr.push(false);
        }
    }

    var childBoolean = ChArr[0] && ChArr[1] && ChArr[2] && ChArr[3] && ChArr[4] && ChArr[5] && ChArr[6] && ChArr[7] && ChArr[8];

    if (!boolean && childBoolean) {
        alert("Ничья!");
        Again1();
    }
}

var operand1;
var operand2 = 0;
var player2 = 1;
dGetId("1a").style.color = "yellow";
dGetId("1a").value = "Введите число от 1 до 10";

function foc1() {
    dGetId("1a").value = "";
}

dGetId("1a").onblur = function() {
    setTimeout(() => {
        if (dGetId("1a").value === "") {
            dGetId("1a").value = "Введите число от 1 до 10";
        }
    }, 200);
}

function sum() {
    operand1 = dGetId("1a").value;
    operand2 = dGetId("20").value;

    if (operand2 < 100) {
        if (operand1 < 11 && operand1 > 0 && String(operand1).length < 3) {
            if (String(operand1)[0] !== "." && String(operand1)[0] !== ",") {
                dGetId("20").value = +operand1 + +operand2;
                dGetId("1a").value = "Введите число от 1 до 10";

                if (player2 === 1) {
                    dGetId("1a").style.backgroundColor = "green";
                    player2++;
                } else {
                    dGetId("1a").style.backgroundColor = "red";
                    player2--;
                }
            } else {
                alert("Введите целое число от 1 до 10");
                dGetId("1a").value = "Введите число от 1 до 10";
            }
        } else {
            alert("Введите целое число от 1 до 10");
            dGetId("1a").value = "Введите число от 1 до 10";
        }
    } else {
        if (player2 === 1) {
            alert("Выиграли красные!");
        } else {
            alert("Выиграли зелёные!");
        }

        dGetId("1a").value = "Введите число от 1 до 10";
        gameChecker.push(2);
        doubleDelete(gameChecker);
        return;
    }

    operand2 = dGetId("20").value;

    if (operand2 >= 100) {
        if (player2 === 1) {
            alert("Выиграли красные!");
        } else {
            alert("Выиграли зелёные!");
        }

        Again2();
    }
}


function Again2() {
    setTimeout(() => {
        dGetId("1a").style.backgroundColor = "red";
        dGetId("1a").value = "Введите число от 1 до 10";
        dGetId("20").value = "";
        player2 = 1;
        gameChecker.push(2);
        doubleDelete(gameChecker);
    }, 1000);
}

function Again3() {
    setTimeout(() => {
        dGetId("2331").style.border = "6px outset rgb(0, 255, 0)";
        dGetId("2333").style.border = "6px outset rgb(0, 255, 0)";
        dGetId("2332").style.border = "6px outset rgb(0, 255, 0)";
        dGetId("1331").style.border = "6px outset rgb(0, 255, 0)";
        dGetId("1333").style.border = "6px outset rgb(0, 255, 0)";
        dGetId("1332").style.border = "6px outset rgb(0, 255, 0)";

        gameChecker.push(3);
        doubleDelete(gameChecker);
    }, 1000);
}

var varri = true;

function gameN3$1331() {
    if (varri) {
        dGetId("1331").style.border = "6px inset rgb(255, 150, 0)";
        gameN3v2();
    }
}

function gameN3$1332() {
    if (varri) {
        dGetId("1332").style.border = "6px inset rgb(255, 150, 0)";
        gameN3v2();
    }
}

function gameN3$1333() {
    if (varri) {
        dGetId("1333").style.border = "6px inset rgb(255, 150, 0)";
        gameN3v2();
    }
}

function gameN3v2() {
    if (varri) {
        varri = false;
        var ask;

        if (dGetId("1331").style.border == "6px inset rgb(255, 150, 0)") {
            ask = 0;
        }

        if (dGetId("1332").style.border == "6px inset rgb(255, 150, 0)") {
            ask = 1;
        }

        if (dGetId("1333").style.border == "6px inset rgb(255, 150, 0)") {
            ask = 2;
        }

        var comp = +(Math.random() * 2).toFixed(0);

        if (ask == comp) {
            if (comp === 0) {
                dGetId("2331").style.border = "6px inset rgb(255, 150, 0)";
            } else if (comp === 1) {
                dGetId("2332").style.border = "6px inset rgb(255, 150, 0)";
            } else if (comp === 2) {
                dGetId("2333").style.border = "6px inset rgb(255, 150, 0)";
            }

            setTimeout(() => {
                alert("Ничья.");
            }, 1000);

            Again3();
        }

        if ((ask === 0) && (comp === 2)) {
            dGetId("2333").style.border = "6px inset rgb(255, 150, 0)";

            setTimeout(() => {
                alert("Проигрыш.");
            }, 1000);

            Again3();

        } else if ((ask === 2) && (comp === 0)) {
            dGetId("2331").style.border = "6px inset rgb(255, 150, 0)";

            setTimeout(() => {
                alert("Выигрыш!");
            }, 1000);

            Again3();

        } else if ((ask === 1) && (comp === 2)) {
            dGetId("2333").style.border = "6px inset rgb(255, 150, 0)";

            setTimeout(() => {
                alert("Выигрыш!");
            }, 1000);

            Again3();

        } else if ((ask === 2) && (comp === 1)) {
            dGetId("2332").style.border = "6px inset rgb(255, 150, 0)";

            setTimeout(() => {
                alert("Проигрыш.");
            }, 1000);

            Again3();

        } else if ((ask === 0) && (comp === 1)) {
            dGetId("2332").style.border = "6px inset rgb(255, 150, 0)";

            setTimeout(() => {
                alert("Выигрыш!");
            }, 1000);

            Again3();

        } else if ((ask === 1) && (comp === 0)) {
            dGetId("2331").style.border = "6px inset rgb(255, 150, 0)";;

            setTimeout(() => {
                alert("Проигрыш.");
            }, 1000);

            Again3();
        }

        varri = true;
    }
}

var CheckPlayers4 = function() {
    if (dGetId("div1").childElementCount == 0) {
        gameChecker.push(4);
        doubleDelete(gameChecker);
        dGetId("count").value = "Введите количество камушков от 4 до 10";
        dGetId("gamen4start").style.display = "none";
        dGetId("count").style.display = "block";
        dGetId("startbutton").style.display = "block";
        dGetId("d1").style.display = "none";
        dGetId("d2").style.display = "none";

        setTimeout(() => {
            if (status === "2") {
                alert("Проигрыш.");
            }

            if (status === "1") {
                alert("Выигрыш!");

            }
        }, 1000);

        setTimeout(() => {
            x = 0;
            status = "1";
            i = 0;
            coun = 0;
            coun2 = 0;
        }, 100);

        dGetId("bg").removeChild(dGetId("d1"));
        var d1 = document.createElement("div");
        d1.id = "d1";
        dGetId("bg").appendChild(d1);
        dGetId("bg").removeChild(dGetId("d2"));
        var d2 = document.createElement("div");
        d2.id = "d2";
        dGetId("bg").appendChild(d2);
    }
}

var k_CheckPlayers4 = function() {
    setTimeout(() => {
        if (dGetId("div1").childElementCount == 0) {
            gameChecker.push(4);
            doubleDelete(gameChecker);
            dGetId("count").value = "Введите количество камушков от 4 до 10";
            dGetId("gamen4start").style.display = "none";
            dGetId("count").style.display = "block";
            dGetId("startbutton").style.display = "block";
            dGetId("d1").style.display = "none";
            dGetId("d2").style.display = "none";

            setTimeout(() => {
                if (status === "2") {
                    alert("Выигрыш!");
                }

                if (status === "1") {
                    alert("Проигрыш.");
                }
            }, 1000);

            setTimeout(() => {
                x = 0;
                status = "1";
                i = 0;
                coun = 0;
                coun2 = 0;
            }, 100);  

            dGetId("bg").removeChild(dGetId("d1"));
            var d1 = document.createElement("div");
            d1.id = "d1";
            dGetId("bg").appendChild(d1);
            dGetId("bg").removeChild(dGetId("d2"));
            var d2 = document.createElement("div");
            d2.id = "d2";
            dGetId("bg").appendChild(d2);
        }
    }, 1000);
}

function foc() {
    dGetId("count").value = "";
}

dGetId("count").onblur = function() {
    setTimeout(() => {
        if (dGetId("count").value === "") {
            dGetId("count").value = "Введите количество камушков от 4 до 10";
        }
    }, 1000);
}

var i;
var x = 0;

function k_hide() {
    setTimeout(() => {
        var hidden = +(Math.random() * 3).toFixed(0);

        if ((hidden === 0) || (hidden === 1)) {
            dGetId("div1").removeChild(dGetId(i - 1));
            var tRock = document.createElement("div");
            tRock.style.width = "20px";
            tRock.style.height = "30px";
            tRock.style.backgroundColor = "gray";
            tRock.style.borderRadius = "50%";
            tRock.id = "tr" + i;
            dGetId("d2").appendChild(tRock);
            +i--;
        } else if ((hidden === 2) || (hidden === 3)) {
            if (dGetId("div1").childElementCount > 1) {
                dGetId("div1").removeChild(dGetId(i - 1));
                +i--;
                var tRock = document.createElement("div");
                tRock.style.width = "20px";
                tRock.style.height = "30px";
                tRock.style.backgroundColor = "gray";
                tRock.style.borderRadius = "50%";
                tRock.id = "tr" + i;
                dGetId("d2").appendChild(tRock);
                dGetId("div1").removeChild(dGetId(i - 1));
                +i--;
                var tRock = document.createElement("div");
                tRock.style.width = "20px";
                tRock.style.height = "30px";
                tRock.style.backgroundColor = "gray";
                tRock.style.borderRadius = "50%";
                tRock.id = "tr" + i;
                dGetId("d2").appendChild(tRock);
            } else {
                dGetId("div1").removeChild(dGetId(i - 1));
                +i--;
                var tRock = document.createElement("div");
                tRock.style.width = "20px";
                tRock.style.height = "30px";
                tRock.style.backgroundColor = "gray";
                tRock.style.borderRadius = "50%";
                tRock.id = "tr" + i;
                dGetId("d2").appendChild(tRock);
            }
        }

        coun = 0;
        k_CheckPlayers4();
    }, 1000);
}

var coun = 0;
var coun2 = 0;
var status = 1;

function counter() {
    return (function() {
         return ++coun;   
    })();
}

function inCounter() {
    return (function() {
         return ++coun2;   
    })();
}

function u_hide() {
    if ((i > 0) || (status === 1)) {
        if (coun < 2) {
            dGetId("div1").removeChild(dGetId(i - 1));
            var tRock = document.createElement("div");
            tRock.style.width = "20px";
            tRock.style.height = "30px";
            tRock.style.backgroundColor = "gray";
            tRock.style.borderRadius = "50%";
            tRock.id = "tr" + i;
            dGetId("d1").appendChild(tRock);
            counter();
            +i--;
        }

        if ((coun === 2) || (x === 1)) status = 2;

        if (status === 2) {
            if (!(dGetId("div1").childElementCount == 0)) k_hide();
            status = 1;
            coun = 0;
        }

        x = 0;
    }

    CheckPlayers4();
    inCounter();
}

function f1() {
    if (coun2 >= 1) {
        x = 1;
        status = 2;
        k_hide();
        coun2 = 0;
    } else {
        alert("Заберите камушек!");
    }
}

function f2() {
    u_hide();
}

function gamen4start() {
    if (dGetId("count").value != "Введите количество камушков от 4 до 10") {
        if (dGetId("count").value != 4 && dGetId("count").value != 5 && dGetId("count").value != 6 && dGetId("count").value != 7 && dGetId("count").value != 8 && dGetId("count").value != 9 && dGetId("count").value != 10) {
            alert("Неверное количество камушков.");
            dGetId("count").value = "Введите количество камушков от 4 до 10";
            return;
        }

        var value = +dGetId("count").value;
        dGetId("gamen4start").style.display = "block";
        dGetId("count").style.display = "none";
        dGetId("startbutton").style.display = "none";
        dGetId("d1").style.display = "flex";
        dGetId("d2").style.display = "flex";
        var newRock;

        for (i = 1; i <= value; i++) {
            newRock = document.createElement("div");
            newRock.id = i;
            newRock.style.width = "20px";
            newRock.style.height = "30px";
            newRock.style.backgroundColor = "gray";
            newRock.style.borderRadius = "50%";
            dGetId("div1").appendChild(newRock);
            i = +i;
        }

        var canvas1 = dGetId("canvas1");
        var ctx = canvas1.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle = "rgb(255, 0, 0)";
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.arc(150, -95, 150, 6/7 * Math.PI, 1/7 * Math.PI, true);
        ctx.fill();
        ctx.closePath();
    }
}

function reset() {
    for (var v = 0; v <= 24; v++) {
        dGetId("net").removeChild(dGetId("x" + v));
    }

    dGetId("net").style.display = "none";
    dGetId("startbutton2").style.display = "block";
    dGetId("resetbutton").style.display = "none";
    timerState = 0;
    dGetId("next").innerHTML = "";

    gameChecker.push(6);
    doubleDelete(gameChecker);
}

var timerState = 0;
var start;

function netGame() {
    start = performance.now();
    timerState = 1;
    setInterval(() => {
        if (timerState === 1) {
            dGetId("timeCounter").innerHTML = "Время: " + ((performance.now() - start) / 1000).toFixed(0) + " c";
        }

        if (timerState === 0) {
            dGetId("timeCounter").innerHTML = "";
        }
    }, 500);

    dGetId("net").style.display = "grid";
    dGetId("startbutton2").style.display = "none";
    dGetId("resetbutton").style.display = "block";
    dGetId("next").innerHTML = "Следующее число: 1";
    var w = [];
    var a = 1;

    for (var x = 0; x <= 24; x++) {
        w.push(x);
    }

    var input = document.createElement("input");
    input.type = "button";
    input.style.borderRadius = "0px";
    var net = dGetId("net");

    for (let i = 0; i <= 24; i++) {
        net.appendChild(input).id = "x" + i;
        dGetId("x" + i).style.backgroundColor = "yellow";
        dGetId("x" + i).style.border = "1px solid black";
        dGetId("x" + i).onclick = function() {
            if (+dGetId("x" + i).value === a) {
                dGetId("x" + i).value = "";
                a++;
                dGetId("next").innerHTML = "Следующее число: " + a;
            }
        }

        input = document.createElement("input");
        input.type = "button";
        input.style.borderRadius = "0px";
        net = dGetId("net");
    }

    function random() {
        return Math.random() - 0.5;
    }

    w.sort(random);

    for (var y = 1; y <= 25; y++) {
        dGetId("x" + w.pop()).value = y;
    }

    document.body.scrollIntoView(false);
    window.scrollBy(0, -200);

    for (var x2 = 0; x2 <= 24; x2++) {
        if (+dGetId("x" + x2).value === 25) {
            dGetId("x" + x2).onclick = function() {
                if (+dGetId("x" + x2).value === a) {
                    dGetId("x" + x2).value = "";
                    a++;

                    var end = performance.now();
                    timerState = 0;
                    var time = (((end - start) / 1000).toFixed(0));
                    var sec;

                    time = String(time);

                    if (time[time.length - 1] == "1") {
                        sec = " секунду.";
                    } else if ((time[time.length - 1] == "2") || (time[time.length - 1] == "3") || (time[time.length - 1] == "4")) {
                        sec = " секунды.";
                    } else {
                        sec = " секунд.";
                    }

                    setTimeout(() => {
                        alert("Вы справились за " + time + sec);

                        for (var v = 0; v <= 24; v++) {
                            dGetId("net").removeChild(dGetId("x" + v));
                        }

                        dGetId("net").style.display = "none";
                        dGetId("startbutton2").style.display = "block";
                        dGetId("resetbutton").style.display = "none";
                        dGetId("next").innerHTML = "";
                        gameChecker.push(6);
                        doubleDelete(gameChecker);
                    }, 1000);
                }
            }

            break;
        }
    }
}

function canvasDraw() {
    dGetId("block").style.backgroundColor = "white";

    var can = document.getElementById("can");
    can.style.width = "198px";
    can.style.height = "198px";
    can.style.backgroundColor = "black";
    var con = can.getContext("2d");
    con.beginPath();
    con.lineWidth = 5;
    con.fillStyle = "white";
    con.strokeStyle = "red";
    con.fillRect(0, 0, 96, 48);
    con.fillRect(0, 52, 96, 48);
    con.fillRect(0, 104, 96, 48);
    con.fillRect(104, 0, 96, 48);
    con.fillRect(104, 52, 96, 48);
    con.fillRect(104, 104, 96, 48);
    con.fillRect(208, 0, 96, 48);
    con.fillRect(208, 52, 96, 48);
    con.fillRect(208, 104, 96, 48);

    setTimeout(() => {
        con.moveTo(104, 52);
        con.lineTo(208, 104);
        con.moveTo(208, 52);
        con.lineTo(104, 104);
        con.stroke();

        setTimeout(() => {
            var image = new Image();
            image.src = "green_zero.png";

            image.onload = function() {
                con.drawImage(image, 208, 52, 96, 48);
            }

            setTimeout(() => {
            con.moveTo(0, 104);
            con.lineTo(200, 198);
            con.moveTo(100, 104);
            con.lineTo(-80, 198);
            con.stroke();

                setTimeout(() => {
                    con.drawImage(image, 104, 0, 96, 48);
                }, 500);
            }, 500);
        }, 500);
    }, 500);

    con.closePath();
}

function charBool(event) {
    var code = event.charCode;

    if (code == 13 && dGetId("input1").value == "8") {
        canvasDraw();
        setTimeout(() => {
            dGetId("block").style.display = "none";
            dGetId("none1").style.display = "flex";
            dGetId("none2").style.display = "flex";
            dGetId("none3").style.display = "flex";
            var nay = document.getElementsByTagName("nav");
            nay[0].style.display = "block";
        }, 2500);
    }
}

dGetId("o4").style.marginBottom = "10px";
dGetId("o44").style.marginTop = "10px";

function g62() {
    dGetId("o1").style.display = "none";
    dGetId("o11").style.display = "none";
    dGetId("o2").style.display = "block";
    dGetId("o22").style.display = "block";
}

function g63() {
    dGetId("o2").style.display = "none";
    dGetId("o22").style.display = "none";
    dGetId("o3").style.display = "block";
    dGetId("o33").style.display = "block";
}

function g64() {
    dGetId("o3").style.display = "none";
    dGetId("o33").style.display = "none";
    dGetId("o4").style.display = "block";
    dGetId("o44").style.display = "block";
    dGetId("oi").style.display = "block";
}

function g65() {
    var result = +dGetId("oi").value - 250;
    var cVar = String(+result * -1);
    var cVar2 = +result * 10;
    cVar2 = String(cVar2);
    result = String(result);

    if (result.length == 3) {
        if ((result[0] != undefined) && (result[1] != undefined) && (result[2] != undefined) && (cVar[0] == "-") && (cVar2[cVar2.length - 1] == "0")) {
            result = String(result);

            if (result.length == 3) {
                alert("Ваш день рождения " + result[0] + "." + result[1] + result[2]);
                gameChecker.push(7);
                doubleDelete(gameChecker);
            } else {
                alert("Ваш день рождения " + result[0] + result[1] + "." + result[2] + result[3]);
                gameChecker.push(7);
                doubleDelete(gameChecker);
            }
        } else {
            alert("Ошибка!");
            gameChecker.push(7);
            doubleDelete(gameChecker);
        }
    } else {
        if ((result[0] != undefined) && (result[1] != undefined) && (result[2] != undefined) && (result[3] != undefined) && (cVar[0] == "-") && (cVar2[cVar2.length - 1] == "0")) {
            result = String(result);

            if (result.length == 3) {
                alert("Ваш день рождения " + result[0] + "." + result[1] + result[2]);
                gameChecker.push(7);
                doubleDelete(gameChecker);
            } else {
                alert("Ваш день рождения " + result[0] + result[1] + "." + result[2] + result[3]);
                gameChecker.push(7);
                doubleDelete(gameChecker);
            }
        } else {
            alert("Ошибка!");
            gameChecker.push(7);
            doubleDelete(gameChecker);
        }
    }

    dGetId("o4").style.display = "none";
    dGetId("o44").style.display = "none";
    dGetId("oi").value = "";
    dGetId("oi").style.display = "none";
    dGetId("startbutton3").style.display = "block";
}

function gamen6start() {
    dGetId("o1").style.display = "block";
    dGetId("o11").style.display = "block";
    dGetId("startbutton3").style.display = "none";
}

var letter1;
var letter2;
var letter3;
var letter4;
var nNumber;

function cowsGame() {
    dGetId("OKbutton").style.display = "block";
    dGetId("gray").style.display = "block";
    dGetId("numbersView").style.display = "block";
    dGetId("cowbutton").style.display = "none";
    dGetId("resetcowbutton").style.display = "block";

    for (;;) {
        letter1 = ((Math.random() * 8) + 1).toFixed(0);
        letter2 = ((Math.random() * 8) + 1).toFixed(0);
        letter3 = ((Math.random() * 8) + 1).toFixed(0);
        letter4 = ((Math.random() * 8) + 1).toFixed(0);

        if (letter1 != letter2 && letter1 != letter3 && letter1 != letter4 && letter2 != letter3 && letter2 != letter4 && letter3 != letter4) {
            break;
        }
    }

    nNumber = String(letter1) + String(letter2) + String(letter3) + String(letter4);   
}

var doubleDelete = function(array) {
    for (var c = 0; c <= 2; c++) {
        for (var a = 0; a < array.length; a++) {
            for (var b = 0; b < array.length; b++) {
                if (array[a] == array[b] && a !== b) {
                    array.splice(b, b);
                }
            }
        }
    }

    return array;
}

function findCows(b, c) {
    var cows = [];

    for (var i = 0; i < c.length; i++) {
        for (var i2 = 0; i2 < c.length; i2++) {
            if (b[i] == c[i2] && i != i2) {
                cows[cows.length] = c[i2];
            }
        }
    }

    doubleDelete(cows);
    return cows.length - 1;
}

function cowReset() {
    dGetId("gray").value = "";
    dGetId("OKbutton").style.display = "none";
    dGetId("gray").style.display = "none";
    dGetId("numbersView").style.display = "none";
    dGetId("numbersView").innerHTML = "";
    dGetId("cowbutton").style.display = "block";
    dGetId("resetcowbutton").style.display = "none";
    gameChecker.push(5);
    doubleDelete(gameChecker);
}

var inner = [];

function cowOK() {
    var userNumber = dGetId("gray").value;

    if (userNumber.length == 4) {
        inner.push(userNumber + "\n");
        dGetId("numbersView").innerHTML = inner;
        var array = [];

        if (userNumber == nNumber) {
            alert("Вы выиграли!");
            dGetId("gray").value = "";
            dGetId("OKbutton").style.display = "none";
            dGetId("gray").style.display = "none";
            dGetId("numbersView").style.display = "none";
            dGetId("numbersView").innerHTML = "";
            dGetId("cowbutton").style.display = "block";
            dGetId("resetcowbutton").style.display = "none";
            gameChecker.push(5);
            doubleDelete(gameChecker);
            return;
        }

        for (var i = 0; i <= 3; i++) {
            if (userNumber[i] == nNumber[i]) {
                array.push("бык");
            }
        }

        var foundCows = findCows(userNumber, nNumber);

        for (var i = 0; i <= foundCows; i++) {
            array.push("корова");
        }

        alert(array);
    }
}

var t;
dGetId("toTop").style.marginBottom = "10px";
dGetId("toTop").style.width = "100px";
dGetId("toTop").style.height = "40px";

function scrollToTop() {
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

    if (top > 0) {
        window.scrollBy(0, -10);
        t = setTimeout(scrollToTop, 5);
    } else {
        clearTimeout(t);
        return false;
    }
}

dGetId("abc").onclick = function() {
    dGetId("abc").style.display = "none";
    dGetId("mail-form").style.display = "block";
    dGetId("send").style.display = "block";
    dGetId("canc").style.display = "block";
    document.body.scrollIntoView(false);
    document.body.style.overflowY = "hidden";
}
    
dGetId("send").onclick = function() {
    if (dGetId("in10").value !== "" && dGetId("in11").value !== "") {
        dGetId("mail-form").style.display = "none";
        dGetId("m-bg").style.display = "block";

        setTimeout(() => {
            dGetId("m-bg").style.display = "none";
            window.location.href = "mailto:svetlana.post@yahoo.com?subject=" + dGetId("in10").value + "&body=" + dGetId("in11").value;
            dGetId("in10").value = "";
            dGetId("in11").value = "";
            dGetId("abc").style.display = "block";
            dGetId("mail-form").style.display = "none";
            dGetId("send").style.display = "none";
            dGetId("canc").style.display = "none";
            document.body.style.overflowY = "scroll";
        }, 2000);
    } else {
        alert("Логин и текст сообщения обязательны!");
    }
}

dGetId("canc").onclick = function() {
    dGetId("m-bg").style.display = "none";
    dGetId("in10").value = "";
    dGetId("in11").value = "";
    dGetId("abc").style.display = "block";
    dGetId("mail-form").style.display = "none";
    dGetId("send").style.display = "none";
    dGetId("canc").style.display = "none";
    document.body.style.overflowY = "scroll";
}
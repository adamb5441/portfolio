SyntaxHighlighter.all();
$("#resultHead1").hide();
$("#resultHead2").hide();
$("#resultHead3").hide();
$("#resultHead4").hide();
$("#smplCode").hide();
$("#btnNumber").click(() => {
    var num1 = Number($("#num1").val());
    var num2 = Number($("#num2").val());
    var num3 = Number($("#num3").val());
    var num4 = Number($("#num4").val());
    var num5 = Number($("#num5").val());

    if (checkSmpl(num1) || checkSmpl(num2) || checkSmpl(num2) || checkSmpl(num4) || checkSmpl(num5)) {
        $("#sum").text("Invalid entry")
    }
    else {
        var sum = num1 + num2 + num3 + num4 + num5;
        var prod = num1 * num2 * num3 * num4 * num5;
        var avg = sum / 5;
        var max = Math.max(num1, num2, num3, num4, num5)
        var min = Math.min(num1, num2, num3, num4, num5)

        $("#sum").text("The sum of your numbers is: " + sum)
        $("#product").text("The product of your numbers is: " + prod)
        $("#average").text("The average of your numbers is: " + avg)
        $("#max").text("The largest of your numbers is: " + max)
        $("#min").text("The smallest of your numbers is: " + min)
    }

    $("#resultHead1").show();
})
const checkSmpl = (val) => {
    console.log(val)
    if (isNaN(val) || val == 0) {
        return true
    }
    else {
        return false
    }
}
$("#num1, #num2, #num3, #num4, #num5").on("keypress", function (e) {
    if (e.which < 48 || e.which > 57) {
        e.preventDefault()
    }
})
$("#smplClear").click(() => {
    $("#num1").val("");
    $("#num2").val("");
    $("#num3").val("");
    $("#num4").val("");
    $("#num5").val("");

    $("#sum").text("")
    $("#product").text("")
    $("#average").text("")
    $("#max").text("")
    $("#min").text("")
    $("#resultHead1").hide();
})
$("#showSimple").click(() => {
    $("#smplCode").toggle()
})
$("#factIn").on("keypress", function(e) {
    if (e.which < 48 || e.which > 57) {
        e.preventDefault()
    }
    else if ($(this).val().length > 2) {
        e.preventDefault()
    }
})
$("#factorial").click(() => {
    var num = Number($("#factIn").val());
    console.log(num)
    var total = 1
    if (num <1 || num > 170) {
        total = "invalid entry";
    }
    else {
        for (let i = 2; i <= num; i++) {
            total *= i;
        }
    }
    console.log(total)
    $("#factOut").text(total)
    $("#resultHead2").show();

})
$("#factClear").click(() => {
    $("#factIn").val("");

    $("#factOut").text("")
    $("#resultHead2").hide();
})

const checkFB = (val) => {
    if (val > 100 || val === 0) {
        return true
    } else {
        return false
    }
}
$("#fizzBuzz").click(() => {
    var num1 = Number($("#fizzIn").val());
    var num2 = Number($("#buzzIn").val());
    var arr = [];
    if (checkFB(num1) || checkFB(num2)) {
        arr = "invalid entry"
    }
    else {
        for (let i = 1; i < 100; i++) {
            if (i % num1 === 0 && i % num2 === 0) {
                arr.push('<span class="fizzbuzz">FIZZBUZZ</span>')
            }
            else if (i % num1 === 0) {
                arr.push('<span class="fizz">FIZZ</span>')
            }
            else if (i % num2 === 0) {
                arr.push('<span class="buzz">BUZZ</span>')
            }
            else {
                arr.push(i)
            }
        }
    }
    $("#fbOut").html(arr.toString())
    $("#resultHead3").show();

})
$("#fizzIn,#buzzIn").on("keypress", function (e) {
    console.log($(this).val())
    if (e.which < 48 || e.which > 57) {
        e.preventDefault()
    }
    else if ($(this).val().length > 2) {
        e.preventDefault()
    }

})
$("#fbClear").click(() => {
    $("#fizzIn").val("");
    $("#buzzIn").val("");

    $("#fbOut").text("")
    $("#resultHead3").hide();
})
$("#palondrome").click(() => {
    let str = $("#palIn").val()
    var arr = str.split('')
    var j = arr.length - 1
    var check = true
    for (let i = 0; i != j && i< j; i++) {
        if (arr[i] != arr[j]) {
            check = false
        }
        j--
        console.log("loop")
    }
    $("#palOut").text(check.toString())
    $("#resultHead4").show();

})
$("#palClear").click(() => {
    $("#palIn").val("");

    $("#palOut").text("")
    $("#resultHead4").hide();
})
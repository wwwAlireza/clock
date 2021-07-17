// Coded by alireza @myFrontCodes
/*
MIT License

Copyright (c) 2021 alireza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
GitHub repository: https://github.com/wwwAlireza/clock
*/
$(document).ready(function() {

    var now = new Date();
    let local_hour = now.getHours();
    let local_minute = now.getMinutes();
    let local_second = now.getSeconds();
    var ampm = local_hour > 12 ? "pm" : "am";
    local_hour = local_hour % 12;
    local_hour = local_hour ? local_hour : 12;
    var second = $("#second");
    var minute = $("#minute");
    var hour = $("#hour");
    let s = local_second * 6;
    let m = local_minute * 6;
    let h = local_hour * 30;
    let hm = 0;
    second.css("transform", "rotate(" + s + "deg)");
    minute.css("transform", "rotate(" + m + "deg)");
    hour.css("transform", "rotate(" + h + "deg)");
    setInterval(seconds_count, 1000)

    function seconds_count() {
        s += 6;
        if (s == 360) {
            m += 6;
            s = 0;
            minute.css("transform", "rotate(" + m + "deg)");
            if (m == 360) {
                m = 0;
                hm = 0;
                h += 30;
                hour.css("transform", "rotate(" + h + "deg)");
                if (h == 360) {
                    h = 0;
                }
            }
            if (m == 120 || m == 240) {
                hm += 10;
                hour.css("transform", "rotate(" + hm + "deg)");
            }
        }
        second.css("transform", "rotate(" + s + "deg)");
        get_digital(h, m, s, ampm);
    }
    document.getElementById("clock").addEventListener("mouseenter", open_digital);
    document.getElementById("clock").addEventListener("mouseleave", close_digital);

    function open_digital() {
        $("#digital_wrapper").fadeIn(500)
    }

    function close_digital() {
        $("#digital_wrapper").fadeOut(500)
    }

    function get_digital(h, m, s, ampm) {
        let hour, minute, second;
        if (h % 30 == 0) {
            hour = h / 30;
            hour = String(hour);
            if (hour.length == 2) {
                $("#digital_hour").html(hour)
            } else {
                $("#digital_hour").html("0" + hour)
            }
        }
        if (m % 6 == 0) {
            minute = m / 6;
            minute = String(minute);
            if (minute.length == 2) {
                $("#digital_minute").html(minute)
            } else {
                $("#digital_minute").html("0" + minute)
            }
        }
        if (s % 6 == 0) {
            second = s / 6;
            second = String(second);
            if (second.length == 2) {
                $("#digital_second").html(second)
            } else {
                $("#digital_second").html("0" + second)
            }
        }
        $("#ampm").html(ampm)
    }
})

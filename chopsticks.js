
/* Hello dear reader, whoever you are,
 I am Hazem, I introduce myself to you.
  I wrote a crazy code, but it worked.
   Please, if you do not understand any of this, tell me*/


const grandba = document.getElementById('grandba');
const table = document.getElementById('table');
let counterNum = 5;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
const green = document.getElementsByClassName("green");
var red = document.getElementsByClassName("red");
var gray = document.getElementsByClassName("gray");
let special_counter = green.length;
var cc = document.getElementById('cc');
var ca = document.getElementById('ca');
var cl = document.getElementById('cl');
var rows = table.getElementsByTagName("tbody")
[0].getElementsByTagName("tr");

const appear_adding_list = () => {
    grandba.style.display = "flex";
}
const disappear_adding_list = () => {
    grandba.style.display = "none";
}



function change_row(index, key) {



    let col = rows[index + 1].getElementsByTagName("td");
    if (key == 'g') {


        for (let j = 0; j < 6; j++) {
            // col[j].style.background = "#9bfab4";

            var style = col[j].style;
            style.backgroundColor = "#9bfab4";

        }
        red[index].style.display = "none";
        gray[index].style.display = "none";
        green[index].disabled = true;
        green[index].style.opacity = 0.60;
        counter1++;
        cc.innerHTML = counter1;

    }
    else if (key == 'r') {


        for (let j = 0; j < 6; j++) {
            col[j].style.background = "#ff4040";
        }
        green[index].style.display = "none";
        gray[index].style.display = "none";
        red[index].disabled = true;
        red[index].style.opacity = 0.60;

        counter2++;
        ca.innerHTML = counter2;
    }
    else {

        for (let j = 0; j < 6; j++) {
            col[j].style.background = "#d6d6d6";
        }
        green[index].style.display = "none";
        red[index].style.display = "none";
        gray[index].disabled = true;
        gray[index].style.opacity = 0.60;
        counter3++;
        cl.innerHTML = counter3;
    }


}

function reset() {
    for (let i = 1; i < rows.length - 1; i++) {
        let cells = rows[i].getElementsByTagName('td');

        for (let j = 0; j < 6; j++) {
            cells[j].style.background = "white";
        }

        green[i - 1].style.display = "inline-block";
        red[i - 1].style.display = "inline-block";
        gray[i - 1].style.display = "inline-block";
        red[i - 1].disabled = false;
        red[i - 1].style.opacity = 1;
        green[i - 1].disabled = false;
        green[i - 1].style.opacity = 1;
        gray[i - 1].disabled = false;
        gray[i - 1].style.opacity = 1;
        counter1 = 0;
        counter2 = 0;
        counter3 = 0;
        special_counter = 5;
        cc.innerHTML = counter1;
        ca.innerHTML = counter2;
        cl.innerHTML = counter3;
    }

}



function special_changing(v, key) {
    special_counter++;
    var rows = table.getElementsByTagName("tbody")
    [0].getElementsByTagName("tr");

    let col = rows[v].getElementsByTagName("td");
    if (key == 'g') {
        for (let j = 0; j < 6; j++) {
            var style = col[j].style;
            style.backgroundColor = "#9bfab4";
        }
        red[v - 1].style.display = "none";
        gray[v - 1].style.display = "none";
        green[v - 1].disabled = true;
        green[v - 1].style.opacity = 0.60;
        counter1++;
        cc.innerHTML = counter1;
    }
    else if (key == 'r') {
        for (let j = 0; j < 6; j++) {
            var style = col[j].style;
            style.backgroundColor = "#ff4040";
        }
        green[v - 1].style.display = "none";
        gray[v - 1].style.display = "none";
        red[v - 1].disabled = true;
        red[v - 1].style.opacity = 0.60;
        counter2++;
        ca.innerHTML = counter2;
    }
    else {
        for (let j = 0; j < 6; j++) {
            var style = col[j].style;
            style.backgroundColor = "#d6d6d6";
        }
        green[v - 1].style.display = "none";
        red[v - 1].style.display = "none";
        gray[v - 1].disabled = true;
        gray[v - 1].style.opacity = 0.60;
        counter3++;
        cl.innerHTML = counter3;
    }

}

function insert() {

    const first_name = document.getElementById('firstname').value;
    const second_name = document.getElementById('secondname').value;
    const id = document.getElementById('id').value;
    let s = String(first_name + " " + second_name);
    if (first_name.length != 0 && second_name.length != 0 && id.length != 0) {
        console.log("Done");

        var row = table.insertRow(counterNum + 1);
        counterNum++;
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);


        let x = document.createElement("button");
        x.innerHTML = "&#9989";
        x.className = "green";
        x.id = "x";
        let y = document.createElement("button");
        y.innerHTML = " &#10060";
        y.className = "red";
        y.id = "y";
        let z = document.createElement("button");
        z.innerHTML = "&#9201";
        z.className = "gray";
        z.id = "z";


        cell1.innerHTML = counterNum;
        cell1.value = counterNum;
        cell2.innerHTML = id;
        cell3.innerHTML = s;
        cell4.appendChild(x);
        cell5.appendChild(y);
        cell6.appendChild(z);


        grandba.style.display = "none";

        x.onclick = function () { special_changing(cell1.value, 'g') };
        y.onclick = function () { special_changing(cell1.value, 'r') };
        z.onclick = function () { special_changing(cell1.value, 'gr') };
    }
    else
        alert("Hello dear !!, you left our table without data, please go back and enter the data or you can simply cancel the process by clicking on the 'cancel' button");

}

document.getElementById('exel').addEventListener('click', function () {
    var table2excel = new Table2Excel();
    table2excel.export(document.querySelectorAll("#table"));
});

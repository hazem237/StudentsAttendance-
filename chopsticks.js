
/* Hello dear reader, whoever you are,
 I am Hazem, I introduce myself to you.
  I wrote a crazy code, but it worked.
   Please, if you do not understand any of this, tell me*/

const my_array = [
    {
        num: 1,
        student_id: 201082,
        student_name: "Hazem Haddad",
        Attendees: "not Determine yet"

    }
    ,
    {
        num: 2,
        student_id: 201156,
        student_name: "Basel Ebedo",
        Attendees: "not Determine yet"

    },
    {
        num: 3,
        student_id: 132043,
        student_name: "Abeer Dana"
        , Attendees: "not Determine yet"
    },
    {
        num: 4,
        student_id: 100777,
        student_name: "Motaz Mohammed"
        , Attendees: "not Determine yet"
    },
    {
        num: 5,
        student_id: 288234,
        student_name: "Aseel yaseen"
        , Attendees: "not Determine yet"
    }

]
const grandba = document.getElementById('grandba');
const table = document.getElementById('table');
let counterNum = 5;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
var green = document.getElementsByClassName("green");
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
    document.getElementById('firstname').value = '';
    document.getElementById('secondname').value = '';
    document.getElementById('id').value = '';
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
        my_array[index].Attendees = "Present";

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
        my_array[index].Attendees = "Absent";
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
        my_array[index].Attendees = "late";
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
    for (let a = 0; a < my_array.length; a++) {
        my_array[a].Attendees = "not Determine yet";
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
        my_array[v - 1].Attendees = "Present";
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
        my_array[v - 1].Attendees = "Absent";
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
        my_array[v - 1].Attendees = "Late";
        cl.innerHTML = counter3;
    }

}
function edit_student(o) {
    console.log(o.value);
    let cells = rows[o.value].getElementsByTagName('td');
    for (let i = 0; i < 6; i++) {
        var s = cells[i].style;
        s.background = "white";
    }
    green[o.value - 1].style.display = "inline-block";
    red[o.value - 1].style.display = "inline-block";
    gray[o.value - 1].style.display = "inline-block";
    red[o.value - 1].disabled = false;
    red[o.value - 1].style.opacity = 1;
    green[o.value - 1].disabled = false;
    green[o.value - 1].style.opacity = 1;
    gray[o.value - 1].disabled = false;
    gray[o.value - 1].style.opacity = 1;
    if (my_array[o.value - 1].Attendees == "not Determine yet") {
        alert("Dude ,  There's nothing to Edit :) !");
    }
    else if (my_array[o.value - 1].Attendees == "Present") {
        counter1--;
        cc.innerHTML = counter1;
    }
    else if (my_array[o.value - 1].Attendees == "Absent") {
        counter2--;
        ca.innerHTML = counter2;
    }
    else {
        counter3--;
        cl.innerHTML = counter3;
    }

    my_array[o.value - 1].Attendees = "not Determine yet";


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
        var cell7 = row.insertCell(6);


        let x = document.createElement("button");
        x.innerHTML = "&#9989";
        x.className = "green";

        let y = document.createElement("button");
        y.innerHTML = " &#10060";
        y.className = "red";

        let z = document.createElement("button");
        z.innerHTML = "&#9201";
        z.className = "gray";

        let w = document.createElement("button");
        w.innerHTML = "Edit";
        w.className = "Edit_button ";
        w.value = counterNum;



        cell1.innerHTML = my_array.length + 1;
        cell1.value = my_array.length + 1;
        cell2.innerHTML = Number(id);
        cell3.innerHTML = s;
        cell4.appendChild(x);
        cell5.appendChild(y);
        cell6.appendChild(z);
        cell7.appendChild(w);
        my_array.push(
            {
                num: counterNum,
                student_id: Number(id),
                student_name: s
                , Attendees: "not Determine yet"
            }
        );

        grandba.style.display = "none";

        x.onclick = function () { special_changing(cell1.value, 'g') };
        y.onclick = function () { special_changing(cell1.value, 'r') };
        z.onclick = function () { special_changing(cell1.value, 'gr') };
        w.onclick = function () { edit_student(this) };


        document.getElementById('firstname').value = '';
        document.getElementById('secondname').value = '';
        document.getElementById('id').value = '';
    }
    else
        alert("Hello dear !!, you left our table without data, please go back and enter the data or you can simply cancel the process by clicking on the 'cancel' button");

}
function appear_searching_list() {
    document.getElementById("grandba2").style.display = "flex";
}
function disappear_search_list() {
    document.getElementById("grandba2").style.display = "none";
    document.getElementById('id_find').value = '';
    document.getElementById('find').value = '';
    document.getElementById('sn').value = '';
    document.getElementById('sa').value = '';
    document.getElementById('found').value = '';
    document.getElementById('found').style.background = "white";




}
function find_student() {
    const id_find = document.getElementById('id_find').value;
    const find = document.getElementById('find');
    const sn = document.getElementById('sn');
    const sa = document.getElementById('sa');
    const Found = document.getElementById('found');
    var x = new Boolean(false);
    if (id_find.length == 0)
        alert("Hello dear !!, you left us without data, please go back and enter the data or you can simply cancel the process by clicking on the 'cancel' button");
    else {
        for (let a = 0; a < my_array.length; a++) {
            if (my_array[a].student_id === Number(id_find))
             {
                console.log(typeof my_array[a].student_id);
                console.log(my_array[a].student_id);
                console.log(typeof id_find);
                console.log(id_find);
                find.innerHTML = " Student Found ";
                Found.style.background = "#a9ffa6";
                Found.style.color = "black";
                sn.innerHTML = my_array[a].student_name;
                sa.innerHTML = my_array[a].Attendees;
                x = true;
                break;
            }

        }
        if (x == false) {

            find.innerHTML = " Student Not Found ";
            Found.style.background = "#e32110";
            Found.style.color = "white";
            sn.innerHTML = "";
            sa.innerHTML = "";
        }


    }


}
function appear_add_list() {
    document.getElementById('grandba3').style.display = "flex";
}
function disappear_edit_list() {
    document.getElementById('grandba3').style.display = "none";
}


document.getElementById('exel').addEventListener('click', function () {
    var table2excel = new Table2Excel();
    table2excel.export(document.querySelectorAll("#table"));
});




function getTimeslot(i) {
    
    url = "http://127.0.0.1:3000/timeslots";
    var request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
          data = request.responseText;
          data = JSON.parse(data);
          console.log(data);
          printToPage(data, i);
        };
    };
    request.send();
    
    
    //return fetch("http://127.0.0.1:3002/timeslots")
    //.then(result=>console.log(result))
}

function printToPage(data, i) {

    var theTable = "";
    var array_of_students_names = data[i].reserved_students;
    theTable += "<div id='timeslot" + (i + 1) + "'><table class='table-style'>";
    theTable += "<tr><th>Student Name</th><th colspan='2'>Status</th></tr>";
        for (j = 0; j < array_of_students_names.length; j++) {
            theTable += "<tr><td>" + array_of_students_names[j] + "</td>";
            if(j % 2 == 0) {
              theTable += "<td style='background-color: #9ee09e'>Yes</td>";
              theTable += "<td >No</td></tr>";
            }
            else {
              theTable += "<td>Yes</td>";
              theTable += "<td style='background-color: #FF0000'>No</td></tr>";
          }
        }
        theTable += "</table></div>";
    document.getElementById("timeslot" + i).innerHTML = theTable;
}

function printNumberOfReservedStudents() {

    var data = {
        "start_time" : "5:30 pm",

        "end_time" : "6:00 pm",

        "current_capacity" : 1,

        "max_capacity" : 4,

        "reserved_students" : [128686],

        "waitlisted_students" : [1241241421, 124141414, 142414414]
};
        reservedStudents = "<h2>Current Capacity</h2><div style='font-size: 100px'>" + data.current_capacity + "/" + data.max_capacity;
        reservedStudents += "</div><progress value='" + data.current_capacity + "' max='" + data.max_capacity + "'";
        reservedStudents += "style='color: #3E8EDE; border-radius: 25px;'></progress>";

        document.getElementById("capacity").innerHTML = reservedStudents;
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




;
var student1 = {
    firstName: "abdelhadi",
    lastName: "karbal",
    age: 34,
    location: "casablanca"
};
var student2 = {
    firstName: "abdelhafid",
    lastName: "raji",
    age: 37,
    location: "mohammedia"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
studentsList.forEach(function (obj) {
    var row = document.createElement('tr');
    var cellName = document.createElement('td');
    var cellLocation = document.createElement('td');
    cellName.textContent = obj.firstName;
    cellLocation.textContent = obj.location;
    row.appendChild(cellName);
    row.appendChild(cellLocation);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);

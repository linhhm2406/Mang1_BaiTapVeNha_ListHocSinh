let students = ['Nguyen Van A', 'Nguyen Van B', 'Nguyen Van C'];

add_List();

function add_List() {
    let html = "";
    for (let i = 1; i <= students.length; i++) {
        html += "<tr>";
        html += "<td>"
             + i;
        html += "</td>";
        html += "<td>"
             + students[i - 1];
        html += "</td>";
        html += "<td>"
             + "<input type='button' value='Detele' onclick='delete_id(this.id)' id='" + i + "'>"
             + "<input type='button' value='Repair' onclick='repair_id(this.id)' id='" + i + "'>";
        html += "</td>";
        html += "</tr>";
    }
    document.getElementById("list_student").innerHTML = html;
}

function add_student() {
    students.push(document.getElementById("add_student").value);
    add_List();
    document.getElementById("add_student").value = "";
}

function delete_id(checked_id) {
    students.splice(checked_id - 1, 1);
    add_List();
}

function repair_id(clicked_id) {
    let repair_content = prompt("Nhap vao Ten, sau khi chinh sua");
    students.splice(clicked_id - 1, 1, repair_content);
    add_List()
}
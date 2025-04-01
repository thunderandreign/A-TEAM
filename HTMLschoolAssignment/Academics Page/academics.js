
const headers = document.querySelectorAll(".accordionitemheader");
headers.forEach(header => {
header.addEventListener("click", event => {
header.classList.toggle("active");

});
});


document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-row");
    const tableBody = document.querySelector("#dynamic-table tbody");

    // Function to add a new row
    addButton.addEventListener("click", function () {
        const newRow = document.createElement("tr");

        // Creating cells for the new row
        const yearCell = document.createElement("td");
        const twentyCell = document.createElement("td");
        const nineteenCell = document.createElement("td");
        const actionCell = document.createElement("td");

        // Creating input fields for the new row
        yearCell.innerHTML = '<input type="text" placeholder="Year">';
        twentyCell.innerHTML = '<input type="number" placeholder="0">';
        nineteenCell.innerHTML = '<input type="number" placeholder="0">';
        actionCell.innerHTML = '<button class="delete-row">Delete</button>';

        // Append cells to the row
        newRow.appendChild(yearCell);
        newRow.appendChild(twentyCell);
        newRow.appendChild(nineteenCell);
        newRow.appendChild(actionCell);

        // Add the new row to the table body
        tableBody.appendChild(newRow);

        // Add event listener to delete button in the new row
        const deleteButton = newRow.querySelector(".delete-row");
        deleteButton.addEventListener("click", function () {
            tableBody.removeChild(newRow);
        });
    });
});



















// json2html.js
export default function json2html(data) {
    // Define the headers based on the keys of the first object in the array
    const headers = ["Name", "Age", "Gender"];
    
    // Create the table opening with data-user attribute
    let html = `<table data-user="durgearyan9@gmail.com">\n<thead>\n<tr>`;
    
    // Add each header as a table header cell
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    
    html += `</tr>\n</thead>\n<tbody>\n`;
    
    // Add each row of data
    data.forEach(item => {
        html += `<tr>`;
        headers.forEach(header => {
            // Add each cell, or an empty cell if the property is missing
            html += `<td>${item[header] || ""}</td>`;
        });
        html += `</tr>\n`;
    });
    
    html += `</tbody>\n</table>`;
    
    return html;
}

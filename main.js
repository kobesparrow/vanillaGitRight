const dropDown = document.getElementById("dropdown");

window.addEventListener('load', populateDropDown);

function populateDropDown() {
  let holidays = [
    { id: 1, name: `Christmas` },
    { id: 2, name: `St. Patrick's Day`},
    { id: 3, name: `Cinco De Mayo` },
    { id: 4, name: `Valentine's Day`},
    { id: 5, name: `Halloween` }
  ]

  let dropDownHTML = ''

  holidays.forEach(holiday => {
    dropDownHTML += `<option>${holiday.name}</option> `;
  })

  let completeDropDown = `<select> <option>Select a holiday</option> ${dropDownHTML} </select>`;

  dropDown.insertAdjacentHTML('afterbegin', completeDropDown);
}
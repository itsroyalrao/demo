const submit = document.getElementById('submit');

submit.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = document.getElementById('amount');
  const desc = document.getElementById('desc');
  const category = document.getElementById('category');

  var obj = {
    amnt: amount.value,
    dsc: desc.value,
    ctg: category.value
  }

  localStorage.setItem(JSON.stringify(obj), JSON.stringify(obj));

  // Add the item to the list when submitted
  addItemToList(obj);

  // Clear the input fields after submission
  amount.value = '';
  desc.value = '';
});

// Function to load existing items from localStorage
function loadItems() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let strRes = localStorage.getItem(key);
    let newres = JSON.parse(strRes);
    addItemToList(newres);
  }
}

// Function to add a single item to the list
function addItemToList(item) {
  const ul = document.getElementById('display-items');
  const li = document.createElement('li');
  li.textContent = item.amnt + '-' + item.ctg + '-' + item.dsc + ' ';
  ul.appendChild(li);

  const dlt = document.createElement('button');
  dlt.textContent = 'DELETE EXPENSE';
  li.appendChild(dlt);
  
  const edit = document.createElement('button');
  edit.textContent = 'EDIT EXPENSE';
  li.appendChild(edit);

  dlt.addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.removeItem(JSON.stringify(item));
    ul.removeChild(li);
  });
}

// Call the loadItems function when the page loads
window.addEventListener('load', function () {
  loadItems();
});
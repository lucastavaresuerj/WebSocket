async function insertIndexDataHtml(index) {
  var data = await sendMessage('getIndex', {"index": index});
  document.getElementById("oneIndex").innerHTML = JSON.stringify(data);
}

async function insertAllDataHtml() {
  var data = await sendMessage('getAll', {});
  document.getElementById("allData").innerHTML = JSON.stringify(data);
}
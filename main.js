function closeNav(value) {
  document.getElementById("closeSidepanel").style.width = value;
  document.getElementById("closeSidepanel").style.height = value;
  let now = new Date();
  localStorage.setItem("closeButton", value);
  localStorage.setItem("now", Date.parse(now));
  setTimeout(openNav, 100000);
}
function onReload() {
  let newNow = new Date();

  const valueOnClose = localStorage.getItem("closeButton");
  const oldNow = localStorage.getItem("now");
  const currentTime = Date.parse(newNow) - oldNow;
  const timeoutLeft = 8000 - currentTime;
  if (valueOnClose === "0" && currentTime <= 8000) {
    document.getElementById("closeSidepanel").style.width = "0";
    document.getElementById("closeSidepanel").style.height = "0";
    setTimeout(openNav, timeoutLeft);
  }
}

function openNav() {
  document.getElementById("closeSidepanel").style.width = "640px";
  document.getElementById("closeSidepanel").style.height = "250px";
}

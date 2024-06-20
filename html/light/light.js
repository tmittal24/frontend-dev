function lightController(flag) {
  // alert("Light is ON");

  var pic;
  if (flag == 1) {
    pic = "pic_bulbon.gif";
  } else {
    pic = "pic_bulboff.gif";
  }
  document.getElementById("bulb_img").src = pic;
}

function lightController1(flag) {
  var pic;
  var button_2 = document.getElementById("button_2");
  if ((button_2.innerHTML == "ON")) {
    button_2.innerHTML = "OFF";
    pic = "pic_bulboff.gif";
  } else {
    button_2.innerHTML = "ON";
    pic = "pic_bulbon.gif";
  }

  var bulb = document.getElementById("bulb_img");
  bulb.src = pic;
}

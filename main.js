function EnterNav(event, element, side) {
  if (side === 'right') {
    let x = (event.clientX - (window.innerWidth - event.target.clientWidth)) / event.target.clientWidth
    SetColorNav(x, element);
  } else {
    let x = -(event.clientX - event.target.clientWidth) / event.target.clientWidth;
    SetColorNav(x, element);
  }
}

function SetColorNav(data, el) {
  console.log(el);

  if (data >= 0 && data <= 0.5) {
    el.style.opacity = data * 2;
  }

  data > 0.5 ? el.style.background = 'black' : el.style.background = 'gray';

}

function LeaveNav(el) {
  el.style.opacity = 0;
}

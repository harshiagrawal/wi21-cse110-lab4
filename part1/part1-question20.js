function times() {
  let d = new Date();
  let time = d.localeTimeString();
  console.log(time);
}

setInterval(times, 1000);

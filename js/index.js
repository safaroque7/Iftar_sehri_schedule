// sehri time schedule
const hours_sehri = document.getElementById("hours_sehri");
const minutes_sehri = document.getElementById("minutes_sehri");
const seconds_sehri = document.getElementById("seconds_sehri");

setInterval(function () {
  let d = new Date();
  d = d.getDate() + 1;

  const sehriTime = new Date(d + "Jan 2023 04:39:00");
  const currentTime = new Date();

  const remSehritime = sehriTime - currentTime;

  let sehri_sconds = Math.floor(remSehritime / 1000);
  let sehri_minutes = Math.floor(sehri_sconds / 60);
  let sehri_hours = Math.floor(sehri_minutes / 60);

  let sehri_rem_just_seconds = sehri_sconds % 60;
  let sehri_rem_just_minutes = sehri_minutes % 60;
  let sehri_rem_just_hours = sehri_hours % 60;

  //   to add 0 before before single hour digit
  sehri_rem_just_hours = sehri_rem_just_hours.toString();
  let hour_count = sehri_rem_just_hours.length;
  if (hour_count == 1) {
    sehri_rem_just_hours = "0" + sehri_rem_just_hours;
  }

  //   to add 0 before before single minutes digit
  sehri_rem_just_minutes = sehri_rem_just_minutes.toString();
  let minutes_count = sehri_rem_just_minutes.length;
  if (minutes_count == 1) {
    sehri_rem_just_minutes = "0" + sehri_rem_just_minutes;
  }

  //   to add 0 before before single seconds digit
  sehri_rem_just_seconds = sehri_rem_just_seconds.toString();
  let count_seconds = sehri_rem_just_seconds.length;
  if( count_seconds == 1 ){
    sehri_rem_just_seconds = "0" + sehri_rem_just_seconds;
  }

  hours_sehri.innerHTML = sehri_rem_just_hours;
  minutes_sehri.innerHTML = sehri_rem_just_minutes;
  seconds_sehri.innerHTML = sehri_rem_just_seconds;
}, 1000);

// iftar time schedule
const hours_iafter = document.getElementById("hours_iafter");
const minutes_iafter = document.getElementById("minutes_iafter");
const seconds_iafter = document.getElementById("seconds_iafter");

setInterval(function () {
  let dd = new Date();
  dd = dd.getDate();

  const iftarTime = new Date(dd + "Jan 2023 18:42:00");

  const currentTime = new Date();
  let remTime = iftarTime - currentTime;

  let totalSeconds = Math.floor(remTime / 1000);
  let totalMinutes = Math.floor(totalSeconds / 60);
  let totalHours = Math.floor(totalMinutes / 60);

  totalSeconds = totalSeconds % 60;
  totalMinutes = totalMinutes % 60;
  totalHours = totalHours % 24;


  //   to add 0 before before single seconds digit
  totalSeconds = totalSeconds.toString();
  let hour_count = totalSeconds.length;
  if (hour_count == 1) {
    totalSeconds = "0" + totalSeconds;
  }

  //   to add 0 before before single minutes digit
  totalMinutes = totalMinutes.toString();
  let minutes_count = totalMinutes.length;
  if (minutes_count == 1) {
    totalMinutes = "0" + totalMinutes;
  }

  //   to add 0 before before single hour digit
  totalHours = totalHours.toString();
  let count_seconds = totalHours.length;
  if( count_seconds == 1 ){
    totalHours = "0" + totalHours;
  }

  seconds_iafter.innerHTML = totalSeconds;
  minutes_iafter.innerHTML = totalMinutes;
  hours_iafter.innerHTML = totalHours;

  let ddd = new Date();
  ddd = ddd.getDate();

  const sehriTime_con = new Date(ddd + "Jan 2023 18:50:00");

  const currentTime_con = new Date();
  const remSehritime2 = sehriTime_con - currentTime_con;
  const sehri_sconds = Math.floor(remSehritime2 / 1000);

  if (totalSeconds < 0) {
    document.getElementById("only_sehri").classList.add("show");
    document.getElementById("only_iftar").classList.remove("show");
  } else if (sehri_sconds < 0) {
    document.getElementById("only_sehri").classList.remove("show");
    document.getElementById("only_iftar").classList.add("show");
  }
}, 1000);

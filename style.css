let dragged; //store the object being dragged
window['moment-range'].extendMoment(moment);

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const parkingRules =  {
  ambulance: {
    days: weekdays,
    times: createRange(moment().set('hour', 21), moment().add(1, 'day').set('hour', 3)) // 9pm to 3am (the next day)
  },
  'fire truck': {
    days: ['Saturday', 'Sunday']
  },
  car: {
    days: weekdays,
    times: createRange(moment().set('hour', 3), moment().set('hour', 15)) // 3am - 3pm
  },
  bicycle: {
    days: weekdays,
    times: createRange(moment().set('hour', 15), moment().set('hour', 21)) // 3pm to 9pm
  }
};

function createRange(start, end) {
  if (start && end) {
    return moment.range(start, end);
  }
}

function onDragStart(event) {
  let target = event.target;
  if (target && target.nodeName === 'IMG') { // If target is an image
    dragged = target;
    // Make it half transparent
    event.target.style.opacity = .3;
  }
}

function onDragEnd(event) {
  if (event.target && event.target.nodeName === 'IMG') {
      // Reset the transparency
      event.target.style.opacity = '';
    dragged = null;
  }
}

function onDragOver(event) {
  // Prevent default to allow drop
  event.preventDefault();
  event.dataTransfer.dropEffect = "move"
}

function onDragLeave(event) {
  event.target.style.background = '';
}

function getDay() {
  return moment().format('dddd'); // format as 'monday' not 1
}

function getHours() {
  return moment().hour();
}

function canPark(vehicle) {
  /* Check the time and the type of vehicle being dragged
   * to see if it can park at this time
   */
  if (vehicle && parkingRules[vehicle]) {
    const rules = parkingRules[vehicle];
    const validDays = rules.days;
    const validTimes = rules.times;
    const curDay = getDay();
    if (validDays) {
      /* If the current day is included on the parking days for the vehicle
       * And if the current time is within the range
       */
      return validDays.includes(curDay) && (validTimes ? validTimes.contains(moment()) : true); 
      /* Moment.range has a contains function that checks
       * to see if your range contains a moment. 
         https://github.com/rotaready/moment-range#contains
        */
    }
  }
  return false;
}

function onDragEnter(event) {
  const target = event.target;
  if (dragged && target) {
    const vehicleType = dragged.alt; // e.g bicycle, ambulance
    if (canPark(vehicleType)) {
      event.preventDefault();
      // Set the dropEffect to move
      event.dataTransfer.dropEffect = 'move';
      /* Change color to green to show it can
       * be dropped 
       */
      target.style.background = '#1f904e';    
     }
    else {
      /* Change color to red to show
       * it can't be dropped. Notice we
       * don't call event.preventDefault() here
       * so the browser won't allow a drop
       * by default
       */
      target.style.backgroundColor = '#d51c00'; 
    }
  }
}

function onDrop(event) {
  const target = event.target;
  if (target) {
    const data = event.dataTransfer.getData('text');
    const dragged = document.getElementById(data);
    const vehicleType = dragged.alt;
    target.style.backgroundColor = '';
    if (canPark(vehicleType)) {
       event.preventDefault();
       // Get the id of the target and add the moved element to the target's DOM
       dragged.style.opacity = '';
       target.appendChild(dragged);
    }
  }
}

const vehicles = document.querySelector('.vehicles');
const dropZone = document.querySelector('.drop-zone');

// Adding event listeners
vehicles.addEventListener('dragstart', onDragStart);
vehicles.addEventListener('dragend', onDragEnd);
dropZone.addEventListener('drop', onDrop);
dropZone.addEventListener('dragenter', onDragEnter);
dropZone.addEventListener('dragleave', onDragLeave);
dropZone.addEventListener('dragover', onDragOver);
let officeContainer = document.querySelector('.offices');
let descriptionContainer = document.querySelector('.description');

for (let i = 0; i <= 7; i++) {
  let office = document.createElement('div');
  office.classList.add('styleOffice');
  office.setAttribute('data-status', 'false');
  office.id = `office${i + 1}`;
  officeContainer.append(office);
  officeContainer.addEventListener('click', changeOfficeState);
}

function addDetails(e, status) {
  let officeId = e.getAttribute('id');

  for (let i = 0; i <= 7; i++) {
    if (officeId == officeData[i].id && status == true) {
      let descriptionBox = document.createElement('p');
      descriptionBox.setAttribute('id', `descriptionBox${i + 1}`);
      descriptionBox.className = 'descriptionStyle';
      descriptionBox.innerHTML = `Worker: ${officeData[i].worker}<br>Problem: ${officeData[i].problem}`;
      descriptionContainer.append(descriptionBox);
    } else if (officeId == officeData[i].id && status == false) {
      let removedBox = descriptionContainer.querySelector(`#descriptionBox${i + 1}`);
      removedBox.remove();
    }
  }
}

function changeOfficeState(e) {
  let element = e.target;
  let status = element.dataset.status;

  if (status === "false") {
    element.dataset.status = true;
    element.style.animationName = 'usedOfficeAnimation';
    element.style.animationDuration = '1500ms';
    element.style.animationDirection = 'alternate';
    element.style.animationTimingFunction = 'ease-out';
    element.style.animationIterationCount = 'infinite';
    addDetails(element, true);

  } else if (status === "true") {
    element.dataset.status = false;
    element.style.animationName = 'idleOfficeAnimation';
    element.style.animationDuration = '1500ms';
    element.style.animationDirection = 'alternate';
    element.style.animationTimingFunction = 'ease-out';
    element.style.animationIterationCount = 'infinite';
    addDetails(element, false);
  }
}

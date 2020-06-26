$(document).ready(onReady);

const petList = [];

function onReady() {
  $('#js-pet-form').on('submit', submitForm);
}

function submitForm(event) {
  event.preventDefault();

  // ES6 thing
  // const name = $('#js-input-name').val();
  // const type = $('#js-input-type').val();

  // const pet = {
  //   name,
  //   type
  // }

  const pet = {
    name: $('#js-input-name').val(),
    type: $('#js-input-type').val(),
  };

  petList.push(pet);
  render();
}

function render() {
  // CLEAR OUT ANY INPUTS - CHECK!
  //  DEAL WITH MULTIPLE ITERATIONS!
  // APPEND EACH OF THE PETS ON THE SCREEN

  $('#js-input-name').val('');
  $('#js-input-type').val('');

  $('.js-container').empty();

  // [ {name, type}, {name, type}]
  for (let pet of petList) {
    // TARGET THE CONTAINER - CHECK!
    // APPEND A P TAG TO THE CONTAINER WITH THE PET INFO! - CHECK!
    $('.js-container').append(`
      <p>${pet.name} - ${pet.type}</p>
    `);
  }
}

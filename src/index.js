import _ from 'lodash';
import Data from './data.xml';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!'], ' ');
  element.classList.add('hello');

  console.log(Data);

  return element;
}

document.body.appendChild(component());

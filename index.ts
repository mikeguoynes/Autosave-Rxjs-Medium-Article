import './style.css';
import { fromEvent } from 'rxjs';

const input = document.querySelector('input');
const changes$ = fromEvent(input, 'keyup');

changes$.subscribe((inputEvent) => {
  console.log(inputEvent?.target?.value);
});

class MyService {
  constructor() {}

  save() {
    return fetch('url', {
      method: 'POST',
    });
  }
}

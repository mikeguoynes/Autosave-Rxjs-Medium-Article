import './style.css';
import { fromEvent } from 'rxjs';
import { UserService } from './user.service';

const input = document.querySelector('input');
const changes$ = fromEvent(input, 'keyup');

changes$.subscribe((inputEvent) => {
  console.log(inputEvent?.target?.value);
});


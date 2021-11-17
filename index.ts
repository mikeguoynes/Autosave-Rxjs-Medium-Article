import './style.css';
import { fromEvent } from 'rxjs';
import { UserService } from './user.service';

let numberOfRequests = 0;
const service = new UserService();
const nameInput = document.querySelector('input');
const nameInputChanges$ = fromEvent(nameInput, 'keyup');

nameInputChanges$.subscribe((inputEvent) => {
  sendRequest(inputEvent?.target?.value);
});

const sendRequest = (name: string) => {
  service.save({ name });
  numberOfRequests++;
  console.log('request sent', numberOfRequests);
};

import './style.css';
import {
  distinctUntilChanged,
  fromEvent,
  debounceTime,
  map,
  tap,
  of,
  switchMap,
} from 'rxjs';
import { UserService } from './user.service';

let numberOfRequests = 1;
const service = new UserService();
const nameInput = document.querySelector('input');
const nameInputChanges$ = fromEvent(nameInput, 'keyup');

// Listen for when user changes the name input.
fromEvent(document.querySelector('input'), 'keyup')
  .pipe(
    map((event) => event.target.value), // map to return only what the user typed
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((name) => sendRequest$(name)) // Cancel previous, only care about latest.
  )
  .subscribe((value) => {
    console.log('request sent', value);
  });

const sendRequest$ = (name: string) => {
  numberOfRequests++;
  return of({ results: [], for: name, numberOfRequests });
};

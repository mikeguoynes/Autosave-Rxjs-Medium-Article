import './style.css';
import {
  distinctUntilChanged,
  fromEvent,
  debounceTime,
  map,
  of,
  switchMap,
} from 'rxjs';

let numberOfRequests = 1;

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

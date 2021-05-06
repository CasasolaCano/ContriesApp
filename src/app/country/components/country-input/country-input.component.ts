import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit{


  
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();      //Se emitira este evento cuando la persona deje de escribir

  debouncer: Subject<string> = new Subject();

  term:string = '';
  @Input() placeholder:string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.onDebounce.emit(value);
    })
  }

  search() {
    this.onEnter.emit(this.term);
    
  }

  keyPressed() {
    
    this.debouncer.next(this.term);
  }


}

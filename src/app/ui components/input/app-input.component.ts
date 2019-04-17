import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.css'],
})
export class AppInputComponent implements OnInit {
  @Input() inputValue: string = "";
  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {}
}

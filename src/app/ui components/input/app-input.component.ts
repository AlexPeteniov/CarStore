import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.css']
})
export class AppInputComponent implements OnInit {
  name = new FormControl('');
  constructor() { }

  ngOnInit() {
  }
}

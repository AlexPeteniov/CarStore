import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.css'],
})
export class AppInputComponent implements OnInit {
  @Input() propForm: FormGroup;
  @Input() text: string;
  @Input() class: string;
  type = new FormControl('');

  constructor() {
  }
  ngOnInit() {}
}

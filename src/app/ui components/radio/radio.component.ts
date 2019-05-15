import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() parentGroup: FormGroup;
  @Input() class: string;
  @Input() type: string;
  @Input() value: string;
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() propForm: FormGroup;
  @Input() class: string;
  type = new FormControl('');
  constructor() { }

  ngOnInit() {
    this.propForm = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });
  }
}

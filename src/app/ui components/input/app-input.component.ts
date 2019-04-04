import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.css']
})

export class AppInputComponent implements OnInit {
  @Input() pForm: FormGroup;
  ngOnInit() {
  }
}

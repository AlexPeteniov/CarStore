import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() propForm: FormGroup;
  @Input() text: string;
  @Input() onClick: any;
  @Input() class: string;

  type = new FormControl('');

  constructor() {
  }

  ngOnInit() {
  }
}

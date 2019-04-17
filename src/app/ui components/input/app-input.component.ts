import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.css'],
})
export class AppInputComponent implements OnInit {
  @Input() fcn: any;
  @Input() fg: any;
  @Input() fgn: any;
  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit() {
  }
  onLogin() {
    this.authService.login();
  }
}

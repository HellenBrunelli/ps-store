import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-logo',
  templateUrl: './nav-logo.component.html',
  styleUrls: ['./nav-logo.component.scss']
})
export class NavLogoComponent implements OnInit {

  @Input()
  logoUrl: string = ''
  @Input()
  logoAlt: string = ''


  constructor() { }

  ngOnInit(): void {
  }

}

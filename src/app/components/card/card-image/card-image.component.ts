import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent implements OnInit {

  @Input()
  imageUrl: string = "";
  @Input()
  imageAlt: string = "";
  @Input()
  versions: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

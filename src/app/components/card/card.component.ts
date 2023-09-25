import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  imageUrl: string = "";
  @Input()
  imageAlt: string = "";
  @Input()
  versions: string[] = [];
 
  @Input()
  type: string = ""
  @Input()
  name:string = ""

  @Input()
  totalPrice: number = 0
  @Input()
  discountPrice: number = 0


  constructor() { }

  ngOnInit(): void {
  }

}

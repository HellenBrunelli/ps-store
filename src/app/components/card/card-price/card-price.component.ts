import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.scss']
})
export class CardPriceComponent implements OnInit {

  @Input()
  totalPrice: number = 0
  @Input()
  discountPrice: number = 0


  constructor() { }

  ngOnInit(): void {
  }

  discountPercentage(): number {
    const discount = ((this.totalPrice - this.discountPrice) / this.totalPrice) * 100;
    return Math.floor(discount)
  }
}

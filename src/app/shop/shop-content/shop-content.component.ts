import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-content',
  templateUrl: './shop-content.component.html',
  styleUrls: ['./shop-content.component.css']
})
export class ShopContentComponent implements OnInit {

  QntProduto: number = 210;

  constructor() { }

  ngOnInit(): void {
  }

  getQtdProdutos(): number{

    return this.QntProduto;
  }

}

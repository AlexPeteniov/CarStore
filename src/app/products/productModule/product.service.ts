import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductService {
  productsChanged = new Subject<Product[]>();
  private products: Product[] = [
    new Product(
      'Corvette zr1',
      '500 000 $',
      'https://img4.dp.ru/images/article/2017/' +
        '10/13/20db6bcd-6fe4-400d-b3f2-cce26b27deb4.jpg',
      'Продам отличную машину, собранную с любовью в Америке, надежнейший ' +
        '4 ступенчатый автомат работает ровно без пинков и рывков, движок тянет ' +
        'прилично, при этом очень тихий, работает ровно, кондей морозит как и ' +
        'полагается' +
        ', есть задний парктроник с индикацией на зеркале заднего вида.' +
        ' Салон велюровый в отличном состоянии, никто никогда не курил' +
        ' в нем. На авто ездила девушка, все обслуживание производилось' +
        ' в Кореане после того как вышел гарантийный период, до этого на ' +
        'станции официалов. ',
      [
        {
          name: 'Топливо',
          value: 'Бензин'
        },
        {
          name: 'Цвет Авто',
          value: 'Черный',
        },
        {
          name: 'Дата изготавления',
          value: '2019',
        },
      ]
    ),
    new Product(
      'AUDI zr1',
      '500 000 $',
      'https://icdn.lenta.ru/images/2017' +
        '/02/13/11/20170213112429057/pic_0' +
        '9b260bf45db3a5dc09c9f56080d6ebb.jpg',
      'Очень красивый цвет (сине-зелено-фиолетовый) перламутр,' +
        ' богатая комплектация Privilege, заводской адаптивный Xenon,' +
        ' комбинированный салон(кожа-велюр),кожаный руль,' +
        ' запуск с кнопки, 2 ключ-карты, функция свободные руки,' +
        ' голосовой компьютер,10 подушек безопасности, датчик ',
      [
        {
          name: 'Топливо',
          value: 'Газ',
        },
        {
          name: 'Цвет Авто',
          value: 'Черный',
        },
        {
          name: 'Дата изготавления',
          value: '2019',
        },
      ]
    ),
  ];

  getProducts() {
    return this.products.slice();
  }

  getProduct(index: number) {
    return this.products[index];
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  deleteProduct(index: number) {
    this.products = this.products.splice(index, 1);
    this.productsChanged.next(this.products.slice());
  }
}

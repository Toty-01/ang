import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  temperature1 = 2
  temperature2 = -5
  temperature3 = 6

  city = "Milan"

  condition = false
  nerd = "hello"

  organicsOnly = false;

  products = [
    {
      name: 'Choux',
      unitPrice: 3.00,
      organic: true
    },
    {
      name: 'Tomate',
      unitPrice: 5.00,
      organic: false
    },
    {
      name: 'Potimarrons',
      unitPrice: 2.80,
      organic: true
    },
    {
      name: 'Persil',
      unitPrice: 1.00,
      organic: false
    }
  ];
  customers = [
      {
        "name": "Daria Pollard",
        "age": 17,
        "purchases": 0
      },
      {
        "name": "Germaine Figueroa",
        "age": 85,
        "purchases": 0
      },
      {
        "name": "Hedley Glass",
        "age": 45,
        "purchases": 6
      },
      {
        "name": "Curran Savage",
        "age": 14,
        "purchases": 4
      },
      {
        "name": "Hedley Kaufman",
        "age": 60,
        "purchases": 0
      },
      {
        "name": "Ashton Rush",
        "age": 16,
        "purchases": 2
      },
      {
        "name": "Chloe Martin",
        "age": 61,
        "purchases": 1
      }
    ];

    ageMin = 18;

    showAlert(purchases: number) {
      alert(`nombres de commandes: ${purchases}`)
    }

    myInput = 'input'

  constructor() {
}
  ngOnInit() {
  }
}

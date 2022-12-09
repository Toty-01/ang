import { Component, NgZone ,OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  myObject = {
    firstName: 'Nicolas',
    name: 'Gulard',
    adresse: '8 rue des hirondelles'
  }
  delivery = new Date()
  name: string = "jean gulard";
  intervalZone: any
  counter = {
    count: 0
  }
  increment() {
    this.counter.count++
  }
  decrement() {
    this.counter.count--
  }
  livraison = new Date(2020, 12, 25);
  frenchFormat = 'dd MMMM yyyy';
  usFormat = 'MMMM d, y';

  toggle = true;

  get format()   {
    return this.toggle ? this.frenchFormat : this.usFormat ;
  }

  toggleFormat() { this.toggle = !this.toggle; }
  genderMap: any = { male: "M.", female: "Mme." };

  user = {
    name: "Camille Delacour"
  };

  constructor(
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
        this.intervalZone = setInterval(() => {
          this.ajouteZone()
        }, 1000)
    });
  }
  ajouteZone() {
    this.counter.count++
    console.log(this.counter.count)
    if (this.counter.count >= 3) {
      clearInterval(this.intervalZone)
      this.zone.run(() => {})
    }
  }
}

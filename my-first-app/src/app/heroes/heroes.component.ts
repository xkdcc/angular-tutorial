import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  _heroes = "test";
  // private _heroes: string;
  get heroes() {
    return this.heroes;
  }
  set heroes(heroes:string) {
    this.heroes = heroes;
  }

  // According to https://angular-2-training-book.rangle.io/di/angular2/inject_and_injectable ;
  // @Inject() is a manual mechanism for letting Angular know that a parameter must be injected.
  // @Inject decorator is only needed for injecting primitives.
  // The primitive types are number, string, boolean, bigint, symbol, null, undefined.
  constructor(@Inject(String) heroes: string) {
    this.heroes = heroes;
  }

  ngOnInit(): void {
  }

}

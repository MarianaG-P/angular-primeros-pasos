import { Component } from '@angular/core';

@Component({
  //app-heroes-list
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
  public metod: string = 'any';
  public capitalized: string = 'Capital'

  get capitalizedName(): string{
    return this.name.toLocaleUpperCase()
  }

  getHeroDescription(): string{

    return `${this.name} - ${this.age}`; //interpolacion
  }

  chageHero(value: string):void{
    this.name = value
  }

  chageAge(value: number):void{
    this.age = value
  }

  resetForm():void{
    this.name = 'Iroman'
    this.age = 45
  }
}

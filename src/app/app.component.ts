import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

export class Hero{
  id: number;
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes:Hero[] = [];
  title = 'War of Heroes';
  selectedHero: Hero;
  apiUrl = 'http://www.mocky.io/v2/596d86370f000059022b7de8'

  constructor(private http: Http){
    this.getHeroes();
  }

  getData(){
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }

  getHeroes(){
    this.getData().subscribe(data => {
      console.log(data);
      this.heroes = data;
    })
  }

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }
}

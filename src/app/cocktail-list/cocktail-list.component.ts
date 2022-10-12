import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from 'model/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  cocktails:Cocktail[]=[]

  constructor(public cocktailservice:CocktailService) { }

  ngOnInit(): void {
    this.cocktailservice.getCocktails().subscribe(cocktailsFromJsonFile =>{
      this.cocktails=cocktailsFromJsonFile;
    })

  }

}

import { Component } from '@angular/core';
import { PokemonStateService } from './../services/pokemon-state.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  userPokemonList: any[] = [];

  constructor(private pokemonStateService: PokemonStateService) {}

  ionViewWillEnter() {
    this.userPokemonList = this.pokemonStateService.getUserPokemonList();
  }

  getBattleStats(pokemon: any) {
    return this.pokemonStateService.getBattleStats();
  }
}

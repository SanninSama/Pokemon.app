import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoService } from './../services/photo.service';
import { PokemonStateService } from './../services/pokemon-state.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  randomPokemon: any;
  battleResultColor: string = '';
  battleResultText: string = '';

  constructor(
    private http: HttpClient,
    public photoService: PhotoService,
    private pokemonStateService: PokemonStateService
  ) {}

  ionViewDidEnter() {
    this.fetchRandomPokemon();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1;

    this.http.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .subscribe((data: any) => {
        this.randomPokemon = data;

        this.evaluateBattle();
      });
  }

  evaluateBattle() {
    const userPokemonAbilities = this.getUserPokemonAbilities();
    const opponentPokemonAbilities = this.randomPokemon.abilities.length;

    if (userPokemonAbilities === opponentPokemonAbilities) {
      this.battleResultColor = 'yellow';
      this.battleResultText = 'Empate';
      this.pokemonStateService.updateBattleResult('draw');
    } else if (userPokemonAbilities > opponentPokemonAbilities) {
      this.battleResultColor = 'green';
      this.battleResultText = 'Ganhou';
      this.pokemonStateService.updateBattleResult('won');
    } else {
      this.battleResultColor = 'red';
      this.battleResultText = 'Perdeu';
      this.pokemonStateService.updateBattleResult('lost');
    }
  }

  getUserPokemonAbilities(): number {
    return this.pokemonStateService.getPokemonAbilities(); 
  }
}

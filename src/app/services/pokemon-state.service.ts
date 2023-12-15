import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonStateService {
  private userPokemon: any = {
    abilities: [],
    battles: { won: 0, lost: 0, draw: 0 }
  };

  private battles: { won: number; lost: number; draw: number } = { won: 0, lost: 0, draw: 0 };

  private userPokemonList: any[] = [];

  setUserPokemon(pokemon: any) {
    this.userPokemon = Object.assign({}, pokemon, {
      battles: { won: 0, lost: 0, draw: 0 }
    });
  }

  getUserPokemon() {
    return this.userPokemon;
  }

  getPokemonAbilities(): number {
    return this.userPokemon.abilities.length;
  }

  updateBattleResult(result: 'won' | 'lost' | 'draw', pokemon?: any) {
    if (result === 'won') {
      this.battles.won++;
      if (pokemon) {
        pokemon.battles.won++;
      }
    } else if (result === 'lost') {
      this.battles.lost++;
      if (pokemon) {
        pokemon.battles.lost++;
      }
    } else {
      this.battles.draw++;
      if (pokemon) {
        pokemon.battles.draw++;
      }
    }
  }

  getBattleStats() {
    return this.battles;
  }

  addUserPokemon(pokemon: any) {
    const newPokemon = Object.assign({}, pokemon, {
      battles: { won: 0, lost: 0, draw: 0 }
    });
    this.userPokemonList.push(newPokemon);
  }

  getUserPokemonList() {
    return this.userPokemonList;
  }
}

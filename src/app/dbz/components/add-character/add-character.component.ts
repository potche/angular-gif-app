import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  private initCharacter: Character = {
    id: '',
    name: '',
    power: 0,
  };
  public character: Character = { ...this.initCharacter };

  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    this.character = { ...this.initCharacter };
  }
}

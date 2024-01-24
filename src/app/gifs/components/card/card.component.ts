import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  template: `
    <div class="card mb-2 text-center bg-dark">
      <shared-lazy-image
        [url]="gif.images.downsized_medium.url"
        [alt]="gif.title || 'no name'"
      ></shared-lazy-image>

      <div class="card-body">
        <p class="card-text text-light">{{ gif.title | titlecase }}</p>
      </div>
    </div>
  `,
})
export class CardComponent implements OnInit {
  @Input()
  public gif!: Gif;

  constructor() {}

  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('Gif property is requered');
    }
  }
}

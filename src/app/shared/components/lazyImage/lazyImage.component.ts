import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyImage.component.html',
})
export class LazyImageComponent {
  @Input()
  public url!: string;
  @Input()
  public alt!: string;
  public hasLoaded: boolean;

  constructor() {
    this.hasLoaded = false;
  }

  onLoad() {
    console.log('image loaded');
    this.hasLoaded = true;
  }
}

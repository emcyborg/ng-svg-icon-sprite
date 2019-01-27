import { Component, Input, OnInit } from '@angular/core';
import { IconSpriteService } from './icon-sprite.service';

@Component({
  selector: 'svg-icon-sprite',
  styleUrls: ['./icon-sprite.component.scss'],
  templateUrl: './icon-sprite.component.html'
})
export class IconSpriteComponent implements OnInit {

  @Input() public src: string;
  @Input() public classes = 'icon';
  @Input() public width = '100%';
  @Input() public height: string;
  @Input() public viewBox: string;
  @Input() public preserveAspectRatio = 'xMinYMax meet';
  @Input() public attribute: [string, string] | Array<[string, string]>;
  @Input() public title: string;

  constructor(
    private iconSpriteService: IconSpriteService
  ) {}

  ngOnInit() {
    // If the src does not contain a # and a spritePath is set, concatenate it
    if (this.src && !this.src.includes('#') && this.iconSpriteService.spritePath) {
      this.src = `${ this.iconSpriteService.getPath() }#${ this.src }`;
    }
  }
}

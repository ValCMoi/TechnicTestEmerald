import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-icone-svg',
  templateUrl: './icone-svg.component.html',
  styleUrls: ['./icone-svg.component.scss']
})
export class IconeSvgComponent {
  @HostBinding('style.-webkit-mask-image')
  private _path!: string;

  @Input()
  public set path(filePath: string) {
    this._path = `url("${filePath}")`;
  }
}

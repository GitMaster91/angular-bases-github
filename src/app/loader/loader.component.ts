import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() overlayColor: string = 'rgba(0, 0, 0, 0.5)';
  @Input() spinnerColor: string = '#fff';
}

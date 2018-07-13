import { Component } from '@angular/core';
import { ElectronService } from '../../node_modules/ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hamdi';

  constructor(private _electronService: ElectronService) {}

  launchWindow() {
    this._electronService.shell.openExternal('https://coursetro.com');
  }
}

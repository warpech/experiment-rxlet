import { Component } from '@angular/core';
import { NameService } from './name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  protected readonly names = this.nameService.getNames();

  constructor(private nameService: NameService) {
    
  }
}

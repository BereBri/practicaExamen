import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public componentes!: Observable<Componente[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.componentes = this.dataService.getMenuOpts();
  }

  initializeApp(){
    this.componentes = this.dataService.getMenuOpts();
  }
}

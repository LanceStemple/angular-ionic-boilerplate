import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';

import { AppMenuComponent } from '../app-menu/app-menu.component';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    IonRouterOutlet,
    SharedModule,
    AppHeaderComponent,
    AppMenuComponent,
  ],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

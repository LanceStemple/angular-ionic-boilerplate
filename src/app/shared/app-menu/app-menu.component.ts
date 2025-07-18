import { Component, OnInit } from '@angular/core';
import { SharedModule } from './../../shared.module';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
  imports: [SharedModule],
  standalone: true,
})
export class AppMenuComponent implements OnInit {
  constructor(private router: Router, private menu: MenuController) {}

  ngOnInit() {}

  async navigate(path: string) {
    await this.menu.close();
    this.router.navigateByUrl(path);
  }
}

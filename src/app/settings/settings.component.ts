import { Component, OnInit } from '@angular/core';

import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [SharedModule],
})
export class SettingsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

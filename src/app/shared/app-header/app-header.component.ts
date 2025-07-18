import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  imports: [SharedModule],
  styleUrls: ['./app-header.component.scss'],
  standalone: true,
})
export class AppHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

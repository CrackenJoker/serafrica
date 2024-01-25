import { Component } from '@angular/core';

interface SideNavMenu{
  screenWidth:number,
  collapsed:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'serafrica';
  sideMenuCollapsed = false
  screenWidth = 0
  abrirMenu(data:SideNavMenu):void{
    this.screenWidth = data.screenWidth
    this.sideMenuCollapsed = data.collapsed
  }
}

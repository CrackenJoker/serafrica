import { Component,Output,EventEmitter, OnInit, HostListener } from '@angular/core';
import { navDataMenu } from './nav-data';
import { animate, animation, keyframes, style, transition, trigger } from '@angular/animations';


interface SideNavMenu{
  screenWidth:number,
  collapsed:boolean
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  animations:[
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
        animate('350ms',
        style({opacity:1}))
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate('350ms',
        style({opacity:0}))
      ])
      
    ])
    ,trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
        keyframes([
          style({transform:'rotate(0deg)',offset:0}),
          style({transform:'rotate(2turn)',offset:1})
        ]))
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit{
  @Output() sideMenu:EventEmitter<SideNavMenu>=new EventEmitter()
  collapsed = false
  screenWidth=0
  navData = navDataMenu
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
  
      if (this.screenWidth <= 768) {
        this.collapsed = false;
        this.sideMenu.emit({ screenWidth: this.screenWidth, collapsed: this.collapsed });
      }
    }
  }
  
  ngOnInit(): void {
    this.screenWidth = window.innerWidth
  }
  
  
  abrirMenu():void{
    this.collapsed = !this.collapsed;
    this.sideMenu.emit({screenWidth:this.screenWidth,collapsed:this.collapsed})
  }
  fecharMenu():void{
    this.collapsed = false
    this.sideMenu.emit({screenWidth:this.screenWidth,collapsed:this.collapsed})
  }
}

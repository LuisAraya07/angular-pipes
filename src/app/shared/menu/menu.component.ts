import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit{

  items: MenuItem[] = [];
  constructor() { }
  

  ngOnInit(): void {
        this.items = [
            {
                label: 'Angular pipes',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Dates and texts',
                        icon: 'pi pi-align-left',
                        routerLink: ''
                    },
                    {
                        label: 'Numbers',
                        icon: 'pi pi-dollar',
                        routerLink: 'numbers'
                    },
                    {
                        label: 'No commons',
                        icon: 'pi pi-globe',
                        routerLink: 'no-commons'
                    },
                ]
            },
            {
                label: 'Custom pipes',
                icon: 'pi pi-cog',
                routerLink: 'order'
            }
        ];
    }
}

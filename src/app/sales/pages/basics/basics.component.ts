import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent{
  nombreLower: string = 'fernando';
  nombreUpper: string = 'FERNANDO';
  nombreCompleto: string = 'LuIs ArAya';

  date: Date = new Date();

  constructor() {

    this.call();  
  }

  call(){
    setTimeout(() => {
      this.date = new Date();
      this.call();
    }, 1);
  }



  

  

}

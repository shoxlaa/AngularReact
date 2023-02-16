import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  public  photo : string ="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg"
  public  number: number=0;

  public ChangePhoto(newNum:number):void {

    this.number = newNum;
    if (this.number == 0) {
      this.photo = "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg"
    } else if (this.number == 1)
    {
      this.photo= "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
    }
    else if(this.number==2)
    {
      this.photo="https://images.unsplash.com/photo-1630533770410-c01147c042a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaWxvdWV0dGV8ZW58MHx8MHx8&w=1000&q=80"
    }
  }

  public RightOrLeft(plusOrMinus:string):void {

  if(plusOrMinus=='-')
  {
    this.number= (this.number-1)%3<0?this.number=2:(this.number-1)%3;
  }
  else
  {
    this.number= (this.number+1)%3;
  }
  this.ChangePhoto(this.number);
}




}

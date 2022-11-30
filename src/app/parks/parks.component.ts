import { Component } from '@angular/core';

import { products } from '../products';


@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent {

  products = products;

  image_path = "https://et710.com/website/jm/";

  share() {
    window.alert('The product has been shared with ET-710!');
  }


}

import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  gridData = [
    {
        "name": "Prime Mart",
        "uuid": "6e9ef201-8f28-4a2a-8fcc-e9b6ea807666"
    }
];

  constructor(private prdService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    const httpparams = new HttpParams();
    this.prdService.getClients(httpparams).subscribe( res => {
      console.log(res);
      if (res.body){
        this.gridData = res.body;
      }
    }, error => {
      alert(error.message);
    });
  }

}

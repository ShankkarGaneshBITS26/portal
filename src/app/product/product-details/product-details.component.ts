import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  prdDetails = [
    {
        "name": "Pakcedasd",
        "uuid": "string",
        "product": [
            {
                "name": "BISU",
                "uuid": "string",
                "netPrice": 0,
                "stock": 10
            }
        ]
    },
    {
        "name": "string",
        "uuid": "strinasdasdg",
        "product": []
    }
];
  constructor(private prdService: ProductsService, private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    const httpparams = new HttpParams();
    this.prdService.getProductsDetails(this.activeroute.snapshot.params['productId'], httpparams).subscribe( res => {
      console.log(res);
      if (res.body){
        this.prdDetails = res.body;
      }
    }, error => {
      alert(error.message);
    });
  }

}

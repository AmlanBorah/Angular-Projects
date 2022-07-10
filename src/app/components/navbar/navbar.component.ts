import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ComponentsApiService } from 'src/app/services/components-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  shoppingCart = faShoppingCart
  searchIcon = faSearch
  totalItems:number = 0

  constructor(private componentApi: ComponentsApiService) { }

  ngOnInit(): void {
    this.componentApi.getTotalItems().subscribe(no => this.totalItems = no)
  }

}

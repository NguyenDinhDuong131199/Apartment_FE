import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss']
})
export class LayoutMainComponent implements OnInit {

  public mode;
  public hasBackdrop;
  public appitems = [
    {
      label: 'Cấu hình bán hàng',
      icon: 'anchor',
      items: [
        {
          label: 'Danh mục món ăn',
          link: '/layout-main/food-catalog',
          icon: 'receipt_long',
        },
        {
          label: 'Món ăn',
          link: '/layout-main/food',
          icon: 'fastfood',
        }
      ]
    }
  ];

  public config = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    listBackgroundColor: `rgb(255, 255, 255)`,
    fontColor: `rgb(8, 54, 71)`,
    backgroundColor: `rgb(255, 255, 255)`,
    selectedListFontColor: `black`,
    highlightOnSelect: true,
    collapseOnSelect: true,
    rtlLayout: false
  };

  public expandCollapseStatus = 'expand'; // expand|collapse

  constructor(
    private router: Router
  ) {
    this.isLogin();
   }

  ngOnInit() {
  }

  public isLogin() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
    }
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}

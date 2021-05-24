import { BottomNavigationSelectEvent } from '@progress/kendo-angular-navigation';
import { Router } from '@angular/router';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
    public items: Array<any> = [];

    showMobile = true;

    public kendokaAvatar = 'https://i.imgur.com/NRgYxRu.jpg';

    ngOnInit() {
      this.breakpointObserver
        .observe(['(max-width: 768px)'])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.showMobile = true;
          } else {
            this.showMobile = false;
          }
        });
    }

    constructor(
      public breakpointObserver: BreakpointObserver,
      private router: Router
    ) {
      this.items = this.mapItems(router.config);
      this.items[0].selected = true;
    }

    public onSelect(ev: BottomNavigationSelectEvent): void {
        this.router.navigate([ ev.item.path ]);
    }

    public mapItems(routes: any[]): any[] {
        return routes.filter(item => item.text && ["Tasks", "Groups", "Profile"].includes(item.text)).map(item => {
              return {
                  text: item.text,
                  icon: item.icon,
                  path: item.path ? item.path : ''
              };
        });
    }
}

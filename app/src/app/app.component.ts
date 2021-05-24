import { BottomNavigationSelectEvent } from '@progress/kendo-angular-navigation';
import { Router } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    public items: Array<any> = [];

    constructor(private router: Router) {
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

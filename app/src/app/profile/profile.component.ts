import { Component } from '@angular/core';

@Component({
    selector: 'my-profile',
    styleUrls: ['./profile.component.css'],
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
    public kendokaAvatar = 'https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png';

   public entries = [
       { title: 'Work', color: '#FF6358' },
       { title: 'Family', color: '#28B4C8' },
       { title: 'Birthdays', color: '#FFC000' }
   ];
}

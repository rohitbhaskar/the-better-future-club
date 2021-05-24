import { Component } from '@angular/core';

@Component({
    selector: 'my-profile',
    styleUrls: ['./profile.component.css'],
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
  public kendokaAvatar = 'https://i.imgur.com/NRgYxRu.jpg';

  public entries = [
      { title: 'Preferences', color: '#FF6358', icon:'saturation' },
      { title: 'Achievements', color: '#28B4C8', icon:'star' },
      { title: 'Settings', color: '#FFC000', icon:'gear' }
  ];
}

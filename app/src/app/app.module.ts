import { IconsModule } from '@progress/kendo-angular-icons';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { TasksComponent } from './tasks/tasks.component';
import { GroupsComponent } from './groups/groups.component';
import { AvatarModule } from '@progress/kendo-angular-layout';
import { RouterModule } from '@angular/router';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { HttpClientModule } from '@angular/common/http';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { AppRoutingModule } from './app-routing.module';


const bottomNavigationRoutes = [
    { path: '', component: TasksComponent, text: 'Tasks', icon: 'email' },
    { path: 'groups', component: GroupsComponent, text: 'Groups', icon: 'hand' },
    { path: 'profile', component: ProfileComponent, text: 'Profile', icon: 'user' }
  ];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ButtonsModule,
        DropDownsModule,
        InputsModule,
        NavigationModule,
        RouterModule.forRoot(bottomNavigationRoutes),
        AppRoutingModule,
        AvatarModule,
        IconsModule,
        ListViewModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        ProfileComponent,
        TasksComponent,
        GroupsComponent,
        TaskDetailComponent
    ],
    providers: [
      {
        provide: APP_BASE_HREF,
        useValue: window.location.pathname
      }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

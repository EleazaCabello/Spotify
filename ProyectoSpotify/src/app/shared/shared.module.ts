import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';
import { HeaderUserComponent } from '@shared/components/header-user/header-user.component';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';



@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent,
    MediaPlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent
  ]
})
export class SharedModule { }

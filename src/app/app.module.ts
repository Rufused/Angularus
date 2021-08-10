import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { UsersComponent } from './components/Users-folder/users/users.component';
import { PostsComponent } from './components/Posts-folder/posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/Users-folder/user/user.component';
import { UserDetailsComponent } from './components/Users-folder/user-details/user-details.component';
import { PostComponent } from './components/Posts-folder/post/post.component';
import { PostDetailsComponent } from './components/Posts-folder/post-details/post-details.component';

let routes:Routes = [
  {path:"users",component:UsersComponent,children:[
    {path:':id',component:UserDetailsComponent}
    ]},
  {path:"posts",component:PostsComponent,children:[
    {path:':id',component:PostDetailsComponent}
    ]}
  ]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    UserDetailsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

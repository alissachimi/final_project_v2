import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { Exec2Component } from './exec2/exec2.component';
import { DiscussionInput3Component } from './discussion-input3/discussion-input3.component';
import { Events5Component } from './events5/events5.component';
import { DiscussionDisplay4Component } from './discussion-display4/discussion-display4.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path:'', component: Home1Component
  },
  {
    path:'exec',component: Exec2Component
  },
  {
    path:'discussion', component: DiscussionInput3Component
  },
  {
    path:'events',component: Events5Component
  },
  {
    path:'footer', component: FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

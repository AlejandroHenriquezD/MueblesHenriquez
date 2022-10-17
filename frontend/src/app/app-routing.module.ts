import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './views/catalogue/catalogue.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
// import { ListComponent } from './views/list/list.component';
// import { AboutUsComponent } from './views/about-us/about-us.component';
// import { PageNotFoundComponent } from './views/page-not-found/page-notfound.component';

const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'catalogue', component: CatalogueComponent },
{ path: '', redirectTo: '/home', pathMatch:'full'},
// { path:'**', component:PageNotFoundComponet}
];
@NgModule({
exports: [RouterModule],
imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
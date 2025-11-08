import { Routes } from '@angular/router';
import { Name } from './+page/name/name';
import { Shomaredaneshjooyi } from './+page/shomaredaneshjooyi/shomaredaneshjooyi';
import { Age } from './+page/age/age';
import { Job } from './+page/job/job';
import { FavoriteSport } from './+page/favorite-sport/favorite-sport';
import { Notfound } from './+page/notfound/notfound';

export const routes: Routes = [
    {path:'Name' ,component:Name},
    {path:'shomaredaneshjooyi', component:Shomaredaneshjooyi},
    {path:'age', component:Age},
    {path:'job', component:Job},
    {path:'favoriteSport', component:FavoriteSport},
    {path:'', redirectTo:'/Name',pathMatch:'full'},
    {path:'**', component:Notfound}


];


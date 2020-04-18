import { Resolve, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { PhotoService } from "../photo/photo.service"
import { Photo } from "../photo/photos";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

    constructor(private service : PhotoService){

    }

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]>{
     const userName = route.params.userName;
     return this.service.listFromUser(userName);
   }

}
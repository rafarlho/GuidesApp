import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  toggleSideNav = new EventEmitter<boolean>()

  
}

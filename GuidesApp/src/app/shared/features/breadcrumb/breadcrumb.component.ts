import { Component, inject } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb-service/breadcrumb.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {

  breadcrumbs: Array<{ label: string, url: string }> = [];
  private breadcrumbService = inject(BreadcrumbService)

  ngOnInit() {
    this.breadcrumbs = this.breadcrumbService.breadcrumbs;
    console.log(this.breadcrumbs)
  }
}

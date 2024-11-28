import { Observable } from 'rxjs';
import { FooterService } from './../core/services/footer/footer.service';
import { Component } from '@angular/core';
import { GroupLink } from '../core/models/group-link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private readonly footerService: FooterService) {}

  getFooterLinks(): Observable<GroupLink[]> {
    return this.footerService.getFooterGroupLink();
  }
}

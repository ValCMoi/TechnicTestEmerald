import { Component } from '@angular/core';
import { GroupLink } from '../core/models/links';
import { FooterService } from '../core/services/footer/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerLinks: GroupLink[];

  constructor(private readonly footerService: FooterService) {
    this.footerLinks = this.footerService.getFooterGroupLink();
  }
}

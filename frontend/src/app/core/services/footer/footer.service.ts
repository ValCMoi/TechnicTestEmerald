import { Injectable } from '@angular/core';
import { GroupLink } from '../../models/group-link';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  static URL_MOCKUP: string = 'core/data/mockup/footer-link.json';

  private unsubscribe$: Subject<void> = new Subject();

  footerLinks: BehaviorSubject<GroupLink[]> = new BehaviorSubject(
    [] as GroupLink[]
  );

  constructor(private http: HttpClient) {
    this.initFooterLink();
  }

  initFooterLink(): void {
    /*
    this.http
      .get(FooterService.URL_MOCKUP)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((groupLinks) => {
        this.footerLinks.next(JSON.parse(groupLinks as any));
      });
      */
  }

  getFooterGroupLink(): Observable<GroupLink[]> {
    return this.footerLinks;
  }
}

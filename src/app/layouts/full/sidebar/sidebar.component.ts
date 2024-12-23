import { MediaMatcher } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { Menu, MenuItems } from '../../../shared/menu-items/menu-items';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [DemoMaterialModule, RouterModule, CommonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class AppSidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private currentPath = '';

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  recordCurrentPath(item: Menu) {
    this.currentPath = item.path;
  }

  toggleMenuState(item: Menu) {
    if (item.state === 'close') {
      item.state = 'open';
    } else {
      item.state = 'close';
    }
    this.currentPath = item.path;
  }
}

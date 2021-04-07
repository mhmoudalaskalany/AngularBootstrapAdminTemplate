import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Shell } from 'base/components/shell';
import { AuthService } from 'core/services/auth/auth.service';
import { ConfigService } from 'core/services/config/config.service';
import { TranslationService } from 'core/services/localization/translation.service';
import { StorageService } from 'core/services/storage/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;
  lang;
  get Translate(): TranslationService { return Shell.Injector.get(TranslationService); }
  get Storage(): StorageService { return Shell.Injector.get(StorageService); }
  get Router(): Router { return Shell.Injector.get(Router); }
  get Config(): ConfigService { return Shell.Injector.get(ConfigService); }
  get AuthService(): AuthService { return Shell.Injector.get(AuthService); }
  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
  }

  ngOnInit() {
  }

  // toggle sidebar in small devices
  toggleOffcanvas(): void {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  // toggle sidebar
  toggleSidebar(): void {
    let body = document.querySelector('body');
    if ((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if (this.iconOnlyToggled) {
        body.classList.add('sidebar-icon-only');
      } else {
        body.classList.remove('sidebar-icon-only');
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if (this.sidebarToggled) {
        body.classList.add('sidebar-hidden');
      } else {
        body.classList.remove('sidebar-hidden');
      }
    }
  }

  setLanguage(lang: string): void {
    this.lang = lang;
    this.Translate.setLanguage(lang);
    this.Storage.setItem('language', lang);
    console.log('language', this.Translate.lang);
  }
  goToProfile(): void {
    window.location.href = this.Config.getAppUrl('MY-PROFILE');
  }


  async logout() {
    await this.AuthService.signout();
  }

  // toggle right sidebar
  // toggleRightSidebar() {
  //   document.querySelector('#right-sidebar').classList.toggle('open');
  // }

}

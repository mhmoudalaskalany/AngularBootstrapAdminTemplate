import { BrowserModule, Title } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentAnimateDirective } from 'shared/directives/content-animate.directive';
import { FooterComponent } from 'shared/footer/footer.component';
import { NavbarComponent } from 'shared/navbar/navbar.component';
import { SidebarComponent } from 'shared/sidebar/sidebar.component';
import { SpinnerComponent } from 'shared/spinner/spinner.component';
import { TodoListComponent } from 'apps/todo-list/todo-list.component';
import { TodoComponent } from 'apps/todo-list/todo/todo.component';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigService } from 'core/services/config/config.service';
import { TokenInterceptor } from 'core/services/interceptors/token.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from 'core/core.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedComponentsModule } from 'shared-components/shared-components.module';
import { HomeComponent } from './components/home/home.component';

/* a head of compile functions */
const initializerConfigFn = (appConfig: ConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    SpinnerComponent,
    HomeComponent,
    TodoComponent,
    TodoListComponent,
    ContentAnimateDirective
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      },
      isolate: false
    }),
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializerConfigFn,
      multi: true,
      deps: [ConfigService],
    },
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

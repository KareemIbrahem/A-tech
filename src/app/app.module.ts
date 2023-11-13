import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddNewMaterialsComponent } from "./add-new-materials/add-new-materials.component";
import { NavBarComponent } from "./add-new-materials/nav-bar/nav-bar.component";
import { PersonalInfoComponent } from "./add-new-materials/personal-info/personal-info.component";
import { ResourceTypeComponent } from "./add-new-materials/resource-type/resource-type.component";
import { ResourcesAvailablelityComponent } from "./add-new-materials/resources-availablelity/resources-availablelity.component";
import { FormsModule } from "@angular/forms";
import { SupplierWorkingHoursComponent } from "./add-new-materials/supplier-working-hours/supplier-working-hours.component";
import { TimeFieldComponent } from "./add-new-materials/supplierWorkingHours/time-field/time-field.component";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { LanguageSwitcherComponent } from './add-new-materials/language-switcher/language-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewMaterialsComponent,
    NavBarComponent,
    PersonalInfoComponent,
    ResourceTypeComponent,
    ResourcesAvailablelityComponent,
    SupplierWorkingHoursComponent,
    TimeFieldComponent,
    LanguageSwitcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

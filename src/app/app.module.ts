import { NgModule } from "@angular/core";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
    imports: [BrowserModule, WelcomeComponent, AppComponent],
})
export class AppModule {
    constructor() {
        bootstrapApplication(AppComponent);
    }
}

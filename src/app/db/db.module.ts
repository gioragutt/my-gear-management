import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class DbModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DbModule,
      providers: []
    };
  }
}

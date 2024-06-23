import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

// Componentes
import { convenioC } from './componentes/convenio/convenio.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes_global/navbar/navbar.component';
import { NavbarGeneralComponent } from './componentes_global/navbar-general/navbar-general.component';
import { LaboratorioFormComponente } from './componentes/Laboratorios/laboratorio-form/laboratorio-form.component';
import { LaboratorioListComponent } from './componentes/Laboratorios/laboratorio-list/laboratorio-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarGeneralComponent,
    convenioC,
    LaboratorioFormComponente,
    LaboratorioListComponent,
    // Otros componentes de tu aplicación
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    // Angular Material Modules
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

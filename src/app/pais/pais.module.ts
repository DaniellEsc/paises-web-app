import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CapitalComponent } from './pages/capital/capital.component';
import { PaisComponent } from './pages/pais/pais.component';
import { RegionComponent } from './pages/region/region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';




@NgModule({
  declarations: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarcitaPageRoutingModule } from './agendarcita-routing.module';

import { AgendarcitaPage } from './agendarcita.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarcitaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AgendarcitaPage]
})
export class AgendarcitaPageModule {}

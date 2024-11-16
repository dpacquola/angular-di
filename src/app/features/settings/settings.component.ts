import { Component } from '@angular/core';
import { EditorComponent } from './components/editor.component';
import { PreviewComponent } from './components/preview.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    EditorComponent,
    PreviewComponent
  ],
  template: `
    <h1 class="text-3xl text-center my-6">Settings</h1>

    <div class="flex flex-col md:flex-row mx-3">
      <div class="w-full md:w-1/2">
        <app-editor />
      </div>
      <div class="w-full md:w-1/2">
        <app-preview />
      </div>
    </div>

<!-- se clicco sul bottone o scrivo sulla input renderizzo tutto anche se
     non sto modificando nulla relativamente alla editor e alla preview
     Quindi devo usare
        changeDetection: ChangeDetectionStrategy.OnPush,
     sia sulla navbar che in editor e preview -->
    <button (click)="doNothing()">do nothing</button>
    <input type="text" (keydown)="doNothing()">

  `,
  styles: ``
})
export default class SettingsComponent {

  doNothing() {

  }
}

import { Component } from '@angular/core';
import { EditorComponent } from './components/editor.component';
import { PreviewComponent } from './components/preview.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    EditorComponent,
    PreviewComponent,
    NgOptimizedImage
  ],
  template: `
    <h1 class="text-3xl text-center my-6">Settings</h1>

    <div class="flex flex-col md:flex-row mx-3">
      <div class="w-full md:w-1/2">
        <app-editor/>
      </div>
      <div class="w-full md:w-1/2">
        <app-preview/>
      </div>
    </div>

    <!-- se clicco sul bottone o scrivo sulla input renderizzo tutto anche se
         non sto modificando nulla relativamente alla editor e alla preview
         Quindi devo usare
            changeDetection: ChangeDetectionStrategy.OnPush,
         sia sulla navbar che in editor e preview -->
    <button (click)="doNothing()">do nothing</button>
    <input type="text" (keydown)="doNothing()">

    <br><br><br>

    <div class="page">
      <h1>Demo CDN + ngSRC</h1>

      1 IMG senza ottimizzazione CDN
      <img src="assets/images/img_big.JPG" alt="">

      <!--      immmagine con il PATH specificato che punta alla CDN-->
      2 IMG con CDN con path esplicito
      <img src="https://gqctmza7.dev.cdn.imgeng.in/assets/images/img_big.JPG" alt="">

<!--      uso ngSrc per ottimizzare le immaginia, definito in Angular, e avendo modificato il app.config.ts punto ancora su CDN-->
      3 Uso cgSrc con modifica path su app.config
      <img ngSrc="assets/images/img_big.JPG" alt=""
           width="400" height="400"
           ngSrcset="600w, 1024w, 1400w"
           sizes="(max-width: 600px) 100vw, 50vw"
           priority="high"
      >

      <div>Powered by</div>
      <img
        ngSrc="assets/images/js.png?imgeng=w_200" alt=""
        [width]="200"
        [height]="70"
      >

    </div>


  `,
  styles: ``
})
export default class SettingsComponent {

  doNothing() {

  }
}

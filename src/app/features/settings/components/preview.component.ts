import { JsonPipe } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { SettingsService } from '../../../core/settings.service';

@Component({
  selector: 'app-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <h1 class="text-xl my-6">Preview</h1>

    <div
      class="text-2xl"
      [style.color]="settingsService.color()"
      >
<!--      [style.color]="settingsService.config().color"-->
<!--    >-->
<!--  andando a chiamare il servizio usando una sua proprietà genero l'aggiornamento dell'intero signal
      {{settingsService.config().title}}

      Se invece uso un computed signal questo si aggiorna solo se cambia il valore
      -->
      {{settingsService.title()}}
    </div>

<!--    @if (settingsService.config().enableShop) {-->
    @if (settingsService.isShopEnabled()) {
    <button
    class="btn btn-primary my-6"
    >
    Add To Cart
    </button>
    }


    <!--<pre>{{settingsService.config() | json}}</pre>-->

    {{render()}}
  `,
  styles: ``
})
export class PreviewComponent {
  settingsService = inject(SettingsService)

  render() {
    console.log('render preview')
  }

}

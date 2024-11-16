import {computed, Injectable, signal} from '@angular/core';


type Config = {
  title: string;
  color: string;
  enableShop: boolean;
}
// const a: Config['enableShop']  // il config[key] restituisce il tipo della key


@Injectable({
   providedIn: 'root'}
)
export class SettingsService {
  config = signal<Config>({
    title: 'Angular Shop',
    color: '#ffffff',
    enableShop: true
  })

  //inserisco questi computed signal per ridurre il numero di chiamate
  title = computed(() => this.config().title)
  color = computed(() => this.config().color)
  isShopEnabled = computed(() => this.config().enableShop)

  //la seguente funzione sostituisce quelle riportate dopo che aggiornano una singola prprietà
  /*
  setConfig(propName: keyof Config, value: any) {
    this.config.update(cfg => ({ ...cfg, [propName]: value }))
  }
*/
  setConfig<K extends keyof Config>(propName: K, value: Config[K]) {
    this.config.update(cfg => ({ ...cfg, [propName]: value }))
  }


  setTitle(title: string) {
    this.config.update(cfg => ({ ...cfg, title:title })) //({ ...cfg, title:title }) = ({ ...cfg, title })
  }

  setColor(color: string) {
    this.config.update(cfg => ({ ...cfg, color }))
  }

  setEnableShop(enableShop: boolean) {
    this.config.update(cfg => ({ ...cfg, enableShop }))
  }
}

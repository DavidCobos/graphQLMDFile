import { IOClients } from '@vtex/api'

import { FacturacionClient } from './facturacion'
import Uploader from './uploader'

export class Clients extends IOClients {
  public get facturacion() {
    return this.getOrSet('facturacion', FacturacionClient)
  }

  public get uploader() {
    return this.getOrSet('uploader', Uploader)
  }

}

import { MasterData } from '@vtex/api'

export class FacturacionClient extends MasterData {
  private dataEntity = 'FZ'
  private schemaName = 'mdv1'

  public async getFacturacion(orgid: string, page: number, pageSize: number) {

    console.log("aqui")

    const hola = await this.searchDocuments({
      dataEntity: this.dataEntity,
      schema: this.schemaName,
      fields: ["usoCFDI", "rfc", "email", "orgid", "nombrearchivo"],
      where: orgid ? `orgid=${orgid}` : '',
      pagination: {
        page: page,
        pageSize: pageSize
      }
    })

    console.log(hola)

    return hola
  }

  public async createFacturacion(usoCFDI: string, rfc: string, email: string, orgid: string, nombrearchivo: string) {

    console.log("sigue llegando")

    const hola = await this.createDocument({
      dataEntity: this.dataEntity,
      schema: this.schemaName,
      fields: {
        usoCFDI: usoCFDI,
        rfc: rfc,
        email: email,
        orgid: orgid,
        nombrearchivo: nombrearchivo
      }
    })

    console.log(hola)

    return hola

  }

}
import { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export default class Uploader extends JanusClient {
    
    private readonly routes = {
        uploadFile:(accountName:string, id:string) => 
        `http://${accountName}.vtexcommercestable.com.br/api/dataentities/FZ/documents/${id}/archivo/attachments`
    }

  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, {...options, headers:{
        VtexIdclientAutCookie: context.authToken,
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/vnd.vtex.ds.v10+json'
    }})
  }

  public async uploadFile( id:string, dataFile: any): Promise<any> {
    const result = await this.http.post(this.routes.uploadFile(this.context.account, id), dataFile)
    return result
  }
}
interface Args {
    orgid: string;
    page: number;
    pageSize: number;
}

interface ArgCreate {
    usoCFDI: string;
    rfc: string;
    orgid: string;
    email: string;
    nombreArchivo: string;
    dataFile: any;
}

export const getFacturation = async (
    _: any,
    { orgid, page, pageSize }: Args,
    { clients: { facturacion } }: Context
) => {
    return facturacion.getFacturacion(orgid, page, pageSize)
}

export const createFacturacion = async (
    _: any,
    { usoCFDI, rfc, orgid, email, nombreArchivo, dataFile }: ArgCreate,
    { clients: { facturacion, uploader } }: Context
) => {
    console.log("resolver")
    console.log(dataFile)

    const res = await facturacion.createFacturacion(usoCFDI, rfc, email, orgid, nombreArchivo)
    uploader.uploadFile(res.DocumentId, dataFile)

    //https://{account}.vtexcommercestable.com.br/api/dataentities/{acronym}/documents/{idWithouthAcronym}/{fieldName}/attachments/{file

    return {Url: `https://privarsa.vtexcommercestable.com.br/api/dataentities/FZ/documents/${res.DocumentId}/archivo/attachments/${nombreArchivo}`}
}

     
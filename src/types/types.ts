export interface Gf{
    url:string
}


export interface FormGF{
    numero:string,
    status:string
    emissao:Date | null
    vencimento:Date |  null
}

export interface FormRemetente{
    cc_sema:string
    ctf:string
    nome:string
    cpf_cnpj:string
    municipio_uf:string

}

export interface FormDestinatario{
    cc_sema:string
    ctf:string
    nome:string
    cpf_cnpj:string
    municipio_uf:string
}

export interface GF3{
    gf3:FormGF,
    remetente:FormRemetente
    destinatario:FormDestinatario

}
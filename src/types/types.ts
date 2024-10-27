export interface SisfloraURL{
    url:string
}


export interface FormGF{
    GfNumero:string,
    Status:string
    DataEmissao:Date | null
    DataVencimento:Date |  null
}

export interface FormRemetente{
    CcSema:string
    Ctf:string
    Nome:string
    Cpf_Cnpj:string
    Municipio_Uf:string

}

export interface FormDestinatario{
    CcSema:string
    Ctf:string
    Nome:string
    Cpf_Cnpj:string
    Municipio_Uf:string
}

export interface GF3{
    GF3:FormGF,
    Remetente:FormRemetente
    Destinatario:FormDestinatario

}
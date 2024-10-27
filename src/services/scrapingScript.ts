const get_remetente_script = `
    const form_visiblity = document.getElementsByName("formGerenciar")[0].checkVisibility

    if (!form_visiblity) {
        return null
    }


    const form = document.getElementsByName("formGerenciar")[0].children[1]

    const rem_label = form.children[0].children[0].textContent

    const ccsema_label = form.children[1].children[0].children[0].children[0].textContent
    const ccsema_value = form.children[1].children[0].children[0].children[1].textContent

    const ctf_label = form.children[2].children[0].children[0].children[0].textContent
    const ctf_value = form.children[2].children[0].children[0].children[1].textContent

    const nome_label = form.children[3].children[0].children[0].children[0].textContent
    const nome_value = form.children[3].children[0].children[0].children[1].textContent

    const cnpj_cpf_label = form.children[4].children[0].children[0].children[0].textContent
    const cnpj_cpf_value = form.children[4].children[0].children[0].children[1].textContent

    const municipio_label = form.children[4].children[1].children[0].children[0].textContent
    const municipio_value = form.children[4].children[1].children[0].children[1].textContent


    const Rementente = {
        CcSema:String(ccsema_value),
        Ctf:String(ctf_value),
        Nome:String(nome_value),
        Cpf_Cnpj:String(cnpj_cpf_value),
        Municipio_Uf:String(municipio_value)
    }


    if(!Rementente){
        return null
    }

    return Rementente
`

const get_gf_script = `
    const form_visiblity = document.getElementsByName("formGerenciar")[0].checkVisibility

    if (!form_visiblity) {
        return null
    }


    const form = document.getElementsByName("formGerenciar")[0]

    const gf_label = form.children[0].children[0].children[0].children[0].children[0].textContent
    const gf_num = form.children[0].children[0].children[0].children[0].children[1].textContent

    const gf_status_label = form.children[0].children[0].children[1].children[0].children[0].textContent
    const gf_status_value = form.children[0].children[0].children[1].children[0].children[1].textContent

    const gf_emissao_label = form.children[0].children[1].children[0].children[0].children[0].textContent
    const gf_emissao_value = form.children[0].children[1].children[0].children[0].children[1].textContent

    const gf_vencimento_label = form.children[0].children[1].children[1].children[0].children[0].textContent
    const gf_vencimento_value = form.children[0].children[1].children[1].children[0].children[1].textContent


    const emissao_dateParts = gf_emissao_value.split('/')
    const vencimento_dateParts = gf_vencimento_value.split('/')

    const GF3 = {
        GfNumero:String(gf_num),
        DataEmissao: new Date(emissao_dateParts[2], emissao_dateParts[1]-1, emissao_dateParts[0]),
        Status:String(gf_status_value),
        DataVencimento:new Date(vencimento_dateParts[2], vencimento_dateParts[1]-1, vencimento_dateParts[0])
    }

    
    if (!GF3) {
        return null
    }

    return GF3
`





const get_destinatario_script = `
    const form_visiblity = document.getElementsByName("formGerenciar")[0].checkVisibility

    if (!form_visiblity) {
        return null
    }


    const form = document.getElementsByName("formGerenciar")[0].children[2]

    const dest_label = form.children[0].children[0].textContent

    const ccsema_label = form.children[1].children[0].children[0].children[0].textContent
    const ccsema_value = form.children[1].children[0].children[0].children[1].textContent

    const ctf_label = form.children[2].children[0].children[0].children[0].textContent
    const ctf_value = form.children[2].children[0].children[0].children[1].textContent

    const nome_label = form.children[3].children[0].children[0].children[0].textContent
    const nome_value = form.children[3].children[0].children[0].children[1].textContent

    const cnpj_cpf_label = form.children[4].children[0].children[0].children[0].textContent
    const cnpj_cpf_value = form.children[4].children[0].children[0].children[1].textContent

    const municipio_label = form.children[5].children[0].children[0].children[0].textContent
    const municipio_value = form.children[5].children[0].children[0].children[1].textContent


    const Destinatario = {
        CcSema:String(ccsema_value),
        Ctf:String(ctf_value),
        Nome:String(nome_value),
        Cpf_Cnpj:String(cnpj_cpf_value),
        Municipio_Uf:String(municipio_value)
    }


    if(!Destinatario){
        return null
    }

    return Destinatario

`



export default {
    get_remetente_script,
    get_gf_script,
    get_destinatario_script

}
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


    const rementente = {
        cc_sema:String(ccsema_value),
        ctf:String(ctf_value),
        nome:String(nome_value),
        cpf_cnpj:String(cnpj_cpf_value),
        municipio_uf:String(municipio_value)
    }


    if(!rementente){
        return null
    }

    return rementente
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

    const gf3 = {
        emissao: new Date(emissao_dateParts[2], emissao_dateParts[1]-1, emissao_dateParts[0]),
        numero:String(gf_num),
        status:String(gf_status_value),
        vencimento:new Date(vencimento_dateParts[2], vencimento_dateParts[1]-1, vencimento_dateParts[0])
    }

    

    if (!gf3) {
        return null
    }

    return gf3
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


    const destinatario = {
        cc_sema:String(ccsema_value),
        ctf:String(ctf_value),
        nome:String(nome_value),
        cpf_cnpj:String(cnpj_cpf_value),
        municipio_uf:String(municipio_value)
    }


    if(!destinatario){
        return null
    }

    return destinatario

`



export default {
    get_remetente_script,
    get_gf_script,
    get_destinatario_script

}
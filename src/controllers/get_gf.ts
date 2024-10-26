import { FormGF } from "../types/types"
import utils from "../utils"



export const get_gf_form = async () => {
    const form_visiblity = document.getElementsByName("formGerenciar")[0].checkVisibility

    if (!form_visiblity) {
        return null
    }

    const {getDate} = utils


    const form = document.getElementsByName("formGerenciar")[0]

    const gf_label = form.children[0].children[0].children[0].children[0].children[0]
    const gf_num = form.children[0].children[0].children[0].children[0].children[1].textContent

    const gf_status_label = form.children[0].children[0].children[1].children[0].children[0]
    const gf_status_value = form.children[0].children[0].children[1].children[0].children[1].textContent

    const gf_emissao_label = form.children[0].children[1].children[0].children[0].children[0]
    const gf_emissao_value = form.children[0].children[1].children[0].children[0].children[1].textContent

    const gf_vencimento_label = form.children[0].children[1].children[1].children[0].children[0]
    const gf_vencimento_value = form.children[0].children[1].children[1].children[0].children[1].textContent


    
    const gf3:FormGF = {
        emissao: getDate(String(gf_emissao_value)),
        numero:String(gf_num),
        status:String(gf_status_value),
        vencimento:getDate(String(gf_vencimento_value))
    }


    if (!gf3) {
        return null
    }

    return gf3


}


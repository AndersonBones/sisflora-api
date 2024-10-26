import { Builder, Browser, By, Key, until, Options } from 'selenium-webdriver'
import firefox from 'selenium-webdriver/firefox'

import {FormDestinatario, FormGF, FormRemetente} from '../types/types'
import scrapingScript from '../services/scrapingScript'



export async function scraper(url:string) {
    
    const options = new firefox.Options()
    const userdata = "C:/Users/Anderson/AppData/Roaming/Mozilla/Firefox/Profiles"

    options.setProfile(userdata)
    options.addArguments('--headless')

    let driver = await new Builder().forBrowser(Browser.FIREFOX).setFirefoxOptions(options).build()

    const {get_gf_script, get_remetente_script,get_destinatario_script} = scrapingScript

    try {
        await driver.get(url)
        
        
        while (true){
            const gf3:FormGF = await driver.executeScript(get_gf_script)
            const rementente:FormRemetente = await driver.executeScript(get_remetente_script)
            const destinatario:FormDestinatario = await driver.executeScript(get_destinatario_script)

            if(rementente.municipio_uf && gf3.numero && destinatario.cc_sema){

                return {gf3, rementente, destinatario}
            }
           
        }


        
    } catch(e) {
        console.log(e)

    }




};



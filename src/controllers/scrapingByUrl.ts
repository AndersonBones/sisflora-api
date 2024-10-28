import { Builder, Browser, By, Key, until, Options } from 'selenium-webdriver'
import firefox from 'selenium-webdriver/firefox'

import {FormDestinatario, FormGF, FormRemetente} from '../types/types'
import scrapingScript from '../services/scrapingScript'



export async function scrapingByUrl(url:string) {
    
    const options = new firefox.Options()
    const userDataDir = "C:/Users/Anderson/AppData/Roaming/Mozilla/Firefox/Profiles"
   
    options.setProfile(userDataDir)
    options.addArguments('--headless')

    const {
        get_gf_script, 
        get_remetente_script,
        get_destinatario_script
    } = scrapingScript


    try {
        let driver = await new Builder().forBrowser(Browser.FIREFOX).setFirefoxOptions(options).build()
        
        await driver.get(url)
        
        return new Promise((resolve, reject)=>{

            let i = 0
            const timer = setInterval(async() => {
                i+=1
                const GF3:FormGF = await driver.executeScript(get_gf_script)
                const Remetente:FormRemetente = await driver.executeScript(get_remetente_script)
                const Destinatario:FormDestinatario = await driver.executeScript(get_destinatario_script)
    
                
                if(!Object.values(GF3).includes(null) && !Object.values(Remetente).includes(null) && !Object.values(Destinatario).includes(null)){
                    
                    resolve({
                        GF3,
                        Remetente,
                        Destinatario
                    })
                    
                    clearInterval(timer)
    
                }else{
                    reject({
                        GF3,
                        Remetente,
                        Destinatario
                    })
                    clearInterval(timer)
                }

                if(i == 60000){
                    reject({error:"Tempo de limite execução atingido."})
                    clearInterval(timer)
                }

            }, 500);    
        })
        
        
    } catch(e) {
        console.log(e)

    }

}



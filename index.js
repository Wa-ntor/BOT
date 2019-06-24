const {Client, Attachment} = require("discord.js");
const discord=require("discord.js");
const bot = new Client();

const token = "NTkxMzUxNzQ2MTIzNTMwMjU5.XQ6ORA.X8S96zGsDxzf0udwy-XvokWcMuc";

const PREFIX="-";

bot.on("ready", () =>{
    console.log("Tento bot je online!")
    bot.user.setActivity("Ikariam",{type: "WATCHING"}).catch(console.error);

})

bot.on("message",message=>{
    let rMember=message.member
    let argss=message.content.split(" ")
    if(argss[0]==="AFK"){
        if(!rMember.roles.find(role=>role.name==="AFK")){
            rMember.addRole("592376218511212564")
            message.channel.send(`Užij si AFK ${message.author}`)
        }
    }else if(argss[0]!="AFK"){
        if(rMember.roles.find(role=>role.name==="AFK")){
            rMember.removeRole("592376218511212564")
            message.channel.send(`Vítej zpět ${message.author}`)
        }
        else{return}
            }
}
)
bot.on("message", message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case "pokus":
            /**  message.reply("funguje");*/
            message.channel.sendMessage("funguje \n mi to") 
        break;
        case "info":
            if(args[1]==="pokus"){
                message.channel.sendMessage("pokus je aktivní");
            }else{
                message.channel.sendMessage("Nerozumím")
            }
        break;

        case "clear":
            if(!args[1]) return message.reply("Error zadej počet")
            message.channel.bulkDelete(args[1]);
            break;
        case "embed":
            const embed=new discord.RichEmbed()
            .setTitle("Nadpis")
            .addField("Pole", message.author.username,true)
            .addField("Pole2",message.guild.name,true)
            .addField("Pole", message.channel.name)
            .setThumbnail(message.author.avatarURL)
            .setColor(0x5F6A08)
            .setFooter("Poznámka pod čarou")
            message.channel.sendEmbed(embed);
        break;
        case "picturepc":
            const picturepc=new Attachment("./obrazek.png")
            message.channel.send(message.author,picturepc)
        break;
        case "prikazy":
            const prikazy=new Attachment("./prikazy.txt")
            message.channel.send(message.author,prikazy)
        break;
//=====================================================================================================================================================================
//Beer                                 Splněno
//=====================================================================================================================================================================
        case "beer":
            number=9
            var random=Math.floor(Math.random()*(number-1+1))+1
            switch (random){
                case 1:
                    pivo1="./pivo/1.jpg"
                    message.channel.send({files:[pivo1]})
                break;
                case 2:
                    pivo2="./pivo/2.jpg"
                    message.channel.send({files:[pivo2]})
                break;               
                case 3:
                    pivo3="./pivo/3.jpg"
                    message.channel.send({files:[pivo3]})
                break;
                case 4:
                    pivo4="./pivo/4.jpg"
                    message.channel.send({files:[pivo4]})
                break;
                case 5:
                    pivo5="./pivo/5.jpg"
                    message.channel.send({files:[pivo5]}) 
                break;              
                case 6:
                    pivo6="./pivo/6.jpg"
                    message.channel.send({files:[pivo6]})
                break;
                case 7:
                    pivo7="./pivo/7.gif"
                    message.channel.send({files:[pivo7]})
                break;
                case 8:
                    pivo8="./pivo/8.gif"
                    message.channel.send({files:[pivo8]}) 
                break;              
                case 9:
                    pivo9="./pivo/9.gif"
                    message.channel.send({files:[pivo9]})
                break;
            }
        break;  
//=====================================================================================================================================================================
//Vrtizadec                            Splněno
//=====================================================================================================================================================================
        case "vrtizadec":
            number=6
            var randomzadek=Math.floor(Math.random()*(number-1+1))+1;
            switch(randomzadek){
                case 1:
                    VZ1="./twerk/1.gif"
                    message.channel.send({files:[VZ1]})
                break;
                case 2:
                    VZ2="./twerk/2.gif"
                    message.channel.send({files:[VZ2]})
                break;
                case 3:
                    VZ3="./twerk/3.gif"
                    message.channel.send({files:[VZ3]})
                break;
                case 4:
                    VZ4="./twerk/4.gif"
                    message.channel.send({files:[VZ4]})
                break;
                case 5:
                    VZ5="./twerk/5.gif"
                    message.channel.send({files:[VZ5]})
                break;
                case 6:
                    VZ6="./twerk/6.gif"
                    message.channel.send({files:[VZ6]})
                break;
                case 7:
                    VZ7="./twerk/7.gif"
                    message.channel.send({files:[VZ7]})
                break;
                case 8:
                    VZ8="./twerk/8.gif"
                    message.channel.send({files:[VZ8]})
                break;
                case 9:
                    VZ9="./twerk/9.gif"
                    message.channel.send({files:[VZ9]})
                break;
                case 10:
                    VZ10="./twerk/10.gif"
                    message.channel.send({files:[VZ10]})
                break;

    

            }
        break;
//=====================================================================================================================================================================
//Coffee                            Splněno
//=====================================================================================================================================================================
        case "coffee":
            number=12
            var Coffee=Math.floor(Math.random()*(number-1+1))+1;
            switch(Coffee){
                case 1:
                    Coffee1="./coffee/1.png"
                    message.channel.send({files:[Coffee1]})
                break;
                case 2:
                    Coffee2="./coffee/2.jpg"
                    message.channel.send({files:[Coffee2]})
                break;
                case 3:
                    Coffee3="./coffee/3.jpg"
                    message.channel.send({files:[Coffee3]})
                break;
                case 4:
                    Coffee4="./coffee/4.jpg"
                    message.channel.send({files:[Coffee4]})
                break;
                case 5:
                    Coffee5="./coffee/5.jpg"
                    message.channel.send({files:[Coffee5]})
                break;
                case 6:
                    Coffee6="./coffee/6.png"
                    message.channel.send({files:[Coffee6]})
                break;
                case 7:
                    Coffee7="./coffee/7.png"
                    message.channel.send({files:[Coffee7]})
                break;
                case 8:
                    Coffee8="./coffee/8.png"
                    message.channel.send({files:[Coffee8]})
                break;
                case 9:
                    Coffee9="./coffee/9.png"
                    message.channel.send({files:[Coffee9]})
                break;
                case 10:
                    Coffee10="./coffee/10.png"
                    message.channel.send({files:[Coffee10]})
                break;
                case 11:
                        Coffee11="./coffee/11.png"
                        message.channel.send({files:[Coffee11]})
                    break;
                case 12:
                        Coffee12="./coffee/12.png"
                        message.channel.send({files:[Coffee12]})
                    break;   

            }
        break;  
//=====================================================================================================================================================================
//Cigarette                         Splněno
//=====================================================================================================================================================================
        case "cigarette":
            number=4
            var Cig=Math.floor(Math.random()*(number-1+1))+1;
            switch(Cig){
                case 1:
                    Cig1="./Cigarette/1.gif"
                    message.channel.send({files:[Cig1]})
                break;  
                case 2:
                    Cig2="./Cigarette/2.gif"
                    message.channel.send({files:[Cig2]})
                break;  
                case 3:
                    Cig3="./Cigarette/3.gif"
                    message.channel.send({files:[Cig3]})
                break;                   
                case 4:
                    Cig4="./Cigarette/4.gif"
                    message.channel.send({files:[Cig4]})
                break;                   
        
            }
        break;

//=====================================================================================================================================================================
//Hell
//=====================================================================================================================================================================
        case "hell":
            Hell1="./Hell/1.gif"
            message.channel.send({files:[Hell1]})
        break;

//=====================================================================================================================================================================
//Night
//=====================================================================================================================================================================
        case "night":
            number=2
            var Night=Math.floor(Math.random()*(number-1+1))+1;
            switch(Night){
                case 1:
                    Night1="./Night/1.png"
                    message.channel.send({files:[Night1]})
                break;
                case 2:
                    Night2="./Night/2.png"
                    message.channel.send({files:[Night2]})
                break;
            }
        break;

//=====================================================================================================================================================================
//Rakije
//=====================================================================================================================================================================
        case "rakije":
            number=6
            var Rak=Math.floor(Math.random()*(number-1+1))+1;
            switch(Rak){
                case 1:
                    Rak1="./rakije/1.gif"
                    message.channel.send({files:[Rak1]})
                break;
                case 2:
                    Rak2="./rakije/2.gif"
                    message.channel.send({files:[Rak2]})
                break;
                case 3:
                    Rak3="./rakije/3.gif"
                    message.channel.send({files:[Rak3]})
                break;
                case 4:
                    Rak4="./rakije/4.gif"
                    message.channel.send({files:[Rak4]})
                break;
                case 5:
                    Rak5="./rakije/5.gif"
                    message.channel.send({files:[Rak5]})
                break;
                case 6:
                    Rak6="./rakije/6.gif"
                    message.channel.send({files:[Rak6]})
                break;

            }
        break;

//=====================================================================================================================================================================
//Whiskey
//=====================================================================================================================================================================
        case "whiskey":
            number=7
            var Whi=Math.floor(Math.random()*(number-1+1))+1;
            switch(Whi){
                case 1:
                    Whi1="./Whiskey/1.jpg"
                    message.channel.send({files:[Whi1]})
                break;
                case 2:
                    Whi2="./Whiskey/2.jpg"
                    message.channel.send({files:[Whi2]})
                break;
                case 3:
                    Whi3="./Whiskey/3.jpg"
                    message.channel.send({files:[Whi3]})
                break;
                case 4:
                    Whi4="./Whiskey/4.jpg"
                    message.channel.send({files:[Whi4]})
                break;
                case 5:
                    Whi5="./Whiskey/5.jpg"
                    message.channel.send({files:[Whi5]})
                break;
                case 6:
                    Whi6="./Whiskey/6.jpg"
                    message.channel.send({files:[Whi6]})
                break;
                case 7:
                    Whi7="./Whiskey/7.jpg"
                    message.channel.send({files:[Whi7]})
                break;
    
                
            }
        break;

//=====================================================================================================================================================================
//BBQ
//=====================================================================================================================================================================
        case "bbq":
            number=6
            var BBQ=Math.floor(Math.random()*(number-1+1))+1;
            switch(BBQ){
                case 1:
                    BBQ1="./BBQ/1.jpg"
                    message.channel.send({files:[BBQ1]})
                break;
                case 2:
                    BBQ2="./BBQ/2.jpg"
                    message.channel.send({files:[BBQ2]})
                break;
                case 3:
                    BBQ3="./BBQ/3.jpg"
                    message.channel.send({files:[BBQ3]})
                break;
                case 4:
                    BBQ4="./BBQ/4.jpg"
                    message.channel.send({files:[BBQ4]})
                break;
                case 5:
                    BBQ5="./BBQ/5.jpg"
                    message.channel.send({files:[BBQ5]})
                break;
                case 6:
                    BBQ6="./BBQ/6.png"
                    message.channel.send({files:[BBQ6]})
                break;
                        

            }
        break;


//=====================================================================================================================================================================
//IKARIAM Pozemka
//=====================================================================================================================================================================
        
        case "hoplit":
        case "хоп":
        case "хоплит":
            const hoplit=new Attachment("./hopliti.jpg")
            message.channel.sendMessage(hoplit)
        break;
        case "šermíř":
        case "xxx":
        case "мечоносец":
            const šermíř=new Attachment("./šermíři.png")
            message.channel.sendMessage(šermíř)
        break;
        case "střelci":
        case "xxx":
        case "пушка":                 
            const střelci=new Attachment("./střelci.jpg")
            message.channel.sendMessage(střelci)
        break;
        case "balony":           
        case "xxx":
        case "балон":
            const balony=new Attachment("./balony.png")
            message.channel.sendMessage(balony)
        break;
        case "gyra":           
        case "xxx":
        case "жирокоптер":
            const gyra=new Attachment("./gyra.png")
            message.channel.sendMessage(gyra)
        break;
        case "beranidla":        
        case "xxx":
        case "таран":     
            const tarany=new Attachment("./tarany.png")
            message.channel.sendMessage(tarany)
        break;
//=====================================================================================================================================================================
//IKARIAM Lodě
//=====================================================================================================================================================================
        case "plameny":
        case "fire":
        case "запалки":
            const plameny=new Attachment("./plameny.jpg")
            message.channel.sendMessage(plameny)
        break;
        case "ponorky":
        case "submarine":
        case "подводници":
            const ponorky=new Attachment("./ponorky.jpg")
            message.channel.sendMessage(ponorky)
        break;
        case "dělovky":
        case "mortar":  
        case "mortars":
        case "мортире":
            const dela=new Attachment("./dela.jpg")
            message.channel.sendMessage(dela)
        break;
        case "nosiče":
        case "balloon":
        case "balloons":
        case "морски":
            const nosice=new Attachment("./nosice.jpg")
            message.channel.sendMessage(nosice)
        break;
        case "křídla":
        case "flang":
        case "flangs":
        case "фланг":
            const křídla=new Attachment("./beranidla.jpg")
            message.channel.sendMessage(křídla)
        break;
        case "kolesa":
        case "paddle":
        case "paddles":
        case "бързи":
            const kolesa=new Attachment("./kolesa.jpg")
            message.channel.sendMessage(kolesa)
        break;
//=====================================================================================================================================================================
//Help
//=====================================================================================================================================================================
    case "help":
            message.channel.sendMessage("")
            message.channel.sendMessage("__**Pozemka / сухa**\n\nHoplit/хоп/хоплит\nŠermíř/мечоносец\nStřelci/пушка\nBalony/балон\nGyra/жирокоптер\nBeranidla/таран\n")
            message.channel.sendMessage("__**Lodě / флот**__\n\nPlameny/fire/запалки\nPonorky/submarine/подводници\nDělovky/mortar/мортире\nNosiče/balloon/морски балон\nKřídla/flang/фланг\nKolesa/paddle/бързи")
            message.channel.sendMessage("__**Commands**__\n\n**-bbq\n-beer\n-cigarette\n-coffee\n-night\n-rakije\n-vrtizadec\n-whiskey**")
            message.channel.sendMessage("**AFK** - Puts you into AFK role after you write something you are automatically back online")
        

}})
bot.login(process.env.BOT_TOKEN);

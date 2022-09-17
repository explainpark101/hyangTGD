
function ChangeEmotes(){
    let emoticons = {
        '100coin' : "https://cdn.discordapp.com/emojis/963984293485510676.webp" 
        ,Bow : "https://cdn.discordapp.com/emojis/963983899992666162.webp" 
        ,Eliminated : "https://cdn.discordapp.com/emojis/963983899791343638.webp" 
        ,Find : "https://cdn.discordapp.com/emojis/963984189693255690.webp" 
        ,VoteNo : "https://cdn.discordapp.com/emojis/1017700923763593276.webp" 
        ,VoteYes : "https://cdn.discordapp.com/emojis/1017700849159512064.webp" 
        ,aigo : "https://cdn.discordapp.com/emojis/965819299941986324.webp" 
        ,aigoletter : "https://cdn.discordapp.com/emojis/965819299832954900.webp" 
        ,hyangsojye : "https://cdn.discordapp.com/emojis/970136230685724712.webp" 
        ,kingstamp2 : "https://cdn.discordapp.com/emojis/965956008935571456.webp" 
        ,uprising2 : "https://cdn.discordapp.com/emojis/970136406896824340.webp" 
        ,kingstamp1 : "https://cdn.discordapp.com/emojis/966246351925051432.gif" 
        ,nice : "https://cdn.discordapp.com/emojis/966276781697007616.gif" 
        ,uprising : "https://cdn.discordapp.com/emojis/970136299807866941.gif" 
    }
    
    let emote_names = ["100coin", "Bow", "Eliminated", "Find", "VoteNo", "VoteYes", "aigo", "aigoletter", "hyangsojye", "kingstamp2", "uprising2", "kingstamp1", "nice", "uprising"];
    
    let article = document.querySelector("div#article-content");
    let comments = document.querySelectorAll("div.reply-content");
    emote_names.forEach((name)=>{
        article.innerHTML = article.innerHTML.replace(`:${name}:`, `<img src="${emoticons[name]}" alt='${name}'>`);
        comments.forEach((comment)=>{
            comment.innerHTML = comment.innerHTML.replace(`:${name}:`, `<img src="${emoticons[name]}" alt='${name}'>`);
        })
    });
    console.log("Ended the Function");
}


window.addEventListener("load", ()=>{
    ChangeEmotes();
    setInterval(ChangeEmotes, 1000)
});

document.querySelector("button#writeCommentBtn").addEventListener("click", ()=>{
    ChangeEmotes();
});
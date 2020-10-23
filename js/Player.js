class Player{
    constructor(){

    }

    getCount(){
        var playerCountRef=database.ref("playercount");
        playerCountRef.on("value",function(data){
            gameState=data.val();
    })
}

upadteCount(count){
    database.ref('/').update({
        playerCount:count
    })
}

update(name){
    var playerIndex="player"+playerCount;
    database.ref(playerIndex).set({
name:name
    });
}
}
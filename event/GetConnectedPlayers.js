// ====================================================================================================
//
// Cloud Code for EnterMultiposte, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var self = Spark.getPlayer();
var selfPlayerId = Spark.getPlayer().getPlayerId();
var selfSegmentName = self.getSegmentValue("GameTemplateSegment");
var myConnectedPlayers = Spark.runtimeCollection("PlayerConnected").find();
var arr_connectedPlayers = new Array();

while(myConnectedPlayers.hasNext())
{
    myConnectedPlayers.next();
    var myCurrPlayer = myConnectedPlayers.curr();	
    var idPlayer = myCurrPlayer["idPlayer"];
    var myPlayer = Spark.loadPlayer(idPlayer);
    var myPlayerSegment = myPlayer.getSegmentValue("GameTemplateSegment");
    var isBusy = myPlayer.getScriptData("busy");
	var savieID = myPlayer.getScriptData("savieID");
	myCurrPlayer["savieID"] = savieID;
    
    if(!isBusy)
    {
        if(myPlayer.getSegmentValue("GameTemplateSegment") != null)
        {
            if(myPlayerSegment == selfSegmentName && idPlayer != selfPlayerId)
            {
               arr_connectedPlayers.push(myCurrPlayer);
            }
        }
    }
}

Spark.setScriptData("playerId", selfPlayerId);
Spark.setScriptData("players", arr_connectedPlayers);
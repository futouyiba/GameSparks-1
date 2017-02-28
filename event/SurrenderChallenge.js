// ====================================================================================================
//
// Cloud Code for SurrenderChallenge, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var challengeId = Spark.getData().idChallenge;
var myId = Spark.getPlayer().getPlayerId();

var challenge = Spark.getChallenge(challengeId);

var acceptedPlayerIds = challenge.getAcceptedPlayerIds();
var arr_playerNotified = new Array();

for (var i = 0; i < acceptedPlayerIds.length; i++) 
{
    if(acceptedPlayerIds[i] != myId)
	{
		arr_playerNotified.push(acceptedPlayerIds[i]);
	}
}

var nsg = Spark.message("CHALLENGE_SURRENDERED");
nsg.setPlayerIds(arr_playerNotified);
nsg.send();
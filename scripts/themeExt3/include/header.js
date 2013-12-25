var sFeatures = "dialogHeight=510px;dialogWidth=450px;center=yes;resizable=yes;edge=raised;status=no;scroll=no;help=no;";
function getCookie(name) {
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg) {
    	var offset = j;
    	var endstr = document.cookie.indexOf (";", offset);
    	if (endstr == -1) {
    	   endstr = document.cookie.length;
    	}
    	return unescape(document.cookie.substring(offset, endstr));
    }
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break;
  }
  return null;
}
function doHelp(){
	var help = getCookie("HELPURL");
	window.open('/HelpAction.do?INDEXKEY='+help,'_blank','center=yes,edge=raised,resizable=yes,status=no,help=no');
}
function doChangeMyPassword()
{
	LBUI.showModalDialog( "/jsp/chgPassword.jsp" ,{width:330,height:210} );
}

function showDialog(url)
{   
	if( Ext.isString( url ) ){
		var s = "?";
		var e = url.lastIndexOf(s);
		if( e == -1 )
			url += s;
	}
	var dialog = LBUI.showModalDialog(url,{});
	var headerfun = Ext.applyIf( {callback:function(result){
		if(result.message)
		{
			LBUI.Tip.msg('',result.message);
		}
	}} , LBUI.fun );
	dialog.fun = headerfun;
}
function onHisMessage(){
	window.open( '/jsp/mq/hismsg.jsp' , 'MyMessage' , 'resizable=yes,status=no,scrollbars=yes,help=no' );
}

function collapseTitlebar(){
	Ext.getCmp('titlebar').collapse(false);
}
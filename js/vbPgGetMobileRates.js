jsGlobalColorRateUp			=	'#0FD634';
jsGlobalColorRateDown		=	'#ED093F';
jsGlobalColorRateUnchanged	=	'#000000';   //'transparent';

function initApp()
{

	// Load Rates	
	jsMobRefVBRates();	
}

function jsMobRefVBRates()
{
	var jsTime;
	jsMobUpdVBRates();
	jsTime = setTimeout("jsMobRefVBRates()",3000);   // 3 Second	
}

function jsMobUpdVBRates()
{
   // Local data declarations
	var jsParamStr, jsMainpageToken;
	var jsCurrGoldBid, jsCurrGoldAsk, jsCurrSilverBid, jsCurrSilverAsk;
	var jsToday, jsCurrYear, jsCurrMonth, jsCurrDate;
	var jsCurrMonthStr, jsUTCDateStr;
	
	//------- Format current UTC Date start -------->	
	jsToday = new Date();
	jsCurrYear 		= jsToday.getUTCFullYear();
	jsCurrMonth		= jsToday.getUTCMonth();
	jsCurrDate		= jsToday.getUTCDate();
	
	// Format Month
	jsCurrMonth = jsCurrMonth + 1;	
	if( jsCurrMonth < 10 )
	{
		jsCurrMonthStr = '0' + jsCurrMonth.toString();
	}
	else
	{
		jsCurrMonthStr = jsCurrMonth;
	}
	
	// Format Day
	if(jsCurrDate < 10)
	{
		jsCurrDateStr = '0' + jsCurrDate.toString();
	}
	else
	{
		jsCurrDateStr = jsCurrDate;
	}
	
	jsUTCDateStr = jsCurrYear.toString() + jsCurrMonthStr.toString() + jsCurrDateStr.toString();
	//------- Format current UTC Date end -------->	
	 	
	// Get Hidden values
	jsCurrGoldAsk 		= document.getElementById('id_hid_Mob_g_ask').value;
	jsCurrGoldFTAsk 	= document.getElementById('id_hid_Mob_g_ft_ask').value;
	jsCurrSilverAsk 	= document.getElementById('id_hid_Mob_s_ask').value;

	
	
	//----------------- Ajax update ------------->
	jsParamStr='';
	jsParamStr = jsParamStr + 'PIN=' + jsUTCDateStr;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'CURRGOLDASK=' + jsCurrGoldAsk;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'CURRGOLDFTASK=' + jsCurrGoldFTAsk;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'CURRSILVERASK=' + jsCurrSilverAsk;
	
	
	//alert(jsParamStr);	
	$.ajax({type:			"POST", 
				async:		"true",
				url:			"vbPgGetMobileRatesDynGet.php", 
	   		dataType: 	"html",
				data: 		jsParamStr,
				success: 	onAjaxMobRateStreamSuccess,
				error: 		onAjaxMobRateStreamError
	});	

	
}


function onAjaxMobRateStreamSuccess( jsResult )
{
	//alert(jsResult);
	//---------- local data ---------->
	var jskeyType, jsFlag, jsErrCode, jsErrDesc;
	var jsJSONObjArr, jsTabResultArr;
	var jsAsk, jsDir; 
	
	jsJSONObjArr = $.parseJSON(jsResult);
	
	// Check if Success / Error  
	jskeyType 	= jsJSONObjArr.RESULT[0].KEY;
	jsFlag 		= jsJSONObjArr.RESULT[0].FLAG;
	jsErrCode	= jsJSONObjArr.RESULT[0].CODE;
	jsErrDesc	= jsJSONObjArr.RESULT[0].DESC;
	
	
	if (jsFlag == "S")
	{
		for (var i=1; i< jsJSONObjArr.RESULT.length; i++)
		{
			jskeyType	= jsJSONObjArr.RESULT[i].KEY;
			jsAsk			= jsJSONObjArr.RESULT[i].ASK;
			jsDir			= jsJSONObjArr.RESULT[i].DIR;

			//alert(jskeyType);
			switch( jskeyType )
			{
				case "GOLD":
					// Update Values
					document.getElementById("id_hid_Mob_g_ask").value = jsAsk;				
					document.getElementById("id_div_gold999_rate").innerHTML	=	jsAsk;
					
					// Set Color	
					var jsRateDataObj;
					jsRateData = document.getElementById("id_div_gold999_rate");
					if( jsDir == "-1" )
					{					
						jsRateData.style.backgroundColor = jsGlobalColorRateDown;
					}
					else if( jsDir == "1" )
					{					
						jsRateData.style.backgroundColor = jsGlobalColorRateUp;
					}
					else
					{
						jsRateData.style.backgroundColor = jsGlobalColorRateUnchanged;
					}
									
				break;
				case "GOLDFT":
					// Update Values
					document.getElementById("id_hid_Mob_g_ft_ask").value = jsAsk;
					document.getElementById("id_div_goldft999_rate").innerHTML	=	jsAsk;
					
					// Set Color	
					var jsRateDataObj;
					jsRateData = document.getElementById("id_div_goldft999_rate");
					if( jsDir == "-1" )
					{					
						jsRateData.style.backgroundColor = jsGlobalColorRateDown;
					}
					else if( jsDir == "1" )
					{					
						jsRateData.style.backgroundColor = jsGlobalColorRateUp;
					}
					else
					{
						jsRateData.style.backgroundColor = jsGlobalColorRateUnchanged;
					}				
				break;
				case "SILVER":
					// Update Values
					document.getElementById("id_hid_Mob_s_ask").value = jsAsk;
					document.getElementById("id_div_silver999_rate").innerHTML	=	jsAsk;
					
					// Set Color	
					var jsRateDataObj;
					jsRateData = document.getElementById("id_div_silver999_rate");
					if( jsDir == "-1" )
					{					
						jsRateData.style.backgroundColor = jsGlobalColorRateDown;
					}
					else if( jsDir == "1" )
					{					
						jsRateData.style.backgroundColor = jsGlobalColorRateUp;
					}
					else
					{
						jsRateData.style.backgroundColor = jsGlobalColorRateUnchanged;
					}						
				break;								
			}	
		}		// End For Loop
		
			
	}
	else
	{
		
	}
		
}		// End method onAjaxMobRateStreamSuccess


function onAjaxMobRateStreamError( jsXhrObj )
{
	//alert("An error occured: " + jsXhrObj.status + " " + jsXhrObj.statusText);
}
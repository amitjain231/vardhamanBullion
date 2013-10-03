jsGlobalColorRateUp			=	'#0FD634';
jsGlobalColorRateDown		=	'#ED093F';
jsGlobalColorRateUnchanged	=	'#000000';   //'transparent';
//jsGlobalJsonpUrl = 'http://local_vardhamanbullion/dynamic/vbPgGetMobileRatesDynGet.php?callback=jsProcessJSONPResult';
jsGlobalJsonpUrl = 'http://www.vardhamanbullion.com/dynamic/vbPgGetMobileRatesDynGet.php?callback=jsProcessJSONPResult';

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
	var jsCurrGoldBid, jsCurrGoldAsk, jsCurrSilverBid, jsCurrSilverAsk;
	var jsToday, jsCurrYear, jsCurrMonth, jsCurrDate;
	var jsCurrMonthStr, jsUTCDateStr;
	var jsURL;
	
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
	
	jsURL = '';
	jsURL = jsGlobalJsonpUrl + "&PIN=" + jsUTCDateStr;
	jsURL = jsURL + "&CURRGOLDASK=" + jsCurrGoldAsk;
	jsURL = jsURL + "&CURRGOLDFTASK=" + jsCurrGoldFTAsk;
	jsURL = jsURL + "&CURRSILVERASK=" + jsCurrSilverAsk;
	
	//-------- Start Cross-Site Call -------->
      var head = document.head;
      var script = document.createElement("script");

      script.setAttribute("src", jsURL);
      head.appendChild(script);
      head.removeChild(script);
      		
	//-------- End Cross-Site Call -------->	
	
	
}


function jsProcessJSONPResult(jsonData)
{

	//---------- local data ---------->
	var jskeyType, jsFlag, jsErrCode, jsErrDesc;
	var jsJSONObjArr, jsTabResultArr;
	var jsAsk, jsDir; 
	
		
	// Check if Success / Error  
	jskeyType 	= jsonData.RESULT[0].KEY;
	jsFlag 		= jsonData.RESULT[0].FLAG;
	jsErrCode	= jsonData.RESULT[0].CODE;
	jsErrDesc	= jsonData.RESULT[0].DESC;
	
	
	if (jsFlag == "S")
	{
		for (var i=1; i< jsonData.RESULT.length; i++)
		{
			jskeyType	= jsonData.RESULT[i].KEY;
			jsAsk			= jsonData.RESULT[i].ASK;
			jsDir			= jsonData.RESULT[i].DIR;

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

	
}		// End function - jsProcessJSONPResult

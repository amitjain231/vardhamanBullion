// Global Variables
//jsGlobalColorRateUp				=	'#0FD634';
jsGlobalColorRateUp				=	'#24bc09';
//jsGlobalColorRateDown			=	'#ED093F';
jsGlobalColorRateDown			=	'#d10011';
jsGlobalColorRateUnchanged		=	'transparent';
jsGlobalDataStreamingOffHTML	=	"<div class='cl_stream_off' >Data Streaming is <span style='color:#E35E1B'>off... </span> </div>";

//jsGlobalUserVisitURL	= "http://local_vardhamanbullion/dynamic/vbPGUpdateMobileUserVisitCount.php";
//jsGlobalGetScrollURL	= "http://local_vardhamanbullion/dynamic/vbPGGetMobileScrollMessage.php";
//jsGlobalJsonpUrl 		= 'http://local_vardhamanbullion/dynamic/vbPgGetMobileRatesDynGet.php';

jsGlobalUserVisitURL	= "http://www.vardhamanbullion.com/dynamic/vbPGUpdateMobileUserVisitCount.php";
jsGlobalGetScrollURL	= "http://www.vardhamanbullion.com/dynamic/vbPGGetMobileScrollMessage.php";
jsGlobalJsonpUrl 		= 'http://www.vardhamanbullion.com/dynamic/vbPgGetMobileRatesDynGet.php';		


$(document).on('vclick', 'a, div', function(e){ 			
	var jsVarPrevDefault;
	var jsPopId;
	
	jsPopId = "";
	jsVarPrevDefault = false;
	switch(this.id)
	{
		
		case "id_a_vb_booking":
			jsPopId = "myPopupBooking";	
			jsVarPrevDefault = true;
		break;
		case "id_a_vb_contact":
			jsPopId = "myPopupContact";	
			jsVarPrevDefault = true;
		break;
		case "id_a_vb_rtgs":
			jsPopId = "myPopupRTGS";
			jsVarPrevDefault = true;
		break;
		case "id_div_updateapp":
			jsPopId = "UpdateApppopup";
			jsVarPrevDefault = true;
		break;
		
	}
	
	
	
	// Launch PopUP
	if( jsPopId != "" )
	{
		// Prevent Default behavior
		if(jsVarPrevDefault == true)
		{
			e.preventDefault();		
		}
		
		// Launch animated popup
		$( "#" + jsPopId ).addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
		function(){
			$(this).removeClass("animated zoomIn");
		});
		
		$( "#" + jsPopId  ).popup( "open" );
		
		
	}		
			
});

function initApp()
{
	/*$('#id_btn_updateapp').css("display", "none");*/
	
	
	// Load Rates	
	jsMobRefVBRates();
	
	// Update Scroll message
	jsVBAjaxUpdScroll();
	
	// Update VB Mobile User Visit Count
	jsVBAjaxUdpateUserVisitCount();
	
	
	
}	//End initApp

function jsVBAjaxUpdScroll()
{
	var jsParams;
	jsParams = "";
	jsParams = jsParams + "TOKEN=DUMMY";
	jsParams = jsParams + "&";
	jsParams = jsParams + "PIN=18000101";
	

	$.ajax({type:					"GET", 
					async:			"true",
					url:			jsGlobalGetScrollURL,
					dataType: 		"jsonp",
					data: 			jsParams,
					crossDomain:	true,          
					cache:			false, 
					contentType: 	"application/json; charset=utf-8",
					dataType: 		"jsonp",
					jsonp: 			"callback",
					jsonpCallback: 	"jsVBProcessScrollMessageJSONPResult",					
					success: 		onAjaxVBMobileGetScrollSuccess,
					error: 			onAjaxVBMobileGetScrollError
	});	
	
	
}	// End jsVBAjaxUpdScroll


function onAjaxVBMobileGetScrollSuccess( jsResult)
{
	// Do Nothing
}

function onAjaxVBMobileGetScrollError( jsXhrObj )
{
	// Do Nothing
}


function jsVBProcessScrollMessageJSONPResult( jsonData )
{
	var jsCode, jsScrollMsg;
	
	jsCode		= 	jsonData.CODE;	
	jsScrollMsg		= 	jsonData.SCROLLMSG;	
	
	if(jsCode == "S")
	{
		document.getElementById("id_scroll_marq").innerHTML = jsScrollMsg;
		
	}
	
	
}




function jsVBAjaxUdpateUserVisitCount()
{
	var jsParams;
	jsParams = "";
	jsParams = jsParams + "TOKEN=DUMMY";
	

	$.ajax({type:						"GET", 
					async:				"true",
					url:					jsGlobalUserVisitURL,
					dataType: 		"jsonp",
					data: 				jsParams,
					crossDomain:	true,          
					cache:				false, 
					contentType: 	"application/json; charset=utf-8",
					dataType: 		"jsonp",
					jsonp: 				"callback",
					jsonpCallback: 	"jsVBProcessMobileJSONPResult",					
					success: 			onAjaxVBMobileUserVisitSuccess,
					error: 				onAjaxVBMobileUserVisitError
		});				

}	//jsVBAjaxUdpateUserVisitCount

function onAjaxVBMobileUserVisitSuccess( jsResult)
{
	// Do Nothing
}

function onAjaxVBMobileUserVisitError( jsXhrObj )
{
	// Do Nothing
}




function jsVBProcessMobileJSONPResult( jsonData )
{
	// Do Nothing
}


function jsMobRefVBRates()
{
	var jsTime;
	jsMobUpdVBRates();
	jsTime = setTimeout("jsMobRefVBRates()", 2000);   // 2 Second

}


function jsMobUpdVBRates()
{
   // Local data declarations
	var jsCurrGoldBid, jsCurrGoldAsk, jsCurrSilverBid, jsCurrSilverAsk;
	var jsToday, jsCurrYear, jsCurrMonth, jsCurrDate;
	var jsCurrMonthStr, jsUTCDateStr;
	var jsURL, jsParamStr;
	
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
	var jsCurrParam1,  jsCurrParam2, jsCurrParam3, jsCurrParam4, jsCurrParam5;
	var jsCurrParam6,  jsCurrParam7, jsCurrParam8, jsCurrParam9, jsCurrParam10;
	var jsCurrParam11,  jsCurrParam12, jsCurrParam13, jsCurrParam14, jsCurrParam15;
	
	jsCurrParam1 		   = document.getElementById('id_hid_mob_param1').value;
	jsCurrParam2 		    = document.getElementById('id_hid_mob_param2').value;
	jsCurrParam3			= document.getElementById('id_hid_mob_param3').value;
	jsCurrParam4			= document.getElementById('id_hid_mob_param4').value;
	jsCurrParam5			= document.getElementById('id_hid_mob_param5').value;
	jsCurrParam6			= document.getElementById('id_hid_mob_param6').value;
	jsCurrParam7			= document.getElementById('id_hid_mob_param7').value;
	jsCurrParam8			= document.getElementById('id_hid_mob_param8').value;
	jsCurrParam9			= document.getElementById('id_hid_mob_param9').value;
	jsCurrParam10			= document.getElementById('id_hid_mob_param10').value;
	jsCurrParam11			= document.getElementById('id_hid_mob_param11').value;
	jsCurrParam12			= document.getElementById('id_hid_mob_param12').value;
	jsCurrParam13			= document.getElementById('id_hid_mob_param13').value;
	jsCurrParam14			= document.getElementById('id_hid_mob_param14').value;
	jsCurrParam15			= document.getElementById('id_hid_mob_param15').value;
	
	jsParamStr='';
	jsParamStr = jsParamStr + 'PIN=' + jsUTCDateStr;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P001=' + jsCurrParam1;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P002=' + jsCurrParam2;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P003=' + jsCurrParam3;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P004=' + jsCurrParam4;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P005=' + jsCurrParam5;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P006=' + jsCurrParam6;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P007=' + jsCurrParam7;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P008=' + jsCurrParam8;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P009=' + jsCurrParam9;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P010=' + jsCurrParam10;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P011=' + jsCurrParam11;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P012=' + jsCurrParam12;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P013=' + jsCurrParam13;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P014=' + jsCurrParam14;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P015=' + jsCurrParam15;
	
	$.ajax({type:						"GET", 
					async:				"true",
					url:					jsGlobalJsonpUrl,
					dataType: 		"jsonp",
					data: 				jsParamStr,
					crossDomain:	true,          
					cache:				false, 
					contentType: 	"application/json; charset=utf-8",
					dataType: 		"jsonp",
					jsonp: 				"callback",
					jsonpCallback: 	"jsProcessJSONPResult",					
					success: 			onAjaxMobGetRatesSuccess,
					error: 				onAjaxMobGetRatesError
		});			
	
	
}

function onAjaxMobGetRatesSuccess(  jsResult )
{

}

function onAjaxMobGetRatesError()
{
	//-- Do not Output Streaming Off HTML becasue this will impace users witl slow internet connection
	//-- Screen will be switching between 'no data' and 'live data'
	/*
		var jsGridDivObj;
		jsGridDivObj	=	document.getElementById("id_div_grid_outer");
		jsGridDivObj.innerHTML = jsGlobalDataStreamingOffHTML;
	*/
}

function jsProcessJSONPResult( jsonData )
{
	
	//return;
	var  jsKey, jsAct,  jsFlag, jsCode, jsDesc, jsKeyVal1;
	var jsComexFlag, jsRateFlag, jsOrnaFlag;
	var jsCsym, jsDesc1, jsDesc2, jsAsk, jsDir;
	var jsSpace, jsGridNoStreamDivObj, jsGridComexDivObj, jsGridDivObj;
	var jsDataBKColor;
	var jsLine1, jsLine2;
	var jsHidFieldId;
	var i;
	
	jsSpace = "&nbsp;";
	jsKey		= 	jsonData.RESULT[0].KEY;
	jsFlag		= 	jsonData.RESULT[0].FLAG;
	jsDesc		= 	jsonData.RESULT[0].DESC;

	jsGridNoStreamDivObj	=	document.getElementById("id_div_grid_nostream");

	
	if( jsFlag == 'E' )
	{
		
		$(".cl_div_grid_nostream").css("display","block");
		$(".cl_div_grid_comex_wrapper").css("display","none");
		$(".cl_div_grid_symbol_wrapper").css("display","none");
		$(".cl_div_grid_orna_wrapper").css("display","none");

	}
	else if( jsFlag == 'S' )
	{
		// Hide No stream block
		$(".cl_div_grid_nostream").css("display","none");		
		
		var jsIndex;
		for (i = 1; i <= jsonData.RESULT[0].PARAMS.length; i++)
		{
			jsIndex = i - 1;
			jsKeyVal1 =	jsonData.RESULT[0].PARAMS[jsIndex];
			jsKeyArr	=	jsKeyVal1.split('~');
			if( jsKeyArr[0] == "APPUPDATE" && jsKeyArr[1] == "Y" )
			{
				$('.cl_div_updateapp').css("display", "block");
			}
			else
			{
				$('.cl_div_updateapp').css("display", "none");
			}
		}	

		// Get Comex and Rate Active flags
		jsKey				= 	jsonData.RESULT[1].KEY;
		jsComexFlag		= 	jsonData.RESULT[1].COMEXFLAG;
		jsRateFlag			= 	jsonData.RESULT[1].RATEFLAG;
		jsOrnaFlag			= 	jsonData.RESULT[1].ORNAFLAG;
		
		//------------- Activate / Deactivate Blocks Start ---------------->
		if( jsComexFlag == 'Y'){
			$(".cl_div_grid_comex_wrapper").css("display","block");
		}	
		else{
			$(".cl_div_grid_comex_wrapper").css("display","none");
		}

		if( jsRateFlag == 'Y' ){
			//$(".cl_div_bullion_hdg").css("display","block");
			$(".cl_div_grid_symbol_wrapper").css("display","block");	
		}
		else{
			$('.cl_div_grid_symbol_wrapper').css("display", "none");
			//$('.cl_div_bullion_hdg').css("display", "none");

		}	

		if( jsOrnaFlag == 'Y' ){
			$(".cl_div_grid_orna_wrapper").css("display","block");
		}
		else{
			$(".cl_div_grid_orna_wrapper").css("display","none");
		}

		//------------- Activate / Deactivate Blocks End ---------------->	
		
		//---------------- Comex Rates ----------------->
		if( jsComexFlag == 'Y' ){
			//jsGridComexDivObj = document.getElementById("id_div_grid_comex");
			
			for (i=2; i<=4; i++)
			{
				jsKey 		=	jsonData.RESULT[i].KEY;
				jsAct		=	jsonData.RESULT[i].ACT;
				jsDesc1	= 	jsonData.RESULT[i].DESC1;
				jsDesc2	=	jsonData.RESULT[i].DESC2;
				jsCsym		=	jsonData.RESULT[i].CSYM;
				jsAsk		=	jsonData.RESULT[i].ASK;
				jsDir		=	jsonData.RESULT[i].DIR;
				if(jsAct == 'Y')
				{
					switch(jsKey)
					{
						case "XAU":
							document.getElementById("id_td_comex_label_xau").innerHTML = jsDesc1 + " " + jsDesc2;
							document.getElementById("id_span_data_comex_g_ask").innerHTML = jsAsk;							
							jsClassId = "cl_div_symbol_xauusd_ask";
							jsHidId = "id_hid_mob_param1";
						break;
						case "XAG":
							document.getElementById("id_td_comex_label_xag").innerHTML = jsDesc1 + " " + jsDesc2;
							document.getElementById("id_span_data_comex_s_ask").innerHTML = jsAsk;
							jsClassId = "cl_div_symbol_xagusd_ask";
							jsHidId = "id_hid_mob_param2";
						break;
						case "USD":
							document.getElementById("id_td_comex_label_usd").innerHTML = jsDesc1 + " " + jsDesc2;
							document.getElementById("id_span_data_comex_u_ask").innerHTML = jsAsk;
							jsClassId = "cl_div_symbol_usdinr_ask";
							jsHidId = "id_hid_mob_param3";
						break;
					}
					
					//alert(jsClassId);
					if( jsDir == 0)
					{
						$("." + jsClassId).css("background-color",jsGlobalColorRateUnchanged);
					}
					else if(jsDir == 1)
					{
						$("." + jsClassId).css("background-color",jsGlobalColorRateUp);
					}
					else if(jsDir == -1 )
					{
						$("." + jsClassId).css("background-color",jsGlobalColorRateDown);
					}
					
					// Update Hidden param
					document.getElementById(jsHidId).value = jsAsk;
					
				}
				
			}	// End for loop	

		}
		
		
		
		//-------------  Symbol Rates and Ornament Rates  ------------->
		//alert(jsonData.RESULT.length);
		if( jsRateFlag == 'Y' || jsOrnaFlag == 'Y' ){
		
			for ( i=5; i< jsonData.RESULT.length; i++ ) {
				jsKey 		=	jsonData.RESULT[i].KEY;
				jsAct		=	jsonData.RESULT[i].ACT;
				jsDesc1	= 	jsonData.RESULT[i].DESC1;
				jsDesc2	=	jsonData.RESULT[i].DESC2;
				jsCsym		=	jsonData.RESULT[i].CSYM;
				jsAsk		=	jsonData.RESULT[i].ASK;
				jsExcl		=	jsonData.RESULT[i].EXCL;
				jsDir		=	jsonData.RESULT[i].DIR;
				
				switch( jsKey )
				{
					case "G999R":						
						jsSymbolLabelId 		= "id_div_rate_label_g999r";
						jsSymbolAskId 			= "id_span_data_g999r_ask";
						jsSymbolBkColorClass 	= "cl_sym_bkcolor_g999r";
						jsSymbolRowId 			= "id_div_grid_g999r";
						jsSymbolHidid 			= "id_hid_mob_param4";
						
					break;
					case "G999T":
						jsSymbolLabelId 		= "id_div_rate_label_g999t";
						jsSymbolAskId 			= "id_span_data_g999t_ask";
						jsSymbolBkColorClass 	= "cl_sym_bkcolor_g999t";
						jsSymbolRowId 			= "id_div_grid_g999t";
						jsSymbolHidid 			= "id_hid_mob_param5";
					break;
					case "GFT999R":
						jsSymbolLabelId 		= "id_div_rate_label_gft999r";
						jsSymbolAskId 			= "id_span_data_gft999r_ask";
						jsSymbolBkColorClass 	= "cl_sym_bkcolor_gft999r";
						jsSymbolRowId 			= "id_div_grid_gft999r";
						jsSymbolHidid 			= "id_hid_mob_param6";
					break;
					case "GFT999T":
						jsSymbolLabelId 		= "id_div_rate_label_gft999t";
						jsSymbolAskId 			= "id_span_data_gft999t_ask";
						jsSymbolBkColorClass 	= "cl_sym_bkcolor_gft999t";
						jsSymbolRowId 			= "id_div_grid_gft999t";
						jsSymbolHidid 			= "id_hid_mob_param7";
					break;
					case "S999R":
						jsSymbolLabelId 		= "id_div_rate_label_s999r";
						jsSymbolAskId 			= "id_span_data_s999r_ask";
						jsSymbolBkColorClass 	= "cl_sym_bkcolor_s999r";
						jsSymbolRowId 			= "id_div_grid_s999r";
						jsSymbolHidid 			= "id_hid_mob_param8";
					break;
					case "S999T":
						jsSymbolLabelId 			= "id_div_rate_label_s999t";
						jsSymbolAskId 			= "id_span_data_s999t_ask";
						jsSymbolBkColorClass 	= "cl_sym_bkcolor_s999t";
						jsSymbolRowId 			= "id_div_grid_s999t";
						jsSymbolHidid 			= "id_hid_mob_param9";
					break;	
					case "G916":
						jsSymbolLabelId 			= "id_div_rate_label_g916";
						jsSymbolAskId 			= "id_span_data_orna_g916_incl";
						jsSymbolExclId 			= "id_span_data_orna_g916_excl";
						jsSymbolBkColorClass 	= "cl_sym_bkcolor_orna_g916";
						jsSymbolRowId 			= "id_div_grid_g916";
						jsSymbolHidid 			= "id_hid_mob_param10";
					break;
					case "S925":
						jsSymbolLabelId 			= "id_div_rate_label_s925";
						jsSymbolAskId 			= "id_span_data_orna_s925_incl";
						jsSymbolExclId 			= "id_span_data_orna_s925_excl";
						jsSymbolBkColorClass 	= "cl_sym_bkcolor_orna_s925";
						jsSymbolRowId 			= "id_div_grid_s925";
						jsSymbolHidid 			= "id_hid_mob_param11";
					break;


				}	

				jsBlockActive = "";
				if( jsKey == "G916" || jsKey == "S925" ){
					jsBlockActive = jsOrnaFlag;
				}
				else{
					jsBlockActive = jsRateFlag;	
				}



				if( jsAct == 'Y' && jsBlockActive == 'Y' ){

					$('#' + jsSymbolRowId).css("display", "block");
					document.getElementById(jsSymbolLabelId).innerHTML = jsDesc1 + " " + jsDesc2;
					document.getElementById(jsSymbolAskId).innerHTML = jsAsk;
					if( jsKey == "G916" || jsKey == "S925" ){
						document.getElementById(jsSymbolExclId).innerHTML = jsExcl;
					}

					
					if( jsDir == 0)
					{
						$("." + jsSymbolBkColorClass).css("background-color",jsGlobalColorRateUnchanged);
					}
					else if(jsDir == 1)
					{
						$("." + jsSymbolBkColorClass).css("background-color",jsGlobalColorRateUp);
					}
					else if(jsDir == -1 )
					{
						$("." + jsSymbolBkColorClass).css("background-color",jsGlobalColorRateDown);
					}
					
				}
				else
				{
					$('#' + jsSymbolRowId).css("display", "none");
				}
				
				//alert(jsSymbolHidid);
				document.getElementById(jsSymbolHidid).value = jsAsk;


			}		// End For Loop
		

		}
		
		
		
	}				// Check for Success flag
		
	
	
	
}		// End function - jsProcessJSONPResult

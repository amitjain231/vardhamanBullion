jsGlobalColorRateUp='#24bc09';jsGlobalColorRateDown='#d10011';jsGlobalColorRateUnchanged='transparent';jsGlobalDataStreamingOffHTML="<div class='cl_stream_off' >Data Streaming is <span style='color:#E35E1B'>off... </span> </div>";jsGlobalUserVisitURL="http://www.vardhamanbullion.com/dynamic/vbPGUpdateMobileUserVisitCount.php";jsGlobalGetScrollURL="http://www.vardhamanbullion.com/dynamic/vbPGGetMobileScrollMessage.php";jsGlobalJsonpUrl='http://132.148.85.27:9000/';$(document).on('vclick','a, div',function(e){var jsVarPrevDefault;var jsPopId;jsPopId="";jsVarPrevDefault=!1;switch(this.id)
{case "id_a_vb_booking":jsPopId="myPopupBooking";jsVarPrevDefault=!0;break;case "id_a_vb_contact":jsPopId="myPopupContact";jsVarPrevDefault=!0;break;case "id_a_vb_rtgs":jsPopId="myPopupRTGS";jsVarPrevDefault=!0;break;case "id_div_updateapp":jsPopId="UpdateApppopup";jsVarPrevDefault=!0;break}
if(jsPopId!="")
{if(jsVarPrevDefault==!0)
{e.preventDefault()}
$("#"+jsPopId).addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){$(this).removeClass("animated zoomIn")});$("#"+jsPopId).popup("open")}});function initApp()
{jsMobRefVBRates();jsVBAjaxUpdScroll();jsVBAjaxUdpateUserVisitCount()}
function jsVBAjaxUpdScroll()
{var jsParams;jsParams="";jsParams=jsParams+"TOKEN=DUMMY";jsParams=jsParams+"&";jsParams=jsParams+"PIN=18000101";$.ajax({type:"GET",async:"true",url:jsGlobalGetScrollURL,dataType:"jsonp",data:jsParams,crossDomain:!0,cache:!1,contentType:"application/json; charset=utf-8",dataType:"jsonp",jsonp:"callback",jsonpCallback:"jsVBProcessScrollMessageJSONPResult",success:onAjaxVBMobileGetScrollSuccess,error:onAjaxVBMobileGetScrollError})}
function onAjaxVBMobileGetScrollSuccess(jsResult)
{}
function onAjaxVBMobileGetScrollError(jsXhrObj)
{}
function jsVBProcessScrollMessageJSONPResult(jsonData)
{var jsCode,jsScrollMsg;jsCode=jsonData.CODE;jsScrollMsg=jsonData.SCROLLMSG;if(jsCode=="S")
{document.getElementById("id_scroll_marq").innerHTML=jsScrollMsg}}
function jsVBAjaxUdpateUserVisitCount()
{var jsParams;jsParams="";jsParams=jsParams+"TOKEN=DUMMY";$.ajax({type:"GET",async:"true",url:jsGlobalUserVisitURL,dataType:"jsonp",data:jsParams,crossDomain:!0,cache:!1,contentType:"application/json; charset=utf-8",dataType:"jsonp",jsonp:"callback",jsonpCallback:"jsVBProcessMobileJSONPResult",success:onAjaxVBMobileUserVisitSuccess,error:onAjaxVBMobileUserVisitError})}
function onAjaxVBMobileUserVisitSuccess(jsResult)
{}
function onAjaxVBMobileUserVisitError(jsXhrObj)
{}
function jsVBProcessMobileJSONPResult(jsonData)
{}
function jsMobRefVBRates()
{var jsTime;jsMobUpdVBRatesJSONP();jsTime=setTimeout("jsMobRefVBRates()",2000)}
function jsMobUpdVBRatesJSONP(){var jsCurrGoldBid,jsCurrGoldAsk,jsCurrSilverBid,jsCurrSilverAsk;var jsToday,jsCurrYear,jsCurrMonth,jsCurrDate;var jsCurrMonthStr,jsUTCDateStr;var jsURL,jsParamStr;jsToday=new Date();jsCurrYear=jsToday.getUTCFullYear();jsCurrMonth=jsToday.getUTCMonth();jsCurrDate=jsToday.getUTCDate();jsCurrMonth=jsCurrMonth+1;if(jsCurrMonth<10)
{jsCurrMonthStr='0'+jsCurrMonth.toString()}
else{jsCurrMonthStr=jsCurrMonth}
if(jsCurrDate<10)
{jsCurrDateStr='0'+jsCurrDate.toString()}
else{jsCurrDateStr=jsCurrDate}
jsUTCDateStr=jsCurrYear.toString()+jsCurrMonthStr.toString()+jsCurrDateStr.toString();var jsCurrParam1,jsCurrParam2,jsCurrParam3,jsCurrParam4,jsCurrParam5;var jsCurrParam6,jsCurrParam7,jsCurrParam8,jsCurrParam9,jsCurrParam10;var jsCurrParam11;jsCurrParam1=$("#id_hid_mob_param1").val();jsCurrParam2=$("#id_hid_mob_param2").val();jsCurrParam3=$("#id_hid_mob_param3").val();jsCurrParam4=$("#id_hid_mob_param4").val();jsCurrParam5=$("#id_hid_mob_param5").val();jsCurrParam6=$("#id_hid_mob_param6").val();jsCurrParam7=$("#id_hid_mob_param7").val();jsCurrParam8=$("#id_hid_mob_param8").val();jsCurrParam9=$("#id_hid_mob_param9").val();jsCurrParam10=$("#id_hid_mob_param10").val();jsCurrParam11=$("#id_hid_mob_param11").val();jsParamStr='';jsParamStr=jsParamStr+'PIN='+"18000101";jsParamStr=jsParamStr+'&';jsParamStr=jsParamStr+'PWD='+jsUTCDateStr;jsParamStr=jsParamStr+'&';jsParamStr=jsParamStr+'XAU='+jsCurrParam1;jsParamStr=jsParamStr+'&';jsParamStr=jsParamStr+'XAG='+jsCurrParam2;jsParamStr=jsParamStr+'&';jsParamStr=jsParamStr+'USD='+jsCurrParam3;jsParamStr=jsParamStr+'&';jsParamStr=jsParamStr+'G999R='+jsCurrParam4;jsParamStr=jsParamStr+'&';jsParamStr=jsParamStr+'G999T='+jsCurrParam5;jsParamStr=jsParamStr+'&';jsParamStr=jsParamStr+'GFT999R='+jsCurrParam6;jsParamStr=jsParamStr+'&';jsParamStr=jsParamStr+'GFT999T='+jsCurrParam7;jsParamStr=jsParamStr+'&';jsParamStr=jsParamStr+'S999R='+jsCurrParam8;jsParamStr=jsParamStr+'&';jsParamStr=jsParamStr+'S999T='+jsCurrParam9;jsParamStr=jsParamStr+'&';jsParamStr=jsParamStr+'G916='+jsCurrParam10;jsParamStr=jsParamStr+'&';jsParamStr=jsParamStr+'S925='+jsCurrParam11;$.ajax({type:"GET",async:"true",url:jsGlobalJsonpUrl,dataType:"jsonp",data:jsParamStr,crossDomain:!0,cache:!1,contentType:"application/json; charset=utf-8",dataType:"jsonp",jsonp:"callback",jsonpCallback:"jsProcessJSONPResult",success:onAjaxMobGetRatesSuccess,error:onAjaxMobGetRatesError})}
function onAjaxMobGetRatesSuccess(jsResult)
{}
function onAjaxMobGetRatesError()
{}
function jsProcessJSONPResult(jsonData)
{var jsKey,jsAct,jsFlag,jsCode,jsDesc,jsKeyVal1;var jsComexFlag,jsRateFlag,jsOrnaFlag;var jsCsym,jsDesc1,jsDesc2,jsAsk,jsDir;var jsSpace,jsGridNoStreamDivObj,jsGridComexDivObj,jsGridDivObj;var jsDataBKColor;var jsLine1,jsLine2;var jsHidFieldId;var i;jsSpace="&nbsp;";jsKey=jsonData.RESULT[0].KEY;jsFlag=jsonData.RESULT[0].FLAG;jsDesc=jsonData.RESULT[0].DESC;jsGridNoStreamDivObj=document.getElementById("id_div_grid_nostream");if(jsFlag=='E')
{$(".cl_div_grid_nostream").css("display","block");$(".cl_div_grid_comex_wrapper").css("display","none");$(".cl_div_grid_symbol_wrapper").css("display","none");$(".cl_div_grid_orna_wrapper").css("display","none")}
else if(jsFlag=='S')
{$(".cl_div_grid_nostream").css("display","none");jsKey=jsonData.RESULT[1].KEY;jsComexFlag=jsonData.RESULT[1].COMEXFLAG;jsRateFlag=jsonData.RESULT[1].RATEFLAG;jsOrnaFlag=jsonData.RESULT[1].ORNAFLAG;jsRdyFlgG999r=jsonData.RESULT[1].RI_G999R;jsRdyFlgG999t=jsonData.RESULT[1].RI_G999T;jsRdyFlgGFT999r=jsonData.RESULT[1].RI_GFT999R;jsRdyFlgGFT999t=jsonData.RESULT[1].RI_GFT999T;jsRdyFlgS999r=jsonData.RESULT[1].RI_S999R;jsRdyFlgS999t=jsonData.RESULT[1].RI_S999T;if(jsComexFlag=='Y'){$(".cl_div_grid_comex_wrapper").css("display","block")}
else{$(".cl_div_grid_comex_wrapper").css("display","none")}
if(jsRateFlag=='Y'){$(".cl_div_grid_symbol_wrapper").css("display","block")}
else{$('.cl_div_grid_symbol_wrapper').css("display","none")}
if(jsOrnaFlag=='Y'){$(".cl_div_grid_orna_wrapper").css("display","block")}
else{$(".cl_div_grid_orna_wrapper").css("display","none")}
if(jsComexFlag=='Y'){for(i=10;i<=12;i++)
{jsKey=jsonData.RESULT[i].KEY;jsDesc1=jsonData.RESULT[i].DESC1;jsDesc2=jsonData.RESULT[i].DESC2;jsBid=jsonData.RESULT[i].BID;jsAsk=jsonData.RESULT[i].ASK;jsHigh=jsonData.RESULT[i].HIGH;jsLow=jsonData.RESULT[i].LOW;jsAct=jsonData.RESULT[i].ACT;jsDir=jsonData.RESULT[i].DIR;if(jsAct=='Y'){switch(jsKey)
{case "XAU":$("#id_td_comex_label_xau").html(jsDesc1+" "+jsDesc2);$("#id_span_data_comex_g_ask").html(jsAsk);$("#id_span_data_comex_g_high").html(jsHigh);$("#id_span_data_comex_g_low").html(jsLow);jsClassId="cl_div_symbol_xauusd_ask";jsHidId="id_hid_mob_param1";break;case "XAG":$("#id_td_comex_label_xag").html(jsDesc1+" "+jsDesc2);$("#id_span_data_comex_s_ask").html(jsAsk);$("#id_span_data_comex_s_high").html(jsHigh);$("#id_span_data_comex_s_low").html(jsLow);jsClassId="cl_div_symbol_xagusd_ask";jsHidId="id_hid_mob_param2";break;case "USD":$("#id_td_comex_label_usd").html(jsDesc1+" "+jsDesc2);$("#id_span_data_comex_u_ask").html(jsAsk);$("#id_span_data_comex_u_high").html(jsHigh);$("#id_span_data_comex_u_low").html(jsLow);jsClassId="cl_div_symbol_usdinr_ask";jsHidId="id_hid_mob_param3";break}
if(jsDir==0)
{$("."+jsClassId).css("background-color",jsGlobalColorRateUnchanged)}
else if(jsDir==1)
{$("."+jsClassId).css("background-color",jsGlobalColorRateUp)}
else if(jsDir==-1)
{$("."+jsClassId).css("background-color",jsGlobalColorRateDown)}
document.getElementById(jsHidId).value=jsAsk}}}
if(jsRateFlag=='Y'||jsOrnaFlag=='Y'){for(i=2;i<=9;i++){jsKey=jsonData.RESULT[i].KEY;jsDesc1=jsonData.RESULT[i].DESC1;jsDesc2=jsonData.RESULT[i].DESC2;jsAsk=jsonData.RESULT[i].ASK;jsExcl=jsonData.RESULT[i].EXCL;jsAct=jsonData.RESULT[i].ACT;jsDir=jsonData.RESULT[i].DIR;switch(jsKey)
{case "G999R":jsSymbolLabelId="id_div_rate_label_g999r";jsSymbolAskId="id_span_data_g999r_ask";jsSymbolBkColorClass="cl_sym_bkcolor_g999r";jsSymbolRowId="id_div_grid_g999r";jsSymbolHidid="id_hid_mob_param4";jsRdyFlag=jsRdyFlgG999r;break;case "G999T":jsSymbolLabelId="id_div_rate_label_g999t";jsSymbolAskId="id_span_data_g999t_ask";jsSymbolBkColorClass="cl_sym_bkcolor_g999t";jsSymbolRowId="id_div_grid_g999t";jsSymbolHidid="id_hid_mob_param5";jsRdyFlag=jsRdyFlgG999t;break;case "GFT999R":jsSymbolLabelId="id_div_rate_label_gft999r";jsSymbolAskId="id_span_data_gft999r_ask";jsSymbolBkColorClass="cl_sym_bkcolor_gft999r";jsSymbolRowId="id_div_grid_gft999r";jsSymbolHidid="id_hid_mob_param6";jsRdyFlag=jsRdyFlgGFT999r;break;case "GFT999T":jsSymbolLabelId="id_div_rate_label_gft999t";jsSymbolAskId="id_span_data_gft999t_ask";jsSymbolBkColorClass="cl_sym_bkcolor_gft999t";jsSymbolRowId="id_div_grid_gft999t";jsSymbolHidid="id_hid_mob_param7";jsRdyFlag=jsRdyFlgGFT999t;break;case "S999R":jsSymbolLabelId="id_div_rate_label_s999r";jsSymbolAskId="id_span_data_s999r_ask";jsSymbolBkColorClass="cl_sym_bkcolor_s999r";jsSymbolRowId="id_div_grid_s999r";jsSymbolHidid="id_hid_mob_param8";jsRdyFlag=jsRdyFlgS999r;break;case "S999T":jsSymbolLabelId="id_div_rate_label_s999t";jsSymbolAskId="id_span_data_s999t_ask";jsSymbolBkColorClass="cl_sym_bkcolor_s999t";jsSymbolRowId="id_div_grid_s999t";jsSymbolHidid="id_hid_mob_param9";jsRdyFlag=jsRdyFlgS999t;break;case "G916":jsSymbolLabelId="id_div_rate_label_g916";jsSymbolAskId="id_span_data_orna_g916_incl";jsSymbolExclId="id_span_data_orna_g916_excl";jsSymbolBkColorClass="cl_sym_bkcolor_orna_g916";jsSymbolRowId="id_div_grid_g916";jsSymbolHidid="id_hid_mob_param10";jsRdyFlag='N';break;case "S925":jsSymbolLabelId="id_div_rate_label_s925";jsSymbolAskId="id_span_data_orna_s925_incl";jsSymbolExclId="id_span_data_orna_s925_excl";jsSymbolBkColorClass="cl_sym_bkcolor_orna_s925";jsSymbolRowId="id_div_grid_s925";jsSymbolHidid="id_hid_mob_param11";jsRdyFlag='N';break}
jsBlockActive="";if(jsKey=="G916"||jsKey=="S925"){jsBlockActive=jsOrnaFlag}
else{jsBlockActive=jsRateFlag}
if(jsAct=='Y'&&jsBlockActive=='Y'){$('#'+jsSymbolRowId).css("display","block");var jsReadyHtml="<span class='cl_span_ready_text'>Ready</span>";var jsLabelHTML="";if(jsRdyFlag=="Y"){jsLabelHTML=jsDesc1+" "+jsDesc2+" "+jsReadyHtml}
else{jsLabelHTML=jsDesc1+" "+jsDesc2}
document.getElementById(jsSymbolLabelId).innerHTML=jsLabelHTML;document.getElementById(jsSymbolAskId).innerHTML=jsAsk;if(jsKey=='G916'||jsKey=='S925'){document.getElementById(jsSymbolExclId).innerHTML=jsExcl}
if(jsDir==0)
{$("."+jsSymbolBkColorClass).css("background-color",jsGlobalColorRateUnchanged)}
else if(jsDir==1)
{$("."+jsSymbolBkColorClass).css("background-color",jsGlobalColorRateUp)}
else if(jsDir==-1)
{$("."+jsSymbolBkColorClass).css("background-color",jsGlobalColorRateDown)}}
else{$('#'+jsSymbolRowId).css("display","none")}
document.getElementById(jsSymbolHidid).value=jsAsk}}}}
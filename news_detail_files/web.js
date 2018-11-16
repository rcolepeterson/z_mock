
(function() {
    // Dynamic values from page request
    
var script = document.getElementById("celtra-script-1");
if (!script || script.tagName.toLowerCase() !== 'script')
    throw 'Element with id equal to scriptId does not exist or is not a script.';
  
    var runtimeParams = {"tagVersion":"6","deviceInfo":{"deviceType":"Desktop","primaryHardwareType":"Desktop","mobileDevice":false,"osName":"OSX","osVersion":"10.13.6","platform":"DesktopPlatform","platformVersion":null,"browserName":"Chrome","browserVersion":"70.0.3538.67","browserRenderingEngine":"WebKit","vendor":"Google","model":"Chrome - OS X"},"weather":{"windy":"0","currentCondition":"sunny","apparentTemperature":16.0,"temperature":15.6,"windSpeed":4,"cloudCoverage":0,"conditions":[{"name":"sunny","weight":1}]},"ipCountryCode":"US","ipRegionCode":null,"ipPrincipalSubdivisionCode":"WA","ipCityGeonameId":"5809844","ipCity":"Seattle","ipPostalCode":"98101","ipLat":47.6114,"ipLng":-122.3305,"accountId":"4ae29c59","folderId":"f746ab05","placementId":"d4a29f63","supplierId":"78238782","sessionId":"s1539904210x19cc08afaf4912x22289305","purpose":"live","secure":1,"clientTimestamp":"1539904127.829","clientTimeZoneOffsetInMinutes":420,"clientIp":"162.208.42.0","gpsLat":null,"gpsLng":null,"language":"en","acceptLanguage":"en-US,en;q=0.9","platformAdvId":null,"platformAdvIdTrackingLimited":null,"userIdentifiers":{},"variantChoices":{"TapDetection":"nativeClick"},"neustarSegment":null,"authBasis":"1539904210140,4635ae75,d4a29f63","authToken":"f0fff00cf0a7e7a75c8c3918911161fa","customAudiences":{},"derivedAudiences":{},"destinationDefinitions":[{"campaignId":null,"placementId":"d4a29f63","creativeId":null,"eventName":"urlOpened","reportLabel":"clickWebsiteGrey","destinationUrl":"https://ad.doubleclick.net/ddm/trackclk/N6535.1915638MOBKOI/B21447693.228446335;dc_trk_aid=426640864;dc_trk_cid=105693176;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=","destination":{"url":"https://ad.doubleclick.net/ddm/trackclk/N6535.1915638MOBKOI/B21447693.228446335;dc_trk_aid=426640864;dc_trk_cid=105693176;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=","clazz":"Fixed"},"impressionUrl":null},{"campaignId":null,"placementId":"d4a29f63","creativeId":null,"eventName":"urlOpened","reportLabel":"clickWebsiteEauDeParfum","destinationUrl":"https://ad.doubleclick.net/ddm/trackclk/N6535.1915638MOBKOI/B21447693.228446335;dc_trk_aid=426640864;dc_trk_cid=105693176;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=","destination":{"url":"https://ad.doubleclick.net/ddm/trackclk/N6535.1915638MOBKOI/B21447693.228446335;dc_trk_aid=426640864;dc_trk_cid=105693176;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=","clazz":"Fixed"},"impressionUrl":null},{"campaignId":null,"placementId":"d4a29f63","creativeId":null,"eventName":"urlOpened","reportLabel":"clickWebsiteMensEauDeToilette","destinationUrl":"https://ad.doubleclick.net/ddm/trackclk/N6535.1915638MOBKOI/B21447693.228446335;dc_trk_aid=426640864;dc_trk_cid=105693176;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=","destination":{"url":"https://ad.doubleclick.net/ddm/trackclk/N6535.1915638MOBKOI/B21447693.228446335;dc_trk_aid=426640864;dc_trk_cid=105693176;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=","clazz":"Fixed"},"impressionUrl":null}],"dynamicContent":{},"usedCustomFeedFields":[],"dynamicContentMetaData":{},"customFeedFields":[],"tuneIosQueryStringFragment":null,"tuneAndroidQueryStringFragment":null,"tuneCustomAttributes":{},"admarvel_format":null,"overrides":{"placementId":"d4a29f63","customAudiences":{},"derivedAudiences":{},"deviceInfo":{"deviceType":"Desktop","primaryHardwareType":"Desktop","mobileDevice":false,"osName":"OSX","osVersion":"10.13.6","platform":"DesktopPlatform","platformVersion":null,"browserName":"Chrome","browserVersion":"70.0.3538.67","browserRenderingEngine":"WebKit","vendor":"Google","model":"Chrome - OS X"},"language":"en","ipCountryCode":"US","ipRegionCode":null,"ipPrincipalSubdivisionCode":"WA","ipCityGeonameId":"5809844","ipCity":"Seattle","weather":{"windy":"0","currentCondition":"sunny","apparentTemperature":16.0,"temperature":15.6,"windSpeed":4,"cloudCoverage":0,"conditions":[{"name":"sunny","weight":1}]},"clientTimestamp":"1539904127.829","clientTimeZoneOffsetInMinutes":420},"utSignals":null,"_mraidCheck":null,"externalAdServer":"DCM","externalCreativeId":"105752522","externalCreativeName":null,"externalPlacementId":"228545551","externalPlacementName":null,"externalSiteId":"4138766","externalSiteName":null,"externalSupplierId":null,"externalSupplierName":"forbes.com","externalLineItemId":"426711619","externalSessionId":null,"externalBundleId":null,"externalCreativeWidth":300,"externalCreativeHeight":250,"externalCampaignId":"21684924","externalCampaignName":null,"clickUrl":"https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsvY-UbGiFWOLU02pXmOWkuQTGNdqTh4EQfiBPIzP1TC2l9CwP9SBwaVRvcyrVesZWKCG5nHNzf2D2f0TPSNbLktjYQRmF-Z0QaZmQ3lGhKY5rbcGtMq-8ISF02AV077&sai=AMfl-YTEMMtKCIG7Mj1s7d5Mv4dvLjq7zCHvypuPhQvKRb1oVoK8O98z-kP_0aLOI51pLY6zQmrPN-lW-7tQAx8QQFRlTKzrf5HBVWyNNaSIjADU&sig=Cg0ArKJSzNnlfxLeMvDPEAE&urlfix=1&adurl=https://adclick.g.doubleclick.net/pcs/click%3Fxai%3DAKAOjssH7McF1WhS1KBtyA5QYeu-btcxnpWfLzSSISumABNLsuQBwF65Mfj9Z2xQptZj_vNbasDSn29NsYqY5_WsqMGxDTd5XizVxynDmTZswlrapDc3je4JlUBjAHWEdFCD4OojYDL-Zgt3o7vicVuA1AVuyI452ZdJjqdWfUo8QOudrC8KApUK2t4phc0sY1HNgnhTNzgYVkm4or2QW2veSPpaXHwMLjxIWQOMd1rvUm-o0kBSlMAlDvWdeE06reQdAhA96etJSyo%26sai%3DAMfl-YRfo4eljY2-3qNqNJnerYpl9f9cir5kJ3ZDnMGxoy6OXnlb3QRmpX9mQ2TsyPG_Q1yrBwL21oFY3QXK8oUYNW-RAWjiWTwZ1WDNpIAas9wCdTSKcia7xegVbV4%26sig%3DCg0ArKJSzFXGIIjrkFNIEAE%26urlfix%3D1%26adurl%3Dhttps://googleads.g.doubleclick.net/dbm/clk%253Fsa%253DL%2526ai%253DCYwAsfRLJW9rTMo2XkwP-2LWIAonT27pTg9rNnpAI346d2pUPEAEg_tT1F2DJjsaN9KTQGcgBCakCf9zsw2fYtT6oAwGqBL4BT9DSuQD15kXDSEtyW5kDg1S7zJpV86eekGB1eYG4_W6tDWuS1q4286XjX-vOm_qKWYgLG-scd8WKo5ef8lz_IrlxgSOYQs-zR1L96_l_F4ornVqn8jNhzsKM6iWl8RfG07vaO55EHBmk23aALVtgo6fPvYQzJyC_YLT_zMKjzvIM47U2EuVtfWSzy5mv1LljnlU4aggQVhNLzIoOQJReaBxq2IGKee7OrVoEI6DwZbtjpmLcgwvqhHDHU3dMhsAE7OSSrt8B4AQDiAXOr4vqBZAGAaAGTdgGAoAHrNWmiAGoB47OG6gH1ckbqAe50huoB9nLG6gHz8wbqAemvhvYBwCgCNmspwSwCALSCAcIgAEQARgBgAoDsBPy1qQF0BMA2BMDghQQGg53d3cuZm9yYmVzLmNvbQ%2526num%253D1%2526cid%253DCAASEuRoC2lM6nOm30xnuz9f0yblQQ%2526sig%253DAOD64_3LkFFo4vVZ08B3nErifZJqm71oZw%2526dbm_c%253DAKAmf-CWisFxQa1kvxQ5xdJhKubode5Nc4bOWfHbq-7A8Vk9fxWvcrNqwhGMaYBZtRgBzbF3iyDb%2526dbm_d%253DAKAmf-Bd3SinaQVpaIo5y0q88Sj3aWUD2Gs9oIRMPghHC2Ng9YkbHRTQLfH68Wgsg2UarQ_uYIm4Cq0GKt0K2UTaHj8BJyLdP5c94udXebaBhYqiTX82VA0EI5UC65okoWUcjL9U3qWB4lie2oNhi1D7-EoAzejitTOv9ZPx1pEJY-RQg1CwuXdwsESR8IZEkbBotyHry_So4BC1JMtMDPSfeVQe7iYiMQ_v2gySF4BBVgWYSlzllorosCk3uRQsFEiI06D88xzr%2526adurl%253D","useClickAsDestination":null,"scriptId":"celtra-script-1","firehoseUrl":null,"user.disableautoplay":"","clickEvent":"advertiser","clickUrlNeedsDest":null,"ncu":null,"firstPage":1,"dataURIsEnabled":1,"universalAndAppLinksInMRAID":0,"monotypeProjectId":"c46ed090-3671-4163-a85b-b06b4038ae38","iosAdvId":null,"iosAdvIdTrackingLimited":null,"androidAdvId":null,"androidAdvIdTrackingLimited":null,"moatRandom":{"first":232211900,"second":1579825442},"skipOffset":null,"_enablePoliteLoading":null,"_politeImageUrl":null,"_politeClickThrough":null,"sticky":null,"_mopubExt":null,"enabledServices":["googleMaps","contentSharing"],"vastCompanion":0,"creativeVariantLockSize":null,"vastVersion":null,"scrollMessage":"Scroll to continue with content","preferredClickThroughWindow":"new","textColor":"#FFFFFF","offsetBottom":"","useFullWidth":"1","externalUserId":"AMsySZau_R6VJ6y8H4d57sY-MJe1","offsetTop":"","externalCreativeSize":"300x250","advertisementMessage":"Advertisement","barColor":"#000000","expandDirection":"undefined","hostPageLoadId":"8793887059756131"};
    runtimeParams.overridableClickThroughDestinationUrl = false;
    runtimeParams.redirectJsClientTimestamp = new Date() / 1000;
    
    
var macros = function (x) {
    if (x instanceof Array) {
        return x.map(macros);
    } else {
        var macroTags = [
            ['%%CACHEBUSTER%%', (Math.random()+'').slice(2)]
,['%n', (Math.random()+'').slice(2)]
,['%s', "https"]
,['{celtraAccountId}', "4ae29c59"]
,['{celtraAndroidAdvIdTrackingLimitedBoolStr}', ""]
,['{celtraAndroidAdvIdTrackingLimited}', ""]
,['{celtraAndroidAdvId}', ""]
,['{celtraCampaignId:int}', "4148603653"]
,['{celtraCampaignId}', "f746ab05"]
,['{celtraCreativeId:int}', "1177923189"]
,['{celtraCreativeId}', "4635ae75"]
,['{celtraCreativeVariant:urlenc}', ""]
,['{celtraCreativeVariant}', ""]
,['{celtraExternalAdServer}', "DCM"]
,['{celtraExternalBundleId}', ""]
,['{celtraExternalCampaignId}', "21684924"]
,['{celtraExternalCampaignName}', ""]
,['{celtraExternalCreativeId}', "105752522"]
,['{celtraExternalCreativeName}', ""]
,['{celtraExternalLineItemId}', "426711619"]
,['{celtraExternalPlacementId}', "228545551"]
,['{celtraExternalPlacementName}', ""]
,['{celtraExternalSessionId}', ""]
,['{celtraExternalSiteId}', "4138766"]
,['{celtraExternalSiteName}', ""]
,['{celtraExternalSupplierId}', ""]
,['{celtraExternalSupplierName}', "forbes.com"]
,['{celtraIosAdvIdTrackingLimitedBoolStr}', ""]
,['{celtraIosAdvIdTrackingLimited}', ""]
,['{celtraIosAdvId}', ""]
,['{celtraPlacementId:int}', "3567427427"]
,['{celtraPlacementId}', "d4a29f63"]
,['{celtraPlatformAdvIdTrackingLimited}', ""]
,['{celtraPlatformAdvId}', ""]
,['{celtraProto}', "https"]
,['{celtraRandom}', (Math.random()+'').slice(2)]
,['{celtraSessionId}', "s1539904210x19cc08afaf4912x22289305"]
,['{celtraSupplierId:int}', "2015594370"]
,['{celtraSupplierId}', "78238782"]

        ];
        return macroTags.reduce(function(str, replacementRule, idx, arr) {
            return str.replace(new RegExp(replacementRule[0], 'ig'), replacementRule[1] ? replacementRule[1] : '');
        }, x);
    }
};

    // Dynamic values that we do not want to pass forward in urls,
    // so we look them up on every page request based on runtimeParams
    var urlOpenedOverrideUrls = {"clickWebsiteGrey":"https://ad.doubleclick.net/ddm/trackclk/N6535.1915638MOBKOI/B21447693.228446335;dc_trk_aid=426640864;dc_trk_cid=105693176;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=","clickWebsiteEauDeParfum":"https://ad.doubleclick.net/ddm/trackclk/N6535.1915638MOBKOI/B21447693.228446335;dc_trk_aid=426640864;dc_trk_cid=105693176;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=","clickWebsiteMensEauDeToilette":"https://ad.doubleclick.net/ddm/trackclk/N6535.1915638MOBKOI/B21447693.228446335;dc_trk_aid=426640864;dc_trk_cid=105693176;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="};
    var storeOpenedOverrideUrls = {};
    var urlOpenedUrlAppendage = "";
    var clickThroughDestinationUrl = null;

    // Less dynamic values for payload request
    var payloadBase = "https://cache-ssl.celtra.com/api/creatives/4635ae75/compiled/web.js";
    var cacheParams = {"v": "8-f374ba190d-moatvideo", "secure": 1, "cachedVariantChoices": "W10-", "inmobi": typeof imraid !== 'undefined' && typeof _im_imai !== 'undefined' ? '1' : '0', "adx-in-banner-video": '1'};

    var trackers = (function() {
    return [
        // 3rd-party tracker (regular)
function(event) {
    if (event.name == 'adLoading')
        return {urls: macros(["https://secure-gl.imrworldwide.com/cgi-bin/m?ca=nlsn123919&cr=crtve&ce=mobkoi&pc=mobkoi_plc0003&ci=nlsnci614&am=3&at=view&rt=banner&st=image&r=[timestamp]","https://ad.doubleclick.net/ddm/trackimpj/N6535.1915638MOBKOI/B21447693.228446335;dc_trk_aid=426640864;dc_trk_cid=105693176;ord=%n;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?"])};

    if (event.name == 'firstInteraction')
        return {urls: macros([])};

    if (event.name == 'creativeLoaded')
        return {urls: macros([])};

    if (event.name == 'creativeRendered')
        return {urls: macros([])};

    if (event.name == 'viewable00')
        return {urls: macros([])};

    if (event.name == 'viewable501')
        return {urls: macros([])};

    if (event.name == 'expandRequested')
        return {urls: macros([])};

    if (event.name == 'videoPlayInitiated')
        return {urls: macros([])};

    if (event.name == 'videoStart')
        return {urls: macros([])};

    if (event.name == 'videoFirstQuartile')
        return {urls: macros([])};

    if (event.name == 'videoMidpoint')
        return {urls: macros([])};

    if (event.name == 'videoThirdQuartile')
        return {urls: macros([])};

    if (event.name == 'videoComplete')
        return {urls: macros([])};

    if (event.name == 'videoPause')
        return {urls: macros([])};

    if (event.name == 'videoMuted')
        return {urls: macros([])};

    if (event.name == 'videoUnmuted')
        return {urls: macros([])};

    if (event.name == 'custom')
        return {urls: macros({}[event.label] || [])};

    if (event.name == 'urlOpened')
        return {urls: macros({}[event.label] || [])};

    if (event.name == 'storeOpened')
        return {urls: macros({}[event.label] || [])};
},
// 3rd-party tracker (click regular)
function(event) {
    if (event.name === "urlOpened" && event.label === "clickWebsiteEauDeParfum" || event.name === "urlOpened" && event.label === "clickWebsiteGrey" || event.name === "urlOpened" && event.label === "clickWebsiteMensEauDeToilette")
        return {urls: macros([]), events: [{name: 'click'}] };
},
// Ad server tracker
function(event) {
    if (event.name === "urlOpened" && event.label === "clickWebsiteEauDeParfum" || event.name === "urlOpened" && event.label === "clickWebsiteGrey" || event.name === "urlOpened" && event.label === "clickWebsiteMensEauDeToilette")
        return {urls: macros(["https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsvY-UbGiFWOLU02pXmOWkuQTGNdqTh4EQfiBPIzP1TC2l9CwP9SBwaVRvcyrVesZWKCG5nHNzf2D2f0TPSNbLktjYQRmF-Z0QaZmQ3lGhKY5rbcGtMq-8ISF02AV077&sai=AMfl-YTEMMtKCIG7Mj1s7d5Mv4dvLjq7zCHvypuPhQvKRb1oVoK8O98z-kP_0aLOI51pLY6zQmrPN-lW-7tQAx8QQFRlTKzrf5HBVWyNNaSIjADU&sig=Cg0ArKJSzNnlfxLeMvDPEAE&urlfix=1&adurl=https://adclick.g.doubleclick.net/pcs/click%3Fxai%3DAKAOjssH7McF1WhS1KBtyA5QYeu-btcxnpWfLzSSISumABNLsuQBwF65Mfj9Z2xQptZj_vNbasDSn29NsYqY5_WsqMGxDTd5XizVxynDmTZswlrapDc3je4JlUBjAHWEdFCD4OojYDL-Zgt3o7vicVuA1AVuyI452ZdJjqdWfUo8QOudrC8KApUK2t4phc0sY1HNgnhTNzgYVkm4or2QW2veSPpaXHwMLjxIWQOMd1rvUm-o0kBSlMAlDvWdeE06reQdAhA96etJSyo%26sai%3DAMfl-YRfo4eljY2-3qNqNJnerYpl9f9cir5kJ3ZDnMGxoy6OXnlb3QRmpX9mQ2TsyPG_Q1yrBwL21oFY3QXK8oUYNW-RAWjiWTwZ1WDNpIAas9wCdTSKcia7xegVbV4%26sig%3DCg0ArKJSzFXGIIjrkFNIEAE%26urlfix%3D1%26adurl%3Dhttps://googleads.g.doubleclick.net/dbm/clk%253Fsa%253DL%2526ai%253DCYwAsfRLJW9rTMo2XkwP-2LWIAonT27pTg9rNnpAI346d2pUPEAEg_tT1F2DJjsaN9KTQGcgBCakCf9zsw2fYtT6oAwGqBL4BT9DSuQD15kXDSEtyW5kDg1S7zJpV86eekGB1eYG4_W6tDWuS1q4286XjX-vOm_qKWYgLG-scd8WKo5ef8lz_IrlxgSOYQs-zR1L96_l_F4ornVqn8jNhzsKM6iWl8RfG07vaO55EHBmk23aALVtgo6fPvYQzJyC_YLT_zMKjzvIM47U2EuVtfWSzy5mv1LljnlU4aggQVhNLzIoOQJReaBxq2IGKee7OrVoEI6DwZbtjpmLcgwvqhHDHU3dMhsAE7OSSrt8B4AQDiAXOr4vqBZAGAaAGTdgGAoAHrNWmiAGoB47OG6gH1ckbqAe50huoB9nLG6gHz8wbqAemvhvYBwCgCNmspwSwCALSCAcIgAEQARgBgAoDsBPy1qQF0BMA2BMDghQQGg53d3cuZm9yYmVzLmNvbQ%2526num%253D1%2526cid%253DCAASEuRoC2lM6nOm30xnuz9f0yblQQ%2526sig%253DAOD64_3LkFFo4vVZ08B3nErifZJqm71oZw%2526dbm_c%253DAKAmf-CWisFxQa1kvxQ5xdJhKubode5Nc4bOWfHbq-7A8Vk9fxWvcrNqwhGMaYBZtRgBzbF3iyDb%2526dbm_d%253DAKAmf-Bd3SinaQVpaIo5y0q88Sj3aWUD2Gs9oIRMPghHC2Ng9YkbHRTQLfH68Wgsg2UarQ_uYIm4Cq0GKt0K2UTaHj8BJyLdP5c94udXebaBhYqiTX82VA0EI5UC65okoWUcjL9U3qWB4lie2oNhi1D7-EoAzejitTOv9ZPx1pEJY-RQg1CwuXdwsESR8IZEkbBotyHry_So4BC1JMtMDPSfeVQe7iYiMQ_v2gySF4BBVgWYSlzllorosCk3uRQsFEiI06D88xzr%2526adurl%253D"]), events: [{name: 'clickReportedToSupplier'}] };
}
    ]
})();
    trackers.urlsAndEventsFor = function(event) {
        return this.reduce(function(acc, tracker) {
            var ue = tracker(event) || {};
            return {
                urls:   acc.urls.concat(ue.urls || []),
                events: acc.events.concat(ue.events || [])
            };
        }, {urls: [], events: []});
    };

    
var adLoadingEvent = {"name":"adLoading","sessionId":"s1539904210x19cc08afaf4912x22289305"};
adLoadingEvent.clientTimestamp = new Date/1000;

trackers.urlsAndEventsFor(adLoadingEvent).urls.forEach(function(url) {
    // On IE 8+ URLs containing '%' character sometimes throw an error and
    // stop current JS run loop. One solution  would be to look for that
    // and replace it with '%25', but we've decided not to modify incoming
    // URLs, because this issue is really a combination of two external
    // problems: broken URL on a buggy browser.
    // https://celtra.atlassian.net/browse/MAB-4476
    try {
        (new Image).src = url;
    } catch(e) {}
});
    

    function buildPayloadUrl(payloadBase) {
      var pairs = [];
      for (var k in cacheParams)
          pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(cacheParams[k]));
      return payloadBase + '?' + pairs.join('&');
    }

    var payloadUrl = buildPayloadUrl(payloadBase);

    
// Request and run payload
var payload = document.createElement('script');
payload.src = payloadUrl;
payload.onload = function() {

runtimeParams.payloadJsClientTimestamp = new Date() / 1000;
window.celtraDeviceInfoRuntimeParams = runtimeParams.deviceInfo;
window.celtra.payloads[payloadUrl](script, runtimeParams, trackers, urlOpenedOverrideUrls, storeOpenedOverrideUrls, macros, urlOpenedUrlAppendage, clickThroughDestinationUrl);
    
};
script.parentNode.insertBefore(payload, script.nextSibling);
    
    
    
// Append moat display script
var moatScript = document.createElement('script');
moatScript.src = 'https://z.moatads.com/mobkoiceltradisplay289114978933/moatad.js#moatClientLevel1=f746ab05&moatClientLevel2=78238782&moatClientLevel3=d4a29f63&moatClientLevel4=4635ae75&zMoatFT=Interscroller&zMoatBR=aeeb991a&zMoatMA=-&zMoatAS=DCM&zMoatDCMST=4138766&zMoatDCMCP=21684924&zMoatDCMPL=228545551&zMoatDCMCR=105752522';
moatScript.type = 'text/javascript';
script.parentNode.appendChild(moatScript);
var moatPixel = document.createElement('img');
moatPixel.src = 'https://pixel.moatads.com/pixel.gif?e=12&ac=1&bq=0&dz=1&f=0&gh=1&i=CELTRADISPLAY1&t=232211900&de=1579825442&d=f746ab05%3A78238782%3Ad4a29f63%3A4635ae75&bo=-&bd=-&cs=0';
      
})();
  
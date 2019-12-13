/**
* Example of SEMRUSH API Call:
https://api.semrush.com/?type=domain_organic&key=c7f1d3d79fc36b25ff13337266f5ca33&display_filter=%2B%7CPh%7CCo%7Cslippers&display_limit=10&export_columns=Ph,Po,Nq,Ur&domain=amazon.com&display_sort=nq_desc&database=us
*/
// var activeSheet = SpreadsheetApp.getActiveSpreadsheet();
// var endPoint = 'https://wprohubert.github.io/api.txt';
var apiDump =
    'Keyword;Position;Search Volume;Url\nugg slippers;9;246000;https://www.amazon.com/UGG-Womens-Coquette-Slipper/dp/B01MRV2PB9\nwomens slippers;2;74000;https://www.amazon.com/Womens-Slippers/b?ie=UTF8&node=679433011\nslippers;1;74000;https://www.amazon.com/Womens-Slippers/b?ie=UTF8&node=679433011\nmens slippers;1;60500;https://www.amazon.com/Mens-Slippers/b?ie=UTF8&node=679324011\nmens slippers;2;60500;https://www.amazon.com/Best-Sellers-Mens-Slippers/zgbs/fashion/679324011\nmens ugg slippers;7;60500;https://www.amazon.com/UGG-5775-Mens-Ascot-Slipper/dp/B01N2T0WRY\nugg slippers women;10;40500;https://www.amazon.com/UGG-Womens-Coquette-Slipper/dp/B01MRV2PB9\nugg slippers women;11;40500;https://www.amazon.com/Slippers-UGG-Shoes/s?rh=n%3A679433011%2Cp_89%3AUGG\ngucci slippers;37;27100;https://www.amazon.com/LaRosa-Leather-Backless-Slipper-Slip-ONS/dp/B06XKDBQSB\nll bean slippers;32;27100;https://www.amazon.com/slp/L-L-Bean-Men-s-Slippers/pqvvp9reow8344z';

// function checkTest1() {

// }
// var responseURL = UrlFetchApp.fetch(endPoint);
// if (responseURL.getResponseCode() == 200) {
// }
// var checkContent = responseURL.getContentText();
// var values = checkContent.split('\n');
document.addEventListener('readystatechange', function () {
    if (this.readyState == 'interactive') {
        var array = [];
        var responseURL = UrlFetchApp.fetch(endPoint);
        if (responseURL.getResponseCode() == 200) {
            var checkContent = responseURL.getContentText();
            var values = checkContent.split('\n');
            var array = [];
            foreach(var element in values) {
                var splash = element.split(';');
                array.push(splash);
            }
            foreach(var needle in keywords){
                var jackpot = array.find(getNeedle());
                return jackpot;
            }
            // return array;
        }
    }
})


function buildThat(array) {
    var ang = document.getElementById('apiboy');
    var apiParsed = document.createElement('div');
    var apiText = document.createTextNode(array);
    apiParsed.appendChild(apiText);
    ang.appendChild(apiParsed);
}
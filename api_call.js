const request = require('request');
var TwitterPackage = require('twitter');

function forsquare (){
    request({
        url: 'https://api.foursquare.com/v2/venues/search',
        method: 'GET',
        qs: {
            client_id: 'SDJS0C34H0E30MXZYBBC2QTOA5SPWLWKBILN1CRPSOHP30QW',
            client_secret: '0JMS0AY30XLEW1XTQXCUA4CGANWX13PNMAXWI2I2SIJDTGTK',
            ll: '56.8790,14.8059',
            // query: 'movie',
            v: '20180323',
            categoryId : '4c38df4de52ce0d596b336e1',
            limit: 1
            //
            // ll: '40.7243,-74.0018',
            // query: 'coffee',
            // v: '20180323',
            // limit: 1
        }
    }, function(err, res, body) {
        if (err) {
            console.error(err);
        } else {
            const result = JSON.parse(body)
            return result
            // console.log(result.response.venues[0].name);
            // console.log(result.response.venues[0].location)
        }
    });
}

function twitter (status) {
    var secret =
        {   consumer_key: 'EjVYS5wFrHvdXRuhJrQewTm9x',
            consumer_secret: 'bJSzg0RfyfO5d17dya1V8CbeZVZft2R6IVcbSXyKqJD0INt23g',
            access_token_key: '4685010138-Uhfa9b0XMAejYHYxjuqDVezeoatbIXWkGtn4uZX',
            access_token_secret: '4igkHULVVApR6T57eSyeKilhi3s8625LQix0BgQeUfdTA' };

    var Twitter = new TwitterPackage(secret);
    status = status.trim()

    Twitter.post('statuses/update', {status:status},function(error, tweet, response){
        if(error){
            console.log(error)
        }else{
            console.log(response)
        }
    });
}

function movies (movie) {
    const apiURL = "http://www.omdbapi.com/?t=";
    movie.trim()
    let t = encodeURI(movie);
    const key = '&apikey=ec157bc9'

    const url = `${apiURL}${t}${key}`;


    request.get(url,(err,res,body)=>{
        if(err){
            console.log(err)
        }
        else{
           let result = JSON.parse(body)
            return result
        }
    })

}

module.exports  = {forsquare,twitter,movies}
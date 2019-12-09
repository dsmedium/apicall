const express = require('express')
var intoStream = require('into-stream');
var TwitterPackage = require('twitter');
const api_call = require('./api_call')
const request = require('request')
const app = express()
app.use(express.json())

// let x = api_call.movies('joker')
// console.log(x)

app.get('/movie',(req,res)=>{

    const apiURL = "http://www.omdbapi.com/?t=";
    let movie = 'joker'
    movie.trim()
    let t = encodeURI(movie);
    const key = '&apikey=ec157bc9'

    const url = `${apiURL}${t}${key}`;

    req.pipe(request(url)).pipe(res);
})


app.post('/twitter',(req,res)=>{

    // var secret =
    //     {   consumer_key: 'EjVYS5wFrHvdXRuhJrQewTm9x',
    //         consumer_secret: 'bJSzg0RfyfO5d17dya1V8CbeZVZft2R6IVcbSXyKqJD0INt23g',
    //         access_token_key: '4685010138-Uhfa9b0XMAejYHYxjuqDVezeoatbIXWkGtn4uZX',
    //         access_token_secret: '4igkHULVVApR6T57eSyeKilhi3s8625LQix0BgQeUfdTA' }
    //
    // var Twitter = new TwitterPackage(secret)
     const status = req.body.status
    //
    // let stream     = intoStream(status);
    //
    //
    //
    // stream.pipe(Twitter.post('statuses/update', {status: 'me going to lahore'})).pipe(res)
    api_call.twitter(status)
})

app.get('/parking',(req,res)=>{

    req.pipe( request({
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

    })).pipe(res);

})

app.listen(4000,()=>{
    console.log('listening')
})
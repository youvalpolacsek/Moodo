const express = require( 'express' )
const router = express.Router()
const request = require('request')
const User = require('../models/User')

//route that gets a username from the client, checks if it is in database, if not create on, returns the user object from the db
router.post('/user', function(req, res){
    let userName = req.body
    User.find({name: userName.name}).exec(function(err, user){
        if(user[0]){
            res.send(user)
        }
        else{
            let newUser = new User(userName)
            newUser.save().then(function(newUser){
                res.send(newUser)
            })
        }
    })
})

//route that gets a name of th users as a param and sends back all user data
router.get('/user/:userName', function(req, res){
    let userName = req.params.userName
    User.findOne({name: userName}).exec(function(err, user){
        res.send(user)
    })
})

//the route that sends all the request to the api's by the mood param
router.get('/moods/:mood', function(req, res){
    let mood = req.params.mood
    let moodSet = {}
    let gifquery
    let playlistId
    let quotesTagName


    if(mood === 'happy'){

    }

    else if(mood === 'sad'){

    }

    else if(mood === 'curious'){

    }

    else if(mood === 'inLove'){

    }

    let gifURL = `http://api.giphy.com/v1/gifs/random?api_key=yyxf7oOJYIjOFmjoPdLuL1bI4lapOcZT&tag=cat&limit=1`
    let youtubeURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLcMpLfA-tqq2UmqeXwUh3uIQZ9aDQ9IXA&maxResults=40&key=AIzaSyDaZ42wgYwW0XQSAVh0g1KLWHOqdIyYOBQ`
    let quotesURl = `http://api.paperquotes.com/apiv1/quotes?tags=love&limit=10`
    
    /*request(gifURL, function(err, response){
        let parsedResponse = JSON.parse(response.body)
        let embedURL = parsedResponse.data.embed_url
        moodSet.gifUrl = embedURL
    })*/

    /*request(youtubeURL, function(err, response){
        let parsedResponse = JSON.parse(response.body)
        console.log(parsedResponse)
        let embedURLs = parsedResponse.items.map(i => i.snippet.resourceId.videoId)
        moodSet.youtubeUrl = embedURLs[randomnumber]
    })

    request({url: quotesURl, headers: {Authorization: 'token c895cd7c5e78cb62ba2bcab9b4c45361555f4107'}}, function(err, response){
        let parsedResponse = JSON.parse(response.body)
        let quotes = parsedResponse.results.map(i => i.quote)
        moodSet.quote = quotes[randomnumber]
    })*/
})


module.exports = router
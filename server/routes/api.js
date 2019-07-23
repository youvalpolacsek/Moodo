const express = require( 'express' )
const router = express.Router()
const request = require('request-promise')
const User = require('../models/User')

//gets a random number in a range we define
const getRandomInt = (max, min=0) => (Math.floor(Math.random() * max) + min)

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
router.get('/moods/:mood', async function(req, res){
    let mood = req.params.mood
    let moodSet = {}
    let gifTag //cat
    let playlistId //PLcMpLfA-tqq2UmqeXwUh3uIQZ9aDQ9IXA
    let quotesTagName //love
    moodSet.name = mood

    if(mood === 'happy'){
        gifTag = "happy"
        playlistId = "PLQkyUoPL5fAlVvtr_Q5sflfO5BYgmoV8r"
        quotesTagName = "happiness"
    }

    else if(mood === 'sad'){
        gifTag = "funnyanimal"
        playlistId = "PLzzwfO_D01M4nNqJKR828zz6r2wGikC5a"
        quotesTagName = "hope"
    }

    else if(mood === 'curious'){
        gifTag = "nature"
        playlistId = "PLLK8JI2DIu4q7araFSxIG5dfnE5kDI8YS"
        quotesTagName = "inspiration"
    }

    else if(mood === 'inLove'){
        gifTag = "love"
        playlistId = "PLx3wWkQvD0wuLg05pvb6lwmpnzdW52bSH"
        quotesTagName = "love"
    }

    let gifURL = `http://api.giphy.com/v1/gifs/random?api_key=yyxf7oOJYIjOFmjoPdLuL1bI4lapOcZT&tag=${gifTag}&limit=1`
    let youtubeURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=40&key=AIzaSyDaZ42wgYwW0XQSAVh0g1KLWHOqdIyYOBQ`
    let quotesURl = `http://api.paperquotes.com/apiv1/quotes?tags=${quotesTagName}&limit=10`
    
        
    await request(gifURL, function(err, response){
        let parsedResponse = JSON.parse(response.body)
        let embedURL = parsedResponse.data.embed_url
        moodSet.gifUrl = embedURL
    })
    
    await request(youtubeURL, function(err, response){
        let parsedResponse = JSON.parse(response.body)
        let embedURLs = parsedResponse.items.map(i => i.snippet.resourceId.videoId)
        moodSet.youtubeUrl = embedURLs[getRandomInt(9)]
    })
    
    await request({url: quotesURl, headers: {Authorization: 'token c895cd7c5e78cb62ba2bcab9b4c45361555f4107'}}, function(err, response){
        let parsedResponse = JSON.parse(response.body)
        let quotes = parsedResponse.results.map(i => i.quote)
        moodSet.quote = quotes[getRandomInt(9)]
    })

    res.send(moodSet)
})

//route that saves items that the user choses to save
router.post('/moods', function(req, res){
    let data = req.body
    User.findOne({name: data.username}).exec(async function(err, user){
        await user[data.moodSet.name].push(data.moodSet)
        user.save()
    })

    res.end()
})

//route that saves items that the user choses to save
router.delete('/moods', function(req, res){
    let data = req.body
    User.findOne({name: data.username}).exec(async function(err, user){
        let savedMoods = user[data.moodSet.name]
        for(let index in savedMoods){
            if(savedMoods[index].gifUrl === data.moodSet.gifURL && savedMoods[index].youtubeUrl === data.moodSet.youtubeUrl && savedMoods[index].quote === data.moodSet.quote){
                savedMoods.splice(index, 1)
            }
        }
        user.save()
    })
    res.end()
})

module.exports = router

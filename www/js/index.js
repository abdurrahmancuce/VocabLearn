/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var vocabularyWords = null;

var app = {

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var arr = [];

        // var test = document.getElementById('test');

        // test.addEventListener('click', function(){
        //     var request = new XMLHttpRequest();
        //     request.open("GET", "vocabulary.json", false);
        //     request.send(null)
        //     var vocabularyWords = JSON.parse(request.responseText);

        //     console.log(vocabularyWords);

        //     while(true){
        //         var rnd = Math.floor((Math.random() * vocabularyWords[0].words.length) + 1);
        //         if(arr.indexOf(rnd) > -1) continue;
        //         else{
        //             arr[arr.length] = rnd;
        //             alert(vocabularyWords[0].words[rnd].TYPE + " - " + vocabularyWords[0].words[rnd].ENGLISH);
        //             alert(vocabularyWords[0].words[rnd].TYPE + " - " + vocabularyWords[0].words[rnd].TURKISH);
        //             break;
        //         }
        //     }        
        // });

        f7.$$('#topics').on('show', function () {
            console.log('Topic page show!');
            var request = new XMLHttpRequest();
            request.open("GET", "../www/vocabulary.json", false);
            request.send(null)
            vocabularyWords = JSON.parse(request.responseText);
            var list = document.getElementById('list');

            var htmlText = "";

            for ( var key in vocabularyWords ) {
                htmlText += '<li>' +
                                '<a href="#" data-topic-key="' + key + '" onclick="app.openWordList(this)" class="item-link item-content">' +
                                    '<div class="item-media"><i class="icon ion-clipboard"></i></div>' +
                                    '<div class="item-inner">' +
                                        '<div class="item-title">' + vocabularyWords[key].name + '</div>' +
                                    '</div>' +
                                '</a>' +
                            '</li>';
            }
            topicList.innerHTML = htmlText;
        });
        
    },

    openWordList: function (topic) {
        f7.showTab('#words');
        console.log('Topic page show!');
        var topicKey = parseInt(topic.getAttribute("data-topic-key"));
        var words = vocabularyWords[topicKey].words;
        var htmlText = "";
        document.getElementById('topicName').innerHTML = vocabularyWords[topicKey].name;
        for ( var key in words ) {
            htmlText += '<li>' +
                            '<div class="item-content">' +
                                '<div class="item-media"><img src="img/logo.png" width="44"></div>' +
                                '<div class="item-inner">' +
                                    '<div class="item-title-row">' +
                                        '<div class="item-title">' + words[key].ENGLISH + '</div>' +
                                    '</div>' +
                                    '<div class="item-subtitle">' + words[key].TURKISH + '</div>' +
                                '</div>' +
                            '</div>' +
                        '</li>';
        }

        wordList.innerHTML = htmlText;
    }
};

app.initialize();
// these functions are for the return button
const ret = document.getElementById("return");
function turn_pink() {
    ret.style.color = "pink";
}
function turn_black() {
    ret.style.color = "black";
}

// this calls the first quote on load
window.addEventListener("load", function () {
    setTimeout(function() {
        translator('1');
    }, 1000)
});

// this function takes in the id and calls the createObject function, giving it all the data 
function translator(id) {
    if (id === "1") {
        createObject('"You have to start romanticizing your life," a voiceover on TikTok commands.“You have to start thinking about yourself as the main character.”',
            '“Main Character Energy: Interiority in a World of Screens,” Coco Klockner, REAL LIFE',
            "2", 
            'Why are we constantly told to see ourselves as the "main character"?',
            "3",
            'If you are the main character, music is your soundtrack.',
            "4",
            "If you are the main character, your life is a story."
        );
    }

    if (id === "2") {
        createObject('"The self, configured as a unitary, autonomous individual in possession of an essential subjectivity, is one of the linchpins of modern social organization.”',
            'Tia DeNora, Music as a technology of the self, Poetics, Volume 27, Issue 1, 1999.',
            "7", 
            'How is this self constructed?',
            "25",
            'Why is "the self" so characteristic of right <i>now</i>?'
        );
    }

    if (id === "3") {
        createObject(
            "“We can leverage all of our knowledge about who our users are and try to give them the perfect soundtrack for that moment.”",
            "Spotify CEO Daniel Ek",
            "5",
            "Are we being encouraged to live our life as a movie?",
            "6",
            'If we listen to music as a "soundtrack," is that the same as "background music"?',
            "17",
            "Spotify can <i>give</i> us a soundtrack, but we also choose our own soundtrack."
        );
    }
    
    if (id === "4") {
        createObject(
            "“We live entirely, especially if we are writers, by the imposition of a narrative line upon disparate images, by the ‘ideas’ with which we have learned to freeze the shifting phantasmagoria which is our actual experience.”",
            "The White Album, Joan Didion",
            "14",
            "How does music help us create a narrative line?",
            "5",
            "How does music help us make sense of the disorienting, the magical, the phantasmagoric?"
        );
    }
    
    if (id === "5") {
        createObject(
            "“The fact that [characters on screen] are living and nonliving at the same time is what constitutes their ghostly character, and music was introduced not to supply them with the life they lacked … but to exorcise fear or help the spectator absorb the shock.”",
            "Eisler and Adorno, <i>Composing for the Films</i>, New York: Oxford University Press, 1947, p. 75, quoted in Claudia Gorbman, “Why Music? From Silents to Sound,” <i>Unheard Melodies: Narrative Film Music</i>, p. 39",
            "19",
            "Music can supply reality, but it can also provide a <i>virtual reality</i>",
            "12",
            "More thoughts on music from Eisler and Adorno."
        );
    }
    
    if (id === "6") {
        createObject(
            "“Nevertheless, we must bring about a music which is like furniture – a music, that is, which will be part of the noises of the environment, will take them into consideration. I think of it as melodious, softening the noises of the knives and forks, not dominating them, not imposing itself.”",
            "Erik Satie, as quoted in John Cage, 1958 <i>Art News Annual</i>",
            "24",
            "Did Satie predict the future of music streaming?"
        );
    }
    
    if (id === "7") {
        createObject(
            "“Through myriad acts of everyday consumption – from the songs we listen to, to the products we buy – we produce our identity and modulate ourselves as individuals.”",
            "Prey, R. (2017). Nothing personal: algorithmic individuation on music streaming platforms. <i>Media, Culture & Society</i>, 40(7), 1086–1100. https://doi.org/10.1177/0163443717745147",
            "11",
            "There is more to me than my consumption.",
            "4",
            "There is agency in the production of identity."
        );
    }
    
    if (id === "8") {
        createObject(
            'In the "composting of past experiences," "music again comes to the fore, as part of the retinue of devices for memory retrieval (which is, of course, simultaneously memory construction)."',
            "Tia DeNora, Music as a technology of the self, Poetics, Volume 27, Issue 1, 1999.",
            "11",
            "Memory retrieval is memory construction.",
            "13",
            "How do we compost?", 
            "15",
            "How does music act as a repository for our memory?"
        );
    }
    
    if (id === "9") {
        createObject(
            "I worry about Spotify’s “On Repeat” algorithm cannibalizing itself: by listening to the songs, I push them onto the playlist, an infinite echo in digital streaming.",
            "",
            "8",
            "Composting the compost."
        );
    }
    
    if (id === "10") { 
        createObject(
            "Listening to music with headphones provides both insulation from the world and a portal to intimacy with an incredible number of people and places.",
            "",
            "18",
            "Both an escape from and an escape into."
        );
    }

    if (id === "11") {
        createObject(
            `For a streaming service, there is no <i>real</i> you.
    "I am an urban travel enthusiast with a penchant for the Delta blues … until I am not. 
    You are a suburban lover of smooth jazz … until you are not. 
    In short, streaming platforms promise the potential of ... the perpetually ‘becoming-individual’”`,
            "Prey, R. (2017). Nothing personal: algorithmic individuation on music streaming platforms. Media, Culture & Society, 40(7), 1086–1100.",
            "20",
            "This is not a radical rejection of the unitary, autonomous self on the part of Spotify.",
            "13",
            "I am a becoming-individual.",
            "22",
            "I will always be a suburban lover of smooth jazz."
        );
    }
    
    if (id === "12") {
        createObject(
            "'Aural perception 'preserves comparably more traits of long bygone, pre-individualistic collectivities.'”",
            "Eisler and Adorno, Composing for the Films (1947), quoted in Claudia Gorbman, “Why Music?” Unheard Melodies (40)",
            "10",
            "Do contemporary music listening practices further individualize us?"
        );
    }
    
    if (id === "13") {
        createObject(
            "The remix of Adele’s “Hometown Glory” yanks me to four years ago, on a bike, fingers cold and soaked from the rain, looking into the harbor in Alaska, knowing I would never be that version of myself again.",
            "",
            "7",
            "How is this 'self' constantly evolving?"
        );
    }
    
    if (id === "14") {
        createObject(
            "“Music can be used as a device for the reflexive process of remembering/constructing who one is, a technology for spinning the apparently 'continuous' tale of who one ‘is’.”",
            "Tia DeNora, Music as a technology of the self, Poetics, Volume 27, Issue 1, 1999.",
            "8",
            "How does music help us spin our story?",
            "22",
            "How does music help us construct our identity?"
        );
    }
    
    if (id === "15") {
        createObject(
            "Just as so much of my life is documented now through iPhone photos, FitBit data, and an endless cache of Google Searches, my musical life is archived through playlists titled “nov 2019,” “springtime,” “favs right now.”",
            "",
            "4",
            "In the Spotify l, a series of messy moments turns into a neat timeline."
        );
    }
    
    if (id === "16") {
        createObject(
            "To prepare for a gathering, I play Shygirl or Charli XCX or Yaeji or Timbaland as I put on makeup. I often feel like I’m playing myself as an instrument – manipulating auditory circumstances, reliant on their cultural connotations, in order to produce a new emotional state.",
            "",
            "18",
            "Does music fit or produce my new circumstances?"
        );
    }
    
    if (id === "17") {
        createObject(
            "We use music to rev up and to calm down. Music represents “where” we want to go, “emotionally, physically, and so on.”",
            "Tia DeNora, Music as a technology of the self, Poetics, Volume 27, Issue 1, 1999.",
            "16",
            "Where do I want to go?", 
            "18", 
            "Do we travel <i>into</i> music?"
        );
    }
    
    if (id === "18") {
        createObject(
            "Our metaphors representing our relationship with music betray the messy boundaries we hold with the medium: we escape into music, music becomes a part of us, we see ourselves in songs, the music “takes us back.” Do I enter music or does it enter me?",
            "",
            "27",
            "Both, at the same time"
        );
    }
    
    if (id === "19") {
        createObject(
            "“Music thus provides a virtual reality within which respondents are able to express themselves in a (symbolically) violent manner, for example by choosing 'aggressive' or 'anti-establishment' music, or by playing music at full volume.”",
            "Tia DeNora, Music as a technology of the self, Poetics, 27(1), 1999.",
            "5",
            "Music offers an anchor to an underlying life-force.", 
            "5",
            "Music is both more real and less real than 'real life'.",
            "27",
            "Step into the virtual reality."
        );
    }
    
    if (id === "20") {
        createObject(
            "“It’s becoming quite apparent to us that the world of playing the perfect music to people and the world of playing perfect advertising to them are strikingly similar.”",
            "Eric Bieschke, quoted in Prey, R. (2017). Nothing personal...",
            "22",
            "The most effective advertising comes from <i>really knowing</i> your customers.",
        );
    }
    
    if (id === "21") {
        createObject(
            "Streaming services '[tether] the potential for alternative futures to our previous actions as users based on consumption and research for consumption.’",
            "Cheney-Lippold, 2011, in Prey, R. (2017)",
            "9",
            "In practice.",
            "26",
            "Online, more than in offline, our future is limited by our past."
        );
    }
    
    if (id === "22") {
        createObject(
            "“Nothing more infallibly classifies, than tastes in music”",
            "Pierre Bourdieu, Distinction (1984:18), in Prey, R. (2017)",
            "23",
            "How do you want to be classified?",
            "11",
            "Classification is a continual process."
        );
    }
    
    if (id === "23") {
        createObject(
            "I want to have good music taste. I want to be discerning, yet eclectic. I want to be enthusiastic, intelligent, sometimes ironic. I want to be known to have good music taste.",
            "",
            "7",
            "Working from this desire, I construct myself."
        );
    }
    
    if (id === "24") {
        createObject(
            "“This is a vision of music not as art or even as commodity, but as something like audio furniture. Mood is the object; sound is beside the point.”",
            "Mitch Therieau, “Dream of Antonoffication,” The Drift",
            "26",
            "Mood predominates over emotion or experience.",
            "20",
            "Audio furniture makes for better advertising."
        );
    }
    
    if (id === "25") {
        createObject(
            "“Capitalism has no land left to cultivate but the self. Everything is being cannibalized -- not just goods and labor, but personality and relationships and attention.”",
            "Jia Tolentino, Trick Mirror",
            "7",
            "Our selves are increasingly exploited -- but we <i>also</i> work to maintain and construct them"
        );
    }
    
    if (id === "26") {
        createObject(
            "“The next step is complete identification with the online cketplace, physical and spiritual inseparability from the internet.”",
            "Jia Tolentino, Trick Mirror",
            "18",
            "Is there danger in complete identification with music?"
        );
    }
    
    if (id === "27") {
        createObject(
            "“And at the center of the swirl of sound that often doesn’t register as music so much as undifferentiated yearning, there is an empty space for you, the main character.”",
            "Mitch Therieau, “Dream of Antonoffication,” The Drift",
            "28",
            "I am the main character.",
            "29",
            "I am not the main character."
        );
    }
    
    if (id === "28") {
        createObject(
            "“Everyone deserves to be the main character of their own life. Everyone is the main character of their own life.”",
            "“Main Character Energy,” Magdalene J. Taylor, Many Such Cases Substack",
            "The End",
            "The End"
        );
    }
    
    if (id === "29") {
        createObject(
            "The main character persona bestows a sense of protection. The main character can be hurt, damaged, even be momentarily embarrassed, but redemption always comes... When we live as the main character, we’ve forfeited our vulnerability for the sake of the story.",
            "“Main Character Energy,” Magdalene J. Taylor, Many Such Cases Substack",
            "The End",
            "The End"
        );
    }
    
    if (id == "The End") {
        disableButtons();
        var div = createRandomlyPlacedDiv();
        div.style.width = "100vw";
        div.style.left = "0vw";
        var a = document.createElement('a');
        a.setAttribute('href', 'start/start.html');
        a.innerHTML = "Return to Start";
        document.body.appendChild(div);
        div.appendChild(a);
    }
}

var counter = 1; 

function createObject(quote, citation, button1_link = "", button1_title = "", button2_link = "", button2_title = "", button3_link = "", button3_title = "") {
   // create the new div 
    var wrapper = createRandomlyPlacedDiv();
    column.appendChild(wrapper);

    // first, disable all other buttons 
    disableButtons();

    var quote_div = document.createElement("div");
    quote_div.setAttribute("class", "quote");
    wrapper.appendChild(quote_div);

    typeWriter(quote, quote_div, 30, function () {
        // This happens AFTER the quote is fully typed
        setTimeout(function() {
            var citation_div = document.createElement("P");
            citation_div.setAttribute("class", "citation");
            citation_div.innerHTML = `${citation}`;
            wrapper.appendChild(citation_div);
        }, 500)

        if (button1_link && button1_title) {
            setTimeout(function() {
                var button1_div = document.createElement("button");
                button1_div.setAttribute("class", "button");
                button1_div.onclick = function () { translator(button1_link); };
                button1_div.innerHTML = button1_title;
                wrapper.appendChild(button1_div);
            }, 1000);
        }

        if (button2_link && button2_title) {
            setTimeout(function() {
                var button2_div = document.createElement("button");
                button2_div.setAttribute("class", "button");
                button2_div.onclick = function () { translator(button2_link); };
                button2_div.innerHTML = button2_title;
                wrapper.appendChild(button2_div);
            }, 1700)
        }

        if (button3_link && button3_title) {
            setTimeout(function() {
                var button3_div = document.createElement("button");
                button3_div.setAttribute("class", "button");
                button3_div.onclick = function () { translator(button3_link); };
                button3_div.innerHTML = button3_title;
                wrapper.appendChild(button3_div);
            }, 2400)
        }
    });
}

function disableButtons() {
    var buttons = document.getElementsByTagName("button");
    // loop through the wrappers
    for(var i = 0; i < buttons.length; i++){
        buttons[i].setAttribute("pointer-events", "none");
    }
}

function typeWriter(text, element, delay, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        } else {
            callback(); 
        }
    }
    type();
}

var div_counter = 0; 

function createRandomlyPlacedDiv() {
    var div = document.createElement("div");
    div.setAttribute("class", "random-div");
    div.style.left = randomLeft() + "vw";
    var new_id_num = div_counter + 1; 
    var new_id = "div_" + new_id_num;
    div.setAttribute("id", new_id);
    if (div_counter == 0) {
        div.style.top = "25vh";
        // set the button back to normal font size 
        
    } else {
        var prev_id = "div_" + div_counter;
        var prev_div = document.getElementById(prev_id);
        const rect = prev_div.getBoundingClientRect();
        const absolutePixels = rect.top + rect.height + window.scrollY;
        const vh = (absolutePixels / window.innerHeight) * 100;
        div.style.top = vh + "vh";
    }
    div_counter += 1;
    return div; 
}

function randomLeft() {
    var max_left = 50;
    return Math.floor(Math.random() * max_left); 
}
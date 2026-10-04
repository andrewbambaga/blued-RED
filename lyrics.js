/*
  blued, RED — lyrics viewer
  ------------------------------------------------------------
  Add to index.html, just before </body>:
      <script src="lyrics.js"></script>

  It adds a "Lyrics" button to every track in the tracklist and
  opens a full-screen lyrics view in the style of a streaming app.
  Direct links work too: yoursite.com/#lyrics-07 opens FEELS.

  HOW TO EDIT THE LYRICS (inside each `text: ` ... ` block below)
    blank line          -> new stanza
    [Verse 1]           -> section label
    @Name: line         -> speaker (skits / dialogue)
    {Beat}              -> stage note (sounds, tempo changes)
    (ooh!)              -> words in brackets show as softer ad-libs
  Don't use the ` (backtick) character inside the lyrics.
*/
(function () {
  "use strict";

  var TRACKS = [
    {
      no: 1, side: "blued", title: "back from america", tag: "Skit",
      credits: [["Narrated by", "Sharo Milionea & Mzee Majuto"], ["Written by", "Hussein Mkiety, Amri Athuman"]],
      text: `
@Sharo Milionea: Sasa inabidi mdomo unaukunja kidogo man,
@Mzee Majuto: Hivi ?
@Sharo Milionea: Yeah ahuh
@Mzee Majuto: Yeah right, yeah right, unajua wamarekani na jeurii jeuri yao

@Sharo Milionea: Say man,
@Mzee Majuto: Maan

@Sharo Milionea: Imma darling King
@Mzee Majuto: Darling mate yanakauka unajua ukiacha mdomo wazi upeopo unaingia ?

@Sharo Milionea: Oh my God unanilet down Daddy
@Mzee Majuto: Okay, let’s go c’mon

@Sharo Milionea: Okay, Imma darling King
@Mzee Majuto: Imma darling King

@Sharo Milionea: Sometime
@Mzee Majuto: I do things

@Sharo Milionea: Sometime
@Mzee Majuto: Sarsa Kley

@Sharo Milionea: Oh my God, Hahahaha!
@Mzee Majuto: Nakutajia watu wa marekani tu hapo, hahahahha!!

@Sharo Milionea: Okayy
@Mzee Majuto: Nsije nikasema kihindi, maana wahindi kama wametia ugoro (jibberish), sasa wamareakani ndo kidogo hv

@Sharo Milionea: Mommy
@Mzee Majuto: Moommy
`
    },
    {
      no: 2, side: "blued", title: "malaika",
      credits: [["Written by", "Adam Salim, Fadhili William, Tom Mboya, Miriam Makeba, Andrew Bambaga"]],
      text: `
Malaika
Nlikupenda malaika
Malaika
Nlikupenda malaika
Ningekuoa Mali weee
Ningekuoa Dada
Nashindwa na mali sina, weee
Nlikupenda malaika
Mi sina hali ishi bila weeee
Nlikupenda malaika

[Verse 1]
Kutwa kucha
Atamani tulivyokuwa
Nyoyo zetu
likuwa safi kama theluji
Ona bahari ichafuka
Cheko geuka kilio

Nashindwa na mali sina wee
Nlikupenda malaika
Mi sina hali ishi bila wee
Nlikupenda malaika

[Bridge]
Yeah!
Kama mabawa (aah!)
Kama vile ndege (eeh!)
Juu uliruka
Je mimi ni nani?
Kama mabawa
Kama vile ndege
Juu uliruka
Siwezi, zuia…

Malaikaa,
nilikupenda malaika (Malaika, weeh!)
Malaika,
nilikupenda malaika
Ona bahari ichafuka (ichafuka!)
Cheko geuka kilio (ooh!)

Nashindwa na mali sina wee
Nlikupenda malaika (malaika!)
Mi sina hali ishi bila wee
Nlikupenda malaika
`
    },
    {
      no: 3, side: "blued", title: "self control",
      credits: [["Written by", "Christopher Breaux, Malay Ho, Jon Brion, Alex G, Austin Feinstein, Andrew Bambaga"]],
      text: `
Nitakuwa
Mchumba wako tonight

Vuta wiwi wee,
Washa majani ujue,
Tuwashe moshi
Na tuvute kama vile shule
Nlivyokuona vile ulivyokuwa mzuri
Na wakati
Ulikuwa sawa

NIwekee nafasi
Nitalala kati
Si kitu, si kitu,
Niwekee nafasi

Yeah
Sometimes unanimiss,
Sauti yangu
Nikiwa naimba
Usiku walia
Nakuja
Kutembelea nikiwa na nafasi
Lakini kama, kama
Nilikupa your self control
Ukanifanya nilose
My self control
My self control, oaah!

(niwekee nafasi)
NIwekee nafasi (Yeah)
(No, no, no!)
Nitalala kati
(niwekee nafasi)
NIwekee nafasi
Si kitu, si kitu, (Yeah)
Si kitu

Sometimes, you miss it
And the sounds will make u cry
And some nights
Unadensi
Huku unalia kila wakati

Ni, ni, ni,
Ninajua utaondoka kiangazi
Uwe na wakati
Usiku, najua uko na mtu
Mpe wakati wako, baby
Mpe nafasi

I,
Ninajua utaondoka kiangazi
Uwe na wakati
Usiku, najua uko na mtu
Mpe wakati wako, baby
Mpe nafasi

I, I, I
Know u gotta leave, leave, leave,
Take down some summer time,
Give up just a night, night, night
Oh I, I,
Know u got someone coming,
You’re spittin game,
Know u got ittttttt!!!
`
    },
    {
      no: 4, side: "blued", title: "dalilah",
      credits: [["Written by", "Axon, Joshua Baraka, ZIKKU, Andrew Bambaga"]],
      text: `
Kumpenda likuwa easy
Kumtunza ikawa tricky part
Nkajikuta ninarun away

Maji moto, now im freezing
Got so cold, can't melt the ice,
Forever wakanda was a lie

Wajua nlikupenda Stavi…
I remember when u kept on whinin'
Tafuta sarafu gizani
Napapasa
Bila any light

[Bridge ×2]
Siwezi ishi like this
Babe i wont compete
I left to find my peace
Labda nahitaji pisi

Dalilah Dalilah baby
I’m not coming home
No more no more shawty
Siliwuwo
Dalilah Dalilah baby
I’m not coming home
No more no more shawty
Siliwuwo

[Verse 2]
samehe mara saba,
nane nishafanya
haba na haba
hujaza kibaba
Mi sio kanisa
mengi umefanya
nami nimefanya
hasi weka chanya

Ulivyoanza changing
That's when i knew
Ukaniona mshamba, sister duu,

Late night calling na wababa tu,
In the morning wanna be my boo,

You'll never ever get me baby,
Niko fasi dwasi
Mile ya 80
But when u want me
Niko ready
Cuz u'll always be my baby

Dalilah Dalilah baby
I’m not coming home
No more no more shawty
Siliwuwo
Dalilah Dalilah baby
I’m not coming home
No more no more shawty
Siliwuwo
Wowowowowo
Yeah,
`
    },
    {
      no: 5, side: "blued", title: "ukimuona", tag: "Acapella",
      credits: [["Written by", "Andrew Bambaga, Nasibu Abdul"]],
      text: `
I saw her moonlight
on the first day (the first day)
Just didnt know
There was more to unfold
In the next day
Then a couple days
Had to play along this time
Felt like she was mine
Fast forward 2020
Heartbreak was mine
It was hard to define
Man depressed
Weed inside
Then I kill myself again,
Wake up,

Mmmhh,
We nenda mwambie marafiki, marafiki wabaya
Tena wengi waongo, hawawazi ndanganye
Oya ni mashoga rafiki, oohh marafiki wabaya
Oh mmh
Tatizo mi bado, nilipoteleza nkakosa sipajui
Mpaka akafunga virago, na akaamua kuondoka sitambui
Ubaya, kinacho niumiza, maneno neno maneno
Mara kwa ndugu rafiki, kwanini anawapa misemo
Najaribu papasa, mbona ka macho ataona chochote
iIa ndo kutwa mikasa, na nazidi kuanguka, niokote
Mwenzio ma
Mi nasaka rumba
We unanidunda dunda,
Weweeee,
Ukimuona, yeyeee
`
    },
    {
      no: 6, side: "blued", title: "usaliti", tag: "Skit",
      credits: [["By", "Kanumba"], ["Written by", "Steven Kanumba"]],
      text: `
Maumivu ya usaliti
Ni makali mno
Ni makali mno

Ni bora mtu akufinye
Au hata akuchane na wembe
Mmhh
Kwa sababu
Maumivu yake unaweza ukasikia
Baada ya muda tu yakaisha

Lakini, maumivu ya usaliti,
Ni kitu ambacho
Kinaingia katika damu
Kinacheza na mzunguko wa damu
Kinakula moyo
Mtu anakonda
Anaumia

USALITI!!!
`
    },
    {
      no: 7, side: "red", title: "FEELS",
      credits: [["Written by", "Brooderick, Andrew Bambaga"]],
      text: `
I dont know where all these feelings come from,
Damn all this package issa Megatron,
But baby trappin' with it issa heavy load,
I know u'on mind but i guess u better know,
Tryna drown all these sorrows n' ge'in high alone,
You say i'm trippin' but for the rec she came once,
Let's not talk about the time that happened u went with a..,
Disregards to all the ones during lockdown,
Baby, I wonder why u always knock it down,
Bet it's the, money that'll never be enough,
Bet it's the, material things i could get u no gucci,
Bet it's the, that time Kiki had Drizzy in his feelings,
Bet it's the, that time i should just let us go,
Baby i been riding on this horse and boat all alone,
And all I got...,
All i got is these blues n' em' sad songs

Drop it head to toe
Take it down slow
They just deeper memories
You shouldnt fight alone
But im still mesmerized by the fact you called…
`
    },
    {
      no: 8, side: "red", title: "MISS U",
      credits: [["Written by", "Andrew Bambaga, ZIKKU, Kelvin Harrison Jr., Alexa Demie"]],
      text: `
[Hook · sample, sung with BAMBA]
I miss u
Dont want us in a silence
I miss u
Dont want us in a silence
Silence
No, no, no
Mhhh
No, no, no,
No,
I miss u

@Kelvin: Alright I’m sorry
@Alexa: You dont know how hard this is, it’s my body
@Kelvin: I get it its your body, relax
@Alexa: No u dont get it, u dont get it,
And it…,
I dont know if i can do an abortion
@Kelvin: What the fuck is u talking about?, huh?
@Alexa: I dont know, like…

@Kelvin: Stop crying, what do u mean u cant get an abortion?
@Alexa: Fuck u, u dont tell me to stop crying
This is my body
And u have no idea what its like

@Kelvin: I get it its your body I know, whatever
We’re still in highschool
We shouldn’t be having a baby right now, like
@Alexa: Yeah, that’s your point of view,
Thank u for caring about mine.
What is wrong with u?,

@Kelvin: What is wrong with u?
@Alexa: What the fuck is wrong with u?
@Kelvin: What is wrong with u?

[Verse 1]
Hey you know that i really missed you,
would do anything just to see u,
Its really hard to define,
it's really hard to mind,
it get really hard to diss u,

Yo mama hated yo new tattoo,
Plus im already a black dude,
I understand all the demise,
Wish we could take some time,
Tho i gotta defend u,

I got this arabian chick then i took her back to Kigogo,
She like nomad i told her thats the best logo,
She like yeah tena hata haihitaji promo,
Then we take a ride back in the morning,
Wish thing could stay the same like beforehand,
Its like i signed a bogus deal going in a war,
Though i know i'll lose it right back there in the end,

And then I missed u,
Im seated down realising how bad that i missed u,
I dont really care if she foreign,
My otha girls are boring,
should've grown harder if i held you close,

U like my potion then why u givin me mini-dose,
I wanna take u whole really got me overdosed,
yeah my bae so fly,
yeah my bae so high,
don't really know whats goin on behind closed doors,

Where are u now that i need ya,
seated alone all i wanna do is be besidde ya,
Know a lotta women, i can tell that u different,
U smart woman, fuck all the bitches that made me different,
Hung a lotta picture on a wall,
A lotta quotes on the wall
So many  lessons for the fall,
Now i'm careful for the fall,
Had enough of the fall,
Mothafucka' im outta breath,
But u still in my thoughts and i,

[Hook · sample, sung with BAMBA]
I miss u
Dont want us in a silence
I miss u
Dont want us in a silence
Silence
No, no, no
Mhhh
No, no, no,
No,
I miss u

[Verse 2]
Defend u being honest,
My girl u the modest,
Made me go the hardest,
I owe u one,
I trade u like forex,
I sold down yo currency,
Now that yo value is up or sm,

Okay, Okay, Okay,
Yeah I miss u,
I dont really know what i had till i left u,
guess im always runnin outta time just to pull thru,
this shit would've been a hell of a ride,
but i thank u,
I miss u
I miss u
I miss u
I miss u
I miss u
I miss u
I miss u,
My soul's running outta faith,
I hope the feelings u had there weren't,
No destiny i guess we just outta fate,
we can't really fight girl,
It was just a hoe phase,
destiny all that,
memories all that,
misery unfolded like mystery,
and for the peace all that,
ce' la'vie mami,
I wish what we had was a trilogy,
Its too late,
I hate it that I'm always late,
yet u told shit was just a piece of cake,
then tote all berretas in my own grave,
Print it on my own face,
Never just forget my name,
Know that i still miss u.

{Ending hook}
`
    },
    {
      no: 9, side: "red", title: "IMPERFECTLY PERFECT",
      credits: [["Written by", "Andrew Bambaga, ZIKKU"]],
      text: `
You too aint perfect
Its so imperfect
I know, I know
Down
You too aint perfect

[Chorus]
Its so imperfect
I know i know you’ll let me down,
You too ain’t perfect, you know you know,
Its so imperfect,
You turn me on then you turn me down,
You too ain’t perfect, you know you know

[Verse 1]
Go outside,
Live fast know that im gon die young,
Catch a shawty tell me what to think about,
Took some pills feeling something kicking in me now,

{Slow}
I bet its the same thrill that i felt,
When i saw u party one time in Cardell,
Telling me i was funny like Chapelle,
Can’t believe that u leaving though i could tell,
Cause everytime we were along you rang a bell,

{Up-tempo}
Then i woke up in a new Montecarlo,
She a bad girl,
She got pills just to swallow,
Sniffing all the cane’, Bobby brown in a hollow,
Sipping codeine all the purple till tomorrow,(morrow)

{Slowed}
Taking all these drugs say no more,
We don’t really know about tomorrow.

[Chorus]
Its so imperfect
I know i know you’ll let me down,
You too ain’t perfect, you know you know,
Its so imperfect,
You turn me on then you turn me down,
You too ain’t perfect, you know you know

Hahaha…
`
    },
    {
      no: 10, side: "red", title: "4AM IN KIGOGO",
      credits: [["Featuring", "Bambo"], ["Written by", "Brooderick, Andrew Bambaga, Dickson Makwaya"]],
      text: `
[Verse 1]
Yes it's true, I can't lie, so whatchu wanna prove,
I can turn u from who u're into a better u,
For the record  she was here just to collect her dues,
I just wanted something real, she just wanted the views,
But that's alright, I'm still the one that they all pursue,
I'm living my life, ain't got nothin' left to prove,
Money in the bank, I ain't got nothin' left to lose,
My flow so sick, it even got me on Wasafi news,

High school love, it was all just a dream,
Thinking back now, it wasn't all what it seemed,
Falling fast, thinking love was all supreme,
In reality, we were just fumbling like a team,

Working that 9-5, thought t'was all a dream,
But eerday felt like we just playing the sims,
Corporate life, never felt any quite supreme,
So i left, chase my passion, see if i can ride a BM
( left, chase my passion, see if i can ride a BM)

[Verse 2]
My old lady is asleep, that's like 1a.m,
Sneakin' in my bitch, Nig*a had to cop out a shell,
It's those 1 o 1's but i wouldn't kiss n' tell,
We hit my room, I'm like welcome to Uswaziland,

She in a pantyhose, i didn't to even get too close,
She pulled it down, got me froze, felt like overdose,
Before I even tryna get myself composed,
Nigga inside balls deep spilling fullo' loads'

Its now 3a.m,
Couldn't even imagine nipo na bonge la demu,
Tukipita macho kodo-do kila sehemu,
I swear to God i would've brought u the world'

But that's her world,
And I know baby we in a free world,
I got to remind u out there issa cruel world,
Why don't we just chill here in a Drew world,

She got me asking like, what is left to do,
U gave me half, gimme sm like all o' u,
Don't be shy, u ain't got nothin' to lose,
I'm just tryna tease u a little bit, my baby boo,
But inne morning we arguing like issa re-do,
Inne morning arguing like issa re-do,
Detangle, entangle, fuck again n' let it all loose,
It's hard for me, but it all started from the old u,

Or maybe issa new u...

Yeah..
{Beat}

It's 4a.m, now baby we just got to leave,
We were young  n' dumb, thinking love was all we need,
Tho it's hard to let go of what we used to be,
We both know, it's time to go, it's clear to see...

Yeah..

{Kigogo flood waves sound approaching with drizzling rain}

@Reporter: Kwa kuangalia tu hili eneo,
Wewe ni mchekeshaji,
Kila mtu ana nafasi yake kwenye kuelimisha jamii
Wewe unaelimishaje katika upande gani
hususani katika sekta yako ya uchekeshaji?
@Bambo: Ah mimi, kama ulivyosema kuelimisha,
Nadeal na kuelimisha zaidi
Katika mazingira ya jamii
Uswazi unavyoona
Maisha reality yanayomhusu binadamu
Ndo mimi shughuli zangu,
Eeh, kwahiyo hiki kinachoendelea
Nacho kichekesho pia
Hiki ni kichekesho
Lile unaweza kusema pale mbele lile ni godoro
Lakini si godoro, yale ni maji yanatembea

@Reporter: Unaweza kusema nikaingia pale?
@Bambo: Eeh, Unaweza kusema uingie pale,
Uende wapi rafiki yangu??
Pale unapiga vikombe unakufa
Unaweza kusema godoro Supa banco lile
Lakini kumbe ni maji yale,
Yanalingana na paa za mabati kwenda juu.

@Reporter: Haya bhana, mtazamaji huyo ni Bambo, akiwa anatoa maoni yake…

{END OF THE ALBUM.}
{Nomads ©}
`
    }
  ];

  /* ---------- styles ---------- */
  var css = `
.lx-open-btn{display:inline-flex;align-items:center;gap:6px;margin-top:8px;padding:5px 11px;font:500 11px/1 "JetBrains Mono",ui-monospace,Menlo,monospace;letter-spacing:.1em;text-transform:uppercase;color:inherit;background:transparent;border:1px solid currentColor;border-radius:999px;cursor:pointer;opacity:.85;transition:opacity .2s,background .2s}
.lx-open-btn:hover{opacity:1;background:rgba(255,255,255,.06)}
.lx-open-btn svg{width:12px;height:12px}
.side.blued .lx-open-btn{color:#8ea4ff}.side.red .lx-open-btn{color:#ff8a8a}
.lx-btn-row{grid-column:2}
ol.tracks .t{cursor:pointer}

.lx{--lx-bg1:#14267a;--lx-bg2:#070d33;--lx-accent:#9fb2ff;position:fixed;inset:0;z-index:1000;display:flex;flex-direction:column;color:#fff;background:linear-gradient(170deg,var(--lx-bg1),var(--lx-bg2) 75%);font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;opacity:0;transform:translateY(24px);transition:opacity .28s ease,transform .28s ease}
.lx.lx-red{--lx-bg1:#8a1218;--lx-bg2:#2a0507;--lx-accent:#ffb0b0}
.lx.lx-show{opacity:1;transform:none}
.lx-head{display:flex;align-items:center;gap:12px;padding:calc(12px + env(safe-area-inset-top,0px)) 16px 12px;background:linear-gradient(180deg,var(--lx-bg1) 60%,transparent)}
.lx-head img{width:44px;height:44px;object-fit:cover;border-radius:6px;flex:none;box-shadow:0 4px 16px rgba(0,0,0,.35)}
.lx-meta{min-width:0;flex:1}
.lx-title{font-weight:700;font-size:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lx-sub{font-size:13px;opacity:.7;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lx-ic{flex:none;width:40px;height:40px;display:grid;place-items:center;border-radius:50%;border:0;background:rgba(255,255,255,.12);color:#fff;cursor:pointer;transition:background .2s}
.lx-ic:hover{background:rgba(255,255,255,.22)}
.lx-ic:disabled{opacity:.3;cursor:default}
.lx-ic svg{width:20px;height:20px}
.lx :focus-visible{outline:2px solid #fff;outline-offset:2px}
.lx-scroll{flex:1;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
.lx-body{max-width:760px;margin:0 auto;padding:24px 20px calc(80px + env(safe-area-inset-bottom,0px))}
.lx-kicker{font-size:12px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;opacity:.65;margin:0 0 6px}
.lx-h{font-size:clamp(34px,7vw,56px);font-weight:800;line-height:1.02;letter-spacing:-.02em;margin:0 0 36px;text-wrap:balance}
.lx-stanza{margin:0 0 1.3em}
.lx-label{display:block;font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;opacity:.6;margin:0 0 10px}
.lx-spk{display:block;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--lx-accent);margin:14px 0 2px}
.lx-stanza>.lx-spk:first-child{margin-top:0}
.lx-line{display:block;font-size:clamp(23px,4.4vw,34px);font-weight:800;line-height:1.24;letter-spacing:-.012em;padding:3px 0;opacity:.5;cursor:pointer;transition:opacity .35s ease;overflow-wrap:anywhere}
.lx-line.lx-on{opacity:1}
.lx-dlg .lx-line{font-weight:700;font-size:clamp(21px,3.8vw,29px)}
.lx-ad{opacity:.62;font-weight:600}
.lx-note{display:block;font-size:16px;font-style:italic;font-weight:500;opacity:.6;margin:4px 0}
.lx-credits{margin-top:48px;padding-top:20px;border-top:1px solid rgba(255,255,255,.18);display:grid;gap:12px}
.lx-credits dt{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;opacity:.6}
.lx-credits dd{margin:2px 0 0;font-size:15px;line-height:1.5;opacity:.9}
.lx-next{margin-top:36px;display:inline-flex;align-items:center;gap:10px;padding:14px 20px;border:0;border-radius:999px;background:#fff;color:#111;font-family:inherit;font-weight:700;font-size:15px;line-height:1;cursor:pointer}
.lx-next svg{width:16px;height:16px}
html.lx-lock,html.lx-lock body{overflow:hidden}
@media (prefers-reduced-motion:reduce){.lx,.lx-line{transition:none}}
`;
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  /* ---------- helpers ---------- */
  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function adlibs(s) {
    return esc(s).replace(/\(([^)]*)\)/g, '<span class="lx-ad">($1)</span>');
  }
  var ICON = {
    down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
    lyr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 6h16M4 12h10M4 18h13"/></svg>'
  };

  function render(text) {
    var stanzas = text.replace(/\r/g, "").trim().split(/\n\s*\n/);
    return stanzas.map(function (block) {
      var html = "", dialogue = false;
      block.split("\n").forEach(function (raw) {
        var line = raw.trim();
        if (!line) return;
        var m;
        if ((m = line.match(/^\[(.+)\]$/))) {
          html += '<span class="lx-label">' + esc(m[1]) + "</span>";
        } else if ((m = line.match(/^\{(.+)\}$/))) {
          html += '<span class="lx-note">' + esc(m[1]) + "</span>";
        } else if ((m = line.match(/^@([^:]+):\s*(.*)$/))) {
          dialogue = true;
          html += '<span class="lx-spk">' + esc(m[1].trim()) + "</span>";
          if (m[2]) html += '<span class="lx-line">' + adlibs(m[2]) + "</span>";
        } else {
          html += '<span class="lx-line">' + adlibs(line) + "</span>";
        }
      });
      return '<div class="lx-stanza' + (dialogue ? " lx-dlg" : "") + '">' + html + "</div>";
    }).join("");
  }

  /* ---------- overlay ---------- */
  var coverEl = document.querySelector(".cover img.main");
  var cover = coverEl ? coverEl.getAttribute("src") : "cover.jpg";

  var root = document.createElement("div");
  root.className = "lx";
  root.hidden = true;
  root.setAttribute("role", "dialog");
  root.setAttribute("aria-modal", "true");
  root.setAttribute("aria-label", "Lyrics");
  root.innerHTML =
    '<div class="lx-head">' +
      '<button class="lx-ic" type="button" data-lx="close" aria-label="Close lyrics">' + ICON.down + "</button>" +
      '<img alt="" src="' + esc(cover || "cover.jpg") + '">' +
      '<div class="lx-meta"><div class="lx-title"></div><div class="lx-sub"></div></div>' +
      '<button class="lx-ic" type="button" data-lx="prev" aria-label="Previous track">' + ICON.prev + "</button>" +
      '<button class="lx-ic" type="button" data-lx="next" aria-label="Next track">' + ICON.next + "</button>" +
    "</div>" +
    '<div class="lx-scroll"><article class="lx-body"></article></div>';
  document.body.appendChild(root);

  var scroller = root.querySelector(".lx-scroll");
  var body = root.querySelector(".lx-body");
  var current = -1, lastFocus = null, lines = [], raf = 0;

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function show(i) {
    var t = TRACKS[i];
    if (!t) return;
    current = i;
    root.classList.toggle("lx-red", t.side === "red");
    root.querySelector(".lx-title").textContent = t.title;
    root.querySelector(".lx-sub").textContent = "BAMBA · " + (t.side === "red" ? "RED" : "blued,") + " · Track " + t.no;
    root.querySelector('[data-lx="prev"]').disabled = i === 0;
    root.querySelector('[data-lx="next"]').disabled = i === TRACKS.length - 1;

    var credits = (t.credits || []).map(function (c) {
      return "<div><dt>" + esc(c[0]) + "</dt><dd>" + esc(c[1]) + "</dd></div>";
    }).join("");
    var nxt = TRACKS[i + 1];
    body.innerHTML =
      '<p class="lx-kicker">' + pad(t.no) + (t.tag ? " · " + esc(t.tag) : "") + "</p>" +
      '<h2 class="lx-h">' + esc(t.title) + "</h2>" +
      render(t.text) +
      (credits ? '<dl class="lx-credits">' + credits + "</dl>" : "") +
      (nxt ? '<button class="lx-next" type="button" data-lx="next">Next: ' + esc(nxt.title) + " " + ICON.next + "</button>" : "");

    lines = Array.prototype.slice.call(body.querySelectorAll(".lx-line"));
    scroller.scrollTop = 0;
    focusLines();
    try { history.replaceState(null, "", "#lyrics-" + pad(t.no)); } catch (e) {}
  }

  function open(i, trigger) {
    lastFocus = trigger || document.activeElement;
    root.hidden = false;
    document.documentElement.classList.add("lx-lock");
    show(i);
    requestAnimationFrame(function () {
      root.classList.add("lx-show");
      root.querySelector('[data-lx="close"]').focus();
    });
  }

  function close() {
    root.classList.remove("lx-show");
    document.documentElement.classList.remove("lx-lock");
    setTimeout(function () { root.hidden = true; }, 280);
    current = -1;
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* highlight the line nearest the reading point, like a streaming app */
  function focusLines() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(function () {
      var box = scroller.getBoundingClientRect();
      var target = box.top + box.height * 0.38, best = null, bestD = Infinity;
      for (var k = 0; k < lines.length; k++) {
        var r = lines[k].getBoundingClientRect();
        if (r.bottom < box.top || r.top > box.bottom) { lines[k].classList.remove("lx-on"); continue; }
        var d = Math.abs((r.top + r.bottom) / 2 - target);
        if (d < bestD) { bestD = d; best = k; }
      }
      for (var j = 0; j < lines.length; j++) {
        lines[j].classList.toggle("lx-on", best !== null && Math.abs(j - best) <= 1);
      }
      // at the very top or bottom, light up what is visible
      if (scroller.scrollTop < 8 || scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 8) {
        lines.forEach(function (l) {
          var r = l.getBoundingClientRect();
          if (scroller.scrollTop < 8 ? r.top < box.top + box.height * 0.45 : r.bottom > box.bottom - box.height * 0.45) l.classList.add("lx-on");
        });
      }
    });
  }
  scroller.addEventListener("scroll", focusLines, { passive: true });
  window.addEventListener("resize", focusLines);

  root.addEventListener("click", function (e) {
    var b = e.target.closest("[data-lx]");
    if (b) {
      var a = b.getAttribute("data-lx");
      if (a === "close") close();
      if (a === "prev" && current > 0) show(current - 1);
      if (a === "next" && current < TRACKS.length - 1) show(current + 1);
      return;
    }
    var ln = e.target.closest(".lx-line");
    if (ln) {
      var top = ln.offsetTop - scroller.clientHeight * 0.38 + ln.offsetHeight / 2;
      scroller.scrollTo({ top: top, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  });

  document.addEventListener("keydown", function (e) {
    if (root.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight" && current < TRACKS.length - 1) show(current + 1);
    if (e.key === "ArrowLeft" && current > 0) show(current - 1);
  });

  /* ---------- hook into the tracklist ---------- */
  var items = document.querySelectorAll("ol.tracks li");
  Array.prototype.forEach.call(items, function (li, idx) {
    var noEl = li.querySelector(".no");
    var n = noEl ? parseInt(noEl.textContent, 10) : idx + 1;
    var i = -1;
    for (var k = 0; k < TRACKS.length; k++) if (TRACKS[k].no === n) i = k;
    if (i < 0) return;

    var row = document.createElement("span");
    row.className = "lx-btn-row";
    row.innerHTML = '<button type="button" class="lx-open-btn">' + ICON.lyr + "Lyrics</button>";
    li.appendChild(row);
    row.firstChild.addEventListener("click", function (e) { open(i, e.currentTarget); });

    var title = li.querySelector(".t");
    if (title) title.addEventListener("click", function () { open(i, row.firstChild); });
  });

  /* open from a link like #lyrics-07 */
  var m = (location.hash || "").match(/^#lyrics-(\d+)$/);
  if (m) {
    var n = parseInt(m[1], 10);
    for (var k = 0; k < TRACKS.length; k++) if (TRACKS[k].no === n) open(k);
  }
})();

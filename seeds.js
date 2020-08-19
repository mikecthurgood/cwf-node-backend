const Wall = require('./models/wall')
const Review = require('./models/review')

const seedWalls = async () => {

    // await Wall.destroy({ truncate:  'cascade' })

    // Wall.create({name: `Stronghold Climbing Centre`, description: `<p>Stronghold Climbing Centre is one of the UK's largest indoor bouldering centres offering hundreds of bouldering problems for climbers of all abilities, London's largest circuit board and a large, open-plan training area.</p>

    // <p>At Stronghold, we want to enhance the climbing community that we are part of, and the local community too. We believe climbing centres are more than just places to hone climbing skills – which is why you'll find numerous areas to hang out and socialise. </p>
    
    // <p>We want to promote climbing as part of a healthy lifestyle. This is why you'll also find a climbing-centric gym, fully equipped changing and shower facilities, event spaces and a well-stocked café. Our shop also has a full range of climbing and health-related products. Whether it's finding the perfect fit for your climbing shoes, or a balm to soothe your hands, our staff will be eager to help.</p>`, weekdayOpening: `12.00`, weekdayClosing: `22.00`, weekendOpening: `9.00`, weekendClosing: `19.00`, openingNotes: ``, websiteUrl: `https://www.thestrongholduk.com/`, imageUrl: `https://assets.londonist.com/uploads/2018/08/i875/stronghold.jpg`, boulderingOnly:true, addressLine1: `18 Ashley Road`, addressLine2: `Tottenham Hale`, addressLine3: ``, region: `Tottenham Hale`, city: `London`, postcode: `N17 9LJ`, email: `info@thestrongholduk.com`, phone: `020 8350 2453`, slug: `stronghold`, auto:false, top:false, lead:false, gym:true, cafe: true})
    
    // Wall.create({name: `Harrowall`, description: `<p>As the UK's largest bouldering centre, HarroWall has been designed to set new benchmarks for indoor climbing. Whether an adult keen to stay healthy and fit but bored of the normal gym to children looking to take their first climbing steps.</p>
    
    // <p>HarroWall is <strong>BIG!!</strong> Our c.40,000 sq ft centre has climbing activities for people of all ages and abilities. Whether you have never climbed before or you are a seasoned pro, HarroWall aims to cater for all your climbing desires!</p>
    
    // <p>HarroWall is primarily a climbing centre with its main objective of encouraging people of all ages to experience the wonderful sport of climbing. The Centre is predominantly devoted to low level climbing (bouldering) with problems ranging from those for beginners through to the hardest problems in the country. It is currently the largest bouldering Centre in the UK and has a huge range of training and gym facilities aimed at the climber who wants to get fitter, stronger and better at the sport.</p>`, weekdayOpening: `10.00`, weekdayClosing: `23.00`, weekendOpening: `09.00`, weekendClosing: `21.00`, openingNotes: ``, websiteUrl: `https://www.harrowall.co.uk/`, imageUrl: `https://www.kendalwall.co.uk/wp-content/uploads/sites/3/2018/02/DSC_1263-940x360.jpg`, boulderingOnly:false, addressLine1: `Unit 2a & 3a, Neptune Trading Estate`, addressLine2: `Neptune Rd,`, addressLine3: `Harrow,`, region: `Harrow`, city: `London`, postcode: `HA1 4HX`, email: `info@harrowall.co.uk`, phone: `020 3026 4960`, slug: `harrowall`, auto:true, top:false, lead:false, gym:true, cafe: true})

    // Wall.create({name: `VauxWall`, description: `<p>Our aim is to set a new benchmark in terms of accessibility, quality of climbing and standard of environment.</p>

    // <p>Online pre-registration with our induction video, a self-check-in service, air conditioning and chalk extraction are just some of the elements we have added to achieve this.</p>
    // <p>Whether you have never bouldered before or you are a seasoned pro, VauxWall aims to cater for all your climbing desires! Our incredibly convenient location, fantastic facilities and extended opening hours will ensure you can always get your climbing fix.</p>`, weekdayOpening: `06:00`, weekdayClosing: `23.00`, weekendOpening: `06:00`, weekendClosing: `23:00`, openingNotes: ``, websiteUrl: `https://www.vauxwest.co.uk/`, imageUrl: `https://climbingmoss.files.wordpress.com/2016/02/5e686-12644742_594482810699579_7737074622944976633_n.jpg`, boulderingOnly:true, addressLine1: `Arch 46 – 47a,`, addressLine2: `South Lambeth Road,`, addressLine3: `Vauxhall,`, region: `Vauxhall`, city: `London`, postcode: `SW8 1SR`, email: `info@vauxwall.co.uk`, phone: `020 7160 0248`, slug: `vauxwall`, auto:false, top:false, lead:false, gym:true, cafe: true})

    // Wall.create({name: `VauxEast`, description: `<p>Our aim is to set a new benchmark in terms of accessibility, quality of climbing and standard of environment.</p>

    // <p>Online pre-registration with our induction video, a self-check-in service, air conditioning and chalk extraction are just some of the elements we have added to achieve this.</p>
    // <p>Whether you have never bouldered before or you are a seasoned pro, VauxWall aims to cater for all your climbing desires! Our incredibly convenient location, fantastic facilities and extended opening hours will ensure you can always get your climbing fix.</p>`, weekdayOpening: `06:00`, weekdayClosing: `23:00`, weekendOpening: `06:00`, weekendClosing: `23:00`, openingNotes: ``, websiteUrl: `https://www.vauxeast.co.uk/`, imageUrl: `https://www.kendalwall.co.uk/wp-content/uploads/sites/9/2018/07/East1940x360.png`, boulderingOnly:true, addressLine1: `1 Cabanel Pl,`, addressLine2: `Lambeth,`, addressLine3: ``, region: `Lambeth`, city: `London`, postcode: `SE11 6BD`, email: `info@vauxwall.co.uk`, phone: `020 3026 4958`, slug: `vauxeast`, auto:false, top:false, lead:false, gym:true, cafe: true})

    // Wall.create({name: `RavensWall`, description: `<p>Our aim is to set a new benchmark in terms of accessibility, quality of climbing and standard of environment.</p>
    // <p>Online pre-registration with our induction video, a self-check-in service, air conditioning and chalk extraction are just some of the elements we have added to achieve this.</p>
    // <p>Whether you have never bouldered before or you are a seasoned pro, RavensWall aims to cater for all your climbing desires! Our incredibly convenient location, fantastic facilities and extended opening hours will ensure you can always get your climbing fix.</p>
    // <p>Lockers are available but remember to bring a padlock. Padlocks can also be purchased from the reception for £3. Freshen up after your climb with our spacious showers. Remember you can get unlimited towel hire with memberships or £1.50 per towel hire.</p>`, weekdayOpening: `06:00`, weekdayClosing: `22:30`, weekendOpening: `09:00`, weekendClosing: `21:00`, openingNotes: ``, websiteUrl: `https://www.ravenswall.co.uk/`, imageUrl: `https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/117339814_605604973428735_491758827187387947_o.jpg?_nc_cat=106&_nc_sid=e3f864&_nc_ohc=aIZ9BkPmeogAX8wsP5S&_nc_ht=scontent-lht6-1.xx&oh=595eb98e4987509df3369577dcc8b6ba&oe=5F6301A4`, boulderingOnly:true, addressLine1: `Arch 105`, addressLine2: `Ravenscourt Road`, addressLine3: `Hammersmith`, region: `Hammersmith`, city: `London`, postcode: `W6 0UQ`, email: `info@ravenswall.co.uk`, phone: `020 3026 4956`, slug: `ravenswall`, auto:false, top:false, lead:false, gym:true, cafe: false})

    // Wall.create({name: `CroyWall`, description: `<p>Our aim is to set a new benchmark in terms of accessibility, quality of climbing and standard of environment.</p>

    // <p>Online pre-registration with our induction video, a self-check-in service, air conditioning and chalk extraction are just some of the elements we have added to achieve this.</p>
    // <p>Whether you have never bouldered before or you are a seasoned pro, CroyWall aims to cater for all your climbing desires! Our incredibly convenient location, fantastic facilities and extended opening hours will ensure you can always get your climbing fix.</p>

    // <p>Lockers are available but remember to bring a padlock. Padlocks can also be purchased from the reception for £3. Freshen up after your climb with our spacious showers. Remember you can get unlimited towel hire with memberships or £1.50 per towel hire.</p>`, weekdayOpening: `06:00`, weekdayClosing: `22:00`, weekendOpening: `09:00`, weekendClosing: `21:00`, openingNotes: ``, websiteUrl: `https://www.croywall.co.uk/`, imageUrl: `https://img.grouponcdn.com/deal/zxFfbwT817WKXAc9tRGKJm2sQhM/zx-960x575/v1/c700x420.jpg`, boulderingOnly:true, addressLine1: `Unit 7 New South Quarter`, addressLine2: `Whitestone Way`, addressLine3: `Croydon`, region: `Croydon`, city: `London`, postcode: `CR0 4WN`, email: `info@croywall.co.uk`, phone: `020 3026 4967`, slug: `croywall`, auto:false, top:false, lead:false, gym:true, cafe: true})

    // Wall.create({name: `The Reach Climbing Centre`, description: `<p>The Reach has an incredibly experienced and welcoming team, offering a fantastic space for beginners and experienced climbers to excel. We are the largest & friendliest indoor climbing centre in South London.</p>

    // <p>We have over 50 top rope lines, the majority can also be led, 4 dedicated lead walls, including an impressive & unique 16m roof overhang, 12 TruBlue auto belays & 4 bouldering areas with a dedicated training room and yoga studio. </p>
    
    // <p>We also have fantastic cafe on site, serving delicious homemade food & cakes, all freshly baked on the premises.</p>`, weekdayOpening: `10:00`, weekdayClosing: `22:00`, weekendOpening: `10:00`, weekendClosing: `19:00`, openingNotes: ``, websiteUrl: `https://www.thereach.org.uk/`, imageUrl: `https://www.thebmc.co.uk/Handlers/ArticleImageHandler.ashx?id=7450&index=0&w=605&h=434`, boulderingOnly:false, addressLine1: `Unit 6, Mellish Estate`, addressLine2: `Harrington Way`, addressLine3: `Woolwich`, region: `Woolwich`, city: `London`, postcode: `SE18 5NR`, email: `info@thereach.org.uk`, phone: `020 8855 9598`, slug: `the-reach`, auto:true, top:true, lead:true, gym:true, cafe: true})

    // Wall.create({name: `The Climbing Hangar`, description: `<h4>Welcome to the Hangar</h4>
    // <p>The Climbing Hangar started life in a Liverpool warehouse in 2011. Since then we’ve grown to become a national business with four sites, 70 employees and over 12,000 climbers coming through the doors every month (4000 of whom are Hangar members).</p>
    
    // <p><strong>Our mission is simple – to help our customers lead happier, healthier and more connected lives through climbing.</strong></p>
    
    // <p>We are passionate about climbing. But more importantly we’re passionate about the impact that a social, challenging, supportive, progressive and fun activity can have on people’s lives, regardless of ability, age or fitness. Everything about the Hangar experience is designed to be easy to access, inclusive and friendly so you feel right at home, right away.</p>
    
    // <p>We have ambitious plans for the next few years, and we’re inspired to keep getting better by the experiences and stories of the people who climb with us every day. So thank you to everyone who has been part of the Hangar story so far, and to everyone else, we look forward future adventures. <strong>#boldertogether</strong></p>`, weekdayOpening: `07:00`, weekdayClosing: `22:00`, weekendOpening: `09:00`, weekendClosing: `20:00`, openingNotes: ``, websiteUrl: `https://www.theclimbinghangar.com/`, imageUrl: `https://headbox-media.imgix.net/uploads/space_photo/filename/21276/detail_Arran_on_overhang.jpg?auto=compress,format`, boulderingOnly:true, addressLine1: `5, Parsons Green Depot`, addressLine2: `33-35 Parsons Green Lane`, addressLine3: `Parsons Green`, region: `Parsons Green`, city: `London`, postcode: `SW6 4HH`, email: `london@theclimbinghangar.com`, phone: `020 7610 6276`, slug: `climbing-hangar`, auto:false, top:false, lead:false, gym:true, cafe: true})

    // Wall.create({name: `Mile End Climbing Centre`, description: `<p>The Mile End Climbing Wall is maintained by the registered charity <strong>'DEVELOPMENT through CHALLENGE'</strong> - promoting personal development through challenging physical activity, especially to the young person. By climbing at our centre, our customers help us to offer opportunities for youth groups, vulnerable young people, groups with special educational needs, and more.</p>

    // <p>We opened to the public in the late eighties and are housed inside an old pipe engineering works which is located within Mile End Park, a five-minute walk from Mile End Tube Station. It has grown to the current size, sporting approx. 16,000 sq. ft (1500 sq. m) of climbing surface.</p>
    // <p>We cater for the complete novice through to the seasoned professional offering a range of courses on and off site. The centre is widely used by other development charities, groups, schools and recreational climbers.</p>
    // <p>There is extensive bouldering (low level climbing without ropes) at all levels, top-roped and lead climbing as well as more advanced training areas - The Board Room, and our famous Monkey House.</p>`, weekdayOpening: `10:00`, weekdayClosing: `21:30`, weekendOpening: `10:00`, weekendClosing: `18:00`, openingNotes: ``, websiteUrl: `https://www.mileendwall.org.uk/`, imageUrl: `https://www.airbnb.com/google_place_photo?photoreference=CmRZAAAAha77Kkt6bDR9xf4BCY3l60wWdCPy96WCYZFQWa6nsSwKo9k156100C-2rXgnvbwwMZLd5fibpmcjG2WyOtINvKdBZeoQ7OVdXlfTdIT15hT6g6SYZZPBiR53SorXB_qCEhDYYAIlkP0IC4kJGo0gGGW_GhQGTWOl82dw_I8tkdeD9MO5Ob6Sng&maxwidth=800&maxheight=800&place_id=48639`, boulderingOnly:false, addressLine1: `Haverfield Rd`, addressLine2: `Mile End`, addressLine3: ``, region: `Mile End`, city: `London`, postcode: `E3 5BE`, email: `enquiries@mileendwall.org.uk`, phone: `020 8980 4543`, slug: `mile-end`, auto:true, top:true, lead:true, gym:true, cafe: true})

    // Wall.create({name: `Hackney Wick Boulder Project`, description: `<p>We are a brand new bouldering wall 1min from Hackney Wick Overground. We love climbing, and climbing walls. Most of our adventures started with a chat 'down the wall', and ended in some wild and rocky place. Our other passions are good music, good coffee and good cake!</p> 

    // <p>We may not be the biggest climbing wall. But we think you will agree that we punch above our weight :)</p>
    
    // <p>If you are new-ish to climbing, or just not keen to climb alone, come along to our informal ""Boulder Socials"". They are informal friendly drop in sessions, no booking necessary.</p>`, weekdayOpening: `12:30`, weekdayClosing: `22:00`, weekendOpening: `10:00`, weekendClosing: `19:00`, openingNotes: ``, websiteUrl: `https://hackneywickboulder.co.uk/`, imageUrl: `https://climbingmoss.files.wordpress.com/2017/04/062be-img_1360.jpg`, boulderingOnly:true, addressLine1: `117 Wallis Road`, addressLine2: `Hackney Wick`, addressLine3: ``, region: `Hackney Wick`, city: `London`, postcode: `E9 5LN`, email: `info@hackneywickboulder.co.uk`, phone: `0208 986 5432`, slug: `hackney-wick-boulder-project`, auto:false, top:false, lead:false, gym:true, cafe: true})

    // Wall.create({name: `Arch Climbing Wall - Building 1`, description: `<p>London's bouldering centres. 3 climbing gyms under one membership. Building One + features 15,000 square feet of modern bouldering and training areas in a former Damien Hirst gallery. Reimagined, expanded and relaunched in summer 2018.</p>

    // <p><strong>Telephone</strong>: 0207 237 4418 (please note that we may be unable to answer your call at peak times) </p>
    
    // <p><strong>Email</strong>: info@archclimbingwall.com</p>
    
    // <p><strong>Bicycle parking </strong>is provided on the right hand side of the yard, in front of Workspace reception, and there are a further 40 spaces immediately behind the Workspace reception block. Cark park info can be found here.</p>
    
    // <p><strong>Public transport</strong> Bermondsey (Underground), Canada Water (Underground + Overground), Surrey Quays (Overground)</p>`, weekdayOpening: `06:30`, weekdayClosing: `22:30`, weekendOpening: `10:00`, weekendClosing: `21:00`, openingNotes: ``, websiteUrl: `https://www.archclimbingwall.com/`, imageUrl: `https://images.squarespace-cdn.com/content/v1/5b6d8215b1059890c89e29bb/1546952613528-Z13J0KF9ROKUXYALC9Q9/ke17ZwdGBToddI8pDm48kOggE0Ch6pMGalwtLMqzsSB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufo5RWkg_J4of0jUNHaDHx6pZKBvpVYzidBWCapg0tuoMuEaB2HPGSYDV-11UTcW2g/20180830_ArchBuildingOne_1127_1920px.jpg?format=2500w`, boulderingOnly:true, addressLine1: `Drummond Road`, addressLine2: `Tower Bridge Business Centre`, addressLine3: `Bermondsey`, region: `Bermondsey`, city: `London`, postcode: `SE16 4DG`, email: `info@archclimbingwall.com`, phone: `020 7237 4418`, slug: `arch-building-1`, auto:false, top:false, lead:false, gym:true, cafe: true})

    // Wall.create({name: `Arch Climbing Wall - Arch Acton`, description: `<p>London's bouldering centres. 3 climbing gyms under one membership. </p>

    // <p><strong>Telephone</strong>: 020 3198 2530 (please note that we may be unable to answer your call at peak times) </p>
    
    // <p><strong>Email</strong>: info@archclimbingwall.com</p>
    
    // <p><strong>Bicycle parking </strong>is provided directly outside the front doors. We do not have onsite car parking, but there are metered car parks in the surrounding streets, and day long spaces available at www.justpark.com.</p>`, weekdayOpening: `10:00`, weekdayClosing: `22:00`, weekendOpening: `10:00`, weekendClosing: `21:00`, openingNotes: ``, websiteUrl: `https://www.archclimbingwall.com/acton-centre-info`, imageUrl: `https://images.squarespace-cdn.com/content/v1/5b6d8215b1059890c89e29bb/1571138473785-O29Q8OH2NCVDZ4ADQ5ES/ke17ZwdGBToddI8pDm48kAt72yGFwHZjoxtmj75n0VMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dvp1wM0jvciobd5mvjBb-PkjbbxSYDSdt-BIyUswy_5eG6v6ULRah83RgHXAWD5lbQ/Acton_main_area.jpg?format=1500w`, boulderingOnly:true, addressLine1: `20-24 High Street`, addressLine2: `Acton`, addressLine3: ``, region: `Acton`, city: `London`, postcode: `W3 6LJ`, email: `info@archclimbingwall.com`, phone: `020 3198 2530`, slug: `arch-acton`, auto:false, top:false, lead:false, gym:true, cafe: true})

    // Wall.create({name: `Arch Climbing Wall - Arch North`, description: `<p>London's bouldering centres. 3 climbing gyms under one membership.</p>

    // <p><strong>Telephone</strong>: 020 8205 6387 (please note that we may be unable to answer your call at peak times) </p>
    
    // <p><strong>Email</strong>: info@archclimbingwall.com</p>
    
    // <p><strong>Bicycle parking </strong>is provided directly in front of the centre.</p>
    
    // <p><strong>Public transport</strong> Burnt Oak (Northern Line) 7 minute walk</p>`, weekdayOpening: `10:00`, weekdayClosing: `22:00`, weekendOpening: `10:00`, weekendClosing: `21:00`, openingNotes: ``, websiteUrl: `https://www.archclimbingwall.com/north-centre-info`, imageUrl: `https://images.squarespace-cdn.com/content/v1/5b6d8215b1059890c89e29bb/1571137697454-N9HF8L13H0XEOWTWF2C1/ke17ZwdGBToddI8pDm48kCKxPW2sfGBnvcQSgcMLVQQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dh4T5RKB6zPI3hbe2JUz2BbdWsSPbgPXsF7Rr_6Gv48QZDqXZYzu2fuaodM4POSZ4w/North_main_area.jpg?format=1500w`, boulderingOnly:true, addressLine1: `5 Burnt Oak Broadway`, addressLine2: `Edgware`, addressLine3: `Burnt Oak`, region: `Burnt Oak`, city: `London`, postcode: `HA8 5LD`, email: `info@archclimbingwall.com`, phone: `020 8205 6387`, slug: `arch-north`, auto:false, top:false, lead:false, gym:false, cafe: true})

    // Wall.create({name: `The Castle Climbing Centre`, description: `<p>The Castle is run by climbers for climbers and as the premier indoor climbing centre in South East England, we receive more annual visits than any other climbing centre in the U.K. It is constructed within a magnificent Victorian building, formerly a water pumping station (and yes it really does look like a Castle!). </p>

    // <p>Since it first opened its doors to the public in October 1995 the Castle has grown, and is still growing! </p>
        
    // <p>The centre is now spread over 5 floors...with more yet to come. Housing over 450 roped and lead routes from 8m to 13m in height and an extensive range of bouldering surfaces we have something to suit everyone's ability, from beginners to experts, from the very young to the not so sprightly.</p>`, weekdayOpening: `12:00`, weekdayClosing: `22:00`, weekendOpening: `09:00`, weekendClosing: `19:00`, openingNotes: ``, websiteUrl: `https://www.castle-climbing.co.uk/`, imageUrl: `https://www.castle-climbing.co.uk/sites/default/files/field/image/Castle%20Climbing%20-%20GENERAL%20AREAS_%20342.jpg`, boulderingOnly:false, addressLine1: `Green Lanes`, addressLine2: `Stoke Newington`, addressLine3: `Islington`, region: `Islington`, city: `London`, postcode: `N4 2HA`, email: `info@castle-climbing.co.uk`, phone: `020 8211 7000`, slug: `the-castle`, auto:true, top:true, lead:true, gym:true, cafe: true})

    // Wall.create({name: `WestWay Climbing`, description: `<p>At Westway Climbing there's something for every kind of climber. </p>

    // <p>350 climbing routes on 110 ropes lines up to 13.5m. Bouldering with up to 150 boulder problems. Resetting every month. 4 auto-belay machines. Training rooms including a systems board and circuit board. Campus board, gymnastic rings, Lapis balls, quadruple Beastmaker finger boards, pull-up bar and stretching mat. UK renowned coaching and junior programme.</p>
    
    
    // <p>We've got a huge route-setting programme providing regular changes, with some of the most respected setters in the country, including national and international competition setters, gracing our walls. We aim to set 90 new routes per month and 150 boulder problems every four weeks.</p>`, weekdayOpening: `09:30`, weekdayClosing: `22:00`, weekendOpening: `08:00`, weekendClosing: `20:00`, openingNotes: `Opens 8am Thursdays`, websiteUrl: `https://www.everyoneactive.com/centre/westway-sports-fitness-centre/climbing/`, imageUrl: `https://media.dayoutwiththekids.co.uk/media/7380/35403-westway-climbing-north-kensington-01.jpg?anchor=center&mode=crop&quality=75&width=834&height=467`, boulderingOnly:false, addressLine1: `Westway Sports and Fitness Centre`, addressLine2: `1 Crowthorne Rd`, addressLine3: `White City`, region: `White City`, city: `London`, postcode: `W10 6RP`, email: `climbing@westway.org`, phone: `020 8969 0992`, slug: `westway-climbing`, auto:true, top:true, lead:true, gym:true, cafe: true})

    // Wall.create({name: `Craggy Island (Craggy 2)`, description: `<p>Indoor climbing the Craggy way is a fun, sociable activity with lots of challenges and thrills thrown in. It’s an extreme sport undertaken in a comfortable environment and a unique way to keep fit.</p>

    // <p>We believe in supporting and encouraging climbers of all abilities and helping them to get the maximum from their ongoing adventure. We offer expert climbing tuition in lots of attractive and accessible packages, plus many options for climbers with experience to come and find the mental and physical workout they’re looking for.</p>
    
    // <p>Craggy Island Sutton is a dedicated bouldering and caving centre, plus a fantastic kids’ party destination.</p>`, weekdayOpening: `12:00`, weekdayClosing: `22:00`, weekendOpening: `10:00`, weekendClosing: `19:00`, openingNotes: ``, websiteUrl: `https://www.craggy-island.com/about-craggy-island/craggy-island-sutton/`, imageUrl: `https://d1k6ys82tvgp93.cloudfront.net/uploads/2017/01/climbing-at-craggy-island-sutton.png`, boulderingOnly:true, addressLine1: `Oaks Sports Centre`, addressLine2: `Woodmansterne Rd`, addressLine3: `Banstead, Carshalton`, region: `Sutton`, city: `London`, postcode: `SM5 4AN`, email: `sutton@craggy-island.com`, phone: `0344 880 8866`, slug: `craggy-island-sutton`, auto:false, top:false, lead:false, gym:true, cafe: true})

    // Wall.create({name: `White Spider Climbing`, description: `<h4>White Spider is one of the UK's largest climbing centres.</h4>
    // <p>It's really spacious, bright, comfy with lots of climbing and bouldering.</p>
    // <p><strong>Climbing</strong>: Over 360 routes on 104 lines, up to 20 metres on our stalactite roof, grades from 3 to 8b.</p>
    // <p><strong>Bouldering</strong>: Over 200 boulder problems, including a massive comp wall, big cave and dedicated training area.</p>
    // <p>Regular route setting from some of the biggest names in the industry including <strong>Yann Genoux, Evie Cotrulia, Gaz Parry and Nathan Phillips</strong></p>
    // <p>Great facilities, cafe, kids castle and slackline.</p>`, weekdayOpening: `10:00`, weekdayClosing: `22:00`, weekendOpening: `10:00`, weekendClosing: `19:30`, openingNotes: `Monday opening 2pm`, websiteUrl: `https://spiderclimbing.com/white-spider/`, imageUrl: `https://d1k6ys82tvgp93.cloudfront.net/uploads/2017/01/White-Spider-Climbing-Centre-Surbiton.jpg`, boulderingOnly:false, addressLine1: `225 Hook Rise South`, addressLine2: `Surbiton`, addressLine3: `Greater London`, region: `Surbiton`, city: `London`, postcode: `KT6 7LD`, email: `climb@whitespiderclimbing.com`, phone: `020 8397 0390`, slug: `white-spider`, auto:true, top:true, lead:true, gym:true, cafe: true})

    // Wall.create({name: `The Nest`, description: `<p>Climbing wall, gym and workspace in Hillingdon</p>
    // <p>The Nest is a community focused climbing centre, with a bouldering wall, workspace, café, gym and fitness studio all under one roof.</p>
    // <h4>Climb + Fitness</h4>
    // <p>A first-class bouldering facility, gym and fitness studio open to all abilities. Our qualified instructors can help you scale new heights and achieve your fitness goals.</p>
    // <h4>​Cafe</h4>
    // <p>Serving speciality coffee, nutritious snacks and chocolate brownies! The go-to place to connect with friends and a hub for local events.</p>  
    // <h4>​Workspace</h4>
    // <p>A collaborative workspace with high-speed internet and flexible seating. Available on request for exclusive hire, the centre is a hub for creativity. An inspiring environment for hosting team events or simply catching up on emails.</p> 
    // <h4>How to reach us by car​</h4>
    // <p>The Nest is only a 5 min drive from junction 4 of the M4, and available parking makes it an easy journey form a number of surrounding areas such as West Drayton, Slough, Windsor. Our entrance is on Powerhouse lane in The Old Vinyl factory development. Be sure to pop into reception to pick up a parking permit upon arrival.</p> 
    // <h4>How to reach us by Train</h4>
    // <p>Hayes and Harlingdon station is a convenient 5min walk from the station and sits on the Great Western main line, which makes it a short journey from Hanwell, Southall, West Drayton, Iver, Slough.</p>`, weekdayOpening: `11:00`, weekdayClosing: `22:00`, weekendOpening: `09:00`, weekendClosing: `20:00`, openingNotes: ``, websiteUrl: `https://www.thenestclimbing.co.uk/`, imageUrl: `https://hirespace.imgix.net/spaces/181380/2rbatn22a2i.jpg?h=1080&w=1920&auto=format&fit=crop&q=40`, boulderingOnly:true, addressLine1: `The Nest Climbing`, addressLine2: `Material Walk`, addressLine3: `Hayes`, region: `Hayes`, city: `London`, postcode: `UB3 1DP`, email: `enquiries@thenestclimbing.co.uk`, phone: `020 3990 3449`, slug: `the-nest`, auto:false, top:false, lead:false, gym:true, cafe: true})

    
    // return 'DB Seeded'
    
    return 'seed data commented out to avoid duplication - go to the seeds file to change this'
}

module.exports = {seedWalls};

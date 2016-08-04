"use strict";angular.module("parishWebsiteApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","mailchimp"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/services",{templateUrl:"views/services.html"}).when("/address",{templateUrl:"views/address.html",controller:"AddressCtrl",controllerAs:"address"}).otherwise({redirectTo:"/"})}]),angular.module("parishWebsiteApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").controller("AboutCtrl",["$scope",function(a){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("parishWebsiteApp").controller("ServCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").controller("IndexCtrl",["$scope","$location",function(a,b){a.isActive=function(a){var c=a===b.path();return c}}]),angular.module("parishWebsiteApp").controller("AddressCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("parishWebsiteApp").run(["$templateCache",function(a){a.put("views/about.html",'<h2>History of the Parish</h2> <br> <div class="row"> <div class="col-md-2 col-sm-3 col-xs-4"> <img class="img-thumbnail center-block" src="images/MitrAntony.ad547ab3.jpg"> </div> <div class="col-md-10"> <p class="lead"> In 1973, Metropolitan Anthony came to receive an honorary doctorate from the University. During his visit Metropolitan Anthony also served the Divine Liturgy, for the small number of Russian Orthodox Christians living here which as far as we know, was the first occasion on which the Liturgy was served in Cambridge and we regard Vladyka Anthony\'s visit as the founding event in the life of our parish. A priest was sent from London to celebrate the Liturgy every month. By June 1978, Metropolitan Anthony gave the Community its own antimension. The community was placed in the care of Archpriest Basil Osborne who came to Cambridge from Oxford one Saturday each month, for over 20 years, to serve the Liturgy and care for the people. <br><br> </p> </div> </div> <div class="row"> <div class="col-md-12"> <p class="lead"> Fr John Jillions became the priest of the parish in 1998. We had no permanent home until, in December 2000, the community began to worship in the Chapel of Westcott House, an Anglican Theological College. This arrangement was intended to last until the end of 2001 but, more than 15 years later, we still worship there! Fr Raphael Armour was ordained to serve as a second priest to the Community in July 2001. In 2002, the community was received as a Parish of the Sourozh Diocese. Fr Raphael succeed Fr John as Rector of the Parish the following year. Fr Evgeny Selensky was appointed assistant priest of the parish in 2012. </p> </div> </div> <h2>Our saint</h2> <br> <div class="row"> <div class="col-md-3 col-sm-3 col-xs-4"> <img class="img-thumbnail" src="images/ephrem.1e233ceb.jpg"> </div> <div class="col-md-9"> <p class="lead"> Saint Ephraim was born in the city of Nisibis (today\'s Nusaybin in southeastern Turkey) in 306, just as the Great Persecution of Roman Emperor Diocletian was coming to an end. It is thought that he was born into a Christian family. He was later baptized, ordained deacon and appointed as a teacher by the first Bishop of Nisibis, St Jacob. As a teacher, St Ephraim took up the responsibility of passing on the Orthodox faith in a society where pagan religions, Judaism and early Christian sects vied with one another for adherents. He therefore set about writing Biblical commentaries, homilies and great numbers of hymns as a means of protecting the deposit of truth given to the Church.He called his hymns madrashe - that is, doctrinal hymns - and in the following prayer he compares himself to a herdsman, protecting Christ\'s flock in enclosures of madrashe. </p> </div> </div> <h2>Gallery</h2> <br> <div class="row"> <div class="col-md-12"> <p class="lead"> Here you can find the photos of our Parish and watch Fr Raphael\'s short interview. </p> </div> </div> <br> <div class="row"> <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12"> <!-- 16:9 aspect ratio --> <div class="embed-responsive embed-responsive-4by3"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/videoseries?list=PLNRTQPmTft_EyCih27tuXhDDrA0PeXxF5" frameborder="0" allowfullscreen></iframe> </div> </div> </div> <br> <div class="row"> <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"> <div class="embed-responsive embed-responsive-16by9"> <embed type="application/x-shockwave-flash" src="https://photos.gstatic.com/media/slideshow.swf" class="embed-responsive-item" flashvars="host=picasaweb.google.com&hl=en_US&feat=flashalbum&RGB=0x000000&feed=https%3A%2F%2Fpicasaweb.google.com%2Fdata%2Ffeed%2Fapi%2Fuser%2F111969728453042151069%2Falbumid%2F6313983496889306865%3Falt%3Drss%26kind%3Dphoto%26hl%3Den_US" pluginspage="http://www.macromedia.com/go/getflashplayer"> </div> <br> </div> <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"> <div class="embed-responsive embed-responsive-16by9"> <embed type="application/x-shockwave-flash" src="https://photos.gstatic.com/media/slideshow.swf" class="embed-responsive-item" flashvars="host=picasaweb.google.com&hl=en_US&feat=flashalbum&RGB=0x000000&feed=https%3A%2F%2Fpicasaweb.google.com%2Fdata%2Ffeed%2Fapi%2Fuser%2F111969728453042151069%2Falbumid%2F6313990312365930497%3Falt%3Drss%26kind%3Dphoto%26hl%3Den_US" pluginspage="http://www.macromedia.com/go/getflashplayer"> </div> </div> </div>'),a.put("views/address.html",'<p class="lead" align="center"> Westcott House, Jesus Lane, Cambridge, CB5 8BP </p> <p align="center"> Parking is available at <a href="https://www.cambridge.gov.uk/park-street-car-park">Park Street</a> and the <a href="https://www.cambridge.gov.uk/grand-arcade-car-park">Grand Arcade shopping center</a>. </p> <br> <div class="responsive-iframe-container"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.925600826834!2d0.1230059524935204!3d52.20839950208192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3e8b4c160c138a11!2sWestcott+House!5e0!3m2!1sen!2suk!4v1469742268380" width="600" height="300" frameborder="0" style="border:0" allowfullscreen></iframe> </div>'),a.put("views/contact.html","<p> Parish Priest: <br> Fr Raphael Armour <br> E-mail: father.raphael@saintephraim.org.uk <br> Home: 01223 322498 <br><br> Church Warden: <br> Vladimir Kiselev <br> E-mail: churchwarden@saintephraim.org.uk <br> </p>"),a.put("views/main.html",'<div class="row"> <div class="col-md-12"> <h2>Welcome to our website!</h2> <br> <p class="lead" align="left"> We are an Orthodox Parish in Cambridge, UK of the <a href="http://www.sourozh.org/">Diocese of Sourozh</a> - the diocese of the <a href="https://en.wikipedia.org/wiki/Russian_Orthodox_Church">Russian Orthodox Church</a> which covers the British Isles. Our parish was founded in <b>1973</b> by <a href="https://en.wikipedia.org/wiki/Anthony_of_Sourozh">Metropolitan Anthony of Sourozh</a>. We have regular services every Saturday and Sunday. </p> </div> </div> <hr> <div class="row"> <div class="col-lg-5 col-md-6 col-sm-6 col-xs-6"> <img class="img-thumbnail" src="images/parish-photo1.7bdbcd7f.jpg"> </div> <div class="col-lg-7 col-md-6"> <p class="lead"> We are an international Orthodox Parish. The services in the parish are, for the most part in English. Our parishioners come from Russia, Romania, Bulgaria, Serbia, Greece and Cyprus with others, mainly converts, from the UK, Germany, Switzerland, Zimbabwe, Australia, Hong Kong, South Africa and the USA. Each year several University students become part of the parish during their studies in Cambridge. From the 30 people who worshipped at the Divine Liturgy in 2001, on most Sundays we now have some 120 people, about 20% being under the age of eight! </p> </div> </div> <hr> <div class="row"> <div class="col-md-12"> <p class="lead" align="left"> If you are just a visitor, you are welcome to explore the website and to learn more about the Parish. If you are our parishioner and you would like to receive regular newsletters and updates from us, please subscribe to our mailing list using the form below. </p> </div> </div>'),a.put("views/services.html",'<div class="row"> <div class="col-md-6 col-sm-8 col-xs-10"> <div class="responsive-iframe-container-calendar"> <iframe src="https://calendar.google.com/calendar/embed?mode=AGENDA&amp;height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=saintephraim.org.uk%40gmail.com&amp;color=%238C500B&amp;ctz=Europe%2FLondon" style="border-width:0" width="800" height="500" frameborder="0" scrolling="no"></iframe> </div> <br> </div> <div class="col-md-6 col-sm-8 col-xs-10"> <div class="alert alert-danger"> <strong>Warning!</strong> Please note that due to security reasons access to the Westcott House out of business hours is limited and the gate will only be open at the times shown below. </div> <p> <h3>Sunday</h3> 08.30 - gate opens once. <br> 09.00 - gate opens once (for those who would like to confess). <br> 09.30 - 10.00 - gate is open and supervised. <br> 10.15 - gate opens once. <br> 10.30 - gate opens once and then closed until the end of Liturgy. <h3>Saturday</h3> <h4>Morning</h4> 09.00 - gate opens once (for those who would like to confess). <br> 09.30 - 10.00 - gate is open and supervised. <h4>Afternoon</h4> 16.30 - gate opens once. <br> 16.45 - 17.05 - gate is open and supervised, then locked until the end of service. <h3>Weekdays</h3> <h4>Mornings</h4> The gate is always open from 09:00 for normal business. <h4>Evenings</h4> The gate is opened 15 minutes before the start of the service and then locked five minutes after the service begins. <h4>People can let themselves out at any time but must lock the gate as they leave.</h4> </p> </div> </div>')}]);
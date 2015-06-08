var recipes = [
    {id:0 , name:"paella", title:"Introduction to Ionic", speaker:"CHRISTOPHE COENRAETS", time:"9:40am", room:"Ballroom A", description: "In this session, you'll learn how to build a native-like mobile application using the Ionic Framework, AngularJS, and Cordova."},
    {id:1 , name:"espaguetis", title:"AngularJS in 50 Minutes", speaker:"LISA SMITH", time:"10:10am", room:"Ballroom B", description: "In this session, you'll learn everything you need to know to start building next-gen JavaScript applications using AngularJS."},
    {id:2 , name:"solomillo", title:"Contributing to Apache Cordova", speaker:"JOHN SMITH", time:"11:10am", room:"Ballroom A", description: "In this session, John will tell you all you need to know to start contributing to Apache Cordova and become an Open Source Rock Star."},
    {id:3 , name:"pollo", title:"Mobile Performance Techniques", speaker:"JESSICA WONG", time:"3:10Pm", room:"Ballroom B", description: "In this session, you will learn performance techniques to speed up your mobile application."},
    {id:4 , name:"bizcocho", title:"Building Modular Applications", speaker:"LAURA TAYLOR", time:"2:00pm", room:"Ballroom A", description: "Join Laura to learn different approaches to build modular JavaScript applications."}
];

exports.findAll = function (req, res, next) {
    res.send(recipes);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(recipes[id]);
};

exports.findByName = function (req, res, next){
	var name =req.params.name;
	for(var i=0; i<recipes.length; i++){
		if(name == recipes[i].name){
			res.send(recipes[i]);
		}
	}
};

exports.findCategoryById = function (req, res, next){
    console.log('Peticion en funcion de la categoria');
	res.send(recipes[0]);
};
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var model = require('./models');
var cors = require('cors');

app.use(cors({origin: '*'}));

// connect mongoose.
//connecting to database:
mongoose.connect('mongodb://localhost/palleteDB');
//working around bodyParser:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set port:
var port = process.env.PORT || 3000;

//initiating router service:
var router = express.Router();
//function for building csv:
function dataToCSV(dataList,headersLength){
    var allObjects = [];
    // Pushing the headers, as the first arr in the 2-dimensional array 'allObjects' would be the first row
    var headers = [];
    headers.push('group');
    for(var i = 0; i < headersLength; i++){
    	headers.push('Q'+(i+1));
    }
    allObjects.push(headers);

    //Now iterating through the list and build up an array that contains the data of every object in the list, in the same order of the headers
    dataList.forEach(function(object){
        var arr = [];
        arr.push(object.groupName);
        arr.push.apply(arr, object.answers);
        // Adding the array as additional element to the 2-dimensional array. It will evantually be converted to a single row
        allObjects.push(arr)
    });

   // Initializing the output in a new variable 'csvContent'
    var csvContent = "";

    // The code below takes two-dimensional array and converts it to be strctured as CSV
    // *** It can be taken apart from the function, if all you need is to convert an array to CSV
    allObjects.forEach(function(infoArray, index){
      var dataString = infoArray.join(",");
      csvContent += index < allObjects.length ? dataString+ "\n" : dataString;
    }); 

    // Returning the CSV output
    return csvContent;
}
// testing:
router.get('/', function(req, res){
	res.json({msg: 'YAY!'});
});

router.post('/newGroup', function(req, res){
	var g = model.group(req.body);
	g.save(function(err){
		if(err)
			res.send(err);
		res.json({msg: 'group successfully added!'});
	});
});
router.post('/removeGroup', function(req, res){
	model.group.remove({_id: req.body._id}, function(err){
		if(err)
			res.send(err);
		res.json({msg: 'group removed successfully'});
	});
});


//questions:
router.get('/allQuestions', function(req, res){
	model.question.find({}, function(err, q){
		if(err)
			res.send(err);
		res.json(q);
	});
});

router.post('/newQuestion', function(req, res){
	var q = model.question(req.body);
	q.save(function(err){
		if(err)
			res.send(err);
		res.json({msg: 'question successfully added!'});
	});
});
router.post('/removeQuestion', function(req, res){
	model.question.remove({_id: req.body._id}, function(err){
		if(err)
			res.send(err);
		res.json({msg: 'question removed successfully'});
	});
});

//answers:
router.get('/allAnswers', function(req, res){
	model.answer.find({}, function(err, a){
		if(err)
			res.send(err);
		res.json(a);
	});
});
router.post('/submitAnswers', function(req, res){
	var a = model.answer(req.body);
	a.save(function(err){
		if(err)
			res.send(err);
		res.json({msg: 'a survey successfully submitted!'});
	});
});
//csv output:
var maxAnsLength = -1;
router.get('/csv', function(req, res, next) {
	model.question.find({}, function(err, q){
		if(err)
			res.send(err);
		maxAnsLength = q.length;
		console.log(maxAnsLength);
	});

	model.answer.find({}, function(err, a){
		var outputAns = a;
		if(err)
			res.send(err);
		model.group.find({}, function(err, g){
			for(var i = 0; i < g.length; i++){
				for(var j = 0; j < outputAns.length; j++){
					if(outputAns[j].group == g[i]._id){
						outputAns[j].groupName = g[i].text;
						console.log(outputAns[j].groupName);
					}
				}
			}
			res.writeHead(200, {
		        'Content-Type': 'text/csv',
		        'Content-Disposition': 'attachment; filename=output.csv'
		    });
		    res.end(dataToCSV(outputAns,maxAnsLength),"binary");
		});
	});
});
router.get('/factoryReset', function(req, res, next) {
	model.answer.remove({}, function(){});
	res.send({msg: "removing successfull"});
});
app.use('/api', router);
app.listen(port);

console.log('server is running on port: ' + port);

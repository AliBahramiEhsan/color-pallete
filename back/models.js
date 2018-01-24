var mongoose = require('mongoose');
var schema = mongoose.Schema;

// user information:
	// Name
	// Email
	// Age
	// Gender
// answers:
	// Q1 -> Q60
	// 1 to 5 numbers
// ColorPallete:
	// an array -> { meaning, color }

var usersSchema = new schema({
	name:String,
	email:String,
	age:Number,
	gender:String
});

var user = mongoose.model('user', usersSchema);

var answersSchema = new schema({
	answers: Array,
	userId: String
});

var answer = mongoose.model('answer', answersSchema);

var palletesSchema = new schema({
	meaningColorPair: Array,
	userId: String
});

var pallete = mongoose.model('pallete', palletesSchema);

module.exports = {
	user: user,
	answer: answer,
	pallete: pallete
};
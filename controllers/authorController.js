const mongoose = require("mongoose")

// import author model
const Author = mongoose.model("Author")

// handle request to get all authors
const getAllAuthors = async (req, res) => {
	try {
		const authors = await Author.find()
		return res.send(authors)
	} catch (err) {
		res.status(400)
		return res.send("Database query failed")
	}
}

// handle request to get one particular author
//const getAuthorByID = (req, res) => {
	
	// search for author by ID
	//const author = authors.find(author => author.id === req.params.id);
	
	//if (author){
	//	res.send(author); // send back the author details
	//}
	//else{
	//	// you can decide what to return if author is not found
		// currently, an empty list will be return.
	//	res.send([]); 
	//}
//}

const getOneAuthor = async (req, res) => {  
	try {
		const oneAuthor = await Author.findOne( {"authorId": req.params.id})
		if (oneAuthor === null) {   // no author found in database
			res.status(404)
			return res.send("Author not found")
		}
		return res.send(oneAuthor)  // author was found
	} catch (err) {     // error occurred
		res.status(400)
		return res.send("Database query failed")
	}
}

// handle requests to add an author
//const addAuthor = (req, res) => {
    // assemble a new author
    //newAuthor = req.body
    // add to database
    //authors.push(newAuthor)
    // return entire authors list to browser as a check that it worked
    //res.send(authors)
}


module.exports = {
	getAllAuthors, 
	getAuthorByID, 
	//addAuthor
}
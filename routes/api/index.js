const router = require("express").Router();
const myController = require("../../controllers/myController");

router.route("/nodemail")
    .post(myController.nodemail)

// router.route("/sendmail")
//     .post(myController.sendmail)
// Matches with "/api/books"
router.route("/books")

    // Return all saved books as JSON
    .get(myController.findAll)

    // save a new book to the database.
    .post(myController.create);

// Matches with "/api/books/:id"
router
    .route("/books/:id")
    //   .get(myController.findById)
    //   .put(myController.update)

    // delete a book from the database by Mongo `_id`.

    .delete(myController.remove);

module.exports = router;


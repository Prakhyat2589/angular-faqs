const router = require("express").Router();
const faqList = require("../faqs.json");

router.get("/list", async (req, res, next) => {
  try {
    const faqListData = await faqList;
    res.send(faqListData);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

module.exports = router;

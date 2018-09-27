/**
 * Responds to fizzBuzz request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.play = (req, res) => {
  
  let defaultRange      = 100;
  let maximumMaxRange   = 999999;
  let messageNotANumber = "Input must be a number, or absent for default.";
  let messageLudicrousRange = "Input range must range from 0 to " + maximumMaxRange + " maximum.";
  
  if (!req.query.max_range) {
    res.status(200).send(fizzBuzz(defaultRange));
    
  } else if (isNaN(req.query.max_range)) {
  	res.status(400).send(messageNotANumber);
    
  } else if ((req.query.max_range > maximumMaxRange) ||
             (req.query.max_range < 0 )) {
    res.status(400).send(messageLudicrousRange);
    
  } else {
    res.status(200).send(fizzBuzz(req.query.max_range));
  }
  
};

function fizzBuzz(range) {
  
  resultOfGame = "";
  
  var i;
  for (i = 0; i < range; i++) {
    
    if (i > 0) {
      
      if (i % 15 == 0) {
        resultOfGame+= "FizzBuzz";
      } else if (i % 5 == 0) {
        resultOfGame+= "Buzz";
      } else if (i % 3 == 0) {
        resultOfGame+= "Fizz";
      } else {
        resultOfGame+= i;
      }
    } else {
      resultOfGame = 0;
    }
    
    if (i < (range-1)) {
      resultOfGame+= ", ";
    } else {
      resultOfGame+= ".";
    }
    
  }
  
  return resultOfGame;
}
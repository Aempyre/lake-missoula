# lake-missoula

## fizz buzz demonstration.

Note:  If you didn't know (and I didn't - lol), "Fizz Buzz" was, and is, an old English
       game to help teach children about mathematical division.  Players would take turns
       counting up from zero by one, replacing any number evenly divisible by 15 with the 
       word "FizzBuzz", numbers evenly divisible by 4 with "Buzz", and by 3 with "Fizz".

### Architecture:
	
  1.  A google cloud function that accepts a range, plays the game in that range,
      and returns the result.  This function will default to 100 if a numeric value
      is absent, and if the range value is present but not a number then it will
      return:  "Input must be a number, or absent for default."


      For example: 
 
      https://us-central1-sage-yeti-217606.cloudfunctions.net/fizzBuzz?max_range=33


      returns:

      0, 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 
      17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, 31, 32.



  2.  A client packaged in a Docker container that will:
      *  Accept ENV override params for:
         -  The FUNCTION_URL -- this is required.
         -  MAX_RANGE        -- this is optional.  note:  The client specification calls for
                                defaulting this to 100, the server does that as well, this 
                                seems redundant and should be discussed.



### Installation and Setup:


Note:  If you are doing Docker on Windows:   
  Straight Docker needs Hyper-V hence Windows 10 (will directly on Windows)
  If still on Windows 7 or 8 you need to install Docker-Toolbox  
    (Docker will run inside Virtual Box instead directly on Windows)  

  https://docs.docker.com/toolbox/  

  (Sadly you *will* eventually be forced to upgrade to Windows 10, 
   if not by somebody else, then by Docker eventually...)



### Run:
      

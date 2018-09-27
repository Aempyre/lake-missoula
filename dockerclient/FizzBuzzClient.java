/* FizzBuzz Java Client */ 

import java.net.*;
import java.io.*;

public class FizzBuzzClient {

    public static void main(String[] args) throws Exception {

        // Look for dockerless test switch:
        boolean dockerless = false;
        if ((args.length > 0)  &&  (args[0].equals("-dockerless"))) dockerless = true;

        // Get the required Url environment variable:
        String requestPartialUrl = System.getenv("FUNCTION_URL");

        // For dockerless test only, remove!
        if ( requestPartialUrl == null ) {
            if (dockerless) {
                requestPartialUrl = 
                "https://us-central1-sage-yeti-217606.cloudfunctions.net/fizzBuzz?max_range=";
            } else {
                throw new Exception("FUNCTION_URL is required");
            }
        }

        // Get the optional range value environment variable, default to 100:
        String rangeValueString  = System.getenv("MAX_RANGE");

        if ( rangeValueString == null ) {
            if ((args.length > 1)  && dockerless) {
                rangeValueString = args[1];
            } else {
                // defaulting to 100 if not supplied via ENV or command line
                rangeValueString = "100";
            }
        }

        URL fizzBuzzEndpoint    = new URL(requestPartialUrl + rangeValueString);
        URLConnection urlCnxn   = fizzBuzzEndpoint.openConnection();
        BufferedReader bffrdr   = 
            new BufferedReader(new InputStreamReader(urlCnxn.getInputStream()));

        String dataLine = "";

        while ((dataLine = bffrdr.readLine()) != null) {
            System.out.println(dataLine);
        }

        bffrdr.close();


        // // Setup to get from the api (using Apache's client in this case):
        // HttpClient client       = new DefaultHttpClient();
        // HttpGet request         = new HttpGet(requestPartialUrl + rangeValueString);

        // // Execute the request and buffer the response:
        // HttpResponse response   = client.execute(request);
        // BufferedReader bffrread = new BufferedReader (
        //     new InputStreamReader(response.getEntity().getContent()));

        // String line = "";

        // while ((line = bffrread.readLine()) != null) {
        //     System.out.println(line);
        // }
    }
}
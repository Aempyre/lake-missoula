# Use a recent Java runtime
#FROM openjdk:9-b170-jre
#FROM java:9
FROM openjdk:8  
# NOTE:  There are security bugs in 9, so backoff to 8!

# Set up to point to find the code (in the container).
ENV FIZZBUZZCLIENT_HOME=/runhere
ADD FizzBuzzClient.class $FIZZBUZZCLIENT_HOME/
WORKDIR $FIZZBUZZCLIENT_HOME

# Build the executable just to be sure:
COPY *.java /runhere
RUN javac FizzBuzzClient.java

# Copy the executable from "real" project directory
# into the virtual directory in the container
COPY *.class /runhere

# Set up environment variables 
# FUNCTION_URL (Required)
# MAX_RANGE (Optional and will be defaulted to 100 if doesn't exist)
ENV FUNCTION_URL=https://us-central1-sage-yeti-217606.cloudfunctions.net/fizzBuzz?max_range=
ENV MAX_RANGE=33

# Tell the container where and how to enter the code
ENTRYPOINT ["java", "FizzBuzzClient"]
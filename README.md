# Examples Server

If you are working on our student development machine, you can put your files in your `~/public_html` directory to serve them from `turing.une.edu.au`.  
However, that requires you to be working on turing and to be accessing the web
from on our university network.

So, this is a barebones web server that you can run for serving client-side examples.
It uses Play Framework for Scala, which is one of the server-side frameworks you can choose also.

### Set-up

1. Install sbt from https://scala-sbt.org  
   Note that it requires you to have Java 8 installed

2. Clone (or download and extract) this repository

3. From a shell (terminal or PowerShell), in the top-level directory of this project (the one containing this README.md file), run  
     ```sh
     sbt run
     ```

   This will download all the necessary libraries to run this webserver, and start it on port 9000. The first time you run it, it could take a while getting what it needs.

   To stop the server, use Ctrl-C

4. Open a browser and go to `http://localhost:9000`

To install client-side examples, download them and expand them in the `/public` directory. For example, see the `/public/myFirstExample` directory.

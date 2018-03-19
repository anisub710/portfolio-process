<?php
    $project = $_GET["project"];
    if($project == "eatout"){
        print("<h4> Eatout </h4>");
        print("<p>This web application was created using the Yelp Fusion API,<br> 
        showing average ratings of each state, and allowing users to navigate <br> 
        through different locations to search for restaurants corresponding to <br>
        that location. </p>");
    }else if($project == "fresca"){ 
        print("<h4> Fresca </h4>");
        print(" <p> This is a prototype for an application that<br>
                    aims to reduce food waste by helping to keep <br> 
                    track of the edibility of food. It also  has <br>
                    a receipt scanner that automatically loads <br>
                    information of food items to keep track of.");
    }
?>
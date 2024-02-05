# RoofX
## Energize your business!

Sean Carrigan - sean.t.carrigan@gmail.com  Kacper Aniecko - Kanie2@uic.edu

GitHub Repository Link -[ https://github.com/SeanCarrigan/RoofX](https://github.com/SeanCarrigan/RoofX)

Web Application Link - https://projectroofx.com/

# What does your application do?

Our application will enable contractors to generate quotes for roof replacements. Leveraging the MapBox API, we offer users the ability to accurately measure a roof's dimensions at a specified address, facilitating the generation of customer quotes. Additionally, users will have full control over product inventory management, ensuring up-to-date stock levels and pricing information are maintained. Upon completing the quote generation process, our application will automatically format the quote, incorporating all essential details into a PDF document, which can then be sent to the customer. Moreover, through the application's dashboard, users will have the convenience of monitoring pending quotes, overseeing ongoing projects, and receiving  notifications regarding potential new customer inquiries.


## Security and privacy concerns:
Authenticating users, user access control, database security/integrity, password authentication, protecting sales/employee data.

# MVP: Checkpoint 2 Description

## Link to RoofX - http://roofx-production-env.eba-c2fuxgaz.us-east-1.elasticbeanstalk.com/login

The current version of our application offers registered users a secure login to their accounts while enabling new users to easily register with the application. 

Upon entering the application, users are given the option to either view their profile or begin the estimation process. To proceed, users are required to choose between creating a new company or joining an existing one. A notification displaying this information is presented to the users if they attempt to use the estimation tool before registering with a company. 

The estimation tool, powered by the Mapbox API, allows the user to search for a desired address and draw a polygon on the map to compute the area and perimeter measurements of a roof. The draw tool features are located in the top right corner of the map and the measurements are displayed beneath the address search bar. 

Notes for using the draw tool:
* The draw tool is engaged by default.
* Re-engage the draw tool with the button in the top right corner.
* To draw lines, click on a position, move to the next one, and click again. Continue this process until you've completed the desired outline.
* Lines can be adjusted by clicking on and moving the points designated with white and yellow dots. 
* Delete lines by clicking on the line and using the delete button in the top right corner.
* Double click when using the draw tool to disengage the tool and generate the measurements.

## [Link to MVP Video Demo](https://youtu.be/bch9kA-sOoE)

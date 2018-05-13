# Project-Team-8
**Team Name:** MegaHertz

**Team Members:**
1)	Shraddha Chadha
2)	Shreya Shah
3)	Tarang Dhulkotia
4)	LakshmiPrasanna Kona

**Title:** *Disease Detection*

**Description:** This application is based on a crowd-sourced model. The application captures users symptoms through a user-friendly questionnaire on a website and provides information about the most probable diseases they might be suffering from. The application would also provide a recommendation of doctors that are best suited to treat the disease based on user's location. The application will take the generated data from users to create a trend analysis of diseases.
This will help with disease management.

**Proposed Methodology:**  The application will be a website that consumes a third-party API (https://developer.infermedica.com/docs/medical-concepts#conditions). User's input will be passed to the API and the response (which will be the disease name) will be represented. Also, the application will detect user's location and using another API (https://developer.betterdoctor.com/) it will list all the nearby doctors that can treat the disease. It will also plot the disease data on google map. 

### Technology Stack 

<br/>
<table>
<thead>
<tr>
<th>Area</th>
<th>Technology</th>
</tr>
</thead>
<tbody>
	<tr>
		<td>Front-End</td>
		<td>IOS Application using Ionic and Angular 4</td>
	</tr>
	<tr>
		<td>Back-End</td>
		<td>Node JS REST APIs</td>
	</tr>

<tr>
		<td>Database</td>
		<td>MongoDB Deployed on MLab</td>
	</tr>
    <tr>
		<td>Deployment</td>
		<td>Node Services deployed on Amazon AWS</td>
	</tr>
	    <tr>
		<td>Symptoms Checkup API</td>
		<td>APIMedic (http://apimedic.com/)</td>
	</tr>
		    <tr>
		<td>Doctors API for specialization</td>
		<td>Better Doctor API (https://developer.betterdoctor.com/)</td>
	</tr>
<tr>
		<td>API Unit Testing</td>
		<td>Mocha, Postman</td>
	</tr>
	<tr>
		<td>Performance Testing</td>
		<td>JMeter</td>
	</tr>

</tbody>
</table>

## Design Objective

Create a solution to reduce the hassle of unnecessary visits to doctors and hospital

Modernize Telehealth service by looking into potential ways to improve the service 

Build stronger engagement and trust between clientss and health service by adopting a user centric approach

Make the solution simple and easy to use

![Alt text](Desktop/Sketchingtheapp.png?raw=true "Design Thinking")


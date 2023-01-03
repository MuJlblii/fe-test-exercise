# fe-test-exercise
https://docs.google.com/document/d/11MSEAuSWi2WELzTBicgSAYEih_nM232XiXf9sCtnNEo/edit?usp=sharing

EIger 2022 - FE Software Engineer
Questions (form - you already filled this)
Test Tasks
Overview
The sections below describe the tasks that should be done by a candidate and published as a GitHub repository. The link to this repository should be shared with the manager then.
The first task is for testing coding skills and it should be done in JavaScript or in any other language that eventually may be run in a browser.
The 2nd and 3rd tasks are more about creating web applications - it is recommended to do them with React, Vue or another framework while vanilla JavaScript is also possible. The README file should contain instructions on how to build and run the application.
## Price Check
#### Check branch `price-checker`
There is a shop with old-style cash registers. Rather than scanning items and pulling the price from a database, the price of each item is typed in manually. This method sometimes leads to errors. Given a list of items and their correct prices, compare the prices to those entered when each item was sold. Determine the number of errors in selling prices.
Example
products = ['eggs', 'milk', 'cheese']
productPrices = [2.89, 3.29, 5.79]
productSold = ['eggs', 'eggs', 'cheese', 'milk']
soldPrice = [2.89, 2.99, 5.97, 3.29]



Price


Sold Product
Sold Price
Expected Price
Error
eggs
2.89
2.89
no
eggs
2.99
2.89
yes
cheese
5.97
5.79
yes
milk
3.29
3.29
no

The second sale of eggs has a wrong price, as does the sale of cheese. There are 2 errors in pricing.
Function Description 
Write the body of the function priceCheck and the test for this function in one of the languages from the list: Go, Java, Python, C/C++, JavaScript.
The function should have the following parameters:
string products[n]:  each products[i] is the name of an item for sale
string productPrices[n]:  each productPrices[i] is the price of products[i]
string productSold[m]:  each productSold[j] is the name of a product sold
float soldPrice[m]:  each soldPrice[j] contains the sale price recorded for productSold[j].
and return:
int: the number of sale prices that were entered incorrectly
Constraints
1 ≤ n ≤ 99
1 ≤ m ≤ 99
productPrices[i] ∈ products[n], where 0 ≤ i < m
1.00 ≤ productPrices[i], soldPrice[j] ≤ 100000.00, where 0 ≤ i < n, and 0 ≤ j < m
Example of Function Call
priceCheck(
	products=['rice', 'sugar', 'wheat', 'cheese'],
	productPrices=[16.89, 56.92, 20.89, 345.99],
	productSold=['rice', 'cheese'],
	soldPrice=[18.99, 400.89]
) => 2
The sales of rice and cheese were at the wrong prices. So, the number of sale prices that were entered incorrectly is 2:


Price


Product
Actual
Expected
Error
rice
18.99
16.89
yes
cheese
400.89
345.99
yes

You may use this example and the example in the beginning of the section as test data for your function.
## Price Widget
#### Check branch `price-widget`
A site owner decided to place a widget on one of the pages of a site to show actual information about prices of assets. Unfortunately, the backend team is too busy with feature requests so they just provided documentation for a new API endpoint that should be used by the widget. It means that the frontend should mock this API endpoint with fake data.
It would be nice to have an implementation of that widget as a component in React, but Vue or another framework or even vanilla JavaScript are fine as well.
The project README file should contains instructions on how to build and run the widget.
Endpoint
Request:
GET /api/v1/prices
Successful Response:
{
	“status”: 0,
	“result”: [{
		“asset”: “BTC”,
		“price”: “19356.85”
	},{
		“asset”: “ETH”,
		“price”: “1298.23”
	}]
}
Failed Response:
{
	“status”: 1,
	“result”: ”Prices are not available”
}
where:
status (Integer) - status code, 1 for failure
result (Array|String) - response data, array when the request succeeded, string with error in case of failure
asset (String) - asset name
price (String) - asset price.
Only JSON responses are supported.
Widget requirements
The widget by itself is a table with the refresh button and the auto-refresh checkbox like this:

Asset
Price
BTC
19356.85
ETH
1298.23

 Refresh	Auto-Refresh

By default (on page load) the widget should display the message “No data. Press the Refresh button”.
When the Refresh button is pressed, the widget should request new data from the endpoint and replace the previous message with the response data from the server. In case of failure an error message should be displayed instead.
When the Auto-Refresh checkbox is selected, the widget should start requesting new data from the endpoint every 3 seconds and replace the previous content of the widget with the response data from the server after each request. In case of failure an error message should be displayed and the widget should continue trying to load fresh data. When the Auto-Refresh checkbox is unselected, the widget should stop requesting new data from the endpoint and leave the previous widget content 

## A very simple ToDo app.
#### I have created toDo app like Trello in command, you can explorer it by the link https://github.com/MuJlblii/project-management-app/blob/main/README.md

There should be:
- a main page: a Login form if user not authorised and something like "Hello {{ login }}" when authorised.
- a todo page: a simple form that allows to add a new ToDo item while displaying the list of existing items.

Requirements: React, Vue or other.
access to "todo" page is allowed to authorised users only
The authorisation shouldn't be real: just a from where any login/pass is correct
Storing the data in local storage (LS) is desirable.

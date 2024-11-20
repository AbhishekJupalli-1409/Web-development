Make a farm application
FarmProduct model

Make a separate folders for models

Adding a seeds.js file to add some data into the database
before taking the data from the original app

we will probably change our schema as we go and end up modifying the schema of the original app
and delete all the seed data

Now setup index route view the project

in order to get data it will take time n load it to products page

Product.find({})//takes time==>so just make a async function

so this async await will be used everywhere
===============LOAD INDEX==================
after geeting data pass it to products index page
i am not adding any styles doing the barebone setup

working be careful while u are writing the loops in ejs see spelling mistakes
===============VIEW ITEMS PAGE==================
now we are going to setup a view details route to view the details of the product

we ave successfully created the view section...
everything going fine we hven't done any error handling
we assume everything works fine for now magically we will deal with them later
weshould even do sanitizing but later
=================NEW ITEMS================
we need a form to add new items to the database
and we need a route to submit to
the order of request can also cause errors
so be careful after /products/new(new) only we should have /products/:id(view)
=================UPDATE================
put=> is like overiding
patch=> is like updating a portion of object
we can use any one doesn't matter
we have to install method -override package
<option value="vegetable" <%= getproduct.category === "vegetable" ? "selected" : "" %>>vegetable</option>
this is good but we won't use this
we will loop using the array in index.js
            <%for (let category of categories){%>
                <option value="<%=category%>"><%=category%></option>
            <% } %>

=================DELETE==================
we can send a delete request directly
but we can use method overide
_method=DELETE
=================Filter==================
/categories/dairy or
/products?category=dairy
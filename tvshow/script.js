const form = document.getElementById("searchForm");
form.addEventListener('submit',  async (e)=> {
    e.preventDefault();
    // console.dir(form)  CHECK THE FORM ALL OBJECTS AND ELEMENT TOO
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    console.log(res.data[0].show.image.original);
    const image = document.createElement('img');
    image.src = res.data[0].show.image.original;

})
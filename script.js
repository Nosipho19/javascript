fetch('./nosipho.json')
.then(resp => resp.json ())
.then(data => {
const dataList = document.getElementById('data-list')

//lets create our item and create a list from our data source
data.forEach(item => {
    const itemlist = document.createElement('li');
    itemlist.innerHTML= `<strong>Name:</strong>  ${item.name}
    <br><strong>Email:</strong> ${item.email}`
    console.log(itemlist)
    dataList.appendChild(itemlist)
    console.log(itemlist) 
    
});
})
.catch( error => {
    console.log('error loading data from data source', error);
})


<html lang="en">
<head>

    <title>Fetch Api Demo</title>
    <style>
        body{
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(43deg, green , red , pink ,yellow , blue , gray);
        }
    </style>
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>
<body>
    <div id="cards">

    </div>

    <div class="container" id="mydetails">
        <div class="card" style="width: 18rem;">
            
            <div class="card-body">
              <h5 class="card-title">Er.Shoukat Ali Khan</h5>
              <p class="card-text">Hyderabad , rehan.com</p>
              
              <p class="card-text">mdshoukatrehan1581@gmail.com</p>
              <a href="/" class="btn btn-primary">Read More</a>
            </div>
          </div>
    </div>
   <button class="btn btn-info" onclick="change()" style="position:absolute; top:300px">Fetch</button>
   
    <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
<script>
    function change(){
        document.getElementById("mydetails").style.display = "none"
             // fetch() -> promise -> reject / resolve -> if resolved -> render the date using map
     fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
           return data.json()
    }).then((completedData)=>{
        let data1 =""
        completedData.map((curVal)=>{
           data1=`
           <div class="container">
        <div class="card"  style="width: 18rem; margin-left: 700px">
            
            <div class="card-body">
              <h5 class="card-title">${curVal.name}</h5>
              <p class="card-text">${curVal.address.city} , ${curVal.website}</p>
              <p class="card-text">${curVal.email}</p>
              <a href="/" class="btn btn-primary">Read More</a>
            </div>
          </div>
    </div>
           `
        }); 
        document.getElementById("cards").innerHTML =  data1
    })
    }
   
</script>

</body>
</html>
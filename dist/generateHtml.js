function generateHtml(data) {
    console.log(data)
    const manager = () => {
        const managerData = data.filter((employee) => employee.getRole() === "Manager")
        // console.log(managerData)
        return `
        <div class="card-body">
        <h4 class="card-title">${managerData[0].name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${managerData[0].id}</li>
            <li class="list-group-item">${managerData[0].email}</li>
            <li class="list-group-item">${managerData[0].officeNumber}</li>
        </ul>
        </div>
        `
    }
     const engineer = () => {
         const engineerData = data.filter((employee) => employee.getRole() === "Engineer")
            return engineerData.map((engineer) => `
         <div class="card-body">
            <h4 class="card-title">${engineer.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${engineer.id}</li>
                <li class="list-group-item">${engineer.email}</li>
                <li class="list-group-item">${engineer.githubUsername}</li>
           
         </ul>
     </div>
        `
        ).join("")
     }
    
        const intern = () => {
            const internData = data.filter((employee) => employee.getRole() === "Intern")
            return internData.map((intern) => `

            
            <div class="card-body">
            <h4 class="card-title">${intern.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
           <ul class="list-group list-group-flush">
                <li class="list-group-item">${intern.id}</li>
               <li class="list-group-item">${intern.email}</li>
               <li class="list-group-item">${intern.school}</li>
              
            </ul>
        </div>
           `).join("")}
           
  return `
  
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Enter your description here"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Team Profile Generator</title>
    </head>
    <body>
        

<nav class="navbar navbar-light bg-light">
    <span class="navbar-brand mb-0 h1">My Team</span>
</nav>
    <div class="card" style="width: 18rem;">
        ${manager()}
    </div>
    <div class="card" style="width: 18rem;">
        ${engineer()}
    </div>
    <div class="card" style="width: 18rem;">
        ${intern()}
    </div> 
    

        
    
    









<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
</body>
</html>     
    
    `
}  
    
    


module.exports = generateHtml;

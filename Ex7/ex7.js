var datas={
    "students": [
      {
        "id": 0,
        "name": "Student A",
        "course_assignment": null,
        "exercise_points": 32
      },
      {
        "id": 1,
        "name": "Student B",
        "course_assignment": null,
        "exercise_points": 53
      },
      {
        "id": 2,
        "name": "Student C",
        "course_assignment": null,
        "exercise_points": null
      },
      {
        "id": 3,
        "name": "Student D",
        "course_assignment": null,
        "exercise_points": 4
      }
    ]
  }



var url = 'http://aws.random.cat/meow';
fetch(url)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        document.getElementById('cat').innerHTML=data.file
        document.getElementById('cat').setAttribute("href",data.file)
    });

function gentable(){
    var t= document.getElementById('table')
    t.innerHTML=`<tr>
                <th>Name</th>
                <th>info</th>
                <th>Points</th>
                  </tr>`
    var x=''
    len=datas.students.length
    for(var i=0; i<len;i++){
        
        var row=`<tr class="points ${(datas.students[i].exercise_points == null ||datas.students[i].exercise_points<50 ? 'red': 'blue')}">
                    <td>${datas.students[i].name}</td>
                    <td>${datas.students[i].course_assignment}</td>
                    <td >${datas.students[i].exercise_points}</td>

                </tr>`
        t.innerHTML += row;

    }
}



function add(){
    n=document.getElementById('name').value;
    info=document.getElementById('info').value;
    points=document.getElementById('points').value;
    console.log(n,info,points)
    datas.students.push({id: 4, "name":n,"course_assignment":info,"exercise_points": points});
    gentable();
    //console.log(datas)

}



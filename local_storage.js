// localStorage.setItem("name", "sathiyavani")
// localStorage.setItem("course", "React");

// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("course"));
// localStorage.removeItem("course")
// localStorage.clear()




    
    let newCourseList=[]

document.querySelector("form").addEventListener("submit", (e) => {
    
    e.preventDefault();
    let Cname = document.getElementById("Cname").value;
    let Cmonth = document.getElementById("Cmonth").value;
    let list = {
      Cname: Cname,
      Cmonth: Cmonth,
    };
    localStorage.setItem("list", JSON.stringify(list)) ? localStorage.setItem("list", JSON.stringify(list)) : [];
    
        let div1 = document.getElementById("div1");
        div1.innerHTML = `${localStorage.getItem(
          "cname"
    )} will last for a ${localStorage.getItem("cmonth")} month`;
    console.log(newCourseList);
    
    })
    newCourseList.push(list);


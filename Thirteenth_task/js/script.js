
var model_object=[{
    avenger_name:"Captain America",
    avenger_img_src:"Assets/Captain_America_(Steve_Rogers).png",
    counter:0
  },
{
  avenger_name:"Hawkeye",
  avenger_img_src:"Assets/Hawkeye_(Clinton_Barton).png",
  counter:0
},
{
  avenger_name:"Hulk",
  avenger_img_src:"Assets/Hulk_(circa_2019).png",
  counter:0
}]

//   function add_onclick(index){
//     this.addEventListener("click",function(){
//     alert("say hello to my "+index+"friend" )
//     }
//     )
//   }

// trying to imitate the function of the foreach by passing a callback function on each iteration of the loop.

  var thumbnail_list=document.querySelector(".d-flex.flex-column.fit_content")
  

  for (var i=0;i<model_object.length;i++){
    
    thumbnail_list.innerHTML+=(`<img src=`+model_object[i].avenger_img_src+` class="list_image generic_border">`)
   
  }

  var thumbnail_images=document.querySelectorAll(".d-flex.flex-column > img")
  thumbnail_images.forEach((img,index)=>{
    img.addEventListener("click",function(){
      document.querySelector(".img_div").innerHTML=(`<img src=`+model_object[index].avenger_img_src+` class="theater_image generic_border">`)
      document.querySelector(".image_title").textContent=model_object[index].avenger_name
    })
  })

  document.querySelector(".img_div").addEventListener("click",function(){
    var another_flag=true;
    for(var y=0;y<model_object.length;y++){
      if((document.querySelector(".img_div > img").src).substring(55,)==model_object[y].avenger_img_src){
        model_object[y].counter++
        document.querySelector(".counter_value").textContent=model_object[y].counter;
      }
    }
  })

  

  var admin_button=document.querySelector(".fit_content_h.mt-5")
  var admin_save_button=document.querySelector(".save_button")
  var admin_close_button=document.querySelector(".close_button")


  admin_button.addEventListener("click",function(){
    document.querySelector(".admin_area").style.display="block"
  })

  admin_close_button.addEventListener("click",function(){
    document.querySelector(".admin_area").style.display="none"
  })

  admin_save_button.addEventListener("click",function(){
  document.querySelector(".image_title").textContent=document.querySelector("#fname").value
  document.querySelector(".img_div").innerHTML=(`<img src=`+document.querySelector("#lname").value+` class="theater_image generic_border">`)
  var flag=true;
  for(var c=0;c<model_object.length;c++){
    // debugger;
    console.log(model_object[c].avenger_img_src)
    if(model_object[c].avenger_img_src==document.querySelector(".img_div > img").src){
      flag=false;
      console.log(flag)
      break;
    }
    
  }
  if(flag==true){
    var outer_counter=0
    document.querySelector(".img_div > img").addEventListener("click",function(){
      outer_counter++;
      document.querySelector(".counter_value").textContent=outer_counter;
      
    })

  }
  document.querySelector(".admin_area").style.display="none"
  })
  

  



  
  

  


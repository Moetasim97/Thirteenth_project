var eventsMediator = {
  events: {},
  on: function (eventName, callbackfn) {
    this.events[eventName] = this.events[eventName]
      ? this.events[eventName]
      : [];
    this.events[eventName].push(callbackfn);
  },
  emit: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function (foundCB) {
        foundCB(data);
      });
    }
  },
};
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


var view={
  init:function(){
    this.cache_elements()
    this.render()
    this.render_admin()
    this.mount_admin()
  },
  cache_elements:function(){
    var thumbnail_list=document.querySelector(".d-flex.flex-column.fit_content")
    var main_img=document.querySelector(".theater_image")
    return [thumbnail_list,main_img]
    
  
  },
  render:function(){
     controller.render_list_view()
     controller.render_main()
  
    
  },
  cache_admin:function(){
    
  var admin_button=document.querySelector(".fit_content_h.mt-5")
  var admin_save_button=document.querySelector(".save_button")
  var admin_close_button=document.querySelector(".close_button")

  return [admin_button,admin_save_button,admin_close_button]

  },

  render_admin:function(){
    var [admin_button]=view.cache_admin()

     admin_button.addEventListener("click",function(){
    document.querySelector(".admin_area").style.display="block"
   })

  },
  mount_admin:function(){
    var [admin_button,admin_save_button,admin_close_button]=view.cache_admin()
    admin_close_button.addEventListener("click",function(){
      
      document.querySelector(".admin_area").style.display="none"
      
    })
    var name_pc=document.querySelector(".image_title")
    var temporary_image=document.querySelector(".theater_image")
    var counter_pc=document.querySelector(".counter_value")
    var temporary_counter=0
    admin_save_button.addEventListener("click",function(){
      var avenger_name=document.querySelector("#fname").value
      var avenger_url=document.querySelector("#lname").value
      name_pc.textContent=avenger_name
      counter_pc.textContent=temporary_counter
      temporary_image.src=avenger_url

      document.querySelector(".admin_area").style.display="none"

      eventsMediator.emit("temporary_image.rendered")
      
      
      
    })

    eventsMediator.on("temporary_image.rendered",function(){
      var count=0;
      temporary_image.addEventListener("click",function(){
        count++
        $(".counter_value").text(count)
      })
    })



  }
 
}

var controller={
  
  render_list_view:function(){
    
   
    var [thumbnail_list,main_img]=view.cache_elements()
    for (var i=0;i<model_object.length;i++){
      
      thumbnail_list.innerHTML+=(`<img src=`+model_object[i].avenger_img_src+` class="list_image generic_border">`)
     
    }
  },
  render_main:function(){
  
    var [thumbnail_list,main_img]=view.cache_elements()
    view.cache_elements()
    main_img.src=model_object[0].avenger_img_src
    var img_title=document.querySelector(".image_title")
    img_title.textContent=model_object[0].avenger_name
    
    
  },
  mount_events:function(){
    
    
    var thumbnail_images=document.querySelectorAll(".list_image")
    thumbnail_images.forEach((img,index)=>{
      img.addEventListener("click",function(){
        document.querySelector(".img_div").innerHTML=(`<img src=`+model_object[index].avenger_img_src+` class="theater_image generic_border">`)
        document.querySelector(".image_title").textContent=model_object[index].avenger_name
        document.querySelector(".counter_value").textContent=model_object[index].counter
      })
    })
    
    $(".img_div").on("click",function(){
      for(let i=0;i<model_object.length;i++){
        if(document.querySelector(".img_div").lastChild.src.substring(74,)==model_object[i].avenger_img_src){
          model_object[i].counter+=1
          console.log(model_object[i].counter)
          document.querySelector(".counter_value").textContent=model_object[i].counter
        }
      }
     })
  },
  

}


  
  view.init()
  controller.mount_events()

  



  
  

  



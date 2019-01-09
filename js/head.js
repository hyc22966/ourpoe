
        var M1 =$("#navbardrop");
        // var display = "body";
        M1.on('click',function(){
          if($(window).width()<768){
            M1.next().removeClass("dropdown-menu");
            // M1.next().css("display","none");
            M1.next().slideToggle();
          }
          else{
            M1.next().addClass("dropdown-menu");
          }
        })

      if($(window).width()<768){
          $('.navbar-collapse').css('maxHeight',($(window).height()-60));
          $('.navbar-collapse').css('overflow-y','auto');
          // display = "main";
      }
      $(window).resize(function () {
        if($(window).width()<768){
          $('.navbar-collapse').css('maxHeight',($(window).height()-60));
          $('.navbar-collapse').css('overflow-y','auto');
          // display = "main";
        }
        else{
          $('.navbar-collapse').css('maxHeight','');
          $('.navbar-collapse').css('overflow-y','');
          // display = "body";
        }
      });
      
      // 屏幕较小时，点击显示子菜单
      $(".flex-item,.flex-item-build").find("h4,h5").click(function(){
        if($(window).width()<768){
          $(this).next().slideToggle("fast");
          if($(this).children("i").hasClass('fa-angle-down')){
            $(this).children("i").removeClass('fa-angle-down').addClass('fa-angle-up ');
          }else{
            $(this).children("i").removeClass('fa-angle-up ').addClass('fa-angle-down');
          }
        }
      });

      // 购物车阻止事件冒泡
      $(".dropdown-cart").hover(function(e){
        // console.log("hover")
        //阻止默认浏览器动作(W3C) 
        $(".cart-list").click(function(){
          if ( e && e.preventDefault ) 
              e.preventDefault(); 
          //IE中阻止函数器默认动作的方式 
          else 
              window.event.returnValue = false; 
          return false;
        }) 
      })

      // $(".shops-del").click(function(){
      //   $(this).parents(".shops-sm-block").remove()
      // })
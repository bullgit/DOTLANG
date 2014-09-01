$(function (){ 

  function dotted(){

    var dotted = $('[dot]'); 
    var dots = dotted.text();
    var dots = dots.replace(/\n/g,"</span></br><span>");
  
    dotted.empty().prepend('<span>').append(dots + '</span>');
   
    var dotted = $('[dot]'); 
    var dots = dotted.find('span');

     dots.each(function(){
       $this = $(this);
       
       if($this.text() == "."){
         var content = $this.text();
         var content = content.replace('.','1');
         $this.empty().append(content);
       }
       else if($this.text() == ".."){
         var content = $this.text();
         var content = content.replace('..','2');
         $this.empty().append(content);
       }
       else if($this.text() == "..."){
         var content = $this.text();
         var content = content.replace('...','3');
         $this.empty().append(content);
       } 
       else if($this.text() == "...."){
         var content = $this.text();
         var content = content.replace('....','4');
         $this.empty().append(content);
       }
       else if($this.text() == "....."){
         var content = $this.text();
         var content = content.replace('.....','5');
         $this.empty().append(content);
       }
       else if($this.text() == "......"){
         var content = $this.text();
         var content = content.replace('......','6');
         $this.empty().append(content);
       }
       else if($this.text() == "......."){
         var content = $this.text();
         var content = content.replace('.......','7');
         $this.empty().append(content);
       }
       else if($this.text() == "........"){
         var content = $this.text();
         var content = content.replace('........','8');
         $this.empty().append(content);
       }
       else if($this.text() == "........."){
         var content = $this.text();
         var content = content.replace('.........','9');
         $this.empty().append(content);
       }
       else if($this.text() == ".........."){
         var content = $this.text();
         var content = content.replace('..........','10');
         $this.empty().append(content);
       }
       else{}
     })
    
  } 
 
  dotted();

});

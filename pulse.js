// Here You can type your custom JavaScript...

$(() => {
  $("#AnsOfQuestion142").keyup(function () {
    if($("#AnsOfQuestion142").val() != ""){
      // console.log("hi");
      $("#AnsOfQuestion143").val('Safe');
      $("#AnsOfQuestion146").val(' No');
      $("#AnsOfQuestion144").val(' Hindi');
      $("#AnsOfQuestion147").val('Stage 1');
      
      // $("#AnsOfQuestion141").val('Safe Content_Tagged_');
      $("#AnsOfQuestion141").focus();
    }
  });
  $("#AnsOfQuestion141").on("keydown", (e) => {
    e.preventDefault();
    if(e.ctrlKey && e.keyCode == 65){
      // a
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Accidents /Fails');
    }
    if(e.shiftKey && e.keyCode == 65){
      // shift + a
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Art and Craft');
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 65){
      // ctrl + shift + a
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Astrology');
    }
    if(e.ctrlKey && e.keyCode == 66){
      // b
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Cars/bikes/Planes');
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 66){
      // shift + b
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Beauty and Fashion ');
    }
    if(e.ctrlKey && e.keyCode == 67){
      // c
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Comedy and fun');
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 67){
      // shiift + c
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Cricket');
    }
    if(e.ctrlKey && e.keyCode == 68){
      // d
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Dance');
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 68){
      // shift + d
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Diy/Hacks');
    }
    if(e.ctrlKey && e.keyCode == 69){
      // e
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Entertainment');
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 69){
      // shift + e
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Education');
    }
    if(e.ctrlKey && e.keyCode == 70){
      // f
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Food and Cooking');
    }
    if(e.shiftKey && e.keyCode == 70){
      // shift + f
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Football');
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 70){
      // ctrl + shift + f
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Fitness and Health');
    }
    if(e.ctrlKey && e.keyCode == 71){
      // g
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Gods and Goddess');
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 71){
      // shift + g
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Gadgets');
    }
    if(e.ctrlKey && e.keyCode == 77){
      // ctrl + m
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Motivational');
    }
    if(e.shiftKey && e.keyCode == 77){
      // shift + m
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Magic perfornmance');
    }
    if(e.shiftKey && e.keyCode == 78){
      // shift + n
      $("#AnsOfQuestion141").val('Safe Content_Tagged_News');
    }
    if(e.keyCode == 80){
      // p
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Party and fun');
    }
    if(e.ctrlKey && e.keyCode == 80){
      // p
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Poetry and shayari');
    }
    if(e.shiftKey && e.keyCode == 80){
      // shift + p
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Pet/wildlife/Sealife');
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 80){
      // shift + p
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Pranks');
    }
    if(e.ctrlKey && e.keyCode == 83){
      // ctrl + s
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Status and wishes');
    }
    if(e.shiftKey && e.keyCode == 83){
      // shift + s
      $("#AnsOfQuestion141").val('Safe Content_Tagged_stunts');
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 83){
      // ctrl + shift + s
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Sports');
    }
    if(e.keyCode == 84){
      // t
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Travel');
    }
    if(e.shiftKey && e.keyCode == 84){
      // t
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Toys');
    }
    if(e.ctrlKey && e.keyCode == 79){
      // o
      $("#AnsOfQuestion141").val('Safe Content_Tagged_Can\'t identify');
    }
    if(e.keyCode == 8){
      // backspace
      let pr = prompt('Safe Content_Tagged_Photography    Unsafe Content_');
      $("#AnsOfQuestion141").val(pr);
    }
    if(e.ctrlKey && e.keyCode == 8){
      // backspace
      $(e.target).val('');
    }
    if(e.ctrlKey && e.altKey && e.keyCode == 65){
      // ctrl + alt + a
      $("#AnsOfQuestion143").val(' Unsafe');
      $(e.target).val('Unsafe Content_Abusive');
    }
    if(e.ctrlKey && e.altKey && e.keyCode == 66){
      // ctrl + alt + b
      $("#AnsOfQuestion143").val(' Unsafe');
      $(e.target).val('Unsafe Content_Blurred');
    }
    if(e.ctrlKey && e.altKey && e.keyCode == 67){
      // ctrl + alt + c
      $("#AnsOfQuestion143").val(' Unsafe');
      $(e.target).val('Unsafe Content_Competitor Logo');
    }
    if(e.ctrlKey && e.altKey && e.keyCode == 68){
      // ctrl + alt + d
      $("#AnsOfQuestion143").val(' Unsafe');
      $(e.target).val('Unsafe Content_Death');
    }
    if(e.ctrlKey && e.altKey && e.keyCode == 73){
      // ctrl + alt + i
      $("#AnsOfQuestion143").val(' Unsafe');
      $(e.target).val('Unsafe Content_Illegal display of weapon');
    }
    if(e.ctrlKey && e.altKey && e.keyCode == 80){
      // ctrl + alt + p
      $("#AnsOfQuestion143").val(' Unsafe');
      $(e.target).val('Unsafe Content_Porn');
    }
    if(e.ctrlKey && e.altKey && e.keyCode == 83){
      // ctrl + alt + s
      $("#AnsOfQuestion143").val(' Unsafe');
      $(e.target).val('Unsafe Content_Small Duration');
    }
  })
  $(document).keydown(function (e) {
  
    if (e.ctrlKey && e.keyCode == 13) {
      // Ctrl + Enter pressed
      document.querySelector("#callCRMTaggingCreation1").click(() => {
        //
      });
    }
  });
})
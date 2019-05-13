$(window).ready(()=>{
  
    $("#selectType").change(function(){
        let option = $('option:selected', this).attr('data-type');
        let optionLenght = $('option:selected', this).attr('data-max');
        let input = $("#type");
        console.log(option)
        input.prop("type",option);
        input.prop("maxlength",optionLenght)
        if (option == "text"){
            input.addClass("alfa");
            input.attr("data-limite",optionLenght)
        }else{
            input.removeClass("alfa");
            input.attr("data-limite",optionLenght)
        }
    })      
    $('#type').on('input', function (e) {
        if (!/^[ a-z0-9áéíóúüñ]*$/i.test(this.value)) {
            this.value = this.value.replace(/[^ a-z0-9áéíóúüñ]+/ig,"");
            if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
        }
    });


    $('#type').keydown( function(e){
        console.log("s");
        let max_chars = $("#type").attr("data-limite");
        if ($(this).val().length >= max_chars) { 
            $(this).val($(this).val().substr(0, max_chars));
        }
    });

    $('#type').keyup( function(e){
        console.log("d")
        let max_chars = $("#type").attr("data-limite");
        if ($(this).val().length >= max_chars) { 
            $(this).val($(this).val().substr(0, max_chars));
        }
    });

    $("#show").click(()=>{

        $("#show").toggleClass("active");

        if($("#show").hasClass("active")){
           $("#pass").prop("type","text"); 
        }else{
            $("#pass").prop("type","password"); 
        }
    })

})

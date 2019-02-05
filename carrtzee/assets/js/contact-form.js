/*------------------------------------------------------------------
    Form Validation
-------------------------------------------------------------------*/

    $( "#submit" ).on( "click", function() {
        var errors = "";

        var contact_name = document.getElementById("contact_name");
        var contact_email_address = document.getElementById("contact_email");

        if(contact_name.value == ""){
            errors+= 'Please provide your name.';
        }
        else if(contact_email_address.value == ""){
            errors+= 'Please provide an email address.';
        }
        else if(contact_email_address.value == ""){
            errors+= 'Please provide a valid email address.';
        }


        if(errors)
        {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML = errors;
            return false;
        }

        else{

            $.ajax({
                type: "POST",
                url: 'process.php',
                data: $("#contact_form").serialize(),
                success: function(msg)
                {
                    if(msg == 'success')
                    {
                        document.getElementById("error").style.display = "none";
                        document.getElementById("contact_name").value = "";
                        document.getElementById("contact_email").value = "";
                        document.getElementById("message").value = "";
                        $("#contact_form").hide();
                        document.getElementById("success").style.display = "block";
                        document.getElementById("success").innerHTML = "Thank You! We'll contact you shortly.";
                    }else{
                        document.getElementById("error").style.display = "block";
                        document.getElementById("error").innerHTML = "Oops! Something went wrong while prceeding.";
                    }
                }

            });

        }
    });



    $( "#submit" ).on( "click", function() {
        var errors = "";

        var contact_email_address = document.getElementById("subcribe_email");

        if(contact_email_address.value == ""){
            errors+= 'Please provide an email address.';
        }
        else if(contact_email_address.value == ""){
            errors+= 'Please provide a valid email address.';
        }


        if(errors)
        {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML = errors;
            return false;
        }

        else{

            $.ajax({
                type: "POST",
                url: 'process.php',
                data: $("#footer_mail").serialize(),
                success: function(msg)
                {
                    if(msg == 'success')
                    {
                        document.getElementById("error").style.display = "none";
                        document.getElementById("contact_name").value = "";
                        document.getElementById("contact_email").value = "";
                        document.getElementById("message").value = "";
                        $("#footer_mail").hide();
                        document.getElementById("success").style.display = "block";
                        document.getElementById("success").innerHTML = "Thank You! We'll contact you shortly.";
                    }else{
                        document.getElementById("error").style.display = "block";
                        document.getElementById("error").innerHTML = "Oops! Something went wrong while prceeding.";
                    }
                }

            });

        }
    });



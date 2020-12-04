function validate() {
      
         if( document.myForm.Name.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm.Name.focus() ;
            return false;
         }
        if( document.myForm.Organization.value == "" ) {
            alert( "Please provide your Organization!" );
            document.myForm.Organization.focus() ;
            return false;
        }
         if( document.myForm.Email.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.Email.focus() ;
            return false;
         }
         if( document.myForm.Schedule.value == "-1" ) {
            alert( "Please provide your preferred time and date!" );
            return false;
         }
         if( document.myForm.Desc.value == "" ) {
            alert( "Please provide a description of your concern!" );
            document.myForm.Desc.focus() ;
            return false;
         }
         return( true );
      }
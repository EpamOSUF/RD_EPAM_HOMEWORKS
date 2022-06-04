class NamedOne {
    
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(firstName,lastName){
        if(arguments.length === 0){
            console.log(`${this.firstName} ${this.lastName}`);
        }
        else{
            if(firstName && lastName){
                this.firstName = firstName;
                this.lastName = lastName;
    
                console.log(`${this.firstName} ${this.lastName}`);
            } if(firstName && !lastName){
                // Not the properly regex but is useful
                let regex = /[A-Z]*[A-Z]/g;

                let counter = (firstName.match(regex)).length

                counter > 1 
                ? console.log(`No, no space between first & last names`) :
                console.log(`No, last name missing`);
            }
            
        } 
    }
  }

  var me = new NamedOne('Claire','Redfield');
  me.fullName();

  me.firstName = 'Leon';
  me.lastName = 'Kennedy';
  me.fullName();

  me.fullName('JillValentine');

  me.fullName('Chris');
  
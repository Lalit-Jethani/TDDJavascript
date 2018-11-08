var assert = require('chai').assert;

describe('Student Operations', ()=>{

    var student = require('../index.js');
  
    it('should Delete a student from a list if he is desmissed', ()=>{
      
        var input = [
            {
                ID : 1,
                FirstName : 'Lalit',
                LastName : 'Jethani',
                Grade : 90,
                Status : "Graduate"
            },
            {
                ID : 2,
                FirstName : 'Ram',
                LastName : 'Jethani',
                Grade : 30,
                Status : "dismissed"
            },
        ];
        var outout = [
            {
                ID : 1,
                FirstName : 'Lalit',
                LastName : 'Jethani',
                Grade : 90,
                Status : "Graduate"
            }
           
        ];

        var res = student.delete(input);
            assert.deepEqual(outout,res);


        

    })

    it('should Sort student list by Grade', ()=>{
      
            var input = [
                {
                    ID : 1,
                    FirstName : 'Lalit',
                    LastName : 'Jethani',
                    Grade : 30,
                    Status : "Graduate"
                },
                {
                    ID : 2,
                    FirstName : 'Ram',
                    LastName : 'Jethani',
                    Grade : 40,
                    Status : "graduate"
                },
                {
                    ID : 3,
                    FirstName : 'shyam',
                    LastName : 'Jethani',
                    Grade : 50,
                    Status : "graduate"
                },
                {
                    ID : 4,
                    FirstName : 'RaMeenam',
                    LastName : 'Jethani',
                    Grade : 60,
                    Status : "graduate"
                },

            ];
        var outout = [

            {
                ID : 4,
                FirstName : 'RaMeenam',
                LastName : 'Jethani',
                Grade : 60,
                Status : "graduate"
            },
            {
                ID : 3,
                FirstName : 'shyam',
                LastName : 'Jethani',
                Grade : 50,
                Status : "graduate"
            },
            {
                ID : 2,
                FirstName : 'Ram',
                LastName : 'Jethani',
                Grade : 40,
                Status : "graduate"
            },
            {
                ID : 1,
                FirstName : 'Lalit',
                LastName : 'Jethani',
                Grade : 30,
                Status : "Graduate"
            },
            
           
            
           
        ];

        var res = student.sort(input);
            assert.deepEqual(outout,res);


        

    })

    it('should Delete and Sort student list by Grade', ()=>{
      
        var input = [
            {
                ID : 1,
                FirstName : 'Lalit',
                LastName : 'Jethani',
                Grade : 30,
                Status : "Graduate"
            },
            {
                ID : 2,
                FirstName : 'Ram',
                LastName : 'Jethani',
                Grade : 40,
                Status : "graduate"
            },
            {
                ID : 3,
                FirstName : 'shyam',
                LastName : 'Jethani',
                Grade : 50,
                Status : "dismissed"
            },
            {
                ID : 4,
                FirstName : 'RaMeenam',
                LastName : 'Jethani',
                Grade : 60,
                Status : "graduate"
            },

        ];
    var outout = [

        {
            ID : 4,
            FirstName : 'RaMeenam',
            LastName : 'Jethani',
            Grade : 60,
            Status : "graduate"
        },
       
        {
            ID : 2,
            FirstName : 'Ram',
            LastName : 'Jethani',
            Grade : 40,
            Status : "graduate"
        },
        {
            ID : 1,
            FirstName : 'Lalit',
            LastName : 'Jethani',
            Grade : 30,
            Status : "Graduate"
        },
        
       
        
       
    ];

    var res = student.DeleteAndSort(input);
        assert.deepEqual(outout,res);


    

})


})
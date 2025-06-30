


describe('My first test', () => { 


    test('should first', (done) => { 
    
        new Promise((resolve, reject) => {

            setTimeout(() => {

                resolve();
                expect(true).toBe(true);
                done();
                
            }, 1500);

        })



     })
    

 })
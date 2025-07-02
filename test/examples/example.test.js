
const handleGetGyphs = async(searchQ = 'Dragon ball') => {

    try {

        const apiKey = 'iLT7mN0m1tKBEGl3ONyAwOdbyY82JDjq';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQ}&limit=1`);
        const { data } = await resp.json();
        const { url } = data[0].images.original;

        return url;

    } catch (error) {
        console.log(error);
        return false;
    }

}


describe('My first test', () => { 


    test('Test with done in promise', (done) => { 

        new Promise((resolve, reject) => {

            setTimeout(() => {

                resolve();
                expect(true).toBe(true);
                done();

            }, 1500);

        });

    });

    test('Test with async and await', async() => {

        const result = await handleGetGyphs();
        console.log({result});

        expect(typeof result).toBe('string');
        expect(result).toContain('https');
       
    });



   
    

 })
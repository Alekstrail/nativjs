test("should take old men whom ages more than 90", () =>{
    const ages = [18,20,22,25,100,90,14];
    const predicate = (age:number) => {
        return age > 90;
    }
    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})
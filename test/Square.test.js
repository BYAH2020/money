
const sqr=require('../src/Square');

describe('Le carre', () => {
    it('doit retourner un carre positif si le nombre est positif', ()=> {
        const resultat = sqr.square(2);
        expect(resultat).toBe(4)
    })
    it('doit retourner un carre positif si le nombre est negatif', ()=> {
        const resultat = sqr.square(-2);
        expect(resultat).toBe(4)
    })
    it('doit retourner 0 si le nombre est 0', ()=> {
        const resultat = sqr.square(0);
        expect(resultat).toBe(0)
    })
})
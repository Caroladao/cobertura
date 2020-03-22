const NumFinder = require('../lib/numfinder');
const numFinder = new NumFinder();

describe( 'NumFinder', () => {
  test('no error', () => {
    numFinder.find([1,5,4,10]);
    expect( numFinder ).toEqual( {
      smaller: 1,
      bigger: 10
    });
  });

  test( 'average', () => {
    expect( numFinder.average( [10,6,3,1] ) ).toBe( 5 );
  } )

  test('pair', () => {
    expect( numFinder.evenOrOdd( 10 ) ).toBe( 'pair' );
  });

  test('ood', () => {
    expect( numFinder.evenOrOdd( 9 ) ).toBe( 'odd' );
  });
  

});
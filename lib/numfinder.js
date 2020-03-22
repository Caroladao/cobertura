class NumFinder {
  find( arr ) {
    this.init();
    for ( let num of arr ) {
      if( num < this.smaller ) {
        this.smaller = num;
      } else if ( num > this.bigger ) {
        this.bigger = num;
      }
    }
  }

  average( arr ) {
    let average = 0;
    for ( let num of arr ) {
      average += num;
    }

    return average / arr.length;
  }

  evenOrOdd( num ) {
    if( num % 2 === 0 ) {
      return 'pair'
    } else {
      return 'odd'
    }
  }



  init( ) {
    this.smaller = Number.POSITIVE_INFINITY;
    this.bigger = Number.NEGATIVE_INFINITY;
  }
}

module.exports = NumFinder;
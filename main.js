var game = {

    swapCells( el ) {

        let zeroCell;

        for ( let i of document.getElementsByClassName( 'cell' ) ) {

            if ( i.innerHTML == "<p>-</p>" ) {

                zeroCell = i;
                break

            }

        }

        if (
            el != zeroCell
            &&
            (
                ( el.id.charAt(0) == zeroCell.id.charAt(0) && ( ( el.id.charAt(2) - 1 == zeroCell.id.charAt(2) ) || ( +el.id.charAt(2) + 1 == zeroCell.id.charAt(2) ) ))
                ||
                ( el.id.charAt(2) == zeroCell.id.charAt(2) && ( ( el.id.charAt(0) - 1 == zeroCell.id.charAt(0) ) || ( +el.id.charAt(0) + 1 == zeroCell.id.charAt(0) ) ))
            )
        ) {

            zeroCell.innerHTML = el.innerHTML;
            el.innerHTML = "<p>-</p>";
            this.isComplete()

        } else return

    },

    isComplete() {

        let currentArr = [];

        for ( let i of document.getElementsByClassName( 'cell' ) ) {

            currentArr.push( i.innerHTML.charAt(4) )

        }

        currentArr.slice(-1);

        for ( let i = 1; i <= currentArr.length; i++ ) {
            if ( currentArr[i] != i )
            return
        }

        return alert( 'You win!' )

    },

    start() {

        if ( document.getElementById( "gameField" ) ) {
            document.getElementById( "gameField" ).remove()
        }

        let gameField = document.createElement( 'div' );
        gameField.id = "gameField";

        let arr = [];

        for ( let i = 1; i <= 15; i++ ) {
            arr.push( i )
        }
        
        arr.push( '-' );

        arr.sort( function() {

            return Math.random() - 0.5;

        } );

        for ( let i = 0; i < arr.length; i++ ) {

            if ( i <= 3 ) {
          
              let cell = document.createElement( 'div' );
              cell.innerHTML = `<p>${arr[i]}</p>`;
              cell.className = 'cell';
              cell.id = `1` + `_` + `${i + 1}`;
              gameField.append( cell );
              continue
          
            } else if ( i >= 4 && i <= 7) {
          
                let cell = document.createElement( 'div' );
                cell.innerHTML = `<p>${arr[i]}</p>`;
                cell.className = 'cell';
                cell.id = `2` + `_` + `${i - 3}`;
                gameField.append( cell );
                continue
            
            } else if ( i >= 8 && i <= 11) {
            
                let cell = document.createElement( 'div' );
                cell.innerHTML = `<p>${arr[i]}</p>`;
                cell.className = 'cell';
                cell.id = `3` + `_` + `${i - 7}`;
                gameField.append( cell );
                continue
            
            } else {
            
                let cell = document.createElement( 'div' );
                cell.innerHTML = `<p>${arr[i]}</p>`;
                cell.className = 'cell';
                cell.id = `4` + `_` + `${i - 11}`;
                gameField.append( cell );
                continue
            
            }
          
        }

        document.getElementById( 'wrapper' ).append( gameField );
        
        for ( let i of document.getElementsByClassName( 'cell' ) ) {
            i.addEventListener( 'click', () => { game.swapCells( i ) } )
        }

    },

    init() {

        document.getElementById( 'start' ).addEventListener( 'click', this.start );

    }

}

game.init();
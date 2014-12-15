/**
 * Swap.js 0.0.1
 * @author Kyle Foster (@hkfoster)
 * @license MIT
 */
var swapInit = ( function() {

  var triggers = document.querySelectorAll( '.swap-trigger' );

  if ( triggers.length ) {

    var init = function() {

      // Assignment
      var location = window.location.hash;

      // Swap function
      function swap( trigger, target ) {

        // Assignment
        var currentSel = document.querySelectorAll( '.selected' );

        // And deselect them
        for ( var i = 0; i < currentSel.length; i++ ) {
          removeClass( currentSel[ i ], 'selected' );
        }

        // Select our new elements
        addClass( target, 'selected' );

        // Account for multiple triggers
        for ( var trigIndex = 0; trigIndex < trigger.length; trigIndex++ ) {
          addClass( trigger[ trigIndex ], 'selected' );
        }
      }

      // Get current window hash
      function getHash() {
        return location.split( '#' )[ 1 ];
      }

      // Get link target hash
      function getLinkTarget( link ) {
        return link.href.split( '#' )[ 1 ];
      }

      // Hash check function
      function hashCheck( event ) {

        // If no hash
        if ( !location ) {

          // Assignment
          var firstTarget   = document.querySelector( '.swappable' ),
              firstTrigger = document.querySelectorAll( '[href="#' + firstTarget.id + '"]' );

          // And select them
          swap( firstTrigger, firstTarget );

        // Otherwise
        } else {

          // Stop default anchor tag jump
          window.scrollTo( 0, 0 );

          // Assign appropriate element(s) variables
          var loadedTarget  = document.querySelector( '#' + getHash() ),
              loadedTrigger = document.querySelectorAll( '[href="#' + getHash() + '"]' );

          // And select them
          swap( loadedTrigger, loadedTarget );
        }
      }

      // Click handler function
      function clickHandler( event ) {

        // Prevent default behavior
        event.stopPropagation();
        event.preventDefault();

        // Local assignment
        var triggerElem  = this,
            linkTarget   = getLinkTarget( triggerElem ),
            triggerElems = document.querySelectorAll( '[href="#' + linkTarget + '"]' ),
            targetElem   = document.querySelector( '#' + linkTarget );

        swap( triggerElems, targetElem );

        // Replace the hash
        history.replaceState( null, '', '#' + linkTarget );

      }

      // Run hash check on window load
      window.addEventListener( 'load', hashCheck, false );

      // Iterate over each swap trigger
      for ( var i = 0; i < triggers.length; i++ ) {

        // And attach our click listener
        triggers[ i ].addEventListener( 'click', clickHandler, false );

      }

      // Utility function (add class)
      function addClass( el, className ) {
        if ( el.classList ) {
          el.classList.add( className );
        } else {
          el.className += ' ' + className;
        }
      }

      // Utility function (remove class)
      function removeClass( el, className ) {
        if ( el.classList ) {
          el.classList.remove( className );
        } else {
          el.className = el.className.replace( new RegExp('(^|\\b)' + className.split( ' ' ).join( '|' ) + '(\\b|$)', 'gi' ), ' ' );
        }
      }

    };

    init();

  }

})();
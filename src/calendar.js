( function( root ) {
  "use strict";

  root.calendar = {
    createDates: function( year, month ) {
      var start = this._getLastMonday( year, month ), dates = [], date;
      date = start;
      for ( var i = 0; i < 42; i++ ) {
        dates.push( {
          data: date,
          date: date.getDate()
        } );
        date = this._nextDate( date );
      }
      return dates;
    },
    _nextDate: function( date ) {
      var next = new Date( date );
      next.setDate( date.getDate() + 1 );
      return next;
    },
    _getLast: function( year, month ) {
      var last = new Date( parseInt( year, 10 ), parseInt( month, 10 ), 0 ).getDate();
      return new Date( parseInt( year, 10 ), parseInt( month, 10 ) - 1, last );
    },
    _getFirstDay: function( year, month ) {
      return this._getFirst( year, month ).getDay();
    },
    _getFirst: function( year, month ) {
      return new Date( parseInt( year, 10 ), parseInt( month, 10 ) - 1 , 1 );
    },
    _getLastMonday: function( year, month ) {
      var fday = this._getFirst( year, month ), lastMonday;
      // 月の最初の日から月曜日までの日数を引くことで前の月の最後の月曜を得る。
      // 月の最初が日曜の場合は getDay() === 0 になるため、前の月曜日を探すためには 6日引く必要がある。
      // それ以外は、曜日を引くだけでいい。
      lastMonday = fday.setDate( fday.getDate() - ( fday.getDay() === 0 ? 7 : fday.getDay() ) + 1 );
      return fday;
    }
  }
} )( window );

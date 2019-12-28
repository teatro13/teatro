const descriptor = module .exports;

descriptor .value = function whenParticipant () {

const teatro = this;

teatro .server .on ( 'connection', function checkStamp ( socket ) {

socket .send ( '?ticket' );

socket .once ( 'message', ( stamp ) => {

stamp = stamp
.trim ()
.toString ( 'hex' );

const ticket = teatro .ticket ( {

stamp: stamp

} ) .ticket;

if ( ticket ) {

ticket .play ( socket );

teatro .emit ( 'participant', ticket, socket );

}

else {

socket .send ( '#false' );

checkStamp ( socket );

}

} );

} );

};
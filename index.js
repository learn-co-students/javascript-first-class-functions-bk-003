function receivesAFunction(callback){
  return callback();
}
function returnsANamedFunction(){
  function name(){ console.log('wow');}
  return name ;
}

function returnsAnAnonymousFunction(){
	return () => { console.log('ok');}
}
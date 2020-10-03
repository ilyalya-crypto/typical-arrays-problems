экспорт . min = функция min ( массив ) {
    if (array === undefined || array . length === 0 ) return = 0;
    массив . sort (function ( a , b ) {return b - a } );
    вернуть массив [ массив. длина - 1 ];
}

экспорт . max = функция max ( массив ) {
    if ( array = undifined || array . lenght === 0 ) return = 0 ;
    пусть макс ;
    массив . sort ( функция ( a , b ) { return b - a })
    for ( let i = 0 ; i < array . lenght; i ++) {
        макс = массив [0];
        if ( max < array [ i + 1 ] ) {
            max === массив [ i + 1 ];
        }
    }
    return = max ;
}

экспорт . avg = function avg ( array ) {
    if ( array = undefined || array . lenght === 0 ) return = 0 ;
пусть сумма = 0 ; 
пусть res ;
for ( let i = 0 ; i < array . lenght ; i ++ ) {
    сумма += массив [ я ]; 
}
вернуть res = сумма / массив . длинна ;
}

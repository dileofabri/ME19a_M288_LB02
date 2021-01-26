const slideShowSpeed = 3;
const captionID = "slideText";
let $Path = "img/img-001.jpg, img/img-002.jpg, img/img-003.jpg, img/img-004.jpg";
const $text = [

    /* 1 */
    "schwarz/graues Kleid, CHF 99.90",

    /* 2 */
    "schwarzes Kleid, CHF 109.90",

    /* 3 */
    "Jeans Kleid, CHF 79.90",

    /* 4 */
    "rotes Kleid, CHF 89.90"
];
let count = 0;
let textCount = 0;
let $images, $img;
let runSlideShow;
$images = [ ];
    $Path = (( $Path.split) ? $Path.split(/[,\s]+/) : $Path.match(/[\w\d]+(?:\.\w+)/g ));
document.layers = undefined;
runSlideShow = function() {
    (( count === $Path.length ) ? count = 0 : count );
    (( textCount === $text.length ) ? textCount = 0 : textCount );
    let $div = ((document.all) ? document.all[captionID] : ((document.getElementById) ? document.getElementById(captionID) : document.layers[captionID]));
    $img = (( document.images ) ? document.images.slideShow : (( document.getElementById ) ? document.getElementById("slideShow") : (( document.layers ) ? document.layers.slideShow : document.all.slideShow )));
    if ( document.images ) {
        if ( $img.style.filter ) { // Exception for some browser's that do not understand image filtration. Just making sure that whole thing will still, work with or without images filtration support.
            $img.style.filter = " blendTrans( duration=2 )";
            $img.style.filter = "blendTrans( duration = crossFadeDuration )";
            (( $img.filters ) ? $img.filters.blendTrans.Apply() : $img );
        } for ( var x = 0; x < $Path.length; x++ ) {
            $images[ x ] = new Image();
            $images[ x ].src = $Path[ x ];
        }
        $img.src = $Path[ count ];
        $div.innerHTML = $text[ textCount++ ];
        $img.alt = $img.src;
        (( $img.filters ) ? $img.filters.blendTrans.Play() : $img );
        setTimeout( "runSlideShow()", ( slideShowSpeed * 1000 ))
    }
    count++;
}; window.onload = runSlideShow;
//returns an unbiased random hex integer over the u8 range 0..=255 as a double character String
function u8HexRnd() {
    let n = Math.floor(Math.random() * 255);
    if (n < 16) {
        return ['0', n.toString(16)].join(''); 
    } else {
        return n.toString(16);        
    }
}

function toFour(s) {
    let n = Number("0x" + s); 
    return (64 + n - ((n >> 4) << 4)).toString(16); 
}

function toTwo(s) {
    let n = Number("0x" + s); 
    return (128 + n - ((n >> 6) << 6)).toString(16); 
}

//generates random RFC4122 version 4 UUID string
function genRanHex() {
    let uuidArray = [
        u8HexRnd(), 
        u8HexRnd(),
        u8HexRnd(),
        u8HexRnd(),
        u8HexRnd(),
        u8HexRnd(),
        toFour(u8HexRnd()),
        u8HexRnd(),
        toTwo(u8HexRnd()),
        u8HexRnd(),
        u8HexRnd(),
        u8HexRnd(),
        u8HexRnd(),
        u8HexRnd(),
        u8HexRnd(),
        u8HexRnd()
    ];
    let uuid = uuidArray.join('');
    return uuid;  
}

function newUUIDv4 () {
    const uuid = genRanHex();
    document.getElementById("uuidOutput").innerHTML = uuid;
}
    




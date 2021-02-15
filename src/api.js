import { v4 as uuidv4 } from "uuid";
function achiveOrg() {
    return [
        {
            name: "Snake Eater",
            cover: "https://s.pacn.ws/640/x/metal-gear-solid-3-snake-eater-original-soundtrack-16728.4.jpg?p0l32p",
            artist: "Cynthia Harrell &  Norihiko Hibino",
            audio: "https://ia800608.us.archive.org/28/items/MetalGearSolid3SnakeEaterSoundtrackSnakeEater_201706/Metal%20Gear%20Solid%203%20Snake%20Eater%20Soundtrack-%20Snake%20Eater.mp3",
            color: ["#926b10", "#605819"],
            id: uuidv4(),
            active: true,
        },

        {
            name: "Silent Hill Theme",
            cover: "https://www.game-ost.com/static/covers_soundtracks/2/5/25667_343741.jpg",
            artist: "Akira Yamaoka",
            audio: "https://ia801406.us.archive.org/25/items/silent_hil-original_soundtrack/01-ost-silent_hill-bla.mp3",
            color: ["#5992a5", "#1bb0c6"],
            id: uuidv4(),
            active: false,
        },

        {
            name: "Bloody Tears",
            cover: "https://lemagjeuxhightech.com/wp-content/uploads/2019/12/Super-Castlevania-IV-notre-video-gameplay-sur-SNES-Mini.jpg",
            artist: "Masanori Adachi, Taro Kudou",
            audio: "https://ia801401.us.archive.org/18/items/super_castlevania_iv_ost/26-Bloody%20Tears.mp3",
            color: ["#fac740", "#e61229"],
            id: uuidv4(),
            active: false,
        },

        {
            name: "Metal Gear Solid 2 :Sons of Liberty Theme",
            cover: "https://ia801708.us.archive.org/35/items/metal_gear_solid_2_soundtrack/folder.jpg?cnt=0",
            artist: "Harry Gregson-Williams",
            audio: "https://ia801708.us.archive.org/35/items/metal_gear_solid_2_soundtrack/01%20-%20Metal%20Gear%20Solid%20Main%20Theme.mp3",
            color: ["#ca5d36", "#d71b1b"],
            id: uuidv4(),
            active: false,
        },

    ];

}

export default achiveOrg;
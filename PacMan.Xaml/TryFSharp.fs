﻿#if INTERACTIVE
#else
namespace PacMan
#endif

module Images =

    let ``1600`` =
        14, 14,
        let A, B = 0x0, 0xFFED1C24
        [|
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|B; A; B; B; B; A; B; B; B; A; B; B; B; A|]
        [|B; A; B; A; A; A; B; A; B; A; B; A; B; A|]
        [|B; A; B; B; B; A; B; A; B; A; B; A; B; A|]
        [|B; A; B; A; B; A; B; A; B; A; B; A; B; A|]
        [|B; A; B; B; B; A; B; B; B; A; B; B; B; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        |]
    let ``200`` =
        14, 14,
        let A, B = 0x0, 0xFFED1C24
        [|
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; B; B; B; A; B; B; B; A; B; B; B; A; A|]
        [|A; A; A; B; A; B; A; B; A; B; A; B; A; A|]
        [|A; B; B; B; A; B; A; B; A; B; A; B; A; A|]
        [|A; B; A; A; A; B; A; B; A; B; A; B; A; A|]
        [|A; B; B; B; A; B; B; B; A; B; B; B; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        |]
    let ``400`` =
        14, 14,
        let A, B = 0x0, 0xFFED1C24
        [|
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; B; A; B; A; B; B; B; A; B; B; B; A; A|]
        [|A; B; A; B; A; B; A; B; A; B; A; B; A; A|]
        [|A; B; B; B; A; B; A; B; A; B; A; B; A; A|]
        [|A; A; A; B; A; B; A; B; A; B; A; B; A; A|]
        [|A; A; A; B; A; B; B; B; A; B; B; B; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        |]
    let ``800`` =
        14, 14,
        let A, B = 0x0, 0xFFED1C24
        [|
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; B; B; B; A; B; B; B; A; B; B; B; A; A|]
        [|A; B; A; B; A; B; A; B; A; B; A; B; A; A|]
        [|A; B; B; B; A; B; A; B; A; B; A; B; A; A|]
        [|A; B; A; B; A; B; A; B; A; B; A; B; A; A|]
        [|A; B; B; B; A; B; B; B; A; B; B; B; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        |]
    let blue =
        14, 14,
        let A, B, C = 0x0, 0xFF2121FF, 0xFFFFB8AE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; B; B; B; B; B; B; B; B; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; B; C; C; B; B; C; C; B; B; B; A|]
        [|B; B; B; B; C; C; B; B; C; C; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; C; C; B; B; C; C; B; B; C; C; B; B|]
        [|B; C; B; B; C; C; B; B; C; C; B; B; C; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let cyand =
        14, 14,
        let A, B, C, D = 0x0, 0xFF00FFDE, 0xFFDEDEDE, 0xFF2121DE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; B; B; B; B; B; B; B; B; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; C; C; B; B; B; B; C; C; B; B; A|]
        [|A; B; C; C; C; C; B; B; C; C; C; C; B; A|]
        [|B; B; C; C; C; C; B; B; C; C; C; C; B; B|]
        [|B; B; C; D; D; C; B; B; C; D; D; C; B; B|]
        [|B; B; B; D; D; B; B; B; B; D; D; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let cyanl =
        14, 14,
        let A, B, C, D = 0x0, 0xFF00FFDE, 0xFFDEDEDE, 0xFF2121DE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; B; B; B; B; B; B; B; B; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; C; C; B; B; B; B; C; C; B; B; B; A|]
        [|A; C; C; C; C; B; B; C; C; C; C; B; B; A|]
        [|A; D; D; C; C; B; B; D; D; C; C; B; B; A|]
        [|B; D; D; C; C; B; B; D; D; C; C; B; B; B|]
        [|B; B; C; C; B; B; B; B; C; C; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let cyanr =
        14, 14,
        let A, B, C, D = 0x0, 0xFF00FFDE, 0xFFDEDEDE, 0xFF2121DE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; B; B; B; B; B; B; B; B; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; C; C; B; B; B; B; C; C; B; A|]
        [|A; B; B; C; C; C; C; B; B; C; C; C; C; A|]
        [|A; B; B; C; C; D; D; B; B; C; C; D; D; A|]
        [|B; B; B; C; C; D; D; B; B; C; C; D; D; B|]
        [|B; B; B; B; C; C; B; B; B; B; C; C; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let cyanu =
        14, 14,
        let A, B, C, D = 0x0, 0xFF00FFDE, 0xFF2121DE, 0xFFDEDEDE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; C; C; B; B; B; B; C; C; A; A; A|]
        [|A; A; D; C; C; D; B; B; D; C; C; D; A; A|]
        [|A; B; D; D; D; D; B; B; D; D; D; D; B; A|]
        [|A; B; D; D; D; D; B; B; D; D; D; D; B; A|]
        [|A; B; B; D; D; B; B; B; B; D; D; B; B; A|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let eyed =
        14, 14,
        let A, B, C = 0x0, 0xFFDEDEDE, 0xFF2121DE
        [|
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; B; B; A; A; A; A; B; B; A; A; A|]
        [|A; A; B; B; B; B; A; A; B; B; B; B; A; A|]
        [|A; A; B; B; B; B; A; A; B; B; B; B; A; A|]
        [|A; A; B; C; C; B; A; A; B; C; C; B; A; A|]
        [|A; A; A; C; C; A; A; A; A; C; C; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        |]
    let eyel =
        14, 14,
        let A, B, C = 0x0, 0xFFDEDEDE, 0xFF2121DE
        [|
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; B; B; A; A; A; A; B; B; A; A; A; A|]
        [|A; B; B; B; B; A; A; B; B; B; B; A; A; A|]
        [|A; C; C; B; B; A; A; C; C; B; B; A; A; A|]
        [|A; C; C; B; B; A; A; C; C; B; B; A; A; A|]
        [|A; A; B; B; A; A; A; A; B; B; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        |]
    let eyer =
        14, 14,
        let A, B, C = 0x0, 0xFFDEDEDE, 0xFF2121DE
        [|
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; B; B; A; A; A; A; B; B; A; A|]
        [|A; A; A; B; B; B; B; A; A; B; B; B; B; A|]
        [|A; A; A; B; B; C; C; A; A; B; B; C; C; A|]
        [|A; A; A; B; B; C; C; A; A; B; B; C; C; A|]
        [|A; A; A; A; B; B; A; A; A; A; B; B; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        |]
    let eyeu =
        14, 14,
        let A, B, C = 0x0, 0xFF2121DE, 0xFFDEDEDE
        [|
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; B; B; A; A; A; A; B; B; A; A; A|]
        [|A; A; C; B; B; C; A; A; C; B; B; C; A; A|]
        [|A; A; C; C; C; C; A; A; C; C; C; C; A; A|]
        [|A; A; C; C; C; C; A; A; C; C; C; C; A; A|]
        [|A; A; A; C; C; A; A; A; A; C; C; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A; A|]
        |]
    let oranged =
        14, 14,
        let A, B, C, D = 0x0, 0xFFFFB847, 0xFFDEDEDE, 0xFF2121DE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; B; B; B; B; B; B; B; B; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; C; C; B; B; B; B; C; C; B; B; A|]
        [|A; B; C; C; C; C; B; B; C; C; C; C; B; A|]
        [|B; B; C; C; C; C; B; B; C; C; C; C; B; B|]
        [|B; B; C; D; D; C; B; B; C; D; D; C; B; B|]
        [|B; B; B; D; D; B; B; B; B; D; D; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let orangel =
        14, 14,
        let A, B, C, D = 0x0, 0xFFFFB847, 0xFFDEDEDE, 0xFF2121DE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; B; B; B; B; B; B; B; B; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; C; C; B; B; B; B; C; C; B; B; B; A|]
        [|A; C; C; C; C; B; B; C; C; C; C; B; B; A|]
        [|A; D; D; C; C; B; B; D; D; C; C; B; B; A|]
        [|B; D; D; C; C; B; B; D; D; C; C; B; B; B|]
        [|B; B; C; C; B; B; B; B; C; C; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let oranger =
        14, 14,
        let A, B, C, D = 0x0, 0xFFFFB847, 0xFFDEDEDE, 0xFF2121DE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; B; B; B; B; B; B; B; B; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; C; C; B; B; B; B; C; C; B; A|]
        [|A; B; B; C; C; C; C; B; B; C; C; C; C; A|]
        [|A; B; B; C; C; D; D; B; B; C; C; D; D; A|]
        [|B; B; B; C; C; D; D; B; B; C; C; D; D; B|]
        [|B; B; B; B; C; C; B; B; B; B; C; C; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let orangeu =
        14, 14,
        let A, B, C, D = 0x0, 0xFFFFB847, 0xFF2121DE, 0xFFDEDEDE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; C; C; B; B; B; B; C; C; A; A; A|]
        [|A; A; D; C; C; D; B; B; D; C; C; D; A; A|]
        [|A; B; D; D; D; D; B; B; D; D; D; D; B; A|]
        [|A; B; D; D; D; D; B; B; D; D; D; D; B; A|]
        [|A; B; B; D; D; B; B; B; B; D; D; B; B; A|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let p =
        13, 13,
        let A, B = 0x0, 0xFFFFFF00
        [|
        [|A; A; A; A; B; B; B; B; B; A; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; A; A; A; B; B; B; B; B; A; A; A; A|]
        |]
    let pd1 =
        13, 13,
        let A, B = 0x0, 0xFFFFFF00
        [|
        [|A; A; A; A; B; B; B; B; B; A; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; A; B; B; B; B; B; B|]
        [|B; B; B; B; B; A; A; A; B; B; B; B; B|]
        [|B; B; B; B; B; A; A; A; B; B; B; B; B|]
        [|A; B; B; B; A; A; A; A; A; B; B; B; A|]
        [|A; B; B; B; A; A; A; A; A; B; B; B; A|]
        [|A; A; B; A; A; A; A; A; A; A; B; A; A|]
        [|A; A; A; A; A; A; A; A; A; A; A; A; A|]
        |]
    let pd2 =
        13, 13,
        let A, B = 0x0, 0xFFFFFF00
        [|
        [|A; A; A; A; B; B; B; B; B; A; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; A; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; A; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; A; B; B; B; B; B; B|]
        [|A; B; B; B; B; A; A; A; B; B; B; B; A|]
        [|A; B; B; B; B; A; A; A; B; B; B; B; A|]
        [|A; A; B; B; B; A; A; A; B; B; B; A; A|]
        [|A; A; A; A; B; A; A; A; B; A; A; A; A|]
        |]
    let pinkd =
        14, 14,
        let A, B, C, D = 0x0, 0xFFFFB8DE, 0xFFDEDEDE, 0xFF2121DE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; B; B; B; B; B; B; B; B; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; C; C; B; B; B; B; C; C; B; B; A|]
        [|A; B; C; C; C; C; B; B; C; C; C; C; B; A|]
        [|B; B; C; C; C; C; B; B; C; C; C; C; B; B|]
        [|B; B; C; D; D; C; B; B; C; D; D; C; B; B|]
        [|B; B; B; D; D; B; B; B; B; D; D; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let pinkl =
        14, 14,
        let A, B, C, D = 0x0, 0xFFFFAEC9, 0xFFDEDEDE, 0xFF2121DE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; B; B; B; B; B; B; B; B; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; C; C; B; B; B; B; C; C; B; B; B; A|]
        [|A; C; C; C; C; B; B; C; C; C; C; B; B; A|]
        [|A; D; D; C; C; B; B; D; D; C; C; B; B; A|]
        [|B; D; D; C; C; B; B; D; D; C; C; B; B; B|]
        [|B; B; C; C; B; B; B; B; C; C; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let pinkr =
        14, 14,
        let A, B, C, D = 0x0, 0xFFFFAEC9, 0xFFDEDEDE, 0xFF2121DE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; B; B; B; B; B; B; B; B; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; C; C; B; B; B; B; C; C; B; A|]
        [|A; B; B; C; C; C; C; B; B; C; C; C; C; A|]
        [|A; B; B; C; C; D; D; B; B; C; C; D; D; A|]
        [|B; B; B; C; C; D; D; B; B; C; C; D; D; B|]
        [|B; B; B; B; C; C; B; B; B; B; C; C; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let pinku =
        14, 14,
        let A, B, C, D = 0x0, 0xFFFFB8DE, 0xFF2121DE, 0xFFDEDEDE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; C; C; B; B; B; B; C; C; A; A; A|]
        [|A; A; D; C; C; D; B; B; D; C; C; D; A; A|]
        [|A; B; D; D; D; D; B; B; D; D; D; D; B; A|]
        [|A; B; D; D; D; D; B; B; D; D; D; D; B; A|]
        [|A; B; B; D; D; B; B; B; B; D; D; B; B; A|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let pl1 =
        13, 13,
        let A, B = 0x0, 0xFFFFFF00
        [|
        [|A; A; A; A; B; B; B; B; B; A; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; A; A; A; B; B; B; B; B; B; B; B; B|]
        [|A; A; A; A; A; A; B; B; B; B; B; B; B|]
        [|A; A; A; A; A; A; A; B; B; B; B; B; B|]
        [|A; A; A; A; A; A; B; B; B; B; B; B; B|]
        [|A; A; A; A; B; B; B; B; B; B; B; B; B|]
        [|A; A; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; A; A; A; B; B; B; B; B; A; A; A; A|]
        |]
    let pl2 =
        13, 13,
        let A, B = 0x0, 0xFFFFFF00
        [|
        [|A; A; A; A; B; B; B; B; B; A; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|A; A; A; A; B; B; B; B; B; B; B; B; B|]
        [|A; A; A; A; A; A; A; B; B; B; B; B; B|]
        [|A; A; A; A; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; A; A; A; B; B; B; B; B; A; A; A; A|]
        |]
    let pr1 =
        13, 13,
        let A, B = 0x0, 0xFFFFFF00
        [|
        [|A; A; A; A; B; B; B; B; B; A; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; A; A|]
        [|B; B; B; B; B; B; B; B; B; A; A; A; A|]
        [|B; B; B; B; B; B; B; A; A; A; A; A; A|]
        [|B; B; B; B; B; B; A; A; A; A; A; A; A|]
        [|B; B; B; B; B; B; B; A; A; A; A; A; A|]
        [|B; B; B; B; B; B; B; B; B; A; A; A; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; A; A; A; B; B; B; B; B; A; A; A; A|]
        |]
    let pr2 =
        13, 13,
        let A, B = 0x0, 0xFFFFFF00
        [|
        [|A; A; A; A; B; B; B; B; B; A; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; A; A; A; A|]
        [|B; B; B; B; B; B; A; A; A; A; A; A; A|]
        [|B; B; B; B; B; B; B; B; B; A; A; A; A|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; A; A; A; B; B; B; B; B; A; A; A; A|]
        |]
    let pu1 =
        13, 13,
        let A, B = 0x0, 0xFFFFFF00
        [|
        [|A; A; A; A; A; A; A; A; A; A; A; A; A|]
        [|A; A; B; A; A; A; A; A; A; A; B; A; A|]
        [|A; B; B; B; A; A; A; A; A; B; B; B; A|]
        [|A; B; B; B; A; A; A; A; A; B; B; B; A|]
        [|B; B; B; B; B; A; A; A; B; B; B; B; B|]
        [|B; B; B; B; B; A; A; A; B; B; B; B; B|]
        [|B; B; B; B; B; B; A; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; A; A; A; B; B; B; B; B; A; A; A; A|]
        |]
    let pu2 =
        13, 13,
        let A, B = 0x0, 0xFFFFFF00
        [|
        [|A; A; A; A; B; A; A; A; B; A; A; A; A|]
        [|A; A; B; B; B; A; A; A; B; B; B; A; A|]
        [|A; B; B; B; B; A; A; A; B; B; B; B; A|]
        [|A; B; B; B; B; A; A; A; B; B; B; B; A|]
        [|B; B; B; B; B; B; A; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; A; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; A; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; A; A; A; B; B; B; B; B; A; A; A; A|]
        |]
    let redd =
        14, 14,
        let A, B, C, D = 0x0, 0xFFFF0000, 0xFFDEDEDE, 0xFF2121DE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; B; B; B; B; B; B; B; B; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; B; B; B; B; B; B; B; B; B; A|]
        [|A; B; B; C; C; B; B; B; B; C; C; B; B; A|]
        [|A; B; C; C; C; C; B; B; C; C; C; C; B; A|]
        [|B; B; C; C; C; C; B; B; C; C; C; C; B; B|]
        [|B; B; C; D; D; C; B; B; C; D; D; C; B; B|]
        [|B; B; B; D; D; B; B; B; B; D; D; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let redl =
        14, 14,
        let A, B, C, D = 0x0, 0xFFFF0000, 0xFFDEDEDE, 0xFF2121DE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; B; B; B; B; B; B; B; B; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; C; C; B; B; B; B; C; C; B; B; B; A|]
        [|A; C; C; C; C; B; B; C; C; C; C; B; B; A|]
        [|A; D; D; C; C; B; B; D; D; C; C; B; B; A|]
        [|B; D; D; C; C; B; B; D; D; C; C; B; B; B|]
        [|B; B; C; C; B; B; B; B; C; C; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let redr =
        14, 14,
        let A, B, C, D = 0x0, 0xFFFF0000, 0xFFDEDEDE, 0xFF2121DE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; B; B; B; B; B; B; B; B; A; A; A|]
        [|A; A; B; B; B; B; B; B; B; B; B; B; A; A|]
        [|A; B; B; B; C; C; B; B; B; B; C; C; B; A|]
        [|A; B; B; C; C; C; C; B; B; C; C; C; C; A|]
        [|A; B; B; C; C; D; D; B; B; C; C; D; D; A|]
        [|B; B; B; C; C; D; D; B; B; C; C; D; D; B|]
        [|B; B; B; B; C; C; B; B; B; B; C; C; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let redu =
        14, 14,
        let A, B, C, D = 0x0, 0xFFFF0000, 0xFF2121DE, 0xFFDEDEDE
        [|
        [|A; A; A; A; A; B; B; B; B; A; A; A; A; A|]
        [|A; A; A; C; C; B; B; B; B; C; C; A; A; A|]
        [|A; A; D; C; C; D; B; B; D; C; C; D; A; A|]
        [|A; B; D; D; D; D; B; B; D; D; D; D; B; A|]
        [|A; B; D; D; D; D; B; B; D; D; D; D; B; A|]
        [|A; B; B; D; D; B; B; B; B; D; D; B; B; A|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; B; B; B; B; B; B; B; B; B; B; B; B|]
        [|B; B; A; B; B; B; A; A; B; B; B; A; B; B|]
        [|B; A; A; A; B; B; A; A; B; B; A; A; A; B|]
        |]
    let nameToValue =
        [
        "1600", ``1600``
        "200", ``200``
        "400", ``400``
        "800", ``800``
        "blue", blue
        "cyand", cyand
        "cyanl", cyanl
        "cyanr", cyanr
        "cyanu", cyanu
        "eyed", eyed
        "eyel", eyel
        "eyer", eyer
        "eyeu", eyeu
        "oranged", oranged
        "orangel", orangel
        "oranger", oranger
        "orangeu", orangeu
        "p", p
        "pd1", pd1
        "pd2", pd2
        "pinkd", pinkd
        "pinkl", pinkl
        "pinkr", pinkr
        "pinku", pinku
        "pl1", pl1
        "pl2", pl2
        "pr1", pr1
        "pr2", pr2
        "pu1", pu1
        "pu2", pu2
        "redd", redd
        "redl", redl
        "redr", redr
        "redu", redu
        ]

type Paint(aarrggbb:int) =
    static member White = Paint(0xFFFFFFFF)
    static member Black = Paint(0x00000000)
    static member Blue = Paint(0xFF0000FF)
    static member Yellow = Paint(0xFFFFFF00)
    static member Transparent = Paint(0x00FFFFFF)
    member this.Color = aarrggbb 

type IScene =
    abstract member AddLayer : unit -> ILayer
    abstract member CreateBitmap : Paint * int seq -> IBitmap
    abstract member CreateBitmap : int * int * int[][] -> IBitmap
    abstract member LoadBitmap : string -> IBitmap
    abstract member Contents : IContents
and  IContents = 
    abstract member Add : IContent -> unit
    abstract member Remove : IContent -> unit
    abstract member Contains: IContent -> bool
and IContent =
    abstract member Control : obj
    abstract member Move : float * float -> unit
    abstract member SetOpacity : float -> unit
and IBitmap =
    abstract member CreateContent : unit -> IContent
and ILayer =
    inherit IContent
    abstract member Contents : IContents

type IInput =
    abstract member IsUp : bool
    abstract member IsDown : bool
    abstract member IsLeft : bool
    abstract member IsRight : bool

[<AutoOpen>]
module Algorithm =
    let flood canFill fill (x,y) =
        let rec f n = function
            | [] -> ()
            | ps ->
                let ps = ps |> List.filter canFill
                ps |> List.iter (fill n)
                ps |> List.collect (fun (x,y) -> [(x-1,y);(x+1,y);(x,y-1);(x,y+1)])
                |> f (n+1)
        f 0 [(x,y)]

module Seq =
    let private rand = System.Random()
    let unsort xs =
        xs
        |> Seq.map (fun x -> rand.Next(),x)
        |> Seq.cache
        |> Seq.sortBy fst
        |> Seq.map snd

type Ghost = {
    Blue : IContent
    Eyes : IContent * IContent * IContent * IContent
    Body : IContent * IContent * IContent * IContent
    Image : IContent
    X : int
    Y : int
    V : int * int
    IsReturning : bool
    }

// [snippet:PacMan game]
type Game(scene:IScene, input:IInput) =
    let toBitmap color lines = scene.CreateBitmap(color,lines)
    let toImage (bitmap:IBitmap) = bitmap.CreateContent()
    let load s =
        let w,h,lines = Images.nameToValue |> Seq.find (fst >> (=) s) |> snd
        scene.CreateBitmap(w,h,lines).CreateContent()
    let add item = scene.Contents.Add(item)
    let remove item = scene.Contents.Remove(item)
    let set (element:IContent) (x,y) = element.Move(x - 16 |> float, y + 16 |> float)
    let maze = "
##/------------7/------------7##
##|............|!............|##
##|./__7./___7.|!./___7./__7.|##
##|o|  !.|   !.|!.|   !.|  !o|##
##|.L--J.L---J.LJ.L---J.L--J.|##
##|..........................|##
##|./__7./7./______7./7./__7.|##
##|.L--J.|!.L--7/--J.|!.L--J.|##
##|......|!....|!....|!......|##
##L____7.|L__7 |! /__J!./____J##
#######!.|/--J LJ L--7!.|#######
#######!.|!          |!.|#######
#######!.|! /__==__7 |!.|#######
-------J.LJ |      ! LJ.L-------
########.   | **** !   .########
_______7./7 |      ! /7./_______
#######!.|! L______J |!.|#######
#######!.|!          |!.|#######
#######!.|! /______7 |!.|#######
##/----J.LJ L--7/--J LJ.L----7##
##|............|!............|##
##|./__7./___7.|!./___7./__7.|##
##|.L-7!.L---J.LJ.L---J.|/-J.|##
##|o..|!.......<>.......|!..o|##
##L_7.|!./7./______7./7.|!./_J##
##/-J.LJ.|!.L--7/--J.|!.LJ.L-7##
##|......|!....|!....|!......|##
##|./____JL__7.|!./__JL____7.|##
##|.L--------J.LJ.L--------J.|##
##|..........................|##
##L--------------------------J##"

    let tops = [
        0b00000000, 0b00000000, 0b00000000
        0b00000000, 0b00000000, 0b00000000
        0b00000000, 0b00000000, 0b00000000
        0b00000000, 0b00000000, 0b00000000
        0b00000011, 0b11111111, 0b11000000
        0b00000100, 0b00000000, 0b00100000
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000]
    let mids = [
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000]
    let bots = [
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000
        0b00000100, 0b00000000, 0b00100000
        0b00000011, 0b11111111, 0b11000000
        0b00000000, 0b00000000, 0b00000000
        0b00000000, 0b00000000, 0b00000000
        0b00000000, 0b00000000, 0b00000000
        0b00000000, 0b00000000, 0b00000000]
    let door' = [
        0b00000000
        0b00000000
        0b00000000
        0b00000000
        0b11111111
        0b00000000
        0b00000000
        0b00000000]
    let pill' = [
        0b00000000
        0b00000000
        0b00000000
        0b00011000
        0b00011000
        0b00000000
        0b00000000
        0b00000000]
    let power' = [
        0b00000000
        0b00011000
        0b00111100
        0b01111110
        0b01111110
        0b00111100
        0b00011000
        0b00000000]

    let fromTriple xs = 
        let convert = toBitmap Paint.Blue
        List.foldBack (fun (l,m,r) (ls,ms,rs) -> l::ls, m::ms, r::rs) xs ([],[],[])
        |> fun (l,m,r) -> convert l, convert m, convert r

    let tl, top, tr         = fromTriple tops
    let left, blank, right  = fromTriple mids
    let bl, bottom, br      = fromTriple bots
    let door = toBitmap Paint.White door'
    let pill = toBitmap Paint.Yellow pill'
    let power = toBitmap Paint.Yellow power'

    let toTile c =
        match c with
        | '=' -> door
        | '_' -> top
        | '|' -> left
        | '!' -> right
        | '/' -> tl
        | '7' -> tr
        | 'L' -> bl
        | 'J' -> br
        | '-' -> bottom
        | '.' -> pill
        | 'o' -> power
        | _ -> blank

    let isWall = function
        | '_' | '|' | '!' | '/' | '7' | 'L' | 'J' | '-' | '*' -> true
        | _ -> false

    let walls = scene.AddLayer()
    let lines = maze.Split('\n')
    let tiles =
        lines |> Array.mapi (fun y line ->
            line.ToCharArray() |> Array.mapi (fun x item ->
                let tile = toTile item |> toImage
                set tile (x * 8, y * 8)
                if isWall item 
                then walls.Contents.Add tile |> ignore
                else scene.Contents.Add tile |> ignore
                tile
            )
        )
    let route_home =
        let numbers =
            lines |> Array.map (fun line ->
                line.ToCharArray() 
                |> Array.map (fun c -> if isWall c then System.Int32.MaxValue else -1)
            )
        let canFill (x,y) =
            y>=0 && y < numbers.Length &&
            x>=0 && x < numbers.[y].Length &&
            numbers.[y].[x] = -1
        let fill n (x,y) = numbers.[y].[x] <- n
        flood canFill fill (16,16)
        numbers

    let tileAt x y =
        if x < 0 || x > 30 then ' '
        else lines.[y].[x]

    let isWallAt (x,y) = tileAt x y |> isWall
    let p = load "p"
    let pu = load "pu1",load "pu2"
    let pd = load "pd1",load "pd2"
    let pl = load "pl1",load "pl2"
    let pr = load "pr1",load "pr2"
    let lives = [for _ in 1..2 -> load "pl1"]
    do  lives |> List.iteri (fun i life -> add life; set life (16+16*i,32*8))

    let ghost_starts = 
        [
            "red", (16, 12), (1,0)
            "cyan", (14, 16), (1,0)
            "pink" , (16, 14), (0,-1)
            "orange" , (18, 16), (-1,0)
        ]
        |> List.map (fun (color,(x,y),v) -> 
            let blue = load "blue"
            let eyes = load "eyeu", load "eyed", load "eyel", load "eyer"
            let body = load (color+"u"), load (color+"d"), load (color+"l"), load (color+"r")
            let _,image,_,_ = body
            { Blue=blue; Eyes=eyes; Body=body; X=x*8-7; Y=y*8-3; V=v; Image=image; IsReturning=false }
        )
    let mutable ghosts = ghost_starts
    do  ghosts |> List.iter (fun ghost -> 
        add ghost.Image
        set ghost.Image (ghost.X,ghost.Y)
        )

    let pacman = ref p
    do  add !pacman
    let mutable powerCount = 0

    let x = ref (16 * 8 - 7)
    let y = ref (24 * 8 - 3)
    let v = ref (0,0)

    let noWall (x,y) (ex,ey) =
        let bx, by = int ((x+6+ex)/8), int ((y+6+ey)/8)
        isWallAt (bx,by) |> not

    let fillValue (x,y) (ex,ey) =
        let bx, by = int ((x+6+ex)/8), int ((y+6+ey)/8)
        route_home.[by].[bx]

    let verticallyAligned (x,y) = x % 8 = 5
    let horizontallyAligned (x,y) = y % 8 = 5

    let canGoUp (x,y) = verticallyAligned (x,y) && noWall (x,y) (0,-4)
    let canGoDown (x,y) = verticallyAligned (x,y) && noWall (x,y) (0,5)
    let canGoLeft (x,y) = horizontallyAligned (x,y) && noWall (x,y) (-4,0)
    let canGoRight (x,y) = horizontallyAligned (x,y) && noWall (x,y) (5,0)

    let fillUp (x,y) = fillValue (x,y) (0,-4)
    let fillDown (x,y) = fillValue (x,y) (0,5)
    let fillLeft (x,y) = fillValue (x,y) (-4,0)
    let fillRight (x,y) = fillValue (x,y) (5,0)

    let go (x,y) (dx,dy) =
        let x = 
            if   dx = -1 && x = 0 then 30 * 8
            elif dx = 1  && x = 30 *8 then 0
            else x
        x + dx, y + dy

    let newGhosts () =
        ghosts |> List.map (fun ghost ->
            let x, y = ghost.X, ghost.Y
            let dx, dy = ghost.V
            let u,d,l,r = ghost.Body
            let u',d',l',r' = ghost.Eyes
            let face, eye, canMove =
                match dx, dy with
                | 0,-1 -> u, u', canGoUp (x,y)
                | 0, 1 -> d, d', canGoDown (x,y)
                | -1,0 -> l, l', canGoLeft (x,y)
                | 1, 0 -> r, r', canGoRight (x,y)
                | _, _ -> invalidOp ""
            let isBackwards (a,b) =
                (a <> 0 && a = -dx) || (b <> 0 && b = -dy)
            let directions = 
                [
                if canGoUp (x,y) then yield (0,-1), fillUp (x,y)
                if canGoDown (x,y) then yield (0,1), fillDown (x,y)
                if canGoLeft (x,y) then yield (-1,0), fillLeft (x,y)
                if canGoRight(x,y) then yield (1,0), fillRight (x,y)
                ]
            let directions =
                if ghost.IsReturning then
                    directions
                    |> Seq.toArray
                    |> Array.sortBy snd
                    |> Seq.map fst
                    |> Seq.toArray                    
                    |> Array.sortBy isBackwards
                    |> Seq.toArray
                else
                    directions
                    |> Seq.map fst
                    |> Seq.toArray
                    |> Seq.unsort
                    |> Seq.toArray
                    |> Array.sortBy isBackwards
                    |> Seq.toArray
            let dx, dy = 
                let newDirection = 
                    directions |> Seq.head
                if not <| isBackwards newDirection 
                then newDirection
                else dx,dy
            let x,y = go (x,y) (dx,dy)
            let returning =
                if ghost.IsReturning && 0 = (fillValue (x,y) (0,0))
                then false
                else ghost.IsReturning
            remove ghost.Image
            let face = 
                if ghost.IsReturning then eye
                else
                    if powerCount > 0 then ghost.Blue else face
            add face
            set face (x,y)
            { ghost with X = x; Y = y; V = (dx,dy); Image = face; IsReturning = returning }
        )

    let updateGhosts () = ghosts <- newGhosts ()

    let updatePacman () =
        let directions = 
            [
            if input.IsUp && canGoUp (!x,!y) then yield (0,-1), pu
            if input.IsDown && canGoDown (!x,!y) then yield (0,1), pd
            if input.IsLeft && canGoLeft (!x,!y) then yield (-1,0), pl
            if input.IsRight && canGoRight (!x,!y) then yield (1,0), pr
            ] 
            |> List.sortBy (fun (v',_) -> v' = !v)
        let move ((dx,dy),(d1,d2)) =
            let x', y' = go (!x,!y) (dx,dy)
            x := x'; y := y'; v := (dx,dy)
            remove !pacman
            let d = if (!x/6 + !y/6) % 2 = 0 then d1 else d2
            add d
            pacman := d
        if directions.Length > 0 then
            directions.Head |> move
        let tx, ty = int ((!x+6)/8), int ((!y+6)/8)
        if tileAt tx ty = '.' then
            remove (tiles.[ty].[tx])
        if tileAt tx ty = 'o' then
            if scene.Contents.Contains (tiles.[ty].[tx]) then
                powerCount <- 500
            remove (tiles.[ty].[tx])
        set !pacman (!x,!y)

    let updatePower () =
        if powerCount > 0 then
            if (powerCount/5) % 2 = 1 then walls.SetOpacity(0.5)
            else walls.SetOpacity(1.0)
        else walls.SetOpacity(1.0)
        powerCount <- powerCount - 1

    let mutable flashCount = 0
    let updateFlash () =
        if flashCount > 0 then
            if ((flashCount / 5) % 2) = 1 then (!pacman).SetOpacity(0.5)
            else (!pacman).SetOpacity(1.0)
        else (!pacman).SetOpacity(1.0)
        flashCount <- flashCount - 1

    let touchGhosts () =
        let px, py = !x, !y
        ghosts |> List.filter (fun ghost ->
            let x,y = ghost.X, ghost.Y
            ((px >= x && px < x + 13) ||
             (x < px + 13 && x >= px)) &&
            ((py >= y && py < y + 13) ||
             (y < py + 13 && y >= py))
        )

    let update () =
        updatePacman ()
        updateGhosts ()
        let touching = touchGhosts()
        if touching.Length > 0 then
            if powerCount > 0 
            then ghosts <- ghosts |> List.mapi (fun i ghost ->
                if touching |> List.exists ((=) ghost)
                then  
                    let ghost' = ghost_starts.[i]
                    { ghost with IsReturning = true; }
                else ghost
            )
            else flashCount <- 20
        updateFlash ()
        updatePower ()

    member this.Update () = update ()
// [/snippet]

open System
open System.Windows
open System.Windows.Controls
open System.Windows.Input
open System.Windows.Media
open System.Windows.Media.Imaging

type Keys (control:Control) =
    let mutable keysDown = Set.empty  
    do  control.KeyDown.Add (fun e -> keysDown <- keysDown.Add e.Key)
    do  control.KeyUp.Add (fun e -> keysDown <- keysDown.Remove e.Key)
    do  control.LostFocus.Add (fun _ -> keysDown <- Set.empty)
    member keys.IsKeyDown key = keysDown.Contains key

[<AutoOpen>]
module Text =
    let createTextBlock () =
        let whiteBrush = SolidColorBrush Colors.White
        TextBlock(
            FontFamily=FontFamily("Courier New"),
            Foreground=whiteBrush, 
            FontSize=8.0,
            FontWeight=FontWeights.ExtraBold
            )

[<AutoOpen>]
module Rendering = 
    let run rate update =
        let rate = TimeSpan.FromSeconds(rate)
        let lastUpdate = ref DateTime.Now
        let residual = ref (TimeSpan())
        CompositionTarget.Rendering.Subscribe (fun _ -> 
            let now = DateTime.Now
            residual := !residual + (now - !lastUpdate)
            while !residual > rate do
                update(); residual := !residual - rate
            lastUpdate := now
        )
    
[<AutoOpen>]
module Imaging =
    let createBitmap (width:int,height:int) (lines:int[][]) =
        let bitmap = WriteableBitmap(width, height)
        let pixels = bitmap.Pixels
        lines |> Seq.iteri (fun y line ->
            for x = 0 to width-1 do 
                pixels.[x+y*width] <- line.[x]
        )
        bitmap
    let toBitmap (paint:Paint) (lines:int seq) =
        let lines = lines |> Seq.toArray
        let width, height = 8, lines.Length
        let white = paint.Color
        let black = 0x00000000
        let toColor = function true -> white | false -> black
        lines |> Array.mapi (fun y line ->
            Array.init width (fun x ->
                let bit = 1 <<< (width - 1 - x) 
                line &&& bit = bit |> toColor
            )
        )
        |> createBitmap (width,height)
    let toImage (bitmap:#BitmapSource) =
        let w, h = float bitmap.PixelWidth, float bitmap.PixelHeight  
        Image(Source=bitmap,Stretch=Stretch.Fill,Width=w,Height=h) 
    let loadBitmap path =
        #if SILVERLIGHT
        let stream = Application.GetResourceStream(new Uri(path, UriKind.Relative)).Stream
        let image = BitmapImage()
        image.SetSource(stream)
        #else
        let image = BitmapImage(Uri(path, UriKind.Relative))
        #endif
        image
    let loadImage path =
        path |> loadBitmap |> toImage

type Scene (canvas:Canvas) =
    let contents = Contents(canvas)
    interface IScene with
        member scene.AddLayer () = 
            let layer = Canvas()
            canvas.Children.Add(layer) |> ignore
            Layer(layer) :> ILayer
        member scene.LoadBitmap(path) = 
            let bitmap = loadBitmap path
            Bitmap(bitmap) :> IBitmap
        member scene.CreateBitmap(paint,lines) = 
            let bitmap = toBitmap paint lines
            Bitmap(bitmap) :> IBitmap
        member scene.CreateBitmap(width,height,lines) =
            let bitmap = createBitmap (width,height) lines
            Bitmap(bitmap) :> IBitmap
        member scene.Contents = contents :> IContents
and  Bitmap (source:BitmapSource) =
    interface IBitmap with
        member bitmap.CreateContent() =
            let w, h = float source.PixelWidth, float source.PixelHeight  
            let image = Image(Source=source,Stretch=Stretch.Fill,Width=w,Height=h)
            Content(image) :> IContent
and  Contents (canvas:Canvas) =
    inherit Content(canvas)
    let children = canvas.Children
    interface IContents with
        member contents.Add content = 
            children.Add(content.Control :?> UIElement) |> ignore
        member contents.Remove content = 
            children.Remove(content.Control :?> UIElement) |> ignore
        member contents.Contains content =
            children.Contains(content.Control :?> UIElement)
and  Layer (canvas:Canvas) =
    let content = Content(canvas) :> IContent
    let contents = Contents(canvas) :> IContents
    interface ILayer with
        member this.Move(x,y) = content.Move(x,y)
        member this.SetOpacity(value) = content.SetOpacity(value)
        member this.Control = canvas :> obj
        member this.Contents = contents
and  Content (element:UIElement) =
    interface IContent with
        member content.Move (x,y) =
            Canvas.SetLeft(element, x)
            Canvas.SetTop(element, y)
        member content.SetOpacity (value) = 
            element.Opacity <- value
        member content.Control = element :> obj
 
type GameControl () as control =
    inherit UserControl(Background=SolidColorBrush Colors.Black, IsTabStop=true)
#if SILVERLIGHT
    do control.RenderTransform <- ScaleTransform(ScaleX=1.5,ScaleY=1.5)
#endif
    let keys = Keys(control)
    let canvas = Canvas(Background = SolidColorBrush Colors.Black)
    do  canvas.Width <- 28.0 * 8.0; canvas.Height <- (32.0+4.0) * 8.0
    let clip = RectangleGeometry(Rect=Rect(Width=canvas.Width,Height=canvas.Height))
    do  canvas.Clip <- clip
    do  control.Width <- canvas.Width; control.Height <- canvas.Height
    do  control.Content <- canvas
    let scene = Scene(canvas) :> IScene
    let p1 = createTextBlock()
    do  p1.Text <- "1UP"
    let p1 = Content(p1) :> IContent
    do  p1.Move(2.0*8.0,0.0); scene.Contents.Add(p1)
    let s1 = createTextBlock()
    do  s1.Text <- "00"
    let s1 = Content(s1) :> IContent
    do  s1.Move(3.0*8.0,8.0); scene.Contents.Add(s1)
    let input = 
        let up, down, left, right = Key.Up, Key.Down, Key.Left, Key.Right
        let pressed key = keys.IsKeyDown key
        { new IInput with
            member this.IsUp = pressed up
            member this.IsDown = pressed down
            member this.IsLeft = pressed left
            member this.IsRight = pressed right
        }
    let game = Game(scene, input)
    
    do run (1.0/50.0) game.Update |> ignore

#if INTERACTIVE
open Microsoft.TryFSharp
App.Dispatch (fun() -> 
    App.Console.ClearCanvas()
    let canvas = App.Console.Canvas
    canvas.Background <- SolidColorBrush Colors.Black
    let control = GameControl()
    control |> canvas.Children.Add
    App.Console.CanvasPosition <- CanvasPosition.Right
    control.Focus() |> ignore
)
#else
type App() as this = 
    inherit Application()
    do  this.Startup.AddHandler(fun o e -> this.RootVisual <- GameControl())
#endif
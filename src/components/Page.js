import React from "react";
import PageToken from "./PageToken";

//define page component

const Page = () => {
    const contentToRender = {
        "pages": [
            {
            "content": "",
            "pageIndex": 0,
            "tokens": []
            },
            {
            "content": "One Saturday, when I was young, my father and I left the house early in the morning, when it was still blue-black outside. The grass left wet marks on our shoes. In the backyard, under stones, we dug up crawly worms and laid them in a can with lumps of damp dirt.",
            "pageIndex": 1,
            "tokens": [
                {
                  "position": [
                    0,
                    3
                  ],
                  "value": "one"
                },
                {
                  "position": [
                    4,
                    12
                  ],
                  "value": "saturday"
                },
                {
                  "position": [
                    14,
                    18
                  ],
                  "value": "when"
                },
                {
                  "position": [
                    19,
                    20
                  ],
                  "value": "i"
                },
                {
                  "position": [
                    21,
                    24
                  ],
                  "value": "was"
                },
                {
                  "position": [
                    25,
                    30
                  ],
                  "value": "young"
                },
                {
                  "position": [
                    32,
                    34
                  ],
                  "value": "my"
                },
                {
                  "position": [
                    35,
                    41
                  ],
                  "value": "father"
                },
                {
                  "position": [
                    42,
                    45
                  ],
                  "value": "and"
                },
                {
                  "position": [
                    46,
                    47
                  ],
                  "value": "i"
                },
                {
                  "position": [
                    48,
                    52
                  ],
                  "value": "left"
                },
                {
                  "position": [
                    53,
                    56
                  ],
                  "value": "the"
                },
                {
                  "position": [
                    57,
                    62
                  ],
                  "value": "house"
                },
                {
                  "position": [
                    63,
                    68
                  ],
                  "value": "early"
                },
                {
                  "position": [
                    69,
                    71
                  ],
                  "value": "in"
                },
                {
                  "position": [
                    72,
                    75
                  ],
                  "value": "the"
                },
                {
                  "position": [
                    76,
                    83
                  ],
                  "value": "morning"
                },
                {
                  "position": [
                    85,
                    89
                  ],
                  "value": "when"
                },
                {
                  "position": [
                    90,
                    92
                  ],
                  "value": "it"
                },
                {
                  "position": [
                    93,
                    96
                  ],
                  "value": "was"
                },
                {
                  "position": [
                    97,
                    102
                  ],
                  "value": "still"
                },
                {
                  "position": [
                    103,
                    107
                  ],
                  "value": "blue"
                },
                {
                  "position": [
                    108,
                    113
                  ],
                  "value": "black"
                },
                {
                  "position": [
                    114,
                    121
                  ],
                  "value": "outside"
                },
                {
                  "position": [
                    123,
                    126
                  ],
                  "value": "the"
                },
                {
                  "position": [
                    127,
                    132
                  ],
                  "value": "grass"
                },
                {
                  "position": [
                    133,
                    137
                  ],
                  "value": "left"
                },
                {
                  "position": [
                    138,
                    141
                  ],
                  "value": "wet"
                },
                {
                  "position": [
                    142,
                    147
                  ],
                  "value": "marks"
                },
                {
                  "position": [
                    148,
                    150
                  ],
                  "value": "on"
                },
                {
                  "position": [
                    151,
                    154
                  ],
                  "value": "our"
                },
                {
                  "position": [
                    155,
                    160
                  ],
                  "value": "shoes"
                },
                {
                  "position": [
                    162,
                    164
                  ],
                  "value": "in"
                },
                {
                  "position": [
                    165,
                    168
                  ],
                  "value": "the"
                },
                {
                  "position": [
                    169,
                    177
                  ],
                  "value": "backyard"
                },
                {
                  "position": [
                    179,
                    184
                  ],
                  "value": "under"
                },
                {
                  "position": [
                    185,
                    191
                  ],
                  "value": "stones"
                },
                {
                  "position": [
                    193,
                    195
                  ],
                  "value": "we"
                },
                {
                  "position": [
                    196,
                    199
                  ],
                  "value": "dug"
                },
                {
                  "position": [
                    200,
                    202
                  ],
                  "value": "up"
                },
                {
                  "position": [
                    203,
                    209
                  ],
                  "value": "crawly"
                },
                {
                  "position": [
                    210,
                    215
                  ],
                  "value": "worms"
                },
                {
                  "position": [
                    216,
                    219
                  ],
                  "value": "and"
                },
                {
                  "position": [
                    220,
                    224
                  ],
                  "value": "laid"
                },
                {
                  "position": [
                    225,
                    229
                  ],
                  "value": "them"
                },
                {
                  "position": [
                    230,
                    232
                  ],
                  "value": "in"
                },
                {
                  "position": [
                    233,
                    234
                  ],
                  "value": "a"
                },
                {
                  "position": [
                    235,
                    238
                  ],
                  "value": "can"
                },
                {
                  "position": [
                    239,
                    243
                  ],
                  "value": "with"
                },
                {
                  "position": [
                    244,
                    249
                  ],
                  "value": "lumps"
                },
                {
                  "position": [
                    250,
                    252
                  ],
                  "value": "of"
                },
                {
                  "position": [
                    253,
                    257
                  ],
                  "value": "damp"
                },
                {
                  "position": [
                    258,
                    262
                  ],
                  "value": "dirt"
                }
              ]
            }
        ]
    }

    return(
        <div>
            <PageToken book = {contentToRender} />
        </div>
    )
}

export default Page
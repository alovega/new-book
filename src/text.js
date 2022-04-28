import React from "react";
import ReactDOM  from "react-dom";z
import './index.css';

class Book extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {}
    }
    render(){
        return(
            <div className="page">  
                <div className="row">
                    <span>With</span> CSS, you have full control over the margins. There are properties for 
                    setting the margin for each side of an element (top, right, bottom, and left).
                </div>
                <div className="row">
                    With CSS, you have full control over the margins. There are properties for 
                    setting the margin for each side of an element (top, right, bottom, and left).
                </div> 
            </div>
        )
    }
}

ReactDOM.render(
    <Book />,
    document.getElementById('root')
);



const contentToRender = {
    "pages": [
      {
        "content": "Into the trunk we put two poles and the can of worms and a sack of sandwiches and a thermos of water. “We’re going on a journey,” my father said. “To a secret place. We’ll catch the air! We’ll catch the breeze!”",
        "pageIndex": 0,
        "tokens": [
          {
            "position": [
              0,
              4
            ],
            "value": "into"
          },
          {
            "position": [
              5,
              8
            ],
            "value": "the"
          },
          {
            "position": [
              9,
              14
            ],
            "value": "trunk"
          },
          {
            "position": [
              15,
              17
            ],
            "value": "we"
          },
          {
            "position": [
              18,
              21
            ],
            "value": "put"
          },
          {
            "position": [
              22,
              25
            ],
            "value": "two"
          },
          {
            "position": [
              26,
              31
            ],
            "value": "poles"
          },
          {
            "position": [
              32,
              35
            ],
            "value": "and"
          },
          {
            "position": [
              36,
              39
            ],
            "value": "the"
          },
          {
            "position": [
              40,
              43
            ],
            "value": "can"
          },
          {
            "position": [
              44,
              46
            ],
            "value": "of"
          },
          {
            "position": [
              47,
              52
            ],
            "value": "worms"
          },
          {
            "position": [
              53,
              56
            ],
            "value": "and"
          },
          {
            "position": [
              57,
              58
            ],
            "value": "a"
          },
          {
            "position": [
              59,
              63
            ],
            "value": "sack"
          },
          {
            "position": [
              64,
              66
            ],
            "value": "of"
          },
          {
            "position": [
              67,
              77
            ],
            "value": "sandwiches"
          },
          {
            "position": [
              78,
              81
            ],
            "value": "and"
          },
          {
            "position": [
              82,
              83
            ],
            "value": "a"
          },
          {
            "position": [
              84,
              91
            ],
            "value": "thermos"
          },
          {
            "position": [
              92,
              94
            ],
            "value": "of"
          },
          {
            "position": [
              95,
              100
            ],
            "value": "water"
          },
          {
            "position": [
              103,
              108
            ],
            "value": "we're"
          },
          {
            "position": [
              109,
              114
            ],
            "value": "going"
          },
          {
            "position": [
              115,
              117
            ],
            "value": "on"
          },
          {
            "position": [
              118,
              119
            ],
            "value": "a"
          },
          {
            "position": [
              120,
              127
            ],
            "value": "journey"
          },
          {
            "position": [
              130,
              132
            ],
            "value": "my"
          },
          {
            "position": [
              133,
              139
            ],
            "value": "father"
          },
          {
            "position": [
              140,
              144
            ],
            "value": "said"
          },
          {
            "position": [
              147,
              149
            ],
            "value": "to"
          },
          {
            "position": [
              150,
              151
            ],
            "value": "a"
          },
          {
            "position": [
              152,
              158
            ],
            "value": "secret"
          },
          {
            "position": [
              159,
              164
            ],
            "value": "place"
          },
          {
            "position": [
              166,
              171
            ],
            "value": "we'll"
          },
          {
            "position": [
              172,
              177
            ],
            "value": "catch"
          },
          {
            "position": [
              178,
              181
            ],
            "value": "the"
          },
          {
            "position": [
              182,
              185
            ],
            "value": "air"
          },
          {
            "position": [
              187,
              192
            ],
            "value": "we'll"
          },
          {
            "position": [
              193,
              198
            ],
            "value": "catch"
          },
          {
            "position": [
              199,
              202
            ],
            "value": "the"
          },
          {
            "position": [
              203,
              209
            ],
            "value": "breeze"
          }
        ]
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
        },
        {
          "content": "",
          "pageIndex": 2,
          "tokens": []
        },
        {
          "content": "",
          "pageIndex": 3,
          "tokens": []
        },
        {
          "content": "",
          "pageIndex": 4,
          "tokens": []
        },
        {
          "content": "",
          "pageIndex": 5,
          "tokens": []
        },
        
    ]
  }
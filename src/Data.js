const Data =
{
    "pageVariants": {
        "initial": {
            "opacity": 0,
            "x": "100vh",
            "scale": 0.8,
        },
        "in": {
            "opacity": 1,
            "x": 0,
            "scale": 1
        },
        "out": {
            "opacity": 0,
            "y": "-100vh",
            "scale": 1.2
        }
    },
    "pageTransition": {
        "type": "spring",
        "ease": "anticipate",
        "duration": 1
    },
    "timeline": [
        {
            "time": 20210301,
            "title": "동네가게 오픈 1",
            "desc": "오픈했습니다 1"
        },
        {
            "time": 20210303,
            "title": "동네가게 오픈 3",
            "desc": "오픈했습니다 3"
        },
        {
            "time": 20210302,
            "title": "동네가게 오픈 2",
            "desc": "오픈했습니다 2"
        }
    ]
}

export default Data;
// 年级数据
const gradeData = {
    "1": {
        "name": "一年级",
        "dialogues": [
            {
                "id": "1_1",
                "category": "问候",
                "title": "问候对话1",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "这是1年级的问候对话示例文本1。"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "这是1年级的问候对话示例文本2。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是1年级的问候对话示例文本3。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是1年级的问候对话示例文本4。"
                    }
                ]
            },
            {
                "id": "1_2",
                "category": "动物",
                "title": "动物对话2",
                "conversation": [
                    {
                        "speaker": "Lucy",
                        "text": "这是1年级的动物对话示例文本1。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是1年级的动物对话示例文本2。"
                    }
                ]
            },
            {
                "id": "1_3",
                "category": "爱好",
                "title": "爱好对话3",
                "conversation": [
                    {
                        "speaker": "Amy",
                        "text": "这是1年级的爱好对话示例文本1。"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "这是1年级的爱好对话示例文本2。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是1年级的爱好对话示例文本3。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是1年级的爱好对话示例文本4。"
                    }
                ]
            },
            {
                "id": "1_4",
                "category": "爱好",
                "title": "爱好对话4",
                "conversation": [
                    {
                        "speaker": "Lucy",
                        "text": "这是1年级的爱好对话示例文本1。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是1年级的爱好对话示例文本2。"
                    },
                    {
                        "speaker": "Tom",
                        "text": "这是1年级的爱好对话示例文本3。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是1年级的爱好对话示例文本4。"
                    }
                ]
            },
            {
                "id": "1_5",
                "category": "动物",
                "title": "动物对话5",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "这是1年级的动物对话示例文本1。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是1年级的动物对话示例文本2。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是1年级的动物对话示例文本3。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是1年级的动物对话示例文本4。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是1年级的动物对话示例文本5。"
                    }
                ]
            }
        ],
        "words": [
            {
                "id": "1_w1",
                "category": "动物",
                "word": "word1",
                "meaning": "单词1",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w2",
                "category": "学校生活",
                "word": "word2",
                "meaning": "单词2",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w3",
                "category": "问候",
                "word": "word3",
                "meaning": "单词3",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w4",
                "category": "问候",
                "word": "word4",
                "meaning": "单词4",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w5",
                "category": "学校生活",
                "word": "word5",
                "meaning": "单词5",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w6",
                "category": "颜色",
                "word": "word6",
                "meaning": "单词6",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w7",
                "category": "学校生活",
                "word": "word7",
                "meaning": "单词7",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w8",
                "category": "食物",
                "word": "word8",
                "meaning": "单词8",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w9",
                "category": "动物",
                "word": "word9",
                "meaning": "单词9",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w10",
                "category": "动物",
                "word": "word10",
                "meaning": "单词10",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w11",
                "category": "问候",
                "word": "word11",
                "meaning": "单词11",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            }
        ]
    },
    "2": {
        "name": "二年级",
        "dialogues": [
            {
                "id": "2_1",
                "category": "颜色",
                "title": "颜色对话1",
                "conversation": [
                    {
                        "speaker": "Mike",
                        "text": "这是2年级的颜色对话示例文本1。"
                    },
                    {
                        "speaker": "Amy",
                        "text": "这是2年级的颜色对话示例文本2。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是2年级的颜色对话示例文本3。"
                    },
                    {
                        "speaker": "Tom",
                        "text": "这是2年级的颜色对话示例文本4。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是2年级的颜色对话示例文本5。"
                    }
                ]
            },
            {
                "id": "2_2",
                "category": "食物",
                "title": "食物对话2",
                "conversation": [
                    {
                        "speaker": "Student",
                        "text": "这是2年级的食物对话示例文本1。"
                    },
                    {
                        "speaker": "Amy",
                        "text": "这是2年级的食物对话示例文本2。"
                    },
                    {
                        "speaker": "Tom",
                        "text": "这是2年级的食物对话示例文本3。"
                    }
                ]
            },
            {
                "id": "2_3",
                "category": "爱好",
                "title": "爱好对话3",
                "conversation": [
                    {
                        "speaker": "Tom",
                        "text": "这是2年级的爱好对话示例文本1。"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "这是2年级的爱好对话示例文本2。"
                    }
                ]
            },
            {
                "id": "2_4",
                "category": "爱好",
                "title": "爱好对话4",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "这是2年级的爱好对话示例文本1。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是2年级的爱好对话示例文本2。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是2年级的爱好对话示例文本3。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是2年级的爱好对话示例文本4。"
                    }
                ]
            },
            {
                "id": "2_5",
                "category": "问候",
                "title": "问候对话5",
                "conversation": [
                    {
                        "speaker": "Mike",
                        "text": "这是2年级的问候对话示例文本1。"
                    },
                    {
                        "speaker": "Amy",
                        "text": "这是2年级的问候对话示例文本2。"
                    }
                ]
            },
            {
                "id": "2_6",
                "category": "颜色",
                "title": "颜色对话6",
                "conversation": [
                    {
                        "speaker": "Tom",
                        "text": "这是2年级的颜色对话示例文本1。"
                    },
                    {
                        "speaker": "Tom",
                        "text": "这是2年级的颜色对话示例文本2。"
                    },
                    {
                        "speaker": "Tom",
                        "text": "这是2年级的颜色对话示例文本3。"
                    }
                ]
            },
            {
                "id": "2_7",
                "category": "动物",
                "title": "动物对话7",
                "conversation": [
                    {
                        "speaker": "Student",
                        "text": "这是2年级的动物对话示例文本1。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是2年级的动物对话示例文本2。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是2年级的动物对话示例文本3。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是2年级的动物对话示例文本4。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是2年级的动物对话示例文本5。"
                    }
                ]
            }
        ],
        "words": [
            {
                "id": "2_w1",
                "category": "动物",
                "word": "word1",
                "meaning": "单词1",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w2",
                "category": "家庭",
                "word": "word2",
                "meaning": "单词2",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w3",
                "category": "爱好",
                "word": "word3",
                "meaning": "单词3",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w4",
                "category": "动物",
                "word": "word4",
                "meaning": "单词4",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w5",
                "category": "学校生活",
                "word": "word5",
                "meaning": "单词5",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w6",
                "category": "问候",
                "word": "word6",
                "meaning": "单词6",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w7",
                "category": "颜色",
                "word": "word7",
                "meaning": "单词7",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w8",
                "category": "学校生活",
                "word": "word8",
                "meaning": "单词8",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w9",
                "category": "食物",
                "word": "word9",
                "meaning": "单词9",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w10",
                "category": "家庭",
                "word": "word10",
                "meaning": "单词10",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w11",
                "category": "爱好",
                "word": "word11",
                "meaning": "单词11",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w12",
                "category": "数字",
                "word": "word12",
                "meaning": "单词12",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w13",
                "category": "数字",
                "word": "word13",
                "meaning": "单词13",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w14",
                "category": "家庭",
                "word": "word14",
                "meaning": "单词14",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w15",
                "category": "爱好",
                "word": "word15",
                "meaning": "单词15",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            }
        ]
    },
    "3": {
        "name": "三年级",
        "dialogues": [
            {
                "id": "3_1",
                "category": "问候",
                "title": "问候对话1",
                "conversation": [
                    {
                        "speaker": "Mike",
                        "text": "这是3年级的问候对话示例文本1。"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "这是3年级的问候对话示例文本2。"
                    },
                    {
                        "speaker": "Tom",
                        "text": "这是3年级的问候对话示例文本3。"
                    },
                    {
                        "speaker": "Tom",
                        "text": "这是3年级的问候对话示例文本4。"
                    }
                ]
            },
            {
                "id": "3_2",
                "category": "食物",
                "title": "食物对话2",
                "conversation": [
                    {
                        "speaker": "Mike",
                        "text": "这是3年级的食物对话示例文本1。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是3年级的食物对话示例文本2。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是3年级的食物对话示例文本3。"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "这是3年级的食物对话示例文本4。"
                    },
                    {
                        "speaker": "Amy",
                        "text": "这是3年级的食物对话示例文本5。"
                    }
                ]
            },
            {
                "id": "3_3",
                "category": "数字",
                "title": "数字对话3",
                "conversation": [
                    {
                        "speaker": "Mike",
                        "text": "这是3年级的数字对话示例文本1。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是3年级的数字对话示例文本2。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是3年级的数字对话示例文本3。"
                    }
                ]
            },
            {
                "id": "3_4",
                "category": "爱好",
                "title": "爱好对话4",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "这是3年级的爱好对话示例文本1。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是3年级的爱好对话示例文本2。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是3年级的爱好对话示例文本3。"
                    },
                    {
                        "speaker": "Amy",
                        "text": "这是3年级的爱好对话示例文本4。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是3年级的爱好对话示例文本5。"
                    }
                ]
            },
            {
                "id": "3_5",
                "category": "动物",
                "title": "动物对话5",
                "conversation": [
                    {
                        "speaker": "Tom",
                        "text": "这是3年级的动物对话示例文本1。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是3年级的动物对话示例文本2。"
                    }
                ]
            },
            {
                "id": "3_6",
                "category": "爱好",
                "title": "爱好对话6",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "这是3年级的爱好对话示例文本1。"
                    },
                    {
                        "speaker": "Tom",
                        "text": "这是3年级的爱好对话示例文本2。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是3年级的爱好对话示例文本3。"
                    }
                ]
            },
            {
                "id": "3_7",
                "category": "动物",
                "title": "动物对话7",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "这是3年级的动物对话示例文本1。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是3年级的动物对话示例文本2。"
                    },
                    {
                        "speaker": "Amy",
                        "text": "这是3年级的动物对话示例文本3。"
                    }
                ]
            },
            {
                "id": "3_8",
                "category": "食物",
                "title": "食物对话8",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "这是3年级的食物对话示例文本1。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是3年级的食物对话示例文本2。"
                    }
                ]
            }
        ],
        "words": [
            {
                "id": "3_w1",
                "category": "数字",
                "word": "word1",
                "meaning": "单词1",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w2",
                "category": "颜色",
                "word": "word2",
                "meaning": "单词2",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w3",
                "category": "颜色",
                "word": "word3",
                "meaning": "单词3",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w4",
                "category": "动物",
                "word": "word4",
                "meaning": "单词4",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w5",
                "category": "动物",
                "word": "word5",
                "meaning": "单词5",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w6",
                "category": "食物",
                "word": "word6",
                "meaning": "单词6",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w7",
                "category": "问候",
                "word": "word7",
                "meaning": "单词7",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w8",
                "category": "动物",
                "word": "word8",
                "meaning": "单词8",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w9",
                "category": "数字",
                "word": "word9",
                "meaning": "单词9",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w10",
                "category": "问候",
                "word": "word10",
                "meaning": "单词10",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w11",
                "category": "家庭",
                "word": "word11",
                "meaning": "单词11",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w12",
                "category": "学校生活",
                "word": "word12",
                "meaning": "单词12",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w13",
                "category": "动物",
                "word": "word13",
                "meaning": "单词13",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            }
        ]
    },
    "4": {
        "name": "四年级",
        "dialogues": [
            {
                "id": "4_1",
                "category": "学校生活",
                "title": "学校生活对话1",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "这是4年级的学校生活对话示例文本1。"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "这是4年级的学校生活对话示例文本2。"
                    }
                ]
            },
            {
                "id": "4_2",
                "category": "问候",
                "title": "问候对话2",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "这是4年级的问候对话示例文本1。"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "这是4年级的问候对话示例文本2。"
                    }
                ]
            },
            {
                "id": "4_3",
                "category": "家庭",
                "title": "家庭对话3",
                "conversation": [
                    {
                        "speaker": "Student",
                        "text": "这是4年级的家庭对话示例文本1。"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "这是4年级的家庭对话示例文本2。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是4年级的家庭对话示例文本3。"
                    },
                    {
                        "speaker": "Amy",
                        "text": "这是4年级的家庭对话示例文本4。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是4年级的家庭对话示例文本5。"
                    }
                ]
            },
            {
                "id": "4_4",
                "category": "食物",
                "title": "食物对话4",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "这是4年级的食物对话示例文本1。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是4年级的食物对话示例文本2。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是4年级的食物对话示例文本3。"
                    }
                ]
            },
            {
                "id": "4_5",
                "category": "家庭",
                "title": "家庭对话5",
                "conversation": [
                    {
                        "speaker": "Tom",
                        "text": "这是4年级的家庭对话示例文本1。"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "这是4年级的家庭对话示例文本2。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是4年级的家庭对话示例文本3。"
                    },
                    {
                        "speaker": "Amy",
                        "text": "这是4年级的家庭对话示例文本4。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是4年级的家庭对话示例文本5。"
                    }
                ]
            },
            {
                "id": "4_6",
                "category": "数字",
                "title": "数字对话6",
                "conversation": [
                    {
                        "speaker": "Lucy",
                        "text": "这是4年级的数字对话示例文本1。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是4年级的数字对话示例文本2。"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "这是4年级的数字对话示例文本3。"
                    },
                    {
                        "speaker": "Amy",
                        "text": "这是4年级的数字对话示例文本4。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是4年级的数字对话示例文本5。"
                    }
                ]
            },
            {
                "id": "4_7",
                "category": "问候",
                "title": "问候对话7",
                "conversation": [
                    {
                        "speaker": "Student",
                        "text": "这是4年级的问候对话示例文本1。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是4年级的问候对话示例文本2。"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "这是4年级的问候对话示例文本3。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是4年级的问候对话示例文本4。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是4年级的问候对话示例文本5。"
                    }
                ]
            },
            {
                "id": "4_8",
                "category": "食物",
                "title": "食物对话8",
                "conversation": [
                    {
                        "speaker": "Tom",
                        "text": "这是4年级的食物对话示例文本1。"
                    },
                    {
                        "speaker": "Amy",
                        "text": "这是4年级的食物对话示例文本2。"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "这是4年级的食物对话示例文本3。"
                    }
                ]
            }
        ],
        "words": [
            {
                "id": "4_w1",
                "category": "爱好",
                "word": "word1",
                "meaning": "单词1",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "4_w2",
                "category": "问候",
                "word": "word2",
                "meaning": "单词2",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "4_w3",
                "category": "学校生活",
                "word": "word3",
                "meaning": "单词3",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "4_w4",
                "category": "动物",
                "word": "word4",
                "meaning": "单词4",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "4_w5",
                "category": "动物",
                "word": "word5",
                "meaning": "单词5",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "4_w6",
                "category": "食物",
                "word": "word6",
                "meaning": "单词6",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "4_w7",
                "category": "数字",
                "word": "word7",
                "meaning": "单词7",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "4_w8",
                "category": "颜色",
                "word": "word8",
                "meaning": "单词8",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "4_w9",
                "category": "问候",
                "word": "word9",
                "meaning": "单词9",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "4_w10",
                "category": "家庭",
                "word": "word10",
                "meaning": "单词10",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "4_w11",
                "category": "家庭",
                "word": "word11",
                "meaning": "单词11",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "4_w12",
                "category": "动物",
                "word": "word12",
                "meaning": "单词12",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "4_w13",
                "category": "颜色",
                "word": "word13",
                "meaning": "单词13",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "4_w14",
                "category": "数字",
                "word": "word14",
                "meaning": "单词14",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "4_w15",
                "category": "爱好",
                "word": "word15",
                "meaning": "单词15",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            }
        ]
    },
    "5": {
        "name": "五年级",
        "dialogues": [
            {
                "id": "5_1",
                "category": "食物",
                "title": "食物对话1",
                "conversation": [
                    {
                        "speaker": "Mike",
                        "text": "这是5年级的食物对话示例文本1。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是5年级的食物对话示例文本2。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是5年级的食物对话示例文本3。"
                    },
                    {
                        "speaker": "Amy",
                        "text": "这是5年级的食物对话示例文本4。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是5年级的食物对话示例文本5。"
                    }
                ]
            },
            {
                "id": "5_2",
                "category": "数字",
                "title": "数字对话2",
                "conversation": [
                    {
                        "speaker": "Tom",
                        "text": "这是5年级的数字对话示例文本1。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是5年级的数字对话示例文本2。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是5年级的数字对话示例文本3。"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "这是5年级的数字对话示例文本4。"
                    }
                ]
            },
            {
                "id": "5_3",
                "category": "动物",
                "title": "动物对话3",
                "conversation": [
                    {
                        "speaker": "Tom",
                        "text": "这是5年级的动物对话示例文本1。"
                    },
                    {
                        "speaker": "Tom",
                        "text": "这是5年级的动物对话示例文本2。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是5年级的动物对话示例文本3。"
                    },
                    {
                        "speaker": "Amy",
                        "text": "这是5年级的动物对话示例文本4。"
                    }
                ]
            },
            {
                "id": "5_4",
                "category": "爱好",
                "title": "爱好对话4",
                "conversation": [
                    {
                        "speaker": "Mike",
                        "text": "这是5年级的爱好对话示例文本1。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是5年级的爱好对话示例文本2。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是5年级的爱好对话示例文本3。"
                    },
                    {
                        "speaker": "Tom",
                        "text": "这是5年级的爱好对话示例文本4。"
                    }
                ]
            },
            {
                "id": "5_5",
                "category": "动物",
                "title": "动物对话5",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "这是5年级的动物对话示例文本1。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是5年级的动物对话示例文本2。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是5年级的动物对话示例文本3。"
                    },
                    {
                        "speaker": "Amy",
                        "text": "这是5年级的动物对话示例文本4。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是5年级的动物对话示例文本5。"
                    }
                ]
            }
        ],
        "words": [
            {
                "id": "5_w1",
                "category": "数字",
                "word": "word1",
                "meaning": "单词1",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "5_w2",
                "category": "食物",
                "word": "word2",
                "meaning": "单词2",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "5_w3",
                "category": "数字",
                "word": "word3",
                "meaning": "单词3",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "5_w4",
                "category": "家庭",
                "word": "word4",
                "meaning": "单词4",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "5_w5",
                "category": "学校生活",
                "word": "word5",
                "meaning": "单词5",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "5_w6",
                "category": "食物",
                "word": "word6",
                "meaning": "单词6",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "5_w7",
                "category": "爱好",
                "word": "word7",
                "meaning": "单词7",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "5_w8",
                "category": "食物",
                "word": "word8",
                "meaning": "单词8",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "5_w9",
                "category": "家庭",
                "word": "word9",
                "meaning": "单词9",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "5_w10",
                "category": "数字",
                "word": "word10",
                "meaning": "单词10",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "5_w11",
                "category": "问候",
                "word": "word11",
                "meaning": "单词11",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            }
        ]
    },
    "6": {
        "name": "六年级",
        "dialogues": [
            {
                "id": "6_1",
                "category": "家庭",
                "title": "家庭对话1",
                "conversation": [
                    {
                        "speaker": "Lucy",
                        "text": "这是6年级的家庭对话示例文本1。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是6年级的家庭对话示例文本2。"
                    }
                ]
            },
            {
                "id": "6_2",
                "category": "颜色",
                "title": "颜色对话2",
                "conversation": [
                    {
                        "speaker": "Student",
                        "text": "这是6年级的颜色对话示例文本1。"
                    },
                    {
                        "speaker": "Tom",
                        "text": "这是6年级的颜色对话示例文本2。"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "这是6年级的颜色对话示例文本3。"
                    }
                ]
            },
            {
                "id": "6_3",
                "category": "食物",
                "title": "食物对话3",
                "conversation": [
                    {
                        "speaker": "Amy",
                        "text": "这是6年级的食物对话示例文本1。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是6年级的食物对话示例文本2。"
                    },
                    {
                        "speaker": "Amy",
                        "text": "这是6年级的食物对话示例文本3。"
                    }
                ]
            },
            {
                "id": "6_4",
                "category": "数字",
                "title": "数字对话4",
                "conversation": [
                    {
                        "speaker": "Mike",
                        "text": "这是6年级的数字对话示例文本1。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是6年级的数字对话示例文本2。"
                    }
                ]
            },
            {
                "id": "6_5",
                "category": "问候",
                "title": "问候对话5",
                "conversation": [
                    {
                        "speaker": "Amy",
                        "text": "这是6年级的问候对话示例文本1。"
                    },
                    {
                        "speaker": "Mike",
                        "text": "这是6年级的问候对话示例文本2。"
                    }
                ]
            },
            {
                "id": "6_6",
                "category": "数字",
                "title": "数字对话6",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "这是6年级的数字对话示例文本1。"
                    },
                    {
                        "speaker": "Amy",
                        "text": "这是6年级的数字对话示例文本2。"
                    },
                    {
                        "speaker": "Student",
                        "text": "这是6年级的数字对话示例文本3。"
                    }
                ]
            }
        ],
        "words": [
            {
                "id": "6_w1",
                "category": "问候",
                "word": "word1",
                "meaning": "单词1",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "6_w2",
                "category": "问候",
                "word": "word2",
                "meaning": "单词2",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "6_w3",
                "category": "数字",
                "word": "word3",
                "meaning": "单词3",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "6_w4",
                "category": "颜色",
                "word": "word4",
                "meaning": "单词4",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "6_w5",
                "category": "学校生活",
                "word": "word5",
                "meaning": "单词5",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "6_w6",
                "category": "学校生活",
                "word": "word6",
                "meaning": "单词6",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "6_w7",
                "category": "家庭",
                "word": "word7",
                "meaning": "单词7",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "6_w8",
                "category": "颜色",
                "word": "word8",
                "meaning": "单词8",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "6_w9",
                "category": "动物",
                "word": "word9",
                "meaning": "单词9",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "6_w10",
                "category": "颜色",
                "word": "word10",
                "meaning": "单词10",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "6_w11",
                "category": "家庭",
                "word": "word11",
                "meaning": "单词11",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+"
            }
        ]
    }
};

// 年级数据
const gradeData = {
    "1": {
        "name": "一年级",
        "dialogues": [
            {
                "id": "1_1",
                "category": "问候",
                "title": "Hello",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "Hello, children!"
                    },
                    {
                        "speaker": "Students",
                        "text": "Hello, teacher!"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "How are you today?"
                    },
                    {
                        "speaker": "Students",
                        "text": "I'm fine, thank you!"
                    }
                ]
            },
            {
                "id": "1_2",
                "category": "问候",
                "title": "Good Morning",
                "conversation": [
                    {
                        "speaker": "Mike",
                        "text": "Good morning, Lucy."
                    },
                    {
                        "speaker": "Lucy",
                        "text": "Good morning, Mike."
                    },
                    {
                        "speaker": "Mike",
                        "text": "How are you?"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "I'm fine, thank you. And you?"
                    },
                    {
                        "speaker": "Mike",
                        "text": "I'm fine too."
                    }
                ]
            },
            {
                "id": "1_3",
                "category": "自我介绍",
                "title": "My Name",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "What's your name?"
                    },
                    {
                        "speaker": "Tom",
                        "text": "My name is Tom."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "Nice to meet you, Tom."
                    },
                    {
                        "speaker": "Tom",
                        "text": "Nice to meet you too, teacher."
                    }
                ]
            },
            {
                "id": "1_4",
                "category": "数字",
                "title": "Counting",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "Let's count together. One..."
                    },
                    {
                        "speaker": "Students",
                        "text": "One, two, three, four, five."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "Very good! Let's continue. Six..."
                    },
                    {
                        "speaker": "Students",
                        "text": "Six, seven, eight, nine, ten!"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "Excellent!"
                    }
                ]
            },
            {
                "id": "1_5",
                "category": "颜色",
                "title": "Colors",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "What color is this?"
                    },
                    {
                        "speaker": "Amy",
                        "text": "It's red."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "Good! And what color is that?"
                    },
                    {
                        "speaker": "Tom",
                        "text": "It's blue."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "Very good!"
                    }
                ]
            },
            {
                "id": "1_6",
                "category": "课堂用语",
                "title": "Classroom Language",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "Open your book, please."
                    },
                    {
                        "speaker": "Students",
                        "text": "(Students open their books)"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "Now, close your book."
                    },
                    {
                        "speaker": "Students",
                        "text": "(Students close their books)"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "Very good!"
                    }
                ]
            },
            {
                "id": "1_7",
                "category": "动物",
                "title": "Animals",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "What's this?"
                    },
                    {
                        "speaker": "Students",
                        "text": "It's a cat."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "Yes, it's a cat. What's that?"
                    },
                    {
                        "speaker": "Students",
                        "text": "It's a dog."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "Very good!"
                    }
                ]
            },
            {
                "id": "1_8",
                "category": "玩具",
                "title": "Toys",
                "conversation": [
                    {
                        "speaker": "Lucy",
                        "text": "Look at my toy!"
                    },
                    {
                        "speaker": "Mike",
                        "text": "What is it?"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "It's a teddy bear."
                    },
                    {
                        "speaker": "Mike",
                        "text": "It's nice!"
                    }
                ]
            }
        ],
        "words": [
            {
                "id": "1_w1",
                "category": "问候",
                "word": "hello",
                "meaning": "你好",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5RUI1IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5oZWxsbzwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5L2g5aW9PC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "1_w2",
                "category": "问候",
                "word": "hi",
                "meaning": "嗨",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY2QjZCIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5oaTwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5ZiTPC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "1_w3",
                "category": "问候",
                "word": "goodbye",
                "meaning": "再见",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjOUMyN0IwIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5nb29kYnllPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lho3op4E8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "1_w4",
                "category": "问候",
                "word": "good morning",
                "meaning": "早上好",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkZDMTA3IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5nb29kIG1vcm5pbmc8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuaXqeS4iuWlvTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w5",
                "category": "自我介绍",
                "word": "name",
                "meaning": "名字",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNEE5MEUyIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5uYW1lPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lkI3lrZc8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "1_w6",
                "category": "数字",
                "word": "one",
                "meaning": "一",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY2QjZCIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5vbmU8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuS4gDwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w7",
                "category": "数字",
                "word": "two",
                "meaning": "二",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNDhDQUU0IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50d288L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuS6jDwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w8",
                "category": "数字",
                "word": "three",
                "meaning": "三",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5ODAwIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50aHJlZTwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5LiJPC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "1_w9",
                "category": "数字",
                "word": "four",
                "meaning": "四",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNEE5MEUyIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5mb3VyPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lm5s8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "1_w10",
                "category": "数字",
                "word": "five",
                "meaning": "五",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjOUMxN0ZGIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5maXZlPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7kupQ8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "1_w11",
                "category": "颜色",
                "word": "red",
                "meaning": "红色",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkYwMDAwIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5yZWQ8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPue6ouiJsjwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w12",
                "category": "颜色",
                "word": "blue",
                "meaning": "蓝色",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDAwMEZGIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ibHVlPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7ok53oibI8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "1_w13",
                "category": "颜色",
                "word": "yellow",
                "meaning": "黄色",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkZGRjAwIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMzMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj55ZWxsb3c8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMzMzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPum7hOiJsjwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w14",
                "category": "动物",
                "word": "cat",
                "meaning": "猫",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5NTAwIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5jYXQ8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPueahzwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w15",
                "category": "动物",
                "word": "dog",
                "meaning": "狗",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjOEVCNENCIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5kb2c8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPueglDwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "1_w16",
                "category": "玩具",
                "word": "teddy bear",
                "meaning": "泰迪熊",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjQTU3OTM5IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50ZWRkeSBiZWFyPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7ms4nov5/nhrE8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "1_w17",
                "category": "课堂用语",
                "word": "book",
                "meaning": "书",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNDhDQUU0IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ib29rPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7kuaY8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "1_w18",
                "category": "课堂用语",
                "word": "open",
                "meaning": "打开",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY2QjZCIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5vcGVuPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7miZPlvII8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "1_w19",
                "category": "课堂用语",
                "word": "close",
                "meaning": "关闭",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjOUMxN0ZGIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5jbG9zZTwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5YWz6Zet5oiW5YWzPC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "1_w20",
                "category": "自我介绍",
                "word": "I",
                "meaning": "我",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5RUI1IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7miJE8L3RleHQ+Cjwvc3ZnPg=="
            }
        ]
    },
    "2": {
        "name": "二年级",
        "dialogues": [
            {
                "id": "2_1",
                "category": "学校生活",
                "title": "In the Classroom",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "What's this in English?"
                    },
                    {
                        "speaker": "Student",
                        "text": "It's a pencil."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "Very good! And what's that?"
                    },
                    {
                        "speaker": "Student",
                        "text": "That's a book."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "Excellent!"
                    }
                ]
            },
            {
                "id": "2_2",
                "category": "学校生活",
                "title": "Borrowing Things",
                "conversation": [
                    {
                        "speaker": "Tom",
                        "text": "May I borrow your pencil, please?"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "Sure. Here you are."
                    },
                    {
                        "speaker": "Tom",
                        "text": "Thank you very much."
                    },
                    {
                        "speaker": "Lucy",
                        "text": "You're welcome."
                    }
                ]
            },
            {
                "id": "2_3",
                "category": "学校生活",
                "title": "In the Library",
                "conversation": [
                    {
                        "speaker": "Librarian",
                        "text": "Hello. Can I help you?"
                    },
                    {
                        "speaker": "Student",
                        "text": "Yes, please. I want to borrow a book."
                    },
                    {
                        "speaker": "Librarian",
                        "text": "What kind of book do you like?"
                    },
                    {
                        "speaker": "Student",
                        "text": "I like story books."
                    },
                    {
                        "speaker": "Librarian",
                        "text": "Here are some story books. You can choose one."
                    }
                ]
            },
            {
                "id": "2_4",
                "category": "颜色",
                "title": "My Favorite Color",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "What color is this?"
                    },
                    {
                        "speaker": "Student",
                        "text": "It's red."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "What's your favorite color?"
                    },
                    {
                        "speaker": "Student",
                        "text": "My favorite color is blue."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "Very good!"
                    }
                ]
            },
            {
                "id": "2_5",
                "category": "购物",
                "title": "Buying Stationery",
                "conversation": [
                    {
                        "speaker": "Student",
                        "text": "How much is this ruler?"
                    },
                    {
                        "speaker": "Shopkeeper",
                        "text": "It's 5 yuan."
                    },
                    {
                        "speaker": "Student",
                        "text": "And how much is this pencil case?"
                    },
                    {
                        "speaker": "Shopkeeper",
                        "text": "It's 15 yuan."
                    },
                    {
                        "speaker": "Student",
                        "text": "I'll take the ruler, please."
                    }
                ]
            },
            {
                "id": "2_6",
                "category": "食物",
                "title": "Food I Like",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "Do you like apples?"
                    },
                    {
                        "speaker": "Mary",
                        "text": "Yes, I do. I like apples."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "Do you like bananas, Tom?"
                    },
                    {
                        "speaker": "Tom",
                        "text": "No, I don't. I don't like bananas."
                    }
                ]
            },
            {
                "id": "2_7",
                "category": "动物",
                "title": "At the Zoo",
                "conversation": [
                    {
                        "speaker": "Father",
                        "text": "Look! What's that?"
                    },
                    {
                        "speaker": "Child",
                        "text": "It's a lion!"
                    },
                    {
                        "speaker": "Father",
                        "text": "Is it big or small?"
                    },
                    {
                        "speaker": "Child",
                        "text": "It's big and strong!"
                    }
                ]
            },
            {
                "id": "2_8",
                "category": "时间",
                "title": "What Time Is It?",
                "conversation": [
                    {
                        "speaker": "Student",
                        "text": "Excuse me, what time is it?"
                    },
                    {
                        "speaker": "Teacher",
                        "text": "It's 3 o'clock."
                    },
                    {
                        "speaker": "Student",
                        "text": "Thank you."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "You're welcome."
                    }
                ]
            },
            {
                "id": "2_9",
                "category": "天气",
                "title": "Today's Weather",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "How's the weather today?"
                    },
                    {
                        "speaker": "Student",
                        "text": "It's sunny."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "Is it hot or cold?"
                    },
                    {
                        "speaker": "Student",
                        "text": "It's hot today."
                    }
                ]
            },
            {
                "id": "2_10",
                "category": "家庭",
                "title": "My Family",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "Do you have a brother?"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "Yes, I do. I have a brother."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "Do you have a sister, Tom?"
                    },
                    {
                        "speaker": "Tom",
                        "text": "No, I don't. I don't have a sister."
                    }
                ]
            }
        ],
        "words": [
            {
                "id": "2_w1",
                "category": "学校用品",
                "word": "pencil",
                "meaning": "铅笔",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkZDMTA3IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wZW5jaWw8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPumVv+ezlTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w2",
                "category": "学校用品",
                "word": "ruler",
                "meaning": "尺子",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNEE5MEUyIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ydWxlcjwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5bC65a2QPC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "2_w3",
                "category": "学校用品",
                "word": "eraser",
                "meaning": "橡皮",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5RUI1IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5lcmFzZXI8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuapmueQgzwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w4",
                "category": "学校用品",
                "word": "pencil case",
                "meaning": "铅笔盒",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY2QjZCIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wZW5jaWwgY2FzZTwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+6ZW/57OV55uSPC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "2_w5",
                "category": "学校用品",
                "word": "schoolbag",
                "meaning": "书包",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5ODAwIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zY2hvb2xiYWc8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuS5puWMlzwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w6",
                "category": "水果",
                "word": "apple",
                "meaning": "苹果",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY2QjZCIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5hcHBsZTwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+6Iqx5p6cPC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "2_w7",
                "category": "水果",
                "word": "banana",
                "meaning": "香蕉",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkZDMTA3IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5iYW5hbmE8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPummmeiViTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w8",
                "category": "水果",
                "word": "orange",
                "meaning": "橙子",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5ODAwIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5vcmFuZ2U8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuapmOWtkDwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w9",
                "category": "动物",
                "word": "elephant",
                "meaning": "大象",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjOUU5RTlFIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5lbGVwaGFudDwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5aSn6LGhPC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "2_w10",
                "category": "动物",
                "word": "lion",
                "meaning": "狮子",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkZBNTAwIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5saW9uPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7ni5fnlJ88L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "2_w11",
                "category": "动物",
                "word": "monkey",
                "meaning": "猴子",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjQTU3OTM5IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5tb25rZXk8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPueMq+WtkDwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w12",
                "category": "时间",
                "word": "o'clock",
                "meaning": "...点钟",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNEE5MEUyIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5vJ2Nsb2NrPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4uLi7ngrnpkJg8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "2_w13",
                "category": "时间",
                "word": "time",
                "meaning": "时间",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjOUMxN0ZGIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50aW1lPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7ml7bpl7Q8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "2_w14",
                "category": "天气",
                "word": "sunny",
                "meaning": "晴朗的",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkZDMTA3IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zdW5ueTwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5pmo5pyJ55qEPC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "2_w15",
                "category": "天气",
                "word": "rainy",
                "meaning": "下雨的",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNEE5MEUyIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5yYWlueTwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5LiL6Zu255qEPC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "2_w16",
                "category": "天气",
                "word": "hot",
                "meaning": "热的",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY2QjZCIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ob3Q8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPueDreeeizwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w17",
                "category": "天气",
                "word": "cold",
                "meaning": "冷的",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNDhDQUU0IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5jb2xkPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lhajnmoQ8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "2_w18",
                "category": "家庭",
                "word": "brother",
                "meaning": "兄弟",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNEE5MEUyIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5icm90aGVyPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lhYjlvow8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "2_w19",
                "category": "家庭",
                "word": "sister",
                "meaning": "姐妹",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5RUI1IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zaXN0ZXI8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuWnkOWnkDwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "2_w20",
                "category": "家庭",
                "word": "family",
                "meaning": "家庭",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjOUMxN0ZGIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5mYW1pbHk8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuWutuW6rTwvdGV4dD4KPC9zdmc+"
            }
        ]
    },
    "3": {
        "name": "三年级",
        "dialogues": [
            {
                "id": "3_1",
                "category": "日常活动",
                "title": "My Daily Routine",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "What time do you get up?"
                    },
                    {
                        "speaker": "Tom",
                        "text": "I get up at 7 o'clock."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "What do you do in the morning?"
                    },
                    {
                        "speaker": "Tom",
                        "text": "I eat breakfast and go to school."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "What do you do after school?"
                    },
                    {
                        "speaker": "Tom",
                        "text": "I do my homework and play with friends."
                    }
                ]
            },
            {
                "id": "3_2",
                "category": "爱好",
                "title": "Hobbies",
                "conversation": [
                    {
                        "speaker": "Lucy",
                        "text": "What's your hobby, Mike?"
                    },
                    {
                        "speaker": "Mike",
                        "text": "I like playing football. What about you?"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "I like reading books and drawing pictures."
                    },
                    {
                        "speaker": "Mike",
                        "text": "That's interesting! Do you like swimming?"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "Yes, I do. I go swimming every weekend."
                    }
                ]
            },
            {
                "id": "3_3",
                "category": "学校生活",
                "title": "School Subjects",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "What's your favorite subject?"
                    },
                    {
                        "speaker": "Amy",
                        "text": "My favorite subject is English."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "Why do you like English?"
                    },
                    {
                        "speaker": "Amy",
                        "text": "Because it's interesting and fun."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "That's great! I'm glad you enjoy it."
                    }
                ]
            },
            {
                "id": "3_4",
                "category": "方位",
                "title": "Directions",
                "conversation": [
                    {
                        "speaker": "Tourist",
                        "text": "Excuse me, where is the library?"
                    },
                    {
                        "speaker": "Student",
                        "text": "Go straight and turn left at the corner."
                    },
                    {
                        "speaker": "Tourist",
                        "text": "How far is it from here?"
                    },
                    {
                        "speaker": "Student",
                        "text": "It's about 5 minutes' walk."
                    },
                    {
                        "speaker": "Tourist",
                        "text": "Thank you very much."
                    },
                    {
                        "speaker": "Student",
                        "text": "You're welcome."
                    }
                ]
            },
            {
                "id": "3_5",
                "category": "购物",
                "title": "Shopping for Clothes",
                "conversation": [
                    {
                        "speaker": "Salesperson",
                        "text": "Can I help you?"
                    },
                    {
                        "speaker": "Customer",
                        "text": "Yes, I'm looking for a T-shirt."
                    },
                    {
                        "speaker": "Salesperson",
                        "text": "What size do you need?"
                    },
                    {
                        "speaker": "Customer",
                        "text": "Medium, please. And I like the blue one."
                    },
                    {
                        "speaker": "Salesperson",
                        "text": "Here you are. Would you like to try it on?"
                    },
                    {
                        "speaker": "Customer",
                        "text": "Yes, please."
                    }
                ]
            },
            {
                "id": "3_6",
                "category": "季节",
                "title": "Seasons",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "What season is it now?"
                    },
                    {
                        "speaker": "Student",
                        "text": "It's spring."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "What's the weather like in spring?"
                    },
                    {
                        "speaker": "Student",
                        "text": "It's warm and flowers bloom."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "What's your favorite season?"
                    },
                    {
                        "speaker": "Student",
                        "text": "My favorite season is summer because I can swim."
                    }
                ]
            },
            {
                "id": "3_7",
                "category": "健康",
                "title": "At the Doctor's",
                "conversation": [
                    {
                        "speaker": "Doctor",
                        "text": "What's the matter?"
                    },
                    {
                        "speaker": "Patient",
                        "text": "I have a headache and a fever."
                    },
                    {
                        "speaker": "Doctor",
                        "text": "Let me check your temperature. Open your mouth, please."
                    },
                    {
                        "speaker": "Patient",
                        "text": "(Opens mouth)"
                    },
                    {
                        "speaker": "Doctor",
                        "text": "You have a fever. You need to take this medicine and rest."
                    },
                    {
                        "speaker": "Patient",
                        "text": "Thank you, doctor."
                    }
                ]
            },
            {
                "id": "3_8",
                "category": "交通",
                "title": "Transportation",
                "conversation": [
                    {
                        "speaker": "Teacher",
                        "text": "How do you come to school?"
                    },
                    {
                        "speaker": "Tom",
                        "text": "I come to school by bus."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "How about you, Lucy?"
                    },
                    {
                        "speaker": "Lucy",
                        "text": "My father drives me to school by car."
                    },
                    {
                        "speaker": "Teacher",
                        "text": "And you, Mike?"
                    },
                    {
                        "speaker": "Mike",
                        "text": "I walk to school because I live nearby."
                    }
                ]
            }
        ],
        "words": [
            {
                "id": "3_w1",
                "category": "日常活动",
                "word": "get up",
                "meaning": "起床",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkZDMTA3IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5nZXQgdXA8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPui1sOW6lTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w2",
                "category": "日常活动",
                "word": "breakfast",
                "meaning": "早餐",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5ODAwIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5icmVha2Zhc3Q8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuaXpeWIhTwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w3",
                "category": "日常活动",
                "word": "homework",
                "meaning": "家庭作业",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNEE5MEUyIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ob21ld29yazwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5a625bqt5L2c5LujPC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "3_w4",
                "category": "爱好",
                "word": "hobby",
                "meaning": "爱好",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY2QjZCIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ob2JieTwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+54ix5aW9PC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "3_w5",
                "category": "爱好",
                "word": "football",
                "meaning": "足球",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjOUMxN0ZGIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5mb290YmFsbDwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+6Laz55CDLOi1t+eQgzwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w6",
                "category": "爱好",
                "word": "swimming",
                "meaning": "游泳",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNDhDQUU0IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zd2ltbWluZzwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5ri45rC0PC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "3_w7",
                "category": "爱好",
                "word": "drawing",
                "meaning": "绘画",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5RUI1IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5kcmF3aW5nPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7nu5jnlLs8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "3_w8",
                "category": "学校生活",
                "word": "subject",
                "meaning": "学科",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkZDMTA3IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zdWJqZWN0PC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lrabkuJo8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "3_w9",
                "category": "学校生活",
                "word": "English",
                "meaning": "英语",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNEE5MEUyIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FbmdsaXNoPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7oi7Hor608L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "3_w10",
                "category": "学校生活",
                "word": "math",
                "meaning": "数学",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY2QjZCIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5tYXRoPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7mlbDlrZc8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "3_w11",
                "category": "方位",
                "word": "straight",
                "meaning": "直行",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjOUMxN0ZGIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zdHJhaWdodDwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+55u05YmNPC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "3_w12",
                "category": "方位",
                "word": "left",
                "meaning": "左边",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5ODAwIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5sZWZ0PC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lt6bov5s8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "3_w13",
                "category": "方位",
                "word": "right",
                "meaning": "右边",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNDhDQUU0IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5yaWdodDwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5Y+z6L+bPC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "3_w14",
                "category": "购物",
                "word": "T-shirt",
                "meaning": "T恤衫",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5RUI1IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ULXNoaXJ0PC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5U5oGS6KGjPC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "3_w15",
                "category": "购物",
                "word": "size",
                "meaning": "尺码",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkZDMTA3IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zaXplPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lsLrlr7g8L3RleHQ+Cjwvc3ZnPg=="
            },
            {
                "id": "3_w16",
                "category": "季节",
                "word": "spring",
                "meaning": "春天",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5RUI1IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zcHJpbmc8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuaYpOWkpzwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w17",
                "category": "季节",
                "word": "summer",
                "meaning": "夏天",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY2QjZCIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zdW1tZXI8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuWkj+WkpzwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w18",
                "category": "健康",
                "word": "headache",
                "meaning": "头痛",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY2QjZCIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5oZWFkYWNoZTwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5aS05pS3PC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "3_w19",
                "category": "健康",
                "word": "fever",
                "meaning": "发烧",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5ODAwIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5mZXZlcjwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5Y+R54OXPC90ZXh0Pgo8L3N2Zz4="
            },
            {
                "id": "3_w20",
                "category": "交通",
                "word": "bus",
                "meaning": "公共汽车",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNEE5MEUyIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5idXM8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuWFrOWFseaxvei9pjwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w21",
                "category": "交通",
                "word": "car",
                "meaning": "小汽车",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjOUMxN0ZGIiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5jYXI8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuWwj+axvei9pjwvdGV4dD4KPC9zdmc+"
            },
            {
                "id": "3_w22",
                "category": "交通",
                "word": "walk",
                "meaning": "步行",
                "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNDhDQUU0IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj53YWxrPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7mraXooYw8L3RleHQ+Cjwvc3ZnPg=="
            }
        ]
    }
}
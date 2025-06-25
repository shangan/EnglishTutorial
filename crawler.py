import requests
from bs4 import BeautifulSoup
import json
import re
import os
import time
import random
from urllib.parse import urljoin

class EnglishContentScraper:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        self.dialogues = []
        self.words = []
        self.grade_data = {
            1: {"name": "一年级", "dialogues": [], "words": []},
            2: {"name": "二年级", "dialogues": [], "words": []},
            3: {"name": "三年级", "dialogues": [], "words": []},
            4: {"name": "四年级", "dialogues": [], "words": []},
            5: {"name": "五年级", "dialogues": [], "words": []},
            6: {"name": "六年级", "dialogues": [], "words": []}
        }
        
    def fetch_page(self, url):
        """获取网页内容"""
        try:
            response = requests.get(url, headers=self.headers)
            response.encoding = 'utf-8'  # 确保中文正确显示
            if response.status_code == 200:
                return response.text
            else:
                print(f"获取页面失败: {response.status_code}")
                return None
        except Exception as e:
            print(f"请求异常: {e}")
            return None
    
    def parse_dialogues(self, html, grade, category):
        """解析对话内容"""
        soup = BeautifulSoup(html, 'html.parser')
        # 这里需要根据实际网站的HTML结构来调整选择器
        dialogue_sections = soup.select('.dialogue-section')  # 假设对话内容在这个类下
        
        for i, section in enumerate(dialogue_sections):
            title = section.select_one('.dialogue-title')
            title_text = title.text.strip() if title else f"{category}对话{i+1}"
            
            conversation = []
            speakers = section.select('.speaker')
            texts = section.select('.dialogue-text')
            
            for j in range(min(len(speakers), len(texts))):
                speaker_name = speakers[j].text.strip()
                text_content = texts[j].text.strip()
                conversation.append({
                    "speaker": speaker_name,
                    "text": text_content
                })
            
            if conversation:  # 只添加有内容的对话
                dialogue_id = f"{grade}_{len(self.grade_data[grade]['dialogues']) + 1}"
                dialogue = {
                    "id": dialogue_id,
                    "category": category,
                    "title": title_text,
                    "conversation": conversation
                }
                self.grade_data[grade]["dialogues"].append(dialogue)
    
    def parse_words(self, html, grade, category):
        """解析单词内容"""
        soup = BeautifulSoup(html, 'html.parser')
        # 这里需要根据实际网站的HTML结构来调整选择器
        word_items = soup.select('.word-item')  # 假设单词内容在这个类下
        
        for i, item in enumerate(word_items):
            word_text = item.select_one('.word-text')
            word = word_text.text.strip() if word_text else ""
            
            meaning_text = item.select_one('.word-meaning')
            meaning = meaning_text.text.strip() if meaning_text else ""
            
            image_url = ""
            image_tag = item.select_one('img')
            if image_tag and image_tag.get('src'):
                image_url = urljoin(html, image_tag['src'])
            
            # 生成简单的SVG图像作为占位符
            if not image_url:
                image_svg = self.generate_svg_placeholder(word, meaning)
            else:
                # 这里可以添加下载图片并转换为base64的代码
                image_svg = self.generate_svg_placeholder(word, meaning)
            
            if word and meaning:  # 只添加有内容的单词
                word_id = f"{grade}_w{len(self.grade_data[grade]['words']) + 1}"
                word_item = {
                    "id": word_id,
                    "category": category,
                    "word": word,
                    "meaning": meaning,
                    "image": image_svg
                }
                self.grade_data[grade]["words"].append(word_item)
    
    def generate_svg_placeholder(self, word, meaning):
        """生成简单的SVG图像作为占位符"""
        # 随机颜色
        colors = ["#FF6B6B", "#48CAE4", "#FF9800", "#4A90E2", "#9C27B0", "#FF9EB5"]
        bg_color = random.choice(colors)
        
        svg = f'''data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ7YmdfY29sb3J9IiByeD0iMjAiLz4KPHRleHQgeD0iMTAwIiB5PSI5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj57d29yZH08L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnttZWFuaW5nfTwvdGV4dD4KPC9zdmc+'''.replace("{bg_color}", bg_color).replace("{word}", word).replace("{meaning}", meaning)
        
        return svg
    
    def scrape_content(self, urls_by_grade):
        """抓取所有内容"""
        for grade, url_dict in urls_by_grade.items():
            print(f"正在抓取{grade}年级内容...")
            
            for category, url in url_dict.items():
                print(f"  抓取{category}...")
                html = self.fetch_page(url)
                if html:
                    if "dialogue" in category.lower() or "conversation" in category.lower():
                        self.parse_dialogues(html, grade, category)
                    else:
                        self.parse_words(html, grade, category)
                
                # 添加延迟，避免请求过于频繁
                time.sleep(random.uniform(1, 3))
    
    def save_to_js(self, output_file="data.js"):
        """将抓取的内容保存为JS文件"""
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("// 年级数据\n")
            f.write("const gradeData = ")
            f.write(json.dumps(self.grade_data, ensure_ascii=False, indent=4))
            f.write(";\n")
    
    def mock_data(self):
        """生成模拟数据用于测试"""
        categories = ["问候", "学校生活", "家庭", "食物", "动物", "颜色", "数字", "爱好"]
        
        for grade in range(1, 7):
            # 为每个年级生成5-8个对话
            for i in range(random.randint(5, 8)):
                category = random.choice(categories)
                dialogue_id = f"{grade}_{i+1}"
                title = f"{category}对话{i+1}"
                
                # 生成2-5轮对话
                conversation = []
                speakers = ["Teacher", "Student", "Tom", "Lucy", "Mike", "Amy"]
                for j in range(random.randint(2, 5)):
                    speaker = random.choice(speakers)
                    text = f"这是{grade}年级的{category}对话示例文本{j+1}。"
                    conversation.append({"speaker": speaker, "text": text})
                
                dialogue = {
                    "id": dialogue_id,
                    "category": category,
                    "title": title,
                    "conversation": conversation
                }
                self.grade_data[grade]["dialogues"].append(dialogue)
            
            # 为每个年级生成10-15个单词
            for i in range(random.randint(10, 15)):
                category = random.choice(categories)
                word_id = f"{grade}_w{i+1}"
                word = f"word{i+1}"
                meaning = f"单词{i+1}"
                
                word_item = {
                    "id": word_id,
                    "category": category,
                    "word": word,
                    "meaning": meaning,
                    "image": self.generate_svg_placeholder(word, meaning)
                }
                self.grade_data[grade]["words"].append(word_item)

def main():
    scraper = EnglishContentScraper()
    
    # 实际使用时，替换为真实的URL
    urls_by_grade = {
        # 1: {
        #     "基础对话": "http://example.com/grade1/dialogues",
        #     "基础词汇": "http://example.com/grade1/words"
        # },
        # 可以添加更多年级和类别
    }
    
    # 如果有真实URL，使用这个方法抓取
    # scraper.scrape_content(urls_by_grade)
    
    # 没有真实URL时，生成模拟数据
    scraper.mock_data()
    
    # 保存为JS文件
    scraper.save_to_js()
    print("内容已保存到data.js文件")

if __name__ == "__main__":
    main()
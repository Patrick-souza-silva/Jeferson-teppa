import os
import zipfile
import xml.etree.ElementTree as ET
import json
import shutil
import glob

def extract_text_from_docx(docx_path):
    try:
        with zipfile.ZipFile(docx_path, 'r') as z:
            xml_content = z.read('word/document.xml')
            tree = ET.fromstring(xml_content)
            
            # The namespace for w:t (text)
            namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            
            texts = []
            for t in tree.findall('.//w:t', namespaces):
                if t.text:
                    texts.append(t.text)
                    
            return ' '.join(texts).strip()
    except Exception as e:
        print(f"Error reading {docx_path}: {e}")
        return ""

def main():
    base_dir = r"c:\meu\JefersonTeppa"
    infos_dir = os.path.join(base_dir, "infos")
    site_dir = os.path.join(base_dir, "site")
    public_media_dir = os.path.join(site_dir, "public", "media")
    assets_dir = os.path.join(site_dir, "src", "assets")
    
    os.makedirs(public_media_dir, exist_ok=True)
    os.makedirs(assets_dir, exist_ok=True)
    
    data = {
        "projects": [],
        "sobre": {},
        "servicos": {},
        "contatos": {},
        "logos": [],
        "videos": []
    }
    
    project_folders = ["COZINHA", "FACHADA", "HALL", "PISCINA - FUNDOS", "QUARTO GEMEOS", "SALA", "SUÍTE", "SUÍTE 02", "ÁREA GOURMET"]
    
    for root, dirs, files in os.walk(infos_dir):
        folder_name = os.path.basename(root)
        if folder_name == "infos": continue
        
        print(f"Processing folder: {folder_name}")
        
        folder_data = {
            "title": folder_name,
            "description": "",
            "images": [],
            "videos": []
        }
        
        for file in files:
            file_path = os.path.join(root, file)
            ext = os.path.splitext(file)[1].lower()
            
            # Use relative paths for public URLs
            dest_name = f"{folder_name}_{file.replace(' ', '_')}"
            dest_path = os.path.join(public_media_dir, dest_name)
            public_url = f"/media/{dest_name}"
            
            if ext == '.docx':
                text = extract_text_from_docx(file_path)
                if folder_name == "SOBRE":
                    data["sobre"]["text"] = text
                elif folder_name == "SERVIÇOS E INFOS":
                    if "contato" in file.lower():
                        data["contatos"]["text"] = text
                    else:
                        data["servicos"]["text"] = text
                else:
                    folder_data["description"] = text
                    
            elif ext in ['.jpg', '.jpeg', '.png', '.gif']:
                shutil.copy2(file_path, dest_path)
                if folder_name == "LOGOS":
                    data["logos"].append(public_url)
                elif folder_name == "SOBRE":
                    if "images" not in data["sobre"]: data["sobre"]["images"] = []
                    data["sobre"]["images"].append(public_url)
                else:
                    folder_data["images"].append(public_url)
                    
            elif ext in ['.mov', '.mp4']:
                shutil.copy2(file_path, dest_path)
                if folder_name == "VIDEOS":
                    data["videos"].append(public_url)
                else:
                    folder_data["videos"].append(public_url)
                    
        if folder_name in project_folders:
            data["projects"].append(folder_data)
            
    json_path = os.path.join(assets_dir, "data.json")
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        
    print(f"Extraction complete. Data saved to {json_path}")

if __name__ == "__main__":
    main()
